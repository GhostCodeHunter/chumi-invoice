/* ---------- templates ---------- */
/* a = main colour (can be changed by the user), b = second colour, c = third colour / page tint, pg = page background */
const TPL=[
 {id:'navy',name:'Navy Project',a:'#1B2170',b:'#F5A623',c:'#E6E6E8',pg:'#FFFFFF',num:1,bill:'Bill to',from:'Bill from'},
 {id:'redmono',name:'Red Mono',a:'#D2233C',b:'#2A2A2A',c:'#EDE5D6',pg:'#EDE5D6',bill:'Bill to:'},
 {id:'fluid',name:'Fluid',a:'#7656C5',b:'#F28B4B',c:'#E4507A',pg:'#F5F4F7',num:1,bill:'Invoice to'},
 {id:'sky',name:'Sky Grid',a:'#1D8FDD',b:'#111111',c:'#FFFFFF',pg:'#FFFFFF',num:1,bill:'Invoice to:'},
 {id:'charcoal',name:'Charcoal Gold',a:'#E49B1A',b:'#2D3037',c:'#FFFFFF',pg:'#FFFFFF',num:1,bill:'Invoice to:'},
 {id:'redslash',name:'Red Slash',a:'#D8232A',b:'#1F2733',c:'#FFFFFF',pg:'#FFFFFF',bill:'Invoice to:'},
 {id:'cream',name:'Cream Studio',a:'#3B3128',b:'#8A7F72',c:'#FFFFFF',pg:'#F3EFE6',bill:'Issued to:'},
 {id:'atelier',name:'Atelier',a:'#141414',b:'#141414',c:'#FFFFFF',pg:'#F4F4EE',bill:'Billed to:'},
 {id:'plain',name:'Plain Ink',a:'#111111',b:'#111111',c:'#FFFFFF',pg:'#FFFFFF',bill:'Billed to',from:'Sent by'},
 {id:'geo',name:'Geometric',a:'#4E43A8',b:'#F2B31E',c:'#FFFFFF',pg:'#FFFFFF',bill:'Invoice to:'},
 {id:'wave',name:'Wave Quote',a:'#6A3FD1',b:'#E4546B',c:'#3F5BE0',pg:'#F4F2F7',bill:'Invoice to'},
 {id:'dark',name:'Dark Panel',a:'#2B2B2B',b:'#2B2B2B',c:'#FFFFFF',pg:'#EEEEEE',bill:'To'},
 {id:'foot',name:'Wave Foot',a:'#1A1A1A',b:'#CFD0D3',c:'#FFFFFF',pg:'#FFFFFF',bill:'Billed to:',from:'From:'},
 {id:'ledger',name:'Ledger',a:'#111111',b:'#111111',c:'#FFFFFF',pg:'#FFFFFF',bill:'Bill To:'},
 {id:'lotus',name:'Lotus',a:'#C5A367',b:'#141414',c:'#FFFFFF',pg:'#F6F4EF',bill:'Billed to:'},
 {id:'green',name:'Green Slash',a:'#85B82E',b:'#232C42',c:'#FFFFFF',pg:'#FFFFFF',num:1,bill:'Invoice to:',from:'Invoice from:'},
 {id:'band',name:'Blue Band',a:'#1B4F9C',b:'#0D3A7A',c:'#FFFFFF',pg:'#FFFFFF',num:1,bill:'Invoice to:'},
 {id:'yellow',name:'Yellow Pill',a:'#FBB60C',b:'#25272C',c:'#FFFFFF',pg:'#FFFFFF',num:1,bill:'Invoice to:'},
 {id:'leaf',name:'Green Leaf',a:'#13A74F',b:'#8CC63E',c:'#FFFFFF',pg:'#FFFFFF',bill:'Invoice to'}
];
const DEFAULT_TPL='navy';
const SWATCHES=['#1B4F9C','#0F766E','#15803D','#B45309','#C2410C','#BE185D','#6D28D9','#111827'];
const hex2rgb=h=>{h=h.replace('#','');if(h.length===3)h=h.split('').map(c=>c+c).join('');const n=parseInt(h,16);return[(n>>16)&255,(n>>8)&255,n&255]};
const mix=(h,t)=>{const[r,g,b]=hex2rgb(h);const m=v=>Math.round(v*t+255*(1-t));return'rgb('+m(r)+','+m(g)+','+m(b)+')'};
const shade=(h,t)=>{const f=t>=0?v=>Math.round(v+(255-v)*t):v=>Math.round(v*(1+t));return'#'+hex2rgb(h).map(f).map(x=>Math.max(0,Math.min(255,x)).toString(16).padStart(2,'0')).join('')};
const inkOn=h=>{const[r,g,b]=hex2rgb(h);return(0.2126*r+0.7152*g+0.0722*b)/255>0.62?'#111111':'#ffffff'};

const ICON={
 t:'<svg viewBox="0 0 24 24"><path fill="#fff" d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25c1.1.37 2.3.57 3.6.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.3.2 2.5.57 3.6a1 1 0 01-.25 1z"/></svg>',
 e:'<svg viewBox="0 0 24 24"><path fill="#fff" d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5z"/></svg>',
 a:'<svg viewBox="0 0 24 24"><path fill="#fff" d="M12 2a7 7 0 00-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 119.5 9 2.5 2.5 0 0112 11.5z"/></svg>'
};

/* Decorations are inline SVG with plain presentation attributes (no clip-path), so they also survive the PDF export. */
let GID=0;
const sv=(w,h,pos,body)=>'<svg xmlns="http://www.w3.org/2000/svg" width="'+w+'" height="'+h+'" viewBox="0 0 '+w+' '+h+'" style="'+pos+'">'+body+'</svg>';
const grad=(id,x1,y1,x2,y2,c1,c2)=>'<linearGradient id="'+id+'" x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'"><stop offset="0" stop-color="'+c1+'"/><stop offset="1" stop-color="'+c2+'"/></linearGradient>';
function geoTile(c){
  const s='<svg xmlns="http://www.w3.org/2000/svg" width="70" height="210" viewBox="0 0 70 210"><rect width="70" height="210" fill="#ffffff"/>'
   +'<polygon points="0,0 70,0 0,70" fill="'+c.b+'"/><polygon points="70,0 70,70 0,70" fill="'+c.a+'"/>'
   +'<g fill="#ffffff"><ellipse cx="45" cy="45" rx="5" ry="12" transform="rotate(45 45 45)"/><ellipse cx="45" cy="45" rx="5" ry="12" transform="rotate(-45 45 45)"/></g>'
   +'<path d="M0 70H70V140A35 35 0 0 0 0 140Z" fill="'+c.b+'"/>'
   +'<path d="M0 140A35 35 0 0 0 70 140V210H0Z" fill="'+c.a+'"/>'
   +'<g fill="#ffffff"><ellipse cx="35" cy="175" rx="5" ry="13"/><ellipse cx="35" cy="175" rx="13" ry="5"/></g></svg>';
  return 'url(&quot;data:image/svg+xml,'+encodeURIComponent(s)+'&quot;)';
}
const DECO={
 navy:c=>'<div style="position:absolute;left:0;right:0;top:258px;bottom:0;background:'+c.c+'"></div>',
 fluid:c=>{const g=++GID;return sv(794,330,'left:0;top:0','<defs>'+grad('fa'+g,0,0,1,1,c.a2,c.a3)+grad('fb'+g,0,0,1,0,c.b,c.c)+'</defs>'
   +'<path d="M0 0H500C560 70 470 125 395 150C320 175 290 205 215 235C130 268 40 255 0 228Z" fill="url(#fa'+g+')"/>'
   +'<path d="M455 0H794V150C735 205 650 165 600 120C560 85 520 55 455 0Z" fill="url(#fb'+g+')"/>'
   +'<circle cx="540" cy="182" r="19" fill="'+c.a+'" opacity=".85"/><circle cx="345" cy="160" r="30" fill="url(#fb'+g+')"/>')
  +sv(794,400,'left:0;bottom:0','<defs>'+grad('fc'+g,0,0,1,1,c.a2,c.a3)+grad('fd'+g,0,0,1,0,c.b,c.c)+'</defs>'
   +'<path d="M0 70C70 25 190 12 268 62C338 106 348 178 306 238C300 300 292 366 252 400H0Z" fill="url(#fc'+g+')"/>'
   +'<circle cx="306" cy="104" r="33" fill="url(#fd'+g+')"/><circle cx="414" cy="172" r="19" fill="'+c.a2+'"/>'
   +'<path d="M350 400C400 322 480 286 560 312C625 334 700 312 794 246V400Z" fill="url(#fd'+g+')"/>')},
 charcoal:c=>'<div style="position:absolute;left:0;top:0;bottom:0;width:244px;background:'+c.b+'"></div>',
 redslash:c=>sv(794,160,'left:0;top:0','<polygon points="0,0 470,0 392,160 0,160" fill="'+c.b+'"/><polygon points="470,0 794,0 794,160 392,160" fill="'+c.a+'"/>')
  +sv(794,74,'left:0;bottom:0','<polygon points="0,0 470,0 506,74 0,74" fill="'+c.b+'"/><polygon points="660,74 794,74 794,30 704,30" fill="'+c.a+'"/>'),
 geo:c=>'<div style="position:absolute;left:0;top:0;bottom:0;width:70px;background:'+geoTile(c)+' repeat-y"></div>',
 wave:c=>{const g=++GID;return sv(794,240,'left:0;top:0','<defs>'+grad('wa'+g,0,0,1,0,c.a,c.b)+'</defs>'
   +'<path d="M0 0H794V118C700 170 560 205 400 150C250 98 120 70 0 120Z" fill="url(#wa'+g+')"/><path d="M0 0H300C250 38 120 52 0 44Z" fill="#E8D6CD"/>')},
 foot:c=>sv(794,230,'left:0;bottom:0','<path d="M0 130C100 60 230 20 340 70C450 120 560 205 794 185V230H0Z" fill="'+c.b+'"/><path d="M290 230C400 172 520 142 640 164C720 178 770 165 794 150V230Z" fill="'+c.a+'"/>'),
 green:c=>sv(794,128,'left:0;top:0','<polygon points="0,0 360,0 296,128 0,128" fill="'+c.b+'"/><polygon points="368,0 426,0 362,128 304,128" fill="'+c.a+'"/><polygon points="436,0 464,0 400,128 372,128" fill="'+c.a+'"/>')
  +'<div style="position:absolute;left:0;right:0;bottom:0;height:64px;background:'+c.b+'"></div>',
 band:c=>sv(794,128,'left:0;top:0','<polygon points="0,0 794,0 794,128 150,128 112,104 0,104" fill="'+c.a+'"/>')
  +sv(794,26,'left:0;bottom:0','<polygon points="0,26 0,0 610,0 636,26" fill="'+c.a+'"/><polygon points="690,26 794,26 794,8 712,8" fill="'+c.b+'"/>'),
 yellow:c=>sv(794,160,'left:0;top:0','<polygon points="0,0 480,0 392,148 0,148" fill="'+c.b+'"/><polygon points="480,0 496,0 408,148 392,148" fill="'+c.a+'"/>')
  +sv(794,74,'left:0;bottom:0','<path d="M0 74V12H420C470 12 470 46 520 46H794V74Z" fill="'+c.b+'"/><path d="M600 74C650 74 730 66 794 40V74Z" fill="'+c.a+'"/>'),
 leaf:c=>{const g=++GID;return sv(794,400,'left:0;bottom:0','<defs>'+grad('la'+g,0,0,1,1,c.b,c.a)+'</defs>'
   +'<path d="M0 120C140 70 300 140 400 400H0Z" fill="url(#la'+g+')"/><path d="M0 200C100 160 200 230 262 400H0Z" fill="'+c.a+'" opacity=".92"/>')}
};
