(()=>{
'use strict';
const q=(s,r=document)=>r.querySelector(s),qa=(s,r=document)=>[...r.querySelectorAll(s)];
const KEY='sunward-growth-v1',SESSION='sw_'+Math.random().toString(36).slice(2)+Date.now().toString(36);
const state=(()=>{try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch{return {}}})();
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(state))}catch{}};
const params=new URLSearchParams(location.search);
['utm_source','utm_medium','utm_campaign','utm_content','utm_term','gclid','fbclid'].forEach(k=>{if(params.get(k))state[k]=params.get(k)});save();
function event(name,props={}){const payload={event:name,session:SESSION,path:location.pathname,ts:Date.now(),...Object.fromEntries(Object.entries(state).filter(([k])=>k.startsWith('utm_')||k==='gclid'||k==='fbclid')),...props};window.dataLayer=window.dataLayer||[];window.dataLayer.push(payload);window.dispatchEvent(new CustomEvent('sunward:event',{detail:payload}));try{const log=JSON.parse(sessionStorage.getItem('sunward-events')||'[]');log.push(payload);sessionStorage.setItem('sunward-events',JSON.stringify(log.slice(-100)))}catch{};const endpoint=window.SUNWARD_ANALYTICS_ENDPOINT;if(endpoint&&/^https:\/\//.test(endpoint)){try{navigator.sendBeacon?.(endpoint,new Blob([JSON.stringify(payload)],{type:'application/json'}))}catch{}}}
window.SunwardGrowth={event,state};
event('page_view',{title:document.title,referrer:document.referrer||null});

// Lightweight real-user performance telemetry. No library cost.
try{
 let cls=0,lcp=0,inp=0;
 new PerformanceObserver(list=>{for(const e of list.getEntries())if(!e.hadRecentInput)cls+=e.value}).observe({type:'layout-shift',buffered:true});
 new PerformanceObserver(list=>{for(const e of list.getEntries())lcp=Math.max(lcp,e.startTime)}).observe({type:'largest-contentful-paint',buffered:true});
 if(PerformanceObserver.supportedEntryTypes?.includes('event'))new PerformanceObserver(list=>{for(const e of list.getEntries())if(e.interactionId)inp=Math.max(inp,e.duration)}).observe({type:'event',durationThreshold:40,buffered:true});
 addEventListener('pagehide',()=>event('web_vitals',{lcp:Math.round(lcp),cls:+cls.toFixed(4),inp:Math.round(inp),nav:performance.getEntriesByType('navigation')[0]?.type||null}),{once:true});
}catch{}

// Capture attribution through internal navigation.
qa('a[href]').forEach(a=>{try{const u=new URL(a.href,location.href);if(u.origin!==location.origin)return;a.addEventListener('click',()=>event('internal_click',{href:u.pathname,label:(a.textContent||'').trim().slice(0,90)}))}catch{}});

// Global high-intent CTA after meaningful engagement.
if(!location.pathname.startsWith('/studio')&&!document.body.classList.contains('trust-site')){
 const bar=document.createElement('div');bar.className='sw-growth-sticky';bar.innerHTML='<div><b>Ready to see what fits your home?</b><small>Design the roof, compare batteries and see the numbers.</small></div><div class="sw-growth-sticky-actions"><a class="secondary" href="/tariffs/">See the numbers</a><a class="primary" href="/studio/">Design my system →</a></div>';document.body.append(bar);
 let engaged=false;const show=()=>{if(!engaged){engaged=true;bar.classList.add('show');event('engaged_cta_shown')}};addEventListener('scroll',()=>{if(scrollY>Math.min(650,innerHeight*.7))show()},{passive:true,once:true});setTimeout(show,18000);
}

// Contextual exploration block on content pages.
if(!location.pathname.startsWith('/studio')&&!q('.sw-growth-tools')&&!document.body.classList.contains('trust-site')){
 const main=q('main');if(main){const section=document.createElement('section');section.className='sw-growth-tools';section.innerHTML=`<div class="sw-growth-tools-inner"><div class="sw-growth-tools-head"><div><span>KEEP EXPLORING</span><h2>Choose what you want to know next.</h2></div><p>No forced sales funnel. Start with your roof, your bill, the hardware or your local area — they all lead back to one joined-up design.</p></div><div class="sw-growth-tool-grid"><a href="/studio/"><b>Design my home</b><span>Build a roof layout and battery setup.</span><em>Open Studio →</em></a><a href="/tariffs/"><b>Run the numbers</b><span>Explore import, export and storage economics.</span><em>Compare tariffs →</em></a><a href="/battery-storage/"><b>Compare batteries</b><span>Understand capacity, backup and use cases.</span><em>See batteries →</em></a><a href="/locations/"><b>Check my area</b><span>Explore Sunward coverage and local context.</span><em>Explore locations →</em></a></div></div>`;main.append(section)}}

// Track conversion proxies without external analytics dependency.
qa('form').forEach(f=>f.addEventListener('submit',()=>event('form_submit',{id:f.id||null})));
addEventListener('beforeunload',()=>event('session_exit',{scroll:Math.round(scrollY/(Math.max(1,document.documentElement.scrollHeight-innerHeight))*100)}));
})();