/** Post-build enhancement pass. Leaves the original publishing approval gates intact. */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {esc,icon,button,navigation,productSelector,productDrawing,installedProduct,productCompare,packages,energyStory,tariffTeaser,mapSection} from '../src/upgrade/components.mjs';
import {pageData,serviceBody,productBody} from '../src/upgrade/pages.mjs';
const ROOT=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..'),OUT=path.join(ROOT,'dist');
const read=f=>fs.readFileSync(path.join(ROOT,f),'utf8'),write=(f,s)=>fs.writeFileSync(path.join(ROOT,f),s);
const report=JSON.parse(read('build-report.json'));
const homeOriginal=read('dist/index.html');
const symbols=homeOriginal.match(/<svg xmlns=[\s\S]*?<\/defs><\/svg>/)[0];
let house=homeOriginal.match(/<div class="house-art">([\s\S]*?<\/svg>)<\/div>/)[1];
house=house.replace(/<polygon points="459\.36,446\.14[\s\S]*?<polyline points="467\.18,421\.24[^>]*\/>/,installedProduct('tesla')+installedProduct('sigenergy'));
house=house.replace('<desc id="houseDesc">','<desc id="houseDesc">An example property with a selectable Tesla Powerwall 3 or Sigenergy SigenStor product illustration. ');
const areas=JSON.parse(read('public/data/area-map.json'));
function scene(kind='both'){
 const none=kind==='solar';
 const h=none?house.replace(/<g data-installed-product="[\s\S]*?<\/g><\/g>/g,''):house;
 return `<div class="hero-stage" data-default-product="${none?'none':'tesla'}"><div class="hero-visual" id="hero-visual"><div class="orb orb-one"></div><div class="orb orb-two"></div><div class="visual-topline"><span class="eyebrow">YOUR HOME. REIMAGINED.</span><div class="day-switch" role="group" aria-label="View the example property by day or night"><button class="active" data-time="day" aria-pressed="true" aria-label="Show daytime">${icon('sun')}</button><button data-time="night" aria-pressed="false" aria-label="Show night-time">${icon('moon')}</button></div></div><div class="sun-decoration" aria-hidden="true">${icon('sun')}</div><div class="house-art">${h}</div><div class="energy-pill"><span class="energy-pill-icon">${icon('sun')}</span><div><span class="micro-label" id="energy-mode">DAYTIME, DONE BETTER</span><strong id="energy-message">Hello sunshine. Hello energy.</strong></div><span class="pulse-dot"></span></div></div>${none?'<p class="scene-note">Example solar property. The panel layout is illustrative, not a survey.</p>':productSelector()+'<p class="scene-note">Illustrative product placement. Final model and siting subject to survey.</p>'}</div>`;
}
function productDialog(){return `<dialog class="product-detail-dialog" id="product-detail-dialog" aria-labelledby="product-dialog-title"><button type="button" class="dialog-close" data-close-product aria-label="Close product detail">${icon('close')}</button><p class="eyebrow">A CLOSER LOOK</p><h2 id="product-dialog-title">Tesla Powerwall 3.</h2><div data-detail-drawing class="product-render">${productDrawing('tesla','modal-t')}</div><p>Original 3D-style product illustration. This is not manufacturer CAD, a compatibility check or an approved installation position.</p><a class="btn btn-dark" data-detail-link href="/battery-storage/tesla-powerwall/">Explore the specification ${icon('up')}</a></dialog>`;}
const nav=navigation();
const footerLinks=`<div class="national-footer-links"><a href="/solar-pv/">Solar PV</a><a href="/battery-storage/">Battery storage</a><a href="/solar-and-battery-storage/">Solar + battery</a><a href="/tariffs/">Energy tariffs</a><a href="/tariffs/import/">Import</a><a href="/tariffs/export/">Export</a><a href="/locations/">Your area</a><a href="/guides/">The bright guide</a><a href="/methodology/">Calculator methodology</a><a href="/privacy/">Privacy</a></div>`;
const footer=homeOriginal.match(/<footer class="footer">[\s\S]*?<\/footer>/)[0].replace(/<div class="national-footer-links">[\s\S]*?<\/div>/,footerLinks);
function enhance(html){
 html=html.replace(/<header class="header"[\s\S]*?<\/header>/,nav);
 html=html.replace(/<div class="national-footer-links">[\s\S]*?<\/div>/,footerLinks);
 html=html.replace('</head>','<link rel="stylesheet" href="/upgrade.css"></head>');
 html=html.replace(/(<body[^>]*>)/,'$1<div class="site-progress" aria-hidden="true"></div>');
 html=html.replace(/href="\/solar-panels\/"/g,'href="/solar-pv/"').replace(/href="\/solar-and-battery\/"/g,'href="/solar-and-battery-storage/"');
 if(html.includes('data-product='))html=html.replace('</body>',productDialog()+'</body>');
 html=html.replace('</body>','<script src="/product-renders.js" defer></script><script src="/upgrade.js" defer></script>'+(html.includes('data-uk-map')?'<script src="/map.js" defer></script>':'')+'</body>');
 return html;
}
// A postcode-first start, with no pretence of an automatic survey or coverage check.
let home=homeOriginal.replace('Keep more of it.<br>Solar','Keep more of it. <br>Solar');
home=home.replace(/<div class="hero-visual" id="hero-visual">[\s\S]*?<span class="visual-coordinate">[\s\S]*?<\/span>\s*<\/div>/,scene());
home=home.replace(/<div class="hero-actions">[\s\S]*?<\/a><\/div>/,`<form class="postcode-start" data-postcode-start novalidate><label for="start-postcode">Start with your postcode</label><div class="postcode-control"><input id="start-postcode" name="postcode" autocomplete="postal-code" placeholder="e.g. GU1 1AA" maxlength="9" aria-describedby="start-postcode-note start-postcode-error" required><button class="btn btn-dark" type="submit">Build my plan ${icon('up')}</button></div><p id="start-postcode-note">Explore first. No email needed to see the numbers.</p><p id="start-postcode-error" class="postcode-error" role="alert" hidden></p></form><button data-quote data-interest="both" data-start-quote hidden>Start enquiry</button><a class="text-link hero-secondary" href="#savings">First, show me the numbers ${icon('arrow')}</a>`);
home=home.replace(/<section aria-labelledby="solutions-title"[\s\S]*?<\/section>/,packages());
// Attribute order in the original source is different from serialised browser HTML.
home=home.replace(/<section(?=[^>]*id="solutions")[^>]*>[\s\S]*?<\/section>/,packages());
home=home.replace(/<section(?=[^>]*id="savings")[^>]*>/,m=>productCompare()+energyStory()+m);
home=home.replace(/<section class="national-section container" id="your-area">[\s\S]*?<\/section>/,tariffTeaser()+mapSection(areas));
home=home.replace('With a 7.5 kWh example battery,','With the selected illustrative battery capacity,').replace('a 300-cycle annual cap.','a 300-cycle annual input cap. Product selection changes the assumed capacity; it does not reproduce manufacturer-specific efficiency or dispatch.');
home=home.replace('Explore storing more of your solar energy.','Explore storing more of your solar energy.');
home=home.replace('<details class="assumptions">','<p class="calculator-product-note" data-calculator-product>Storage illustration: 13.5 kWh. Common modelling assumptions, not a product forecast.</p><details class="assumptions">');
home=home.replace('<form id="quote-form" novalidate>','<p class="quote-selection-note" style="font-size:12px;color:var(--muted);margin:12px 0" data-quote-selection></p><form id="quote-form" novalidate>');
write('dist/index.html',enhance(home).replaceAll('href="/#','href="#'));

// Apply the shared navigation and visual rhythm to the existing national architecture.
for(const p of report.pageRecords){if(p.route==='/')continue;write('dist/'+p.file,enhance(read('dist/'+p.file)));}
const origin=report.origin||'';
function page(route,title,description,body,crumbs=[]){
 const filename=path.join(route.slice(1),'index.html');
 const canonical=origin?`<link rel="canonical" href="${origin+route}"><meta property="og:url" content="${origin+route}">`:'';
 const schema=origin?`<script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[['Home','/'],...crumbs,[title.split('|')[0].trim(),route]].map(([name,url],i)=>({'@type':'ListItem',position:i+1,name,item:origin+url}))}).replace(/</g,'\\u003c')}</script>`:'';
 const html=`<!doctype html><html lang="en-GB"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#f6f6ef"><title>${esc(title)}</title><meta name="description" content="${esc(description)}"><meta name="robots" content="noindex, follow">${canonical}<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:type" content="website"><meta property="og:locale" content="en_GB"><link rel="icon" href="/assets/favicon.svg"><link rel="stylesheet" href="/styles.css"><link rel="stylesheet" href="/national.css">${schema}</head><body class="national-page service-page"><a class="skip-link" href="#main">Skip to content</a>${symbols}${nav}<nav class="breadcrumbs container" aria-label="Breadcrumb"><a href="/">Home</a>${crumbs.map(([n,u])=>`<span aria-hidden="true">/</span><a href="${u}">${esc(n)}</a>`).join('')}<span aria-hidden="true">/</span><span aria-current="page">${esc(title.split('|')[0].trim())}</span></nav><main id="main">${body}</main>${footer}<div class="mobile-cta"><span>Your home. Your potential.</span>${button('My solar plan','/?quote=1')}</div><script src="/national.js" defer></script></body></html>`;
 fs.mkdirSync(path.join(OUT,path.dirname(filename)),{recursive:true});write('dist/'+filename,enhance(html));
 const existing=report.pageRecords.find(p=>p.route===route);if(existing){existing.title=title;existing.indexable=false;}else report.pageRecords.push({route,file:filename,title,indexable:false});
}
for(const d of pageData){const crumbs=d.route.startsWith('/tariffs/')&&d.route!=='/tariffs/'?[['Energy tariffs','/tariffs/']]:[];page(d.route,d.title,d.description,serviceBody(d,scene),crumbs);}
for(const brand of ['tesla','sigenergy']){const pw=brand==='tesla';page('/battery-storage/'+(pw?'tesla-powerwall':'sigenergy')+'/',`${pw?'Tesla Powerwall 3':'Sigenergy SigenStor'} | Home battery explorer | Sunward`,'Explore the product, see an original hardware illustration and understand what your property-specific battery design must confirm.',productBody(brand),[['Battery storage','/battery-storage/']]);}
// The full county explorer on a dedicated route, plus the original browsable directory.
page('/explore/', 'Interactive UK solar map | Counties & council areas | Sunward','Explore UK counties and council areas, find local solar guides and carry your area into a personal example enquiry.',mapSection(areas).replace('<h2>','<h1 class="map-page-title">').replace('</h2>','</h1>'));
let directory=read('dist/locations/index.html');directory=directory.replace('<main id="main" class="inner-main">','<main id="main" class="inner-main"><div class="container" style="padding-top:22px">'+button('Explore the interactive county map','/explore/','btn-outline')+'</div>');write('dist/locations/index.html',directory);
// Update methodology to reflect selected capacity without changing the core energy balance.
let methodology=read('dist/methodology/index.html');methodology=methodology.replace('2,250 kWh/year.','the selected illustrative capacity multiplied by 300 input cycles per year.').replace('<tr><td>Round-trip efficiency</td>','<tr><td>Storage capacity</td><td>13.5 kWh (Tesla illustration) / 16 kWh (Sigenergy illustration)</td><td>Modelling inputs, not a guarantee of available energy. Product-specific reserves and controls are not simulated.</td></tr><tr><td>Round-trip efficiency</td>');write('dist/methodology/index.html',methodology);
// Patch the thoroughly tested base model to accept a configurable capacity.
let script=read('dist/script.js');
script=script.replace('importPence = 25, exportPence = 12, yieldPerKWp = 900 }','importPence = 25, exportPence = 12, yieldPerKWp = 900, batteryCapacityKWh = 7.5 }');
script=script.replace('const importRate = importPence / 100;','batteryCapacityKWh = clamp(finite(batteryCapacityKWh, 7.5), 0, 100);\n    const importRate = importPence / 100;');
script=script.replace('7.5 * 300','batteryCapacityKWh * 300').replace('batteryCapacityKWh: battery ? 7.5 : 0','batteryCapacityKWh: battery ? batteryCapacityKWh : 0');
script=script.replace("bill: finite($('#monthly-bill').value, 120),","bill: finite($('#monthly-bill').value, 120),\n      batteryCapacityKWh: window.SunwardState?.capacity || 13.5,");
script=script.replace("source: 'sunward-website', sourceLocation: (query.get('location') || '').slice(0, 140),","source: 'sunward-website', productPreference: window.SunwardState?.product || 'tesla', sourceLocation: (window.SunwardState?.area || query.get('location') || '').slice(0, 140),");
script=script.replace("addSummaryRow('Property', enquiry.propertyType);","addSummaryRow('Property', enquiry.propertyType);\n    if(enquiry.interest !== 'solar') addSummaryRow('Battery preference', enquiry.productPreference === 'sigenergy' ? 'Sigenergy SigenStor' : enquiry.productPreference === 'none' ? 'To be discussed' : 'Tesla Powerwall 3');\n    if(enquiry.sourceLocation) addSummaryRow('Area', enquiry.sourceLocation);");
script=script.replace("' + 7.5 kWh battery'","' + ' + enquiry.illustration.batteryCapacityKWh + ' kWh illustrative storage'");
script=script.replace('`Interested in: ${interestLabels[e.interest]}`,', '`Interested in: ${interestLabels[e.interest]}`,\n      `Battery preference: ${e.interest === "solar" ? "Not requested" : e.productPreference === "sigenergy" ? "Sigenergy SigenStor" : e.productPreference === "none" ? "To be discussed" : "Tesla Powerwall 3"}`,\n      `Area: ${e.sourceLocation || "Not selected"}`,');
write('dist/script.js',script);
// Static render library: no dependency and no product imagery fetched from the competitor.
const renders={tesla:productDrawing('tesla','modal-t'),sigenergy:productDrawing('sigenergy','modal-s')};
write('dist/product-renders.js','window.SUNWARD_PRODUCT_RENDERS='+JSON.stringify(renders).replace(/</g,'\\u003c')+';');
for(const name of ['upgrade.css','upgrade.js','map.js'])fs.copyFileSync(path.join(ROOT,'src/upgrade',name),path.join(OUT,name));
report.pages=report.pageRecords.length;report.upgrade={version:'2.0',serviceRoutes:pageData.map(p=>p.route),productRoutes:['/battery-storage/tesla-powerwall/','/battery-storage/sigenergy/'],mapRoutes:['/explore/','/#your-area'],mapBoundaryYear:2025,mapFallback:'75 approximate area markers, not invented county polygons',productRenders:'original vector illustrations, not CAD',date:new Date().toISOString()};
write('build-report.json',JSON.stringify(report,null,2));
console.log(`Sunward 2.0: ${report.pages} pages; 6 dedicated service/tariff pages; 2 product pages; county explorer; postcode-first entry; switchable property models.`);
