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
const procurement=[
{name:"Civils and Infrastructure Core Works Framework",type:"Enabling Works",value:"£400m",status:"In procurement",route:"Authority Framework"},
{name:"Custom House / Carlton Place Quay Wall Development",type:"New Build",value:"£20m",status:"In procurement",route:"Authority Framework"},
{name:"ABS 2025/26 Work Package 1 – South Carntyne",type:"New Build",value:"£8.1m",status:"In procurement",route:"Scotland Excel Framework"},
{name:"Roads Maintenance Contract 2026/27",type:"Maintenance",value:"£5.0m",status:"In procurement",route:"Scotland Excel Framework"},
{name:"ABS 2025/26 Work Package 2 – North Pollok",type:"New Build",value:"£3.1m",status:"In procurement",route:"Scotland Excel Framework"},
{name:"Ground Investigation Framework",type:"Enabling Works",value:"£2.8m",status:"In procurement",route:"Authority Framework"},
{name:"Solar Panels Supply, Installation & Commissioning",type:"Retrofit",value:"£2.5m",status:"In procurement",route:"Authority Framework"},
{name:"Camlachie Burn Improvement Works – Phase 3",type:"Enabling Works",value:"£2.0m",status:"In procurement",route:"Authority Framework"},
{name:"Green Connectors Tree Planting & Habitat Creation",type:"Enabling Works",value:"£0.34m",status:"—",route:"—"}
];
const departments=[
{
  id:"ceo",
  name:"Chief Executive’s Office",
  note:"Corporate & democratic core, strategy, governance. Official CIES figures (Pre-Audit Accounts).",
  years:[
    {y:"2023/24",gross:"£179.5m",income:"£50.6m",net:"£128.9m",budget:"—"},
    {y:"2024/25",gross:"£158.6m",income:"£40.8m",net:"£117.8m",budget:"Not published"}
  ]
},
{
  id:"education",
  name:"Education Services",
  note:"Largest service. Schools, early years, additional support. Official CIES figures.",
  years:[
    {y:"2023/24",gross:"£846.3m",income:"£115.8m",net:"£730.5m",budget:"—"},
    {y:"2024/25",gross:"£923.6m",income:"£54.6m",net:"£869.0m",budget:"Not published"}
  ]
},
{
  id:"financial",
  name:"Financial Services",
  note:"Revenues, benefits, corporate finance, audit. High income (housing benefit subsidy etc).",
  years:[
    {y:"2023/24",gross:"£376.9m",income:"£270.0m",net:"£106.9m",budget:"—"},
    {y:"2024/25",gross:"£345.0m",income:"£259.6m",net:"£85.4m",budget:"Not published"}
  ]
},
{
  id:"nrs",
  name:"Neighbourhoods, Regeneration & Sustainability",
  note:"NRS – development, regeneration, sustainability, neighbourhood services. Official CIES.",
  years:[
    {y:"2023/24",gross:"£502.1m",income:"£237.4m",net:"£264.7m",budget:"—"},
    {y:"2024/25",gross:"£514.8m",income:"£243.1m",net:"£271.7m",budget:"Not published"}
  ]
},
{
  id:"social",
  name:"Social Work Services",
  note:"Adult and children social care. Significant overlap with Glasgow City IJB. Official CIES.",
  years:[
    {y:"2023/24",gross:"£1,395.9m",income:"£870.0m",net:"£525.9m",budget:"—"},
    {y:"2024/25",gross:"£1,526.0m",income:"£921.0m",net:"£605.0m",budget:"Not published"}
  ]
},
{
  id:"related",
  name:"Related Companies",
  note:"Net cost of ALEOs and group entities (Glasgow Life, City Building, etc.). See Entities and Money trails.",
  years:[
    {y:"2023/24",gross:"£136.0m",income:"£0.1m",net:"£135.9m",budget:"—"},
    {y:"2024/25",gross:"£118.7m",income:"—",net:"£118.7m",budget:"Not published"}
  ]
}
];
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
      <div>${yr.gross || '—'}</div>
      <div>${yr.income || '—'}</div>
      <div style="font-weight:600">${yr.net || '—'}</div>
    </div>`).join('');

  document.getElementById('detail-content').innerHTML=`
    <div class="card">
      <h3>${d.name}</h3>
      <p class="meta" style="margin-bottom:.8rem">${d.note || ''}</p>
      <div class="dept-row" style="font-weight:600;color:var(--muted);font-size:.78rem;border-bottom:1px solid var(--border);padding-bottom:.4rem;margin-bottom:.3rem">
        <div>Year</div><div>Gross</div><div>Income</div><div>Net</div>
      </div>
      ${rows}
      <div class="sec" style="margin-top:1.2rem">
        <h4>Notes</h4>
        <p class="fact">${d.note || ''}</p>
        <p class="gap" style="margin-top:.5rem">Figures from GCC Comprehensive Income & Expenditure Statement (Pre-Audit Accounts). Gross = total expenditure, Income = income attributed to the service, Net = net cost of services.</p>
      </div>
      <div class="sec">
        <h4>Sources & Reports</h4>
        <p class="fact" style="margin-bottom:.5rem">Official documents (open in new tab):</p>
        <p class="fact">• <a href="https://www.glasgow.gov.uk/media/24090/2024-25/pdf/01_GCC_Annual_Accounts_2024-25.pdf" target="_blank" rel="noopener" style="color:var(--accent)">2024/25 Annual Accounts</a></p>
        <p class="fact">• <a href="https://www.glasgow.gov.uk/media/24092/2024-25-Audit-Report/pdf/25_GCC_Annual_Audit_Report_2024-25_-_final.pdf" target="_blank" rel="noopener" style="color:var(--accent)">2024/25 Annual Audit Report</a></p>
        <p class="fact">• <a href="https://www.glasgow.gov.uk/media/19326/2023-24/pdf/01_GCC_Annual_Accounts_2023-24.pdf" target="_blank" rel="noopener" style="color:var(--accent)">2023/24 Annual Accounts</a></p>
        <p class="fact">• <a href="https://www.glasgow.gov.uk/media/19327/2023-24-Audit-Report/pdf/24_GCC_Annual_Audit_Report_-_FINAL.pdf" target="_blank" rel="noopener" style="color:var(--accent)">2023/24 Annual Audit Report</a></p>
        <p class="fact" style="margin-top:.6rem">• <a href="https://www.glasgow.gov.uk/article/1265/Annual-Accounts" target="_blank" rel="noopener" style="color:var(--accent)">All Annual Accounts & Audit Reports</a></p>
        <p class="fact">• <a href="https://audit.scot/publications/glasgow-city-council-annual-audit-202425" target="_blank" rel="noopener" style="color:var(--accent)">Audit Scotland – Glasgow</a></p>
      </div>
    </div>`;
}
}

function filterAll(){const q=document.getElementById('search').value;renderWards(q);renderEntities(q)}
renderWards();renderEntities();renderTrails();
if(typeof renderDepts==='function')renderDepts();
