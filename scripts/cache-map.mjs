/** Mirror an immutable public ONS dataset at build time when explicitly enabled.
 * No credentials. A missing network never breaks the preview build.
 * The browser has a separate optional source fetch and a labelled area-marker fallback.
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const target=path.join(root,'public/data/uk-topo.json');
const source='https://raw.githubusercontent.com/ONSdigital/uk-topojson/aa84341201698f59b26998ca39d2b578df4b6d78/output/topo.json';
const blobSha='668461dddd006aa7e8e176896a7bdcbe5f5e32b5';
function validate(buf){
 const actual=crypto.createHash('sha1').update(Buffer.from(`blob ${buf.length}\0`)).update(buf).digest('hex');
 if(actual!==blobSha)throw new Error('ONS source integrity mismatch');
 const d=JSON.parse(buf.toString('utf8'));
 if(d.type!=='Topology'||!d.objects?.utla?.geometries?.length||!d.arcs?.length)throw new Error('Unexpected ONS data shape');
}
if(fs.existsSync(target)){
 try{validate(fs.readFileSync(target));console.log('ONS map: verified local cache.');process.exit(0);}catch(e){console.warn('ONS cache ignored:',e.message);fs.rmSync(target);}
}
const enabled=process.argv.includes('--fetch')||process.env.FETCH_MAP_DATA==='1'||process.env.VERCEL==='1';
if(enabled){
 try{const r=await fetch(source,{signal:AbortSignal.timeout(12000)});if(!r.ok)throw new Error(`HTTP ${r.status}`);const buf=Buffer.from(await r.arrayBuffer());if(buf.length>2e6)throw new Error('Oversized map source');validate(buf);fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,buf);console.log('ONS map: source cached and verified.');}
 catch(e){console.warn('ONS map cache unavailable:',e.message,'; labelled marker fallback remains available.');}
}else console.log('ONS map: optional county-boundary source not cached; browser can fetch the pinned source.');
