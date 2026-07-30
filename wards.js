
const FOI={"h": {"homelessness": "Not published by multi-member ward in open tables. FOI: applications where last settled/application address in ward — last 3 years.", "temp_accommodation": "Not published by ward. FOI: households in temporary accommodation in ward (snapshot + prior years); % unsuitable (hotels/B&B/non-self-contained).", "ltr_temp": "Not published by ward. FOI: households in temp accommodation with LTR/refugee/asylum-related status awaiting settled housing.", "voids": "Not published by ward (council/RSL/private). FOI: void dwellings by tenure in ward.", "waiting_list": "Ward waiting list pressure — FOI."}, "a": {"nuisance": "Not published by ward. FOI: ASB complaints by type and location in ward.", "flytip": "Not published by ward. FOI: fly-tipping reports and clearance times in ward.", "graffiti": "Not published by ward. FOI: graffiti reports and clearance in ward."}, "c": {"violent": "Police Scotland publish some crime stats by data zone / intermediate zone. FOI to PS for ward-level violent crime last 3 years.", "sexual": "Not published by multi-member ward. FOI to Police Scotland.", "drugs": "FOI to Police Scotland for drug-related offences in ward."}, "e": {"litter": "Not published by ward. FOI: cleansing complaints and street cleanliness scores by ward.", "parks": "Partial. FOI: parks maintenance spend and complaints by ward."}};

const wards=[
{id:"linn",n:1,name:"Linn",simd:"High deprivation pockets",areas:"Castlemilk, Carmunnock, Cathcart",pop:"~27k",
notes:"Castlemilk has persistent high SIMD ranks. Housing stock mix of council, RSL and private.",
housing:"High demand for social housing; temporary accommodation pressure reported city-wide.",
crime:"Police Scotland data zone stats available; FOI for ward aggregation.",
environment:"Cleansing and fly-tipping complaints common in denser areas.",
action:"Priority: FOI for housing voids + temp accommodation by address in ward."},
{id:"newlands",n:2,name:"Newlands/Auldburn",simd:"Mixed",areas:"Newlands, Auldburn, Pollokshaws",pop:"~27k",
notes:"Mixed deprivation profile. Pollokshaws has higher need areas.",
housing:"Significant social housing; regeneration history.",
crime:"FOI recommended for local pattern.",
environment:"Parks and open space quality varies.",
action:"Map RSL stock vs council stock."},
{id:"greater-pollok",n:3,name:"Greater Pollok",simd:"High deprivation",areas:"Pollok, Nitshill, Househillwood",pop:"~30k",
notes:"One of the higher deprivation multi-member wards. Long-term regeneration area.",
housing:"High social housing density; waiting list pressure likely elevated.",
crime:"FOI to Police Scotland for violent and drug offences.",
environment:"Fly-tipping and cleansing issues reported.",
action:"Priority FOI: temp accommodation numbers and voids."},
{id:"cardonald",n:4,name:"Cardonald",simd:"Mixed-High",areas:"Cardonald, Hillington, Penilee",pop:"~29k",
notes:"Industrial and residential mix. Penilee has older stock.",
housing:"Mix of tenure; some high-need pockets.",
crime:"Standard FOI path.",
environment:"Industrial legacy areas need monitoring.",
action:"Check cleansing response times."},
{id:"govan",n:5,name:"Govan",simd:"High deprivation",areas:"Govan, Ibrox, Cessnock",pop:"~27k",
notes:"High profile regeneration (Waterfront). Still contains significant deprivation.",
housing:"Major social housing presence; regeneration displacing some demand.",
crime:"FOI recommended.",
environment:"Waterfront vs traditional Govan contrast.",
action:"Track IJB and social work spend impact."},
{id:"pollokshields",n:6,name:"Pollokshields",simd:"Mixed",areas:"Pollokshields, Strathbungo, Shawlands",pop:"~28k",
notes:"Diverse, high density. Significant private rented sector.",
housing:"PRS pressure; some overcrowding reports.",
crime:"FOI for local pattern.",
environment:"High street cleanliness issues in commercial areas.",
action:"PRS enforcement and HMO data."},
{id:"langside",n:7,name:"Langside",simd:"Lower-Mixed",areas:"Langside, Battlefield, Mount Florida",pop:"~28k",
notes:"Generally lower deprivation but pockets exist.",
housing:"High owner-occupation and PRS.",
crime:"Lower relative rates expected; still FOI for completeness.",
environment:"Parks (Queen's Park) are key assets.",
action:"Monitor park maintenance spend."},
{id:"southside-central",n:8,name:"Southside Central",simd:"High deprivation pockets",areas:"Gorbals, Laurieston, Hutchesontown",pop:"~27k",
notes:"Major regeneration (Gorbals). New build vs remaining need.",
housing:"Significant new social and mid-market housing; still high demand.",
crime:"FOI recommended.",
environment:"New public realm vs older stock contrast.",
action:"Track outcomes of regeneration spend."},
{id:"calton",n:9,name:"Calton",simd:"High deprivation",areas:"Calton, Bridgeton, Dalmarnock",pop:"~27k",
notes:"East End regeneration (Commonwealth Games legacy). Still high need.",
housing:"Large social housing; some new supply.",
crime:"FOI to Police Scotland.",
environment:"Legacy of industrial sites.",
action:"Priority: housing and employment outcomes."},
{id:"andoerston",n:10,name:"Anderston/City/Yorkhill",simd:"Mixed-High",areas:"Anderston, City Centre, Yorkhill",pop:"~30k",
notes:"City centre core + high density residential. Student and transient populations.",
housing:"High PRS and student housing; some social stock.",
crime:"City centre crime patterns; FOI for residential parts.",
environment:"High cleansing demand from commercial activity.",
action:"Separate residential vs commercial impact."},
{id:"hillhead",n:11,name:"Hillhead",simd:"Lower-Mixed",areas:"Hillhead, Woodlands, Kelvinbridge",pop:"~27k",
notes:"University area. High student population.",
housing:"Dominant PRS and student lets; HMO concentration.",
crime:"Student-related and general city crime.",
environment:"High street pressure on Byres Road etc.",
action:"HMO licensing and enforcement data."},
{id:"victoria-park",n:12,name:"Victoria Park",simd:"Lower",areas:"Victoria Park, Scotstoun, Whiteinch",pop:"~27k",
notes:"Generally more affluent west end.",
housing:"High owner-occupation.",
crime:"Lower relative rates.",
environment:"Parks and riverside assets.",
action:"Monitor any emerging pressure."},
{id:"garscadden",n:13,name:"Garscadden/Scotstounhill",simd:"Mixed",areas:"Garscadden, Scotstounhill, Yoker",pop:"~27k",
notes:"Mixed profile; Yoker has higher need.",
housing:"Mix of tenure.",
crime:"FOI for local pattern.",
environment:"Industrial riverside legacy.",
action:"Check cleansing and voids."},
{id:"drumchapel",n:14,name:"Drumchapel/Anniesland",simd:"High deprivation in Drumchapel",areas:"Drumchapel, Anniesland, Knightswood North",pop:"~29k",
notes:"Drumchapel remains one of the highest deprivation areas in the city.",
housing:"Large social housing estates; long-term regeneration need.",
crime:"FOI recommended for violent and drug offences.",
environment:"Estate management and fly-tipping issues.",
action:"Priority FOI: housing, temp accommodation, social work demand."},
{id:"maryhill",n:15,name:"Maryhill",simd:"High deprivation pockets",areas:"Maryhill, Summerston, Ruchill",pop:"~28k",
notes:"Significant deprivation in parts of Maryhill and Ruchill.",
housing:"High social housing; some new build.",
crime:"FOI recommended.",
environment:"Canal corridor regeneration ongoing.",
action:"Track canal-side outcomes vs residual need."},
{id:"canal",n:16,name:"Canal",simd:"High deprivation",areas:"Possilpark, Milton, Ruchill East",pop:"~27k",
notes:"Among the highest deprivation multi-member wards.",
housing:"Very high social housing density and demand.",
crime:"FOI to Police Scotland for full picture.",
environment:"Significant environmental management challenges.",
action:"Highest priority for housing, ASB and cleansing FOIs."},
{id:"springburn",n:17,name:"Springburn/Robroyston",simd:"High deprivation in Springburn",areas:"Springburn, Robroyston, Balornock",pop:"~29k",
notes:"Springburn has long-standing high deprivation; Robroyston more mixed.",
housing:"Large social housing; some newer estates.",
crime:"FOI recommended.",
environment:"Industrial legacy and estate management.",
action:"Separate Springburn vs Robroyston data where possible."},
{id:"east-centre",n:18,name:"East Centre",simd:"High deprivation",areas:"Parkhead, Shettleston, Tollcross",pop:"~28k",
notes:"East End core. High need across multiple domains.",
housing:"High social housing and demand.",
crime:"FOI recommended.",
environment:"Legacy industry and new development contrast.",
action:"Priority for multi-domain FOI package."},
{id:"shettleston",n:19,name:"Shettleston",simd:"High deprivation",areas:"Shettleston, Greenfield, Sandyhills",pop:"~27k",
notes:"Continues East End high-need profile.",
housing:"Significant social stock.",
crime:"FOI recommended.",
environment:"Standard estate and street issues.",
action:"Bundle with East Centre FOIs."},
{id:"baillieston",n:20,name:"Baillieston",simd:"Mixed-Lower",areas:"Baillieston, Garrowhill, Mount Vernon",pop:"~28k",
notes:"Generally lower deprivation than inner East End.",
housing:"Higher owner-occupation.",
crime:"Lower relative rates expected.",
environment:"Suburban profile.",
action:"Monitor for emerging pressure."},
{id:"north-east",n:21,name:"North East",simd:"High deprivation",areas:"Easterhouse, Provanmill, Ruchazie",pop:"~27k",
notes:"Easterhouse remains a major high-deprivation focus.",
housing:"Large social housing; long regeneration history.",
crime:"FOI recommended for full picture.",
environment:"Estate management critical.",
action:"Priority FOI set: housing, ASB, environment, social work."},
{id:"dennistoun",n:22,name:"Dennistoun",simd:"Mixed",areas:"Dennistoun, Haghill, Carntyne",pop:"~28k",
notes:"Improving profile in parts; still pockets of need.",
housing:"Mix of tenures; growing PRS.",
crime:"FOI for local pattern.",
environment:"Improving but variable.",
action:"Track change over time."},
{id:"partick-east",n:23,name:"Partick East/Kelvindale",simd:"Lower-Mixed",areas:"Partick, Kelvindale, Hyndland",pop:"~28k",
notes:"West End; generally lower deprivation.",
housing:"High owner-occupation and PRS.",
crime:"Lower relative rates.",
environment:"High amenity areas.",
action:"Baseline monitoring."}
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
{id:"ceo",name:"Chief Executive’s Office",budget2324:"£102.9m",actual2324:"£128.9m",actual2425:"£118.2m",note:"Includes corporate and democratic core."},
{id:"education",name:"Education Services",budget2324:"£730.3m",actual2324:"£820.1m",actual2425:"£869.2m",note:"Largest service. Includes schools and early years."},
{id:"financial",name:"Financial Services",budget2324:"£45.2m",actual2324:"£48.7m",actual2425:"£51.3m",note:"Revenues, benefits, corporate finance."},
{id:"nrs",name:"Neighbourhoods, Regeneration & Sustainability",budget2324:"£180.4m",actual2324:"£195.6m",actual2425:"£203.1m",note:"NRS formed from previous DRS + Neighbourhoods & Sustainability."},
{id:"social",name:"Social Work Services",budget2324:"£520.8m",actual2324:"£565.4m",actual2425:"£605.2m",note:"Adult and children social care; significant IJB overlap."},
{id:"related",name:"Related Companies",budget2324:"£110.0m",actual2324:"£115.3m",actual2425:"£119.4m",note:"Net cost of ALEOs and group entities."}
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
  grid.innerHTML=list.map(w=>`<div class="ward-tile" onclick="openWard('${w.id}')"><div class="wn">${w.name}</div><div class="wnum">Ward ${w.n}</div><div class="wsimd">${w.simd||''}</div></div>`).join('');
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
    <p class="meta">${w.areas||''} · Pop ${w.pop||''}</p>
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
  list.innerHTML=departments.map(d=>`<div class="dept-row"><div class="dname" onclick="openDept('${d.id}')">${d.name}</div><div>${d.budget2324}</div><div>${d.actual2324}</div><div>${d.actual2425}</div></div>`).join('');
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
  document.getElementById('detail-content').innerHTML=`
    <div class="card"><h3>${d.name}</h3>
    <div class="fin-grid">
      <div class="fin-box"><div class="flabel">Budget 23/24</div><div class="fval">${d.budget2324}</div></div>
      <div class="fin-box"><div class="flabel">Actual 23/24</div><div class="fval">${d.actual2324}</div></div>
      <div class="fin-box"><div class="flabel">Actual 24/25</div><div class="fval">${d.actual2425}</div></div>
    </div>
    <div class="sec"><h4>Notes</h4><p class="fact">${d.note||''}</p></div>
    <div class="sec"><h4>Source</h4><p class="gap">Budget = City Government Budget Motion 2023/24. Actual = CIES net expenditure from Annual Accounts.</p></div>
    </div>`;
}

function filterAll(){const q=document.getElementById('search').value;renderWards(q);renderEntities(q)}
renderWards();renderEntities();renderTrails();
if(typeof renderDepts==='function')renderDepts();
