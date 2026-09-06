'use strict';
const fs=require('node:fs'),path=require('node:path'),zlib=require('node:zlib'),crypto=require('node:crypto'),cp=require('node:child_process');
const expected='9a5901720d7df114318dedf663276381ba3c354e13859b5b315065041928d462';
const read=n=>fs.readFileSync(n,'utf8').trim();
const parts=Array.from({length:7},(_,i)=>read(`part-${i}.txt`));
parts[3]=parts[3].slice(0,4050)+read('part-3-insert.txt')+parts[3].slice(4050);
const raw=zlib.brotliDecompressSync(Buffer.from(parts.join(''),'base64'));
if(crypto.createHash('sha256').update(raw).digest('hex')!==expected)throw Error('Source integrity check failed');
const files=JSON.parse(raw);
function write(n,data){if(path.isAbsolute(n)||n.split(/[\\/]/).includes('..'))throw Error('Unsafe bundle path');fs.mkdirSync(path.dirname(n),{recursive:true});fs.writeFileSync(n,data);}
for(const [n,text] of Object.entries(files))write(n,text);
const compact=JSON.parse(files['compact-locations.json']);
const locations=Array.from({length:compact.length},()=>({}));
for(const [key,kind,values,runs] of compact.columns){
 const column=kind==='constant'?Array(compact.length).fill(values):kind==='values'?values:runs.flatMap(([i,n])=>Array(n).fill(values[i]));
 if(column.length!==compact.length)throw Error('Invalid location column');
 column.forEach((v,i)=>locations[i][key]=v);
}
write('data/locations.json',JSON.stringify(locations));
const areas=JSON.parse(files['compact-areas.json']).map(a=>{
 const {townNames,...rest}=a;
 return {...rest,towns:townNames.map(name=>{
  const l=locations.find(l=>l.name===name&&l.area===a.name&&l.nation===a.nation);
  if(!l)throw Error('Missing location '+name);
  return {name:l.name,url:`/locations/${l.nationSlug}/${l.areaSlug}/${l.slug}/`};
 })};
});
write('public/data/area-map.json',JSON.stringify(areas));
const env={...process.env,SUNWARD_LIVE:'false',SITE_URL:'',LEAD_WEBHOOK_URL:'',LEAD_ENDPOINT_APPROVED:'false'};
for(const script of ['scripts/cache-map.mjs','scripts/build.mjs','scripts/upgrade.mjs'])cp.execFileSync(process.execPath,[script],{stdio:'inherit',env});

// Ship the dependency-free Studio workspace as part of the static site.
fs.rmSync('dist/studio',{recursive:true,force:true});
fs.rmSync('dist/studio-src',{recursive:true,force:true});
fs.cpSync('studio-app','dist/studio',{recursive:true});
fs.cpSync('studio-src','dist/studio-src',{recursive:true});

// Make Studio an obvious first-class route without altering the archived source bundle.
const home='dist/index.html';
if(fs.existsSync(home)){
 let html=fs.readFileSync(home,'utf8');
 const studioCta=`<a class="sunward-studio-launch" href="/studio/" aria-label="Design and price your solar system"><span>NEW · SUNWARD STUDIO</span><strong>Design my system</strong><em>→</em></a><style>.sunward-studio-launch{position:fixed;right:20px;bottom:20px;z-index:90;display:grid;grid-template-columns:1fr auto;gap:2px 18px;align-items:center;min-width:245px;padding:14px 16px;border-radius:16px;background:#10271f;color:#fff;text-decoration:none;box-shadow:0 15px 42px #10271f44}.sunward-studio-launch span{grid-column:1;font:700 9px/1.2 system-ui;letter-spacing:.12em;color:#d9ff64}.sunward-studio-launch strong{grid-column:1;font:800 15px/1.2 system-ui}.sunward-studio-launch em{grid-column:2;grid-row:1/3;font:normal 24px system-ui;color:#d9ff64}@media(max-width:600px){.sunward-studio-launch{left:12px;right:12px;bottom:12px;min-width:0}}</style>`;
 if(!html.includes('sunward-studio-launch'))html=html.replace('</body>',studioCta+'</body>');
 fs.writeFileSync(home,html);
}
write('dist/robots.txt','User-agent: *\nDisallow: /\n');
write('dist/deployment-info.json',JSON.stringify({version:'3.0.0-studio-preview',preview:true,sourceSHA256:expected,commit:process.env.VERCEL_GIT_COMMIT_SHA||null,studio:true}));
console.log('Verified Sunward v2 + Studio v3 source deployed as a non-sending, non-indexed preview.');
