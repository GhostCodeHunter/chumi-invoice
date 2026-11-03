/* ---------- auto invoice: catalogue + exact solver (pure, whole numbers only) ---------- */
/* Each entry: name | lowest unit price | highest unit price | usual max quantity. Prices are in INR and scaled per currency. */
const RAW={
host:[
'.com Domain Registration (1 year)|799|1299|5','.in Domain Registration (1 year)|449|899|5','.org Domain Registration (1 year)|899|1499|3','.net Domain Registration (1 year)|899|1599|3',
'Domain Renewal (1 year)|799|1499|5','Domain Transfer-in|499|999|3','Domain Privacy Protection (1 year)|299|699|5','Shared Hosting - Starter (12 months)|1499|3999|3',
'Shared Hosting - Business (12 months)|3499|7999|3','WordPress Hosting (12 months)|2999|8999|3','Cloud VPS Hosting (monthly)|899|4999|12','Dedicated Server (monthly)|7999|24999|6',
'SSL Certificate (1 year)|799|5999|3','Business Email, per mailbox (12 months)|899|2499|10','Website Backup Add-on (12 months)|499|1999|3','Website Security Scan (12 months)|999|2999|3',
'CDN & Speed Booster (12 months)|799|2499|3','Cloud Storage 500 GB (12 months)|1499|4999|3','Dedicated IP Address (12 months)|599|1299|3','Website Migration Service|1499|4999|2','Monthly Website Maintenance|1999|7999|12'],
soft:[
'Business Website Design (5 pages)|14999|49999|1','E-commerce Website Setup|24999|89999|1','Landing Page Design|4999|14999|2','Mobile App Development (milestone)|29999|149999|3',
'Web Application Development (milestone)|39999|199999|3','UI/UX Design, per screen|799|2499|30','Logo & Brand Kit|3999|14999|1','SEO Package (monthly)|4999|19999|12',
'Social Media Management (monthly)|5999|24999|12','Google Ads Management (monthly)|6999|24999|6','Software License, per user (annual)|2499|9999|25','Billing & ERP Software Subscription (annual)|7999|39999|2',
'API Integration|4999|24999|3','Technical Support Hours|799|1999|40','Cloud Setup & Configuration|5999|24999|2','Data Backup & Recovery Service|2999|12999|2',
'Annual Maintenance Contract (AMC)|9999|49999|2','Chatbot Setup|3999|14999|2','Payment Gateway Integration|2999|9999|1','IT Staff Training Session|2999|9999|4'],
hw:[
'Wi-Fi Router (dual band)|1499|6999|10','24-Port Network Switch|3999|18999|3','CAT6 Cable Box (305 m)|5499|9999|4','Network Cabling, per point|399|899|40',
'CCTV Camera (2 MP)|1299|3499|16','NVR 8-Channel Recorder|5999|12999|2','Laptop (Core i5, 8 GB)|32999|54999|10','Desktop Computer|24999|42999|10',
'24-inch Monitor|6499|11999|10','Keyboard & Mouse Combo|499|1499|20','External SSD 1 TB|5499|8999|6','UPS 1 kVA|4499|8999|6',
'Laser Printer|8999|19999|4','Toner Cartridge|1999|4999|6','HD Webcam|999|3999|10','Server Rack 9U|6999|15999|2',
'Hardware Installation & Setup|1999|7999|3','Extended Warranty (3 years)|1999|6999|10'],
ladies:[
'Floral Maxi Dress|899|2499|4','A-Line Cotton Kurti|499|1499|6','Anarkali Suit Set|1499|4499|3','Silk Saree|1999|8999|2','Cotton Saree|699|1999|4',
'Palazzo Pants|399|999|6','Leggings (Pack of 2)|349|799|6','High-Waist Jeans|899|2299|4','Crop Top|349|899|6','Denim Jacket (Women)|1299|2999|2',
'Party Wear Gown|2499|6999|2','Western Co-ord Set|1299|3499|3','Chiffon Dupatta|299|899|6','Lehenga Choli|3999|12999|1','Cotton Nightwear Set|449|1299|4',
'Printed Tunic Top|399|1199|6','Formal Blazer (Women)|1799|3999|2','Pashmina Shawl|1299|3999|3','Embroidered Salwar Suit|1299|3499|4','Casual Ladies Shirt|499|1399|5'],
men:[
'Formal Shirt (Slim Fit)|799|1999|6','Casual Cotton Shirt|599|1599|6','Polo T-Shirt|449|1299|8','Round-Neck T-Shirt (Pack of 3)|599|1499|6','Slim Fit Jeans|899|2499|4',
'Chino Trousers|899|2199|4','Formal Trousers|899|2299|4','Kurta Pyjama Set|999|2999|3','Cotton Mundu Set|399|1299|4','Blazer (Men)|2499|6999|2',
'Two-Piece Suit|5999|14999|1','Hooded Sweatshirt|899|2299|4','Track Pants|499|1299|6','Denim Jacket (Men)|1399|3299|2','Leather Belt|399|1299|5',
'Innerwear (Pack of 5)|399|999|8','Cotton Shorts|399|999|6','Winter Jacket (Men)|1999|4999|2','Sherwani|4999|14999|1','Casual Printed Shirt|599|1499|5'],
kids:[
'Boys T-Shirt (Pack of 2)|349|899|6','Girls Party Frock|599|1999|4','Kids Denim Dungarees|599|1499|4','Boys Shorts Set|399|999|6','Girls Leggings (Pack of 3)|399|899|5',
'School Uniform Set|799|1999|4','Baby Romper (Pack of 3)|399|1199|5','Infant Sleepsuit|299|899|6','Kids Kurta Set|799|2299|3','Kids Hoodie|599|1499|4',
'Kids Pyjama Set|349|899|6','Girls Lehenga Set|1299|3499|2','Kids Sneakers|599|1799|4','Baby Blanket|399|999|4','Kids School Bag|499|1499|4',
'Kids Raincoat|399|999|4','Kids Winter Jacket|899|2499|3','Boys Blazer Set|1499|3499|2','Girls Hair Accessory Set|149|499|10','Kids Socks (Pack of 6)|199|499|10'],
shoes:[
"Men's Formal Shoes|1499|3999|3","Men's Sports Shoes|1299|3999|3","Women's Heels|999|2999|3","Women's Flats|499|1499|5",'Casual Sandals|399|1299|5','Flip-Flops|199|599|8',
'Running Shoes|1499|4499|3','Leather Wallet|399|1499|6','Laptop Backpack|799|2499|4','Ladies Handbag|799|2999|4','Travel Duffel Bag|999|2999|3','Sunglasses|499|2499|4',
'Wrist Watch|999|5999|3','Unisex Leather Belt|399|999|5'],
home:[
'Non-Stick Cookware Set|999|3499|3','Stainless Steel Water Bottle|299|899|8','Cotton Bedsheet (Double)|599|1999|4','Pillow Covers (Pack of 4)|299|899|6','Bath Towel Set|499|1499|5',
'Dinner Set (24 pcs)|1499|4999|2','Electric Kettle|699|1999|3','Mixer Grinder|1999|5999|2','LED Table Lamp|399|1299|5','Wall Clock|399|1499|4',
'Curtains (Pair)|599|2499|4','Storage Containers (Set of 6)|399|1199|5','Floor Mat|299|999|6','Air Fryer|3999|8999|2','Wooden Photo Frame|199|799|8'],
gadget:[
'Smartphone (6 GB / 128 GB)|9999|24999|3','Bluetooth Earbuds|799|3999|6','Fast Charger 33W|499|1499|8','USB-C Cable|199|599|12','Power Bank 20000 mAh|1199|2499|6',
'Smart Watch|1999|6999|3','Phone Case|199|699|12','Tempered Glass Protector|149|499|12','Bluetooth Speaker|999|3999|4','Memory Card 128 GB|599|1299|6',
'Wireless Mouse|399|1299|6','Tablet (10-inch)|9999|22999|2','Selfie Stick & Tripod|399|1299|6','Smart LED Bulb|299|799|10'],
consult:[
'Business Consultation, per hour|999|3999|20','GST Registration & Filing (monthly)|799|2999|12','Accounting & Bookkeeping (monthly)|2999|9999|12','Company Registration Assistance|6999|19999|1',
'Legal Document Drafting|1999|7999|3','Income Tax Return Filing|999|4999|3','Trademark Registration Support|5999|14999|1','Project Management, per week|4999|19999|8',
'Market Research Report|4999|24999|2','HR & Payroll Processing (monthly)|1999|7999|12','Audit Support, per day|2999|9999|10','Business Training Workshop|3999|14999|4',
'Loan Application Support|1999|5999|2','Import / Export Documentation|1499|4999|4','Insurance Advisory Session|999|2999|3'],
repair:[
'AC Service & Cleaning|499|1499|8','AC Gas Refill|1499|3499|3','Plumbing Repair, per visit|399|1499|4','Electrical Wiring, per point|249|699|30','Deep Home Cleaning, per room|999|3999|5',
'Sofa Cleaning|599|1999|4','Pest Control Treatment|999|2999|3','Carpentry Work, per day|799|1999|6','Wall Painting, per room|2499|8999|5','Water Tank Cleaning|799|2499|3',
'Appliance Repair, visit charge|299|799|6','Waterproofing Treatment|4999|19999|2','Kitchen Chimney Service|499|1499|3','Washing Machine Repair|399|1499|3','Door & Lock Repair|299|999|6'],
events:[
'Wedding Photography, per day|9999|39999|3','Videography & Editing|7999|29999|3','Event Decoration Package|4999|49999|2','Catering, per plate|249|899|150','DJ & Sound System|4999|19999|2',
'Poster & Flyer Design|799|2499|10','Drone Shoot|2999|9999|3','Album Design & Printing|1999|7999|3','Photo Booth Rental|3999|12999|2','Invitation Card Design|999|2999|3',
'Stage & Lighting Setup|5999|24999|2','Event Coordination, per day|3999|14999|4','Bridal Makeup|3999|14999|2','Live Band Performance|9999|39999|1','Return Gift Hampers|99|399|100'],
edu:[
'Online Course Fee, per student|999|9999|30','Abacus Course Fee, per level|1500|3500|20','Monthly Tuition Fee|799|3999|12','Exam Registration Fee|299|999|30','Study Material Kit|499|1499|20',
'Workshop Registration|499|2999|20','Spoken English Course|2999|8999|10','Coding Bootcamp Module|3999|14999|6','Certificate Fee|199|499|30','Admission Fee|999|2999|20',
'Annual Lab Fee|499|1999|20','Career Counselling Session|499|1999|6','Music Class Fee (monthly)|999|2999|12','Drawing Class Fee (monthly)|799|2499|12','Language Test Preparation|1999|7999|4']
};
const CAT={};
Object.keys(RAW).forEach(k=>{CAT[k]=RAW[k].map(r=>{const p=r.split('|');return{n:p[0],lo:+p[1],hi:+p[2],q:+p[3]||1}})});
const CATS=[
 {id:'it',label:'IT & hosting',types:[['all','All IT items',['host','soft','hw']],['host','Web hosting & domains',['host']],['soft','Web & software services',['soft']],['hw','Hardware & networking',['hw']]]},
 {id:'ecom',label:'E-commerce',types:[['all','All products',['ladies','men','kids','shoes','home','gadget']],['ladies',"Ladies' wear",['ladies']],['men',"Men's wear",['men']],['kids',"Kids' wear",['kids']],['fashion','Mixed clothing',['ladies','men','kids']],['shoes','Footwear & bags',['shoes']],['home','Home & kitchen',['home']],['gadget','Mobiles & gadgets',['gadget']]]},
 {id:'service',label:'Service',types:[['all','All services',['consult','repair','events','edu']],['consult','Consulting & accounts',['consult']],['repair','Home & repair',['repair']],['events','Events & creative',['events']],['edu','Education & training',['edu']]]},
 {id:'random',label:'Random',types:[['all','Anything',Object.keys(RAW)]]}
];
/* Approximate amount of each currency per 1 INR. Only used to pick sensible price bands. */
const RATE_K={INR:1,USD:.012,EUR:.011,GBP:.0094,AED:.044,SAR:.045,QAR:.044,KWD:.0037,BHD:.0045,OMR:.0046,CAD:.016,AUD:.018,NZD:.02,SGD:.016,CHF:.0098,JPY:1.8,CNY:.086,ZAR:.21,MXN:.21,BRL:.066};
function poolFor(cat,type){
  const c=CATS.find(x=>x.id===cat)||CATS[0],t=c.types.find(x=>x[0]===type)||c.types[0];
  const out=[];t[2].forEach(k=>CAT[k].forEach(i=>out.push(i)));return out;
}
function mulberry(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
const niceStep=p=>p<30?1:p<200?5:p<1000?10:p<5000?50:p<20000?100:p<100000?500:1000;
function nicePrice(p,rng){
  p=Math.max(1,p);const st=niceStep(p);let b=Math.max(st,Math.round(p/st)*st);
  if(b>=200&&rng()<.5)b-=1;                 /* 499, 1,499 style */
  return Math.max(1,b);
}
/* Fallback that always works when total >= count: every quantity is 1. */
function safeLines(items,T,rng){
  const n=items.length,w=items.map(it=>Math.sqrt(it.lo*it.hi)*(.7+.6*rng())),W=w.reduce((a,b)=>a+b,0);
  const base=w.map(x=>Math.max(1,Math.floor((T-n)*x/W)+1));
  let left=T-base.reduce((a,b)=>a+b,0),i=0;
  const order=base.map((_,k)=>k).sort((x,y)=>w[y]-w[x]);
  while(left>0){base[order[i%n]]++;left--;i++}
  while(left<0){const k=order[i%n];if(base[k]>1){base[k]--;left++}i++;if(i>n*(T+2))break}
  return items.map((it,k)=>({n:it.n,p:base[k],q:1}));
}
function buildLines(items,T,K,rng){
  const n=items.length;
  const wts=items.map(it=>Math.pow(Math.sqrt(it.lo*it.hi)*K,.65)*(.7+.6*rng())),W=wts.reduce((a,b)=>a+b,0);
  const A=items.map((it,i)=>Math.max(1,T*wts[i]/W));
  const band=items.map(it=>[it.lo*K*.8,it.hi*K*1.25]);
  /* one line absorbs the remainder, so it must have quantity 1: take the line whose
     share already fits its own price band best (largest such share first) */
  let b=-1;
  items.forEach((it,i)=>{if(A[i]>=band[i][0]&&A[i]<=band[i][1]&&(b<0||A[i]>A[b]))b=i});
  if(b<0){let bd=Infinity;items.forEach((it,i)=>{const d=Math.abs(Math.log(A[i]/(A[i]<band[i][0]?band[i][0]:band[i][1])));if(d<bd){bd=d;b=i}})}
  const L=items.map((it,i)=>{
    const loP=band[i][0],hiP=band[i][1];
    if(i===b)return{n:it.n,A:A[i],q:1,p:Math.max(1,Math.round(A[i]))};
    const qMax=Math.min(1000,Math.max(it.q,Math.ceil(A[i]/(it.hi*K*1.6))));
    const cs=[],ws=[];
    for(let q=1;q<=qMax;q++){const p=A[i]/q;if(p>=loP&&p<=hiP){cs.push(q);ws.push(1/Math.pow(q,1.3))}}
    let q;
    if(cs.length){const S=ws.reduce((a,c)=>a+c,0);let r=rng()*S;q=cs[cs.length-1];for(let k=0;k<cs.length;k++){r-=ws[k];if(r<=0){q=cs[k];break}}}
    else q=A[i]<loP?1:qMax;
    return{n:it.n,A:A[i],q,p:nicePrice(A[i]/q,rng)};
  });
  let R=T-L.reduce((a,l)=>a+l.p*l.q,0);
  const idx=L.map((_,i)=>i).filter(i=>i!==b);
  for(let i=idx.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[idx[i],idx[j]]=[idx[j],idx[i]]}
  idx.forEach(i=>{
    const l=L[i],st=niceStep(l.p),k=Math.trunc(R/(l.q*st));
    if(!k)return;
    const np=l.p+k*st;
    if(np<1||Math.abs(k*st)>l.p*.25)return;
    l.p=np;R-=k*st*l.q;
  });
  L[b].p+=R;
  const total=L.reduce((a,l)=>a+l.p*l.q,0);
  const ok=total===T&&L.every(l=>Number.isInteger(l.p)&&Number.isInteger(l.q)&&l.p>=1&&l.q>=1);
  return ok?L.map(l=>({n:l.n,p:l.p,q:l.q})):null;
}
/* xt: {total, n, cat, grp, cur, seed}. Returns {lines,T,N,pool} or {err}. */
function autoGenerate(xt){
  const raw=String(xt.total==null?'':xt.total).replace(/[,\s]/g,'');
  if(raw==='')return{err:'Enter the total your client pays, GST included.'};
  if(!/^\d+$/.test(raw))return{err:'Use a whole number for the total, with no decimals.'};
  const T=parseInt(raw,10);
  if(!(T>=1))return{err:'The total must be at least 1.'};
  if(T>999999999999)return{err:'That total is too large. Try a smaller amount.'};
  /* the total includes GST: the lines add up to the subtotal S, and S + G = T exactly, in whole numbers */
  const rate=Math.max(0,Math.min(99,Math.round(parseFloat(xt.gst)||0)));
  const S=Math.max(1,T-(rate>0?Math.round(T*rate/(100+rate)):0)),G=T-S;
  const nRaw=String(xt.n==null?'':xt.n).trim();
  if(!/^\d+$/.test(nRaw)||+nRaw<1)return{err:'Enter how many products you want, from 1 to 30.'};
  let N=Math.min(30,+nRaw);
  const pool=poolFor(xt.cat,xt.grp),K=RATE_K[xt.cur]||1;
  let note='';
  if(N>pool.length){N=pool.length;note='This type has '+pool.length+' different products, so the invoice lists '+pool.length+'.'}
  if(S<N){N=S;note='This total only has room for '+S+' product'+(S===1?'':'s')+' at 1 each.'}
  const seed=(parseInt(xt.seed,10)||1)*7919+T%100003+N*31;
  const rng=mulberry(seed);
  const a=S/N;
  const picked=pool.map(it=>{
    const mid=Math.sqrt(it.lo*it.hi*Math.min(it.q,4))*K,d=Math.log(Math.max(a,1e-9)/Math.max(mid,1e-9));
    const w=Math.exp(-d*d/(2*.8*.8))+1e-4;
    return{it,key:Math.log(Math.max(rng(),1e-12))/w};
  }).sort((x,y)=>y.key-x.key).slice(0,N).map(x=>x.it);
  let lines=null;
  for(let t=0;t<12&&!lines;t++)lines=buildLines(picked,S,K,rng);
  if(!lines)lines=safeLines(picked,S,rng);
  return{lines,T,S,G,rate,N,note};
}
