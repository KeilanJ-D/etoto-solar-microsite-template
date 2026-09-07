import {faceGeometry,dimensions,roofSlots,compass} from './engine.mjs';
// Orthographic technical model: every roof, slot and module shares the same measured plane.
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const pts=p=>p.map(a=>a.map(v=>v.toFixed(2)).join(',')).join(' ');
export function facePoint(f,x,y,lift=0){return f.origin.map((v,i)=>v+f.u[i]*x+f.v[i]*y+(i===1?lift:0));}
export function sceneSvg(d,active='front',view='home',camera='front'){
 const faces=faceGeometry(d),f=faces.find(x=>x.id===active)||faces[0];if(view==='plan')return planSvg(d,f);
 const w=d.width,z=d.depth,h=d.height,back=camera==='rear';
 const raw=([x,y,z])=>{if(back){x=-x;z=-z;}return [(x-z)*.866,(x+z)*.43-y]};
 const roofPoints=faces.flatMap(f=>f.shape.map(([x,y])=>facePoint(f,x,y)));
 const all=[...roofPoints,[-w/2,0,-z/2],[-w/2,0,z/2],[w/2,0,-z/2],[w/2,0,z/2]].map(raw),minX=Math.min(...all.map(p=>p[0])),maxX=Math.max(...all.map(p=>p[0])),minY=Math.min(...all.map(p=>p[1])),maxY=Math.max(...all.map(p=>p[1]));
 const scale=Math.min(570/(maxX-minX),335/(maxY-minY));const project=p=>{const a=raw(p);return [350+(a[0]-(minX+maxX)/2)*scale,230+(a[1]-(minY+maxY)/2)*scale]};
 const poly=(p,fill,extra='')=>`<polygon points="${pts(p.map(project))}" fill="${fill}" ${extra}/>`;
 const footprint=[[-w/2-.7,-.08,-z/2-.7],[w/2+.7,-.08,-z/2-.7],[w/2+.7,-.08,z/2+.7],[-w/2-.7,-.08,z/2+.7]];
 let svg=poly(footprint,'#c8d4be','stroke="#b9c9ad" stroke-width="1"');
 const sign=back?-1:1,frontZ=sign*z/2,sideX=sign*w/2;
 const extraRise=d.roof==='mono'?z*Math.tan(d.pitch*Math.PI/180):0;
 const wallTop=zz=>h+(d.roof==='mono'?(z/2-zz)/z*extraRise:0);
 const frontWall=[[-w/2,0,frontZ],[w/2,0,frontZ],[w/2,wallTop(frontZ),frontZ],[-w/2,wallTop(frontZ),frontZ]];
 const sideWall=[[sideX,0,-z/2],[sideX,0,z/2],[sideX,wallTop(z/2),z/2],[sideX,wallTop(-z/2),-z/2]];
 svg+=poly(sideWall,'#c9c6b7','stroke="#a6ab9b" stroke-width="1"')+poly(frontWall,'#efede1','stroke="#bac1ae" stroke-width="1"');
 if(d.roof==='gable')svg+=poly([[sideX,h,-z/2],[sideX,h,z/2],[sideX,h+z/2*Math.tan(d.pitch*Math.PI/180),0]],'#d5d2c4','stroke="#bac1ae"');
 // Window coordinates remain outside the reserved mounting bay.
 const window=(x,yy)=>poly([[x,yy,frontZ+sign*.018],[x+Math.min(1.15,w*.18),yy,frontZ+sign*.018],[x+Math.min(1.15,w*.18),yy+1.05,frontZ+sign*.018],[x,yy+1.05,frontZ+sign*.018]],'#a3b3ac','stroke="#fdfdf6" stroke-width="3"');
 svg+=window(-w*.32,1.05);if(h>4)svg+=window(-w*.32,3.45)+window(w*.10,3.45);
 svg+=poly([[w*.05,0,frontZ+sign*.02],[w*.05+.85,0,frontZ+sign*.02],[w*.05+.85,2.1,frontZ+sign*.02],[w*.05,2.1,frontZ+sign*.02]],'#496557','stroke="#fbfbef" stroke-width="2"');
 // Roof polygons and the modules on each plane are painted together, farthest first.
 const ordered=faces.slice().sort((a,b)=>{const centre=f=>f.shape.map(([x,y])=>facePoint(f,x,y)).reduce((s,p)=>s+sign*(p[0]+p[2]),0)/f.shape.length;return centre(a)-centre(b)});
 for(const rf of ordered){
 svg+=poly(rf.shape.map(([x,y])=>facePoint(rf,x,y)),rf.id===active?'#52695c':'#748075',`stroke="#394e40" stroke-width="1.5" data-face="${rf.id}" class="roof-plane"`);
 for(const p of d.panels.filter(x=>x.face===rf.id)){
 const {w:pw,h:ph}=dimensions(p);const coords=[[p.x,p.y],[p.x+pw,p.y],[p.x+pw,p.y+ph],[p.x,p.y+ph]];
 svg+=poly(coords.map(([x,y])=>facePoint(rf,x,y,.035)),'#142b2e','stroke="#aebcb4" stroke-width=".8"');
 for(let i=1;i<6;i++){const x=p.x+pw*i/6;svg+=`<line x1="${project(facePoint(rf,x,p.y,.04))[0]}" y1="${project(facePoint(rf,x,p.y,.04))[1]}" x2="${project(facePoint(rf,x,p.y+ph,.04))[0]}" y2="${project(facePoint(rf,x,p.y+ph,.04))[1]}" stroke="#47615d" stroke-width=".45"/>`;}
 }
 }
 // Only a candidate location marker is attached to the wall; photography stays in a dedicated installation view.
 if(d.battery!=='none'&&d.batteryZone==='exterior'){
 const visible=d.house!=='terrace'||back;if(visible){const a=project([w*.34,1.1,frontZ+sign*.06]);svg+=`<circle cx="${a[0]}" cy="${a[1]}" r="12" fill="#dbf1a6" stroke="#193d2d" stroke-width="2"/><path d="M${a[0]+2},${a[1]-7} l-6,8 h5 l-2,6 7,-9 h-5z" fill="#193d2d"/>`;}
 }

 return `<svg viewBox="0 0 700 460" role="img" aria-label="${esc(d.house)} ${esc(d.roof)} architectural model with ${d.panels.length} solar panels. Battery candidate location marked separately.">${svg}</svg>`;
}
export function planSvg(d,f){
 const scale=Math.min(560/f.width,320/f.length),ox=(700-f.width*scale)/2,oy=(430-f.length*scale)/2,xy=([x,y])=>[ox+x*scale,oy+y*scale];
 const slots=roofSlots(d,f.id);let svg=`<polygon points="${pts(f.shape.map(xy))}" fill="#81907f" stroke="#344e3b" stroke-width="2"/>`;
 for(const o of d.obstacles.filter(o=>o.face===f.id)){const [x,y]=xy([o.x,o.y]);svg+=`<rect x="${x}" y="${y}" width="${o.w*scale}" height="${o.h*scale}" fill="#d5cbaa" stroke="#685b40" stroke-width="2"/><text x="${x+o.w*scale/2}" y="${y+o.h*scale/2+4}" font-size="10" text-anchor="middle" fill="#4f462f">Clear</text>`;}
 for(const p of slots){const {w,h}=dimensions(p),present=d.panels.some(q=>q.face===p.face&&Math.abs(q.x-p.x)<.01&&Math.abs(q.y-p.y)<.01),[x,y]=xy([p.x,p.y]);
 svg+=`<g tabindex="0" role="button" aria-label="${present?'Remove':'Add'} panel ${esc(p.id)}" aria-pressed="${present}" data-slot="${p.id}" class="roof-slot"><rect x="${x}" y="${y}" width="${w*scale}" height="${h*scale}" rx="2" fill="${present?'#183437':'#cad4bb'}" stroke="${present?'#e0e8d6':'#48634d'}" stroke-width="1.5" ${present?'':'stroke-dasharray="4 3"'}/><text x="${x+w*scale/2}" y="${y+h*scale/2+6}" fill="${present?'#e8f4df':'#3a5640'}" text-anchor="middle" font-size="22" pointer-events="none">${present?'−':'+'}</text></g>`;
 }
 svg+=`<text x="350" y="24" text-anchor="middle" fill="#39533f" font-size="14">${esc(f.label)} · ${compass(f.azimuth)} · ${f.width.toFixed(1)} × ${f.length.toFixed(1)} m</text>`;
 return `<svg viewBox="0 0 700 460" role="group" aria-label="Interactive roof grid for ${esc(f.label)}">${svg}</svg>`;
}
