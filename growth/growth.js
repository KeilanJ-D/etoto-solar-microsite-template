(()=>{
'use strict';
const q=(s,r=document)=>r.querySelector(s),qa=(s,r=document)=>[...r.querySelectorAll(s)];
const KEY='sunward-growth-v1',SESSION='sw_'+Math.random().toString(36).slice(2)+Date.now().toString(36);
const state=(()=>{try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch{return {}}})();
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(state))}catch{}};
const params=new URLSearchParams(location.search);
['utm_source','utm_medium','utm_campaign','utm_content','utm_term','gclid','fbclid'].forEach(k=>{if(params.get(k))state[k]=params.get(k)});save();
function event(name,props={}){const payload={event:name,session:SESSION,path:location.pathname,ts:Date.now(),...Object.fromEntries(Object.entries(state).filter(([k])=>k.startsWith('utm_')||k==='gclid'||k==='fbclid')),...props};window.dataLayer=window.dataLayer||[];window.dataLayer.push(payload);window.dispatchEvent(new CustomEvent('sunward:event',{detail:payload}));try{const log=JSON.parse(sessionStorage.getItem('sunward-events')||'[]');log.push(payload);sessionStorage.setItem('sunward-events',JSON.stringify(log.slice(-100)))}catch{}}
window.SunwardGrowth={event,state};
event('page_view',{title:document.title,referrer:document.referrer||null});

// Capture attribution through internal navigation.
qa('a[href]').forEach(a=>{try{const u=new URL(a.href,location.href);if(u.origin!==location.origin)return;a.addEventListener('click',()=>event('internal_click',{href:u.pathname,label:(a.textContent||'').trim().slice(0,90)}))}catch{}});

// Global high-intent CTA after meaningful engagement.
if(!location.pathname.startsWith('/studio')){
 const bar=document.createElement('div');bar.className='sw-growth-sticky';bar.innerHTML='<div><b>Ready to see what fits your home?</b><small>Design the roof, compare batteries and see the numbers.</small></div><div class="sw-growth-sticky-actions"><a class="secondary" href="/tariffs/">See the numbers</a><a class="primary" href="/studio/">Design my system →</a></div>';document.body.append(bar);
 let engaged=false;const show=()=>{if(!engaged){engaged=true;bar.classList.add('show');event('engaged_cta_shown')}};addEventListener('scroll',()=>{if(scrollY>Math.min(650,innerHeight*.7))show()},{passive:true,once:true});setTimeout(show,18000);
}

// Contextual exploration block on content pages.
if(!location.pathname.startsWith('/studio')&&!q('.sw-growth-tools')){
 const main=q('main');if(main){const section=document.createElement('section');section.className='sw-growth-tools';section.innerHTML=`<div class="sw-growth-tools-inner"><div class="sw-growth-tools-head"><div><span>KEEP EXPLORING</span><h2>Choose what you want to know next.</h2></div><p>No forced sales funnel. Start with your roof, your bill, the hardware or your local area — they all lead back to one joined-up design.</p></div><div class="sw-growth-tool-grid"><a href="/studio/"><b>Design my home</b><span>Build a roof layout and battery setup.</span><em>Open Studio →</em></a><a href="/tariffs/"><b>Run the numbers</b><span>Explore import, export and storage economics.</span><em>Compare tariffs →</em></a><a href="/battery-storage/"><b>Compare batteries</b><span>Understand capacity, backup and use cases.</span><em>See batteries →</em></a><a href="/locations/"><b>Check my area</b><span>Explore Sunward coverage and local context.</span><em>Explore locations →</em></a></div></div>`;main.append(section)}}

// Studio-specific funnel intelligence and CRO.
if(location.pathname.startsWith('/studio')){
 const workspace=q('#workspace');
 const coach=document.createElement('div');coach.className='sw-studio-coach';coach.innerHTML='<div><strong id="swCoachTitle">Start with what matters to you.</strong><span id="swCoachText">Your answers shape the design; you can edit everything later.</span></div><button id="swCoachAction">Continue →</button>';
 const stage=q('.mainstage');if(stage)stage.prepend(coach);
 const completed=new Set();
 function active(){return q('.view.active')?.dataset.view||'discover'}
 function coachCopy(){const v=active(),map={discover:['A few answers now make the quote much smarter.','You can skip property lookup and still build manually.','property'],property:['Make the house believable before adding hardware.','Correct the roof type, orientation or dimensions if they look wrong.','design'],design:['Roof first. Hardware second.','Auto-fill a face, then remove or add panels until the layout makes sense.','system'],system:['Choose products you would genuinely buy.','Every selection flows directly into your itemised quote.','quote'],quote:['Review the scope, not just the headline price.','You can go back and change the design without losing your work.','quote']};const [t,s,next]=map[v];q('#swCoachTitle').textContent=t;q('#swCoachText').textContent=s;q('#swCoachAction').textContent=v==='quote'?'Review quote':'Continue →';q('#swCoachAction').onclick=()=>{const b=q(`[data-jump="${next}"]`);if(b)b.click();else q(`[data-step="${next}"]`)?.click()}}
 const navObs=new MutationObserver(()=>{const v=active();event('studio_step_view',{step:v});['discover','property','design','system','quote'].forEach((x,i)=>{const node=q(`.step[data-step="${x}"]`);if(node&&completed.has(x))node.classList.add('is-complete')});coachCopy()});qa('.view').forEach(v=>navObs.observe(v,{attributes:true,attributeFilter:['class']}));coachCopy();
 qa('[data-step],[data-jump]').forEach(b=>b.addEventListener('click',()=>{const from=active(),to=b.dataset.step||b.dataset.jump;if(from!==to){completed.add(from);event('studio_step_change',{from,to})}}));
 const address=q('#addressInput');if(address){address.addEventListener('focus',()=>event('property_lookup_focus'));q('#lookupBtn')?.addEventListener('click',()=>event('property_lookup_submit',{hasValue:address.value.trim().length>3}))}
 q('#manualProperty')?.addEventListener('click',()=>event('manual_property_selected'));
 q('#autoFillBtn')?.addEventListener('click',()=>event('roof_autofill',{face:q('#faceSelect')?.value||null,panel:q('#panelSelect')?.value||null}));
 q('#clearPanels')?.addEventListener('click',()=>event('roof_clear'));
 q('#acceptBtn')?.addEventListener('click',()=>event('quote_primary_action',{mode:q('#liveMode')?.textContent||'preview'}));
 ['#panelSelect','#batterySelect','#backupToggle','#birdToggle'].forEach(sel=>q(sel)?.addEventListener('change',e=>event('system_change',{control:sel,value:e.target.type==='checkbox'?e.target.checked:e.target.value})));
 // Resume reassurance for returning users.
 try{if(localStorage.getItem('sunward-studio-v3')){const r=document.createElement('div');r.className='sw-resume-card';r.innerHTML='<div><b>Your previous design is still here.</b><span>Continue where you left off or start over whenever you want.</span></div><button>Continue design →</button>';q('[data-view="discover"]')?.prepend(r);r.querySelector('button').onclick=()=>{q('[data-step="design"]')?.click();event('resume_design')}}}catch{}
 // Intent-aware copy based on existing saved design state.
 try{const d=JSON.parse(localStorage.getItem('sunward-studio-v3')||'{}')?.design;if(d?.goal){const copy={solar:'Maximise useful roof generation, then compare whether storage earns its place.',battery:'Start with storage and tariff-shifting, then see whether solar improves the economics.',both:'Balance generation and storage around when your home actually uses electricity.'};q('.hero-copy p')&&(q('.hero-copy p').textContent=copy[d.goal]||q('.hero-copy p').textContent)}}catch{}
}

// Track conversion proxies without external analytics dependency.
qa('form').forEach(f=>f.addEventListener('submit',()=>event('form_submit',{id:f.id||null})));
addEventListener('beforeunload',()=>event('session_exit',{scroll:Math.round(scrollY/(Math.max(1,document.documentElement.scrollHeight-innerHeight))*100)}));
})();
