/* Progressive enhancement: browseable pages remain usable without this file. */
(()=>{'use strict';
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
const isInner=document.body.classList.contains('national-page');
if(isInner){
 const button=$('.menu-toggle'),nav=$('#mobile-nav');
 const close=()=>{nav.hidden=true;button.setAttribute('aria-expanded','false');button.setAttribute('aria-label','Open navigation');};
 button?.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';nav.hidden=!open;button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'Close navigation':'Open navigation');});
 $$('#mobile-nav a').forEach(a=>a.addEventListener('click',close));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!nav.hidden){close();button.focus();}});
 window.addEventListener('resize',()=>{if(innerWidth>767)close();},{passive:true});
 let queued=false;const scroll=()=>{$('.header')?.classList.toggle('scrolled',scrollY>12);$('.mobile-cta')?.classList.toggle('visible',scrollY>420);queued=false;};
 window.addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(scroll);}},{passive:true});scroll();
}
let dataPromise;
function getData(){if(!dataPromise)dataPromise=fetch('/data/locations.json',{credentials:'omit'}).then(r=>{if(!r.ok)throw Error('Directory unavailable');return r.json();}).catch(e=>{dataPromise=null;throw e;});return dataPromise;}
const normal=(s)=>String(s).normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim();
function findLocations(data,q){const words=normal(q).split(' ').filter(Boolean);return data.map(l=>{const name=normal(l.name),text=normal([l.name,l.area,l.nation,...(l.aliases||[])].join(' '));const match=words.every(w=>text.includes(w));const query=normal(q);return {l,score:!match?-1:name===query?100:name.startsWith(query)?90:name.includes(query)?70:20};}).filter(x=>x.score>=0).sort((a,b)=>b.score-a.score||a.l.name.localeCompare(b.l.name,'en-GB')).map(x=>x.l);}
function resultAnchor(l){const a=document.createElement('a');a.href=l.url;const span=document.createElement('span');span.textContent=l.name;const small=document.createElement('small');small.textContent=`${l.area} / ${l.nation}`;span.append(small);const arrow=document.createElement('span');arrow.setAttribute('aria-hidden','true');arrow.textContent='\u2197';a.append(span,arrow);return a;}
$$('[data-search]').forEach(box=>{
 const input=$('input',box),list=$('.search-results',box),status=$('.search-status',box);let active=-1,sequence=0;
 const hide=()=>{list.hidden=true;input.setAttribute('aria-expanded','false');input.removeAttribute('aria-activedescendant');active=-1;};
 const activate=(i)=>{const options=$$('[role="option"]',list);if(!options.length)return;active=(i+options.length)%options.length;options.forEach((o,n)=>o.setAttribute('aria-selected',String(n===active)));input.setAttribute('aria-activedescendant',options[active].id);options[active].scrollIntoView({block:'nearest'});};
 async function update(){const request=++sequence,q=input.value.trim();if(q.length<2){hide();status.textContent='Enter at least two characters, or browse by area below.';const output=$('#directory-output');if(output)output.hidden=true;return;}
  status.textContent='Finding your place...';
  try{const data=await getData();if(request!==sequence)return;const hits=findLocations(data,q);list.replaceChildren();active=-1;
   hits.slice(0,8).forEach((l,i)=>{const li=document.createElement('li');li.id=input.id+'-option-'+i;li.setAttribute('role','option');li.setAttribute('aria-selected','false');li.append(resultAnchor(l));list.append(li);});
   list.hidden=!hits.length;input.setAttribute('aria-expanded',String(Boolean(hits.length)));input.removeAttribute('aria-activedescendant');
   status.textContent=hits.length?`${hits.length.toLocaleString('en-GB')} ${hits.length===1?'place':'places'} found. Use the arrow keys to choose.`:'No match in this preview catalogue. Browse an area below; coverage is not confirmed.';
   if(box.hasAttribute('data-full-search')){const output=$('#directory-output');output.hidden=false;output.replaceChildren();const heading=document.createElement('p');heading.className='catalogue-count';heading.textContent=hits.length?`Showing ${Math.min(hits.length,30)} of ${hits.length} matches. Refine your search to narrow the results.`:'No results in the curated preview catalogue.';output.append(heading);const grid=document.createElement('div');grid.className='result-grid';hits.slice(0,30).forEach(l=>{const a=document.createElement('a');a.className='area-card';a.href=l.url;const h=document.createElement('h3');h.textContent=l.name;const s=document.createElement('span');s.className='area-count';s.textContent=`${l.area} / ${l.nation}`;a.append(h,s);grid.append(a);});output.append(grid);}
  }catch{if(request===sequence){hide();status.textContent='Search is unavailable. The area links below still work.';}}
 }
 input.addEventListener('input',update);input.addEventListener('focus',()=>{getData().catch(()=>{});if(input.value.length>=2)update();});
 input.addEventListener('keydown',e=>{if(e.key==='Escape'){hide();return;}if(list.hidden)return;if(e.key==='ArrowDown'){e.preventDefault();activate(active+1);}if(e.key==='ArrowUp'){e.preventDefault();activate(active-1);}if(e.key==='Enter'&&active>=0){e.preventDefault();const a=$$('[role="option"] a',list)[active];if(a)window.location.assign(a.href);}});
 document.addEventListener('click',e=>{if(!box.contains(e.target))hide();});
});
// Carry the originating local area into the homepage enquiry, without cookies.
if(!isInner){const query=new URLSearchParams(location.search);const place=(query.get('location')||'').slice(0,140);if(place){const note=document.createElement('p');note.className='location-context';note.textContent=`Exploring a home in ${place}`;$('#quote-form')?.before(note);}
 if(query.get('quote')==='1'){const interest=['solar','battery','both'].includes(query.get('interest'))?query.get('interest'):'both';const trigger=$(`[data-quote][data-interest="${interest}"]`)||$('[data-quote]');requestAnimationFrame(()=>trigger?.click());}
}
})();
