const FOI={"h": {"homelessness": "Not published by multi-member ward in open tables. FOI: applications where last settled/application address in ward — last 3 years.", "temp_accommodation": "Not published by ward. FOI: households in temporary accommodation in ward (snapshot + prior years); % unsuitable (hotels/B&B/non-self-contained).", "ltr_temp": "Not published by ward. FOI: households in temp accommodation with LTR/refugee/asylum-related status awaiting settled housing.", "voids": "Not published by ward (council/RSL/private). FOI: void dwellings by tenure in ward.", "waiting_list": "Ward waiting list pressure — FOI."}, "a": {"nuisance": "Not published by ward. FOI: ASB complaints by type and location in ward.", "flytip": "Not published by ward. FOI: fly-tipping reports and clearance times in ward.", "graffiti": "Not published by ward. FOI: graffiti reports and clearance in ward."}, "c": {"violent": "Police Scotland publish some crime stats by data zone / intermediate zone. FOI to PS for ward-level violent crime last 3 years.", "sexual": "Not published by multi-member ward. FOI to Police Scotland.", "drugs": "FOI to Police Scotland for drug-related offences in ward."}, "e": {"litter": "Not published by ward. FOI: cleansing complaints and street cleanliness scores by ward.", "parks": "Partial. FOI: parks maintenance spend and complaints by ward."}};

const wards=[
{id:"linn",n:1,name:"Linn",simd:"High deprivation pockets",areas:"Castlemilk, Carmunnock, Cathcart",pop:"29,600",pop2022:"29,003",popChange:"+597 (+2.1%)",notes:"Castlemilk has persistent high SIMD ranks. Housing stock mix of council, RSL and private.",housing:"High demand for social housing; temporary accommodation pressure reported city-wide.",crime:"Police Scotland data zone stats available; FOI for ward aggregation.",environment:"Cleansing and fly-tipping complaints common in denser areas.",action:"Priority: FOI for housing voids + temp accommodation by address in ward."},
{id:"newlands",n:2,name:"Newlands/Auldburn",simd:"Mixed",areas:"Newlands, Auldburn, Pollokshaws",pop:"24,363",pop2022:"23,435",popChange:"+928 (+4.0%)",notes:"Mixed deprivation profile. Pollokshaws has higher need areas.",housing:"Significant social housing; regeneration history.",crime:"FOI recommended for local pattern.",environment:"Parks and open space quality varies.",action:"Map RSL stock vs council stock."},
{id:"greater-pollok",n:3,name:"Greater Pollok",simd:"High deprivation",areas:"Pollok, Nitshill, Househillwood",pop:"34,621",pop2022:"34,070",popChange:"+551 (+1.6%)",notes:"One of the higher deprivation multi-member wards. Long-term regeneration area.",housing:"High social housing density; waiting list pressure likely elevated.",crime:"FOI to Police Scotland for violent and drug offences.",environment:"Fly-tipping and cleansing issues reported.",action:"Priority FOI: temp accommodation numbers and voids."},
{id:"cardonald",n:4,name:"Cardonald",simd:"Mixed-High",areas:"Cardonald, Hillington, Penilee",pop:"28,882",pop2022:"28,483",popChange:"+399 (+1.4%)",notes:"Industrial and residential mix. Penilee has older stock.",housing:"Mix of tenure; some high-need pockets.",crime:"Standard FOI path.",environment:"Industrial legacy areas need monitoring.",action:"Check cleansing response times."},
{id:"govan",n:5,name:"Govan",simd:"High deprivation",areas:"Govan, Ibrox, Cessnock",pop:"29,596",pop2022:"27,596",popChange:"+2,000 (+7.2%)",notes:"High profile regeneration (Waterfront). Still contains significant deprivation.",housing:"Major social housing presence; regeneration displacing some demand.",crime:"FOI recommended.",environment:"Waterfront vs traditional Govan contrast.",action:"Track IJB and social work spend impact."},
{id:"pollokshields",n:6,name:"Pollokshields",simd:"Mixed",areas:"Pollokshields, Strathbungo, Shawlands",pop:"29,278",pop2022:"28,316",popChange:"+962 (+3.4%)",notes:"Diverse, high density. Significant private rented sector.",housing:"PRS pressure; some overcrowding reports.",crime:"FOI for local pattern.",environment:"High street cleanliness issues in commercial areas.",action:"PRS enforcement and HMO data."},
{id:"langside",n:7,name:"Langside",simd:"Lower-Mixed",areas:"Langside, Battlefield, Mount Florida",pop:"29,961",pop2022:"29,257",popChange:"+704 (+2.4%)",notes:"Generally lower deprivation but pockets exist.",housing:"High owner-occupation and PRS.",crime:"Lower relative rates expected; still FOI for completeness.",environment:"Parks (Queen's Park) are key assets.",action:"Monitor park maintenance spend."},
{id:"southside-central",n:8,name:"Southside Central",simd:"High deprivation pockets",areas:"Gorbals, Laurieston, Hutchesontown",pop:"29,403",pop2022:"27,790",popChange:"+1,613 (+5.8%)",notes:"Major regeneration (Gorbals). New build vs remaining need.",housing:"Significant new social and mid-market housing; still high demand.",crime:"FOI recommended.",environment:"New public realm vs older stock contrast.",action:"Track outcomes of regeneration spend."},
{id:"calton",n:9,name:"Calton",simd:"High deprivation",areas:"Calton, Bridgeton, Dalmarnock",pop:"33,236",pop2022:"30,081",popChange:"+3,155 (+10.5%)",notes:"East End regeneration (Commonwealth Games legacy). Still high need.",housing:"Large social housing; some new supply.",crime:"FOI to Police Scotland.",environment:"Legacy of industrial sites.",action:"Priority: housing and employment outcomes."},
{id:"andoerston",n:10,name:"Anderston/City/Yorkhill",simd:"Mixed-High",areas:"Anderston, City Centre, Yorkhill",pop:"41,664",pop2022:"35,637",popChange:"+6,027 (+16.9%)",notes:"City centre core + high density residential. Student and transient populations. Fastest growing ward.",housing:"High PRS and student housing; some social stock.",crime:"City centre crime patterns; FOI for residential parts.",environment:"High cleansing demand from commercial activity.",action:"Separate residential vs commercial impact."},
{id:"hillhead",n:11,name:"Hillhead",simd:"Lower-Mixed",areas:"Hillhead, Woodlands, Kelvinbridge",pop:"27,159",pop2022:"26,094",popChange:"+1,065 (+4.1%)",notes:"University area. High student population.",housing:"Dominant PRS and student lets; HMO concentration.",crime:"Student-related and general city crime.",environment:"High street pressure on Byres Road etc.",action:"HMO licensing and enforcement data."},
{id:"victoria-park",n:12,name:"Victoria Park",simd:"Lower",areas:"Victoria Park, Scotstoun, Whiteinch",pop:"21,110",pop2022:"20,381",popChange:"+729 (+3.6%)",notes:"Generally more affluent west end.",housing:"High owner-occupation.",crime:"Lower relative rates.",environment:"Parks and riverside assets.",action:"Monitor any emerging pressure."},
{id:"garscadden",n:13,name:"Garscadden/Scotstounhill",simd:"Mixed",areas:"Garscadden, Scotstounhill, Yoker",pop:"30,239",pop2022:"29,806",popChange:"+433 (+1.5%)",notes:"Mixed profile; Yoker has higher need.",housing:"Mix of tenure.",crime:"FOI for local pattern.",environment:"Industrial riverside legacy.",action:"Check cleansing and voids."},
{id:"drumchapel",n:14,name:"Drumchapel/Anniesland",simd:"High deprivation in Drumchapel",areas:"Drumchapel, Anniesland, Knightswood North",pop:"29,849",pop2022:"29,303",popChange:"+546 (+1.9%)",notes:"Drumchapel remains one of the highest deprivation areas in the city.",housing:"Large social housing estates; long-term regeneration need.",crime:"FOI recommended for violent and drug offences.",environment:"Estate management and fly-tipping issues.",action:"Priority FOI: housing, temp accommodation, social work demand."},
{id:"maryhill",n:15,name:"Maryhill",simd:"High deprivation pockets",areas:"Maryhill, Summerston, Ruchill",pop:"21,754",pop2022:"21,641",popChange:"+113 (+0.5%)",notes:"Significant deprivation in parts of Maryhill and Ruchill.",housing:"High social housing; some new build.",crime:"FOI recommended.",environment:"Canal corridor regeneration ongoing.",action:"Track canal-side outcomes vs residual need."},
{id:"canal",n:16,name:"Canal",simd:"High deprivation",areas:"Possilpark, Milton, Ruchill East",pop:"27,192",pop2022:"25,904",popChange:"+1,288 (+5.0%)",notes:"Among the highest deprivation multi-member wards.",housing:"Very high social housing density and demand.",crime:"FOI to Police Scotland for full picture.",environment:"Significant environmental management challenges.",action:"Highest priority for housing, ASB and cleansing FOIs."},
{id:"springburn",n:17,name:"Springburn/Robroyston",simd:"High deprivation in Springburn",areas:"Springburn, Robroyston, Balornock",pop:"28,353",pop2022:"27,260",popChange:"+1,093 (+4.0%)",notes:"Springburn has long-standing high deprivation; Robroyston more mixed.",housing:"Large social housing; some newer estates.",crime:"FOI recommended.",environment:"Industrial legacy and estate management.",action:"Separate Springburn vs Robroyston data where possible."},
{id:"east-centre",n:18,name:"East Centre",simd:"High deprivation",areas:"Parkhead, Shettleston, Tollcross",pop:"30,065",pop2022:"29,270",popChange:"+795 (+2.7%)",notes:"East End core. High need across multiple domains.",housing:"High social housing and demand.",crime:"FOI recommended.",environment:"Legacy industry and new development contrast.",action:"Priority for multi-domain FOI package."},
{id:"shettleston",n:19,name:"Shettleston",simd:"High deprivation",areas:"Shettleston, Greenfield, Sandyhills",pop:"25,228",pop2022:"24,647",popChange:"+581 (+2.4%)",notes:"Continues East End high-need profile.",housing:"Significant social stock.",crime:"FOI recommended.",environment:"Standard estate and street issues.",action:"Bundle with East Centre FOIs."},
{id:"baillieston",n:20,name:"Baillieston",simd:"Mixed-Lower",areas:"Baillieston, Garrowhill, Mount Vernon",pop:"22,902",pop2022:"22,514",popChange:"+388 (+1.7%)",notes:"Generally lower deprivation than inner East End.",housing:"Higher owner-occupation.",crime:"Lower relative rates expected.",environment:"Suburban profile.",action:"Monitor for emerging pressure."},
{id:"north-east",n:21,name:"North East",simd:"High deprivation",areas:"Easterhouse, Provanmill, Ruchazie",pop:"20,792",pop2022:"20,463",popChange:"+329 (+1.6%)",notes:"Easterhouse remains a major high-deprivation focus.",housing:"Large social housing; long regeneration history.",crime:"FOI recommended for full picture.",environment:"Estate management critical.",action:"Priority FOI set: housing, ASB, environment, social work."},
{id:"dennistoun",n:22,name:"Dennistoun",simd:"Mixed",areas:"Dennistoun, Haghill, Carntyne",pop:"20,694",pop2022:"19,790",popChange:"+904 (+4.6%)",notes:"Improving profile in parts; still pockets of need.",housing:"Mix of tenures; growing PRS.",crime:"FOI for local pattern.",environment:"Improving but variable.",action:"Track change over time."},
{id:"partick-east",n:23,name:"Partick East/Kelvindale",simd:"Lower-Mixed",areas:"Partick, Kelvindale, Hyndland",pop:"34,359",pop2022:"31,409",popChange:"+2,950 (+9.4%)",notes:"West End; generally lower deprivation. Strong growth.",housing:"High owner-occupation and PRS.",crime:"Lower relative rates.",environment:"High amenity areas.",action:"Baseline monitoring."}
];

const entities=[
{id:"glasgow-life",name:"Glasgow Life",type:"Charity / ALEO",reg:"SC313851",exp:"£98.7m",note:"Culture, sport, libraries, museums. Sole member controlled by GCC."},
{id:"city-building",name:"City Building (Glasgow) LLP",type:"Joint Venture",reg:"SO300990",exp:"£52.6m",note:"Repairs, construction, manufacturing. JV with GCC."},
{id:"city-building-contracts",name:"City Building (Contracts) LLP",type:"LLP",reg:"—",exp:"Included in group",note:"Contracts arm of City Building group."},
{id:"city-parking",name:"City Parking (Glasgow) LLP",type:"LLP",reg:"—",exp:"—",note:"Parking services."},
{id:"ijb",name:"Glasgow City IJB",type:"Integration Joint Board",reg:"Statutory",exp:"£574m",note:"Health & social care partnership with NHS Greater Glasgow & Clyde."},
{id:"city-property",name:"City Property Glasgow",type:"ALEO",reg:"—",exp:"—",note:"Property and commercial estate."},
{id:"jobs-business",name:"Jobs & Business Glasgow",type:"ALEO",reg:"—",exp:"—",note:"Economic development and employability."},
{id:"sec",name:"SEC Limited",type:"Company",reg:"—",exp:"—",note:"Scottish Event Campus."}
];

const trails=[
{from:"Glasgow City Council",to:"Glasgow Life",amount:"£98.7m",type:"Expenditure 2024/25"},
{from:"Glasgow City Council",to:"City Building (Glasgow) LLP",amount:"£52.6m",type:"Expenditure 2024/25"},
{from:"Glasgow City Council",to:"Glasgow City IJB",amount:"£574m",type:"Expenditure 2024/25"},
{from:"Glasgow City Council",to:"City Parking / other ALEOs",amount:"Various",type:"Note 16 related parties"}
];

const departments=[
{
  id:"ceo",
  name:"Chief Executive’s Office",
  note:"Corporate & democratic core, strategy, governance. Figures are Net Cost of Services unless stated.",
  years:[
    {y:"2021/22",gross:"—",income:"—",net:"£95.4m",budget:"—"},
    {y:"2022/23",gross:"—",income:"—",net:"£108.2m",budget:"—"},
    {y:"2023/24",gross:"—",income:"—",net:"£128.9m",budget:"£102.9m"},
    {y:"2024/25",gross:"—",income:"—",net:"£118.2m",budget:"Not published"}
  ]
},
{
  id:"education",
  name:"Education Services",
  note:"Largest service. Schools, early years, additional support. Significant variance vs Budget in recent years.",
  years:[
    {y:"2021/22",gross:"—",income:"—",net:"£712.6m",budget:"—"},
    {y:"2022/23",gross:"—",income:"—",net:"£768.4m",budget:"—"},
    {y:"2023/24",gross:"—",income:"—",net:"£820.1m",budget:"£730.3m"},
    {y:"2024/25",gross:"—",income:"—",net:"£869.2m",budget:"Not published"}
  ]
},
{
  id:"financial",
  name:"Financial Services",
  note:"Revenues, benefits, corporate finance, audit. Relatively stable.",
  years:[
    {y:"2021/22",gross:"—",income:"—",net:"£42.1m",budget:"—"},
    {y:"2022/23",gross:"—",income:"—",net:"£46.8m",budget:"—"},
    {y:"2023/24",gross:"—",income:"—",net:"£48.7m",budget:"£45.2m"},
    {y:"2024/25",gross:"—",income:"—",net:"£51.3m",budget:"Not published"}
  ]
},
{
  id:"nrs",
  name:"Neighbourhoods, Regeneration & Sustainability",
  note:"NRS formed from previous Development & Regeneration Services + Neighbourhoods & Sustainability. Structure change affects comparability pre-2021.",
  years:[
    {y:"2021/22",gross:"—",income:"—",net:"£165.3m",budget:"—"},
    {y:"2022/23",gross:"—",income:"—",net:"£178.9m",budget:"—"},
    {y:"2023/24",gross:"—",income:"—",net:"£195.6m",budget:"£180.4m"},
    {y:"2024/25",gross:"—",income:"—",net:"£203.1m",budget:"Not published"}
  ]
},
{
  id:"social",
  name:"Social Work Services",
  note:"Adult and children social care. Significant overlap with Glasgow City IJB. Demand-led pressures visible in rising net.",
  years:[
    {y:"2021/22",gross:"—",income:"—",net:"£498.7m",budget:"—"},
    {y:"2022/23",gross:"—",income:"—",net:"£532.1m",budget:"—"},
    {y:"2023/24",gross:"—",income:"—",net:"£565.4m",budget:"£520.8m"},
    {y:"2024/25",gross:"—",income:"—",net:"£605.2m",budget:"Not published"}
  ]
},
{
  id:"related",
  name:"Related Companies",
  note:"Net cost of ALEOs and group entities (Glasgow Life, City Building, etc.). See Entities and Money trails for detail.",
  years:[
    {y:"2021/22",gross:"—",income:"—",net:"£98.4m",budget:"—"},
    {y:"2022/23",gross:"—",income:"—",net:"£107.6m",budget:"—"},
    {y:"2023/24",gross:"—",income:"—",net:"£115.3m",budget:"£110.0m"},
    {y:"2024/25",gross:"—",income:"—",net:"£119.4m",budget:"Not published"}
  ]
}
];

function showPanel(id){
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  const panel=document.getElementById(id);
  if(panel)panel.classList.add('active');
  const tabs=document.querySelectorAll('.tab');
  tabs.forEach(t=>{if(t.getAttribute('onclick')&&t.getAttribute('onclick').includes(id))t.classList.add('active');});
  document.getElementById('detail-view').classList.remove('active');
  document.getElementById('detail-view').style.display='none';
  document.getElementById('main-tabs').style.display='flex';
  document.getElementById('main-search').style.display='block';
}

function goHome(){showPanel('overview');}

function renderWards(q){
  const grid=document.getElementById('ward-grid');
  if(!grid)return;
  const term=(q||'').toLowerCase();
  const list=wards.filter(w=>!term||w.name.toLowerCase().includes(term)||(w.areas&&w.areas.toLowerCase().includes(term)));
  grid.innerHTML=list.map(w=>`<div class="ward-tile" onclick="openWard('${w.id}')"><div class="wn">${w.name}</div><div class="wnum">Ward ${w.n} · Pop ${w.pop}</div><div class="wsimd">${w.simd||''}</div></div>`).join('');
}

function openWard(id){
  const w=wards.find(x=>x.id===id);
  if(!w)return;
  document.getElementById('main-tabs').style.display='none';
  document.getElementById('main-search').style.display='none';
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
  const dv=document.getElementById('detail-view');
  dv.style.display='block';
  dv.classList.add('active');
  document.getElementById('back-btn').onclick=()=>showPanel('community');
  document.getElementById('detail-content').innerHTML=`
    <div class="card"><h3>${w.name} <span class="meta">Ward ${w.n}</span></h3>
    <p class="meta">${w.areas||''}</p>
    <div class="fin-grid" style="margin:0.8rem 0">
      <div class="fin-box"><div class="flabel">Population 2024</div><div class="fval">${w.pop}</div></div>
      <div class="fin-box"><div class="flabel">2022</div><div class="fval" style="font-size:0.95rem">${w.pop2022||'—'}</div></div>
      <div class="fin-box"><div class="flabel">Change 22→24</div><div class="fval" style="font-size:0.9rem;color:var(--green)">${w.popChange||'—'}</div></div>
    </div>
    <p class="gap" style="margin-bottom:0.8rem">Source: National Records of Scotland, mid-year estimates (2011 Data Zones best-fit to Electoral Wards).</p>
    <div class="sec"><h4>SIMD / Need</h4><p class="fact">${w.simd||''}</p><p class="fact">${w.notes||''}</p></div>
    <div class="sec"><h4>Housing</h4><p class="fact">${w.housing||''}</p><p class="gap">${FOI.h.homelessness}</p></div>
    <div class="sec"><h4>Crime & Safety</h4><p class="fact">${w.crime||''}</p><p class="gap">${FOI.c.violent}</p></div>
    <div class="sec"><h4>Environment</h4><p class="fact">${w.environment||''}</p><p class="gap">${FOI.e.litter}</p></div>
    <div class="sec"><h4>Action / FOI priority</h4><p class="fact">${w.action||''}</p></div>
    </div>`;
}

function renderEntities(q){
  const list=document.getElementById('entities-list');
  if(!list)return;
  const term=(q||'').toLowerCase();
  const filtered=entities.filter(e=>!term||e.name.toLowerCase().includes(term));
  list.innerHTML=filtered.map(e=>`<div class="card clickable" onclick="openEntity('${e.id}')"><h3>${e.name}</h3><p class="meta">${e.type} · ${e.reg||''}</p><p class="fact">GCC related spend: <strong>${e.exp||'—'}</strong></p><p class="gap">${e.note||''}</p></div>`).join('');
}

function openEntity(id){
  const e=entities.find(x=>x.id===id);
  if(!e)return;
  document.getElementById('main-tabs').style.display='none';
  document.getElementById('main-search').style.display='none';
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
  const dv=document.getElementById('detail-view');
  dv.style.display='block';
  dv.classList.add('active');
  document.getElementById('back-btn').onclick=()=>{showPanel('funds');fundView('all');};
  document.getElementById('detail-content').innerHTML=`
    <div class="card"><h3>${e.name}</h3>
    <p class="meta">${e.type} · ${e.reg||'—'}</p>
    <div class="sec"><h4>GCC related expenditure</h4><p class="fact" style="font-size:1.2rem;color:var(--amber)">${e.exp||'—'}</p></div>
    <div class="sec"><h4>Notes</h4><p class="fact">${e.note||''}</p></div>
    <div class="sec"><h4>Source</h4><p class="gap">GCC Annual Accounts Note 16 Related Party Transactions + Companies House.</p></div>
    </div>`;
}

function renderTrails(){
  const list=document.getElementById('trails-list');
  if(!list)return;
  list.innerHTML=trails.map(t=>`<div class="money-row"><div class="from">${t.from}</div><div class="to">${t.to}</div><div class="amt">${t.amount}</div><div class="type">${t.type}</div></div>`).join('');
}

function renderDepts(){
  const list=document.getElementById('depts-list');
  if(!list)return;
  list.innerHTML=departments.map(d=>{
    const latest = d.years[d.years.length-1];
    const prev = d.years[d.years.length-2];
    return `<div class="dept-row"><div class="dname" onclick="openDept('${d.id}')">${d.name}</div><div>${prev && prev.budget !== '—' && prev.budget !== 'Not published' ? prev.budget : '—'}</div><div>${prev ? prev.net : '—'}</div><div>${latest ? latest.net : '—'}</div></div>`;
  }).join('');
}

function openDept(id){
  const d=departments.find(x=>x.id===id);
  if(!d)return;
  document.getElementById('main-tabs').style.display='none';
  document.getElementById('main-search').style.display='none';
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
  const dv=document.getElementById('detail-view');
  dv.style.display='block';
  dv.classList.add('active');
  document.getElementById('back-btn').onclick=()=>{showPanel('funds');fundView('depts');};

  let rows = d.years.map(yr => `
    <div class="dept-row" style="font-size:.82rem">
      <div style="color:var(--muted)">${yr.y}</div>
      <div>${yr.budget || '—'}</div>
      <div>${yr.net || '—'}</div>
      <div style="color:var(--muted);font-size:.75rem">${yr.gross !== '—' ? 'G: '+yr.gross : ''}</div>
    </div>`).join('');

  document.getElementById('detail-content').innerHTML=`
    <div class="card">
      <h3>${d.name}</h3>
      <p class="meta" style="margin-bottom:.8rem">${d.note || ''}</p>
      <div class="dept-row" style="font-weight:600;color:var(--muted);font-size:.78rem;border-bottom:1px solid var(--border);padding-bottom:.4rem;margin-bottom:.3rem">
        <div>Year</div><div>Budget</div><div>Net Actual</div><div></div>
      </div>
      ${rows}
      <div class="sec" style="margin-top:1.2rem">
        <h4>Notes</h4>
        <p class="fact">${d.note || ''}</p>
        <p class="gap" style="margin-top:.5rem">Budget = City Government Budget Motion (where published). Net Actual = CIES net expenditure. No published Revenue Estimates for 2024/25 or 2025/26.</p>
      </div>
      <div class="sec">
        <h4>Source</h4>
        <p class="gap">GCC Annual Accounts (CIES) and Budget Motions. OpenScotland research extract.</p>
      </div>
    </div>`;
}

function filterAll(){const q=document.getElementById('search').value;renderWards(q);renderEntities(q)}
renderWards();renderEntities();renderTrails();
if(typeof renderDepts==='function')renderDepts();
