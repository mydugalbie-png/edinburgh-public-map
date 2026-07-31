const FOI={"h": {"homelessness": "Not published by multi-member ward in open tables. FOI: applications where last settled/application address in ward - last 3 years.", "temp_accommodation": "Not published by ward. FOI: households in temporary accommodation in ward (snapshot + prior years); % unsuitable (hotels/B&B/non-self-contained).", "ltr_temp": "Not published by ward. FOI: households in temp accommodation with LTR/refugee/asylum-related status awaiting settled housing.", "voids": "Not published by ward (council/RSL/private). FOI: void dwellings by tenure in ward.", "waiting_list": "Ward waiting list pressure - FOI."}, "a": {"nuisance": "Not published by ward. FOI: ASB complaints by type and location in ward.", "flytip": "Not published by ward. FOI: fly-tipping reports and clearance times in ward.", "graffiti": "Not published by ward. FOI: graffiti reports and clearance in ward."}, "c": {"violent": "Police Scotland publish some crime stats by data zone / intermediate zone. FOI to PS for ward-level violent crime last 3 years.", "sexual": "Not published by multi-member ward. FOI to Police Scotland.", "drugs": "FOI to Police Scotland for drug-related offences in ward."}, "e": {"litter": "Not published by ward. FOI: cleansing complaints and street cleanliness scores by ward.", "parks": "Partial. FOI: parks maintenance spend and complaints by ward."}};

const wards=[
{id:"linn",n:1,name:"Linn",simd:"High deprivation pockets",areas:"Castlemilk, Carmunnock, Cathcart",pop:"29,600",pop2022:"29,003",popChange:"+597 (+2.1%)",affEst:"96",affEff:"8",notes:"Castlemilk has persistent high SIMD ranks. Housing stock mix of council, RSL and private.",housing:"High demand for social housing; temporary accommodation pressure reported city-wide.",crime:"Police Scotland data zone stats available; FOI for ward aggregation.",environment:"Cleansing and fly-tipping complaints common in denser areas.",action:"Priority: FOI for housing voids + temp accommodation by address in ward."},
{id:"newlands",n:2,name:"Newlands/Auldburn",simd:"Mixed",areas:"Newlands, Auldburn, Pollokshaws",pop:"24,363",pop2022:"23,435",popChange:"+928 (+4.0%)",affEst:"161",affEff:"131",notes:"Mixed deprivation profile. Pollokshaws has higher need areas.",housing:"Significant social housing; regeneration history.",crime:"FOI recommended for local pattern.",environment:"Parks and open space quality varies.",action:"Map RSL stock vs council stock."},
{id:"greater-pollok",n:3,name:"Greater Pollok",simd:"High deprivation",areas:"Pollok, Nitshill, Househillwood",pop:"34,621",pop2022:"34,070",popChange:"+551 (+1.6%)",affEst:"74",affEff:"74",notes:"One of the higher deprivation multi-member wards. Long-term regeneration area.",housing:"High social housing density; waiting list pressure likely elevated.",crime:"FOI to Police Scotland for violent and drug offences.",environment:"Fly-tipping and cleansing issues reported.",action:"Priority FOI: temp accommodation numbers and voids."},
{id:"cardonald",n:4,name:"Cardonald",simd:"Mixed-High",areas:"Cardonald, Hillington, Penilee",pop:"28,882",pop2022:"28,483",popChange:"+399 (+1.4%)",affEst:"30",affEff:"30",notes:"Industrial and residential mix. Penilee has older stock.",housing:"Mix of tenure; some high-need pockets.",crime:"Standard FOI path.",environment:"Industrial legacy areas need monitoring.",action:"Check cleansing response times."},
{id:"govan",n:5,name:"Govan",simd:"High deprivation",areas:"Govan, Ibrox, Cessnock",pop:"29,596",pop2022:"27,596",popChange:"+2,000 (+7.2%)",affEst:"852",affEff:"649",notes:"High profile regeneration (Waterfront). Still contains significant deprivation.",housing:"Major social housing presence; regeneration displacing some demand.",crime:"FOI recommended.",environment:"Waterfront vs traditional Govan contrast.",action:"Track IJB and social work spend impact."},
{id:"pollokshields",n:6,name:"Pollokshields",simd:"Mixed",areas:"Pollokshields, Strathbungo, Shawlands",pop:"29,278",pop2022:"28,316",popChange:"+962 (+3.4%)",affEst:"267",affEff:"267",notes:"Diverse, high density. Significant private rented sector.",housing:"PRS pressure; some overcrowding reports.",crime:"FOI for local pattern.",environment:"High street cleanliness issues in commercial areas.",action:"PRS enforcement and HMO data."},
{id:"langside",n:7,name:"Langside",simd:"Lower-Mixed",areas:"Langside, Battlefield, Mount Florida",pop:"29,961",pop2022:"29,257",popChange:"+704 (+2.4%)",affEst:"223",affEff:"223",notes:"Generally lower deprivation but pockets exist.",housing:"High owner-occupation and PRS.",crime:"Lower relative rates expected; still FOI for completeness.",environment:"Parks (Queen's Park) are key assets.",action:"Monitor park maintenance spend."},
{id:"southside-central",n:8,name:"Southside Central",simd:"High deprivation pockets",areas:"Gorbals, Laurieston, Hutchesontown",pop:"29,403",pop2022:"27,790",popChange:"+1,613 (+5.8%)",affEst:"498",affEff:"370",notes:"Major regeneration (Gorbals). New build vs remaining need.",housing:"Significant new social and mid-market housing; still high demand.",crime:"FOI recommended.",environment:"New public realm vs older stock contrast.",action:"Track outcomes of regeneration spend."},
{id:"calton",n:9,name:"Calton",simd:"High deprivation",areas:"Calton, Bridgeton, Dalmarnock",pop:"33,236",pop2022:"30,081",popChange:"+3,155 (+10.5%)",affEst:"2,086",affEff:"1,347",notes:"East End regeneration (Commonwealth Games legacy). Still high need.",housing:"Large social housing; some new supply.",crime:"FOI to Police Scotland.",environment:"Legacy of industrial sites.",action:"Priority: housing and employment outcomes."},
{id:"andoerston",n:10,name:"Anderston/City/Yorkhill",simd:"Mixed-High",areas:"Anderston, City Centre, Yorkhill",pop:"41,664",pop2022:"35,637",popChange:"+6,027 (+16.9%)",affEst:"96",affEff:"96",notes:"City centre core + high density residential. Student and transient populations. Fastest growing ward.",housing:"High PRS and student housing; some social stock.",crime:"City centre crime patterns; FOI for residential parts.",environment:"High cleansing demand from commercial activity.",action:"Separate residential vs commercial impact."},
{id:"hillhead",n:11,name:"Hillhead",simd:"Lower-Mixed",areas:"Hillhead, Woodlands, Kelvinbridge",pop:"27,159",pop2022:"26,094",popChange:"+1,065 (+4.1%)",affEst:"56",affEff:"56",notes:"University area. High student population.",housing:"Dominant PRS and student lets; HMO concentration.",crime:"Student-related and general city crime.",environment:"High street pressure on Byres Road etc.",action:"HMO licensing and enforcement data."},
{id:"victoria-park",n:12,name:"Victoria Park",simd:"Lower",areas:"Victoria Park, Scotstoun, Whiteinch",pop:"21,110",pop2022:"20,381",popChange:"+729 (+3.6%)",affEst:"4",affEff:"0",notes:"Generally more affluent west end.",housing:"High owner-occupation.",crime:"Lower relative rates.",environment:"Parks and riverside assets.",action:"Monitor any emerging pressure."},
{id:"garscadden",n:13,name:"Garscadden/Scotstounhill",simd:"Mixed",areas:"Garscadden, Scotstounhill, Yoker",pop:"30,239",pop2022:"29,806",popChange:"+433 (+1.5%)",affEst:"114",affEff:"61",notes:"Mixed profile; Yoker has higher need.",housing:"Mix of tenure.",crime:"FOI for local pattern.",environment:"Industrial riverside legacy.",action:"Check cleansing and voids."},
{id:"drumchapel",n:14,name:"Drumchapel/Anniesland",simd:"High deprivation in Drumchapel",areas:"Drumchapel, Anniesland, Knightswood North",pop:"29,849",pop2022:"29,303",popChange:"+546 (+1.9%)",affEst:"193",affEff:"113",notes:"Drumchapel remains one of the highest deprivation areas in the city.",housing:"Large social housing estates; long-term regeneration need.",crime:"FOI recommended for violent and drug offences.",environment:"Estate management and fly-tipping issues.",action:"Priority FOI: housing, temp accommodation, social work demand."},
{id:"maryhill",n:15,name:"Maryhill",simd:"High deprivation pockets",areas:"Maryhill, Summerston, Ruchill",pop:"21,754",pop2022:"21,641",popChange:"+113 (+0.5%)",affEst:"346",affEff:"346",notes:"Significant deprivation in parts of Maryhill and Ruchill.",housing:"High social housing; some new build.",crime:"FOI recommended.",environment:"Canal corridor regeneration ongoing.",action:"Track canal-side outcomes vs residual need."},
{id:"canal",n:16,name:"Canal",simd:"High deprivation",areas:"Possilpark, Milton, Ruchill East",pop:"27,192",pop2022:"25,904",popChange:"+1,288 (+5.0%)",affEst:"955",affEff:"742",notes:"Among the highest deprivation multi-member wards.",housing:"Very high social housing density and demand.",crime:"FOI to Police Scotland for full picture.",environment:"Significant environmental management challenges.",action:"Highest priority for housing, ASB and cleansing FOIs."},
{id:"springburn",n:17,name:"Springburn/Robroyston",simd:"High deprivation in Springburn",areas:"Springburn, Robroyston, Balornock",pop:"28,353",pop2022:"27,260",popChange:"+1,093 (+4.0%)",affEst:"428",affEff:"138",notes:"Springburn has long-standing high deprivation; Robroyston more mixed.",housing:"Large social housing; some newer estates.",crime:"FOI recommended.",environment:"Industrial legacy and estate management.",action:"Separate Springburn vs Robroyston data where possible."},
{id:"east-centre",n:18,name:"East Centre",simd:"High deprivation",areas:"Parkhead, Shettleston, Tollcross",pop:"30,065",pop2022:"29,270",popChange:"+795 (+2.7%)",affEst:"337",affEff:"262",notes:"East End core. High need across multiple domains.",housing:"High social housing and demand.",crime:"FOI recommended.",environment:"Legacy industry and new development contrast.",action:"Priority for multi-domain FOI package."},
{id:"shettleston",n:19,name:"Shettleston",simd:"High deprivation",areas:"Shettleston, Greenfield, Sandyhills",pop:"25,228",pop2022:"24,647",popChange:"+581 (+2.4%)",affEst:"79",affEff:"67",notes:"Continues East End high-need profile.",housing:"Significant social stock.",crime:"FOI recommended.",environment:"Standard estate and street issues.",action:"Bundle with East Centre FOIs."},
{id:"baillieston",n:20,name:"Baillieston",simd:"Mixed-Lower",areas:"Baillieston, Garrowhill, Mount Vernon",pop:"22,902",pop2022:"22,514",popChange:"+388 (+1.7%)",affEst:"154",affEff:"154",notes:"Generally lower deprivation than inner East End.",housing:"Higher owner-occupation.",crime:"Lower relative rates expected.",environment:"Suburban profile.",action:"Monitor for emerging pressure."},
{id:"north-east",n:21,name:"North East",simd:"High deprivation",areas:"Easterhouse, Provanmill, Ruchazie",pop:"20,792",pop2022:"20,463",popChange:"+329 (+1.6%)",affEst:"329",affEff:"144",notes:"Easterhouse remains a major high-deprivation focus.",housing:"Large social housing; long regeneration history.",crime:"FOI recommended for full picture.",environment:"Estate management critical.",action:"Priority FOI set: housing, ASB, environment, social work."},
{id:"dennistoun",n:22,name:"Dennistoun",simd:"Mixed",areas:"Dennistoun, Haghill, Carntyne",pop:"20,694",pop2022:"19,790",popChange:"+904 (+4.6%)",affEst:"369",affEff:"369",notes:"Improving profile in parts; still pockets of need.",housing:"Mix of tenures; growing PRS.",crime:"FOI for local pattern.",environment:"Improving but variable.",action:"Track change over time."},
{id:"partick-east",n:23,name:"Partick East/Kelvindale",simd:"Lower-Mixed",areas:"Partick, Kelvindale, Hyndland",pop:"34,359",pop2022:"31,409",popChange:"+2,950 (+9.4%)",affEst:"0",affEff:"0",notes:"West End; generally lower deprivation. Strong growth.",housing:"High owner-occupation and PRS.",crime:"Lower relative rates.",environment:"High amenity areas.",action:"Baseline monitoring."}
];

const entities=[
{id:"glasgow-life",name:"Glasgow Life",type:"Charity / ALEO",reg:"SC313851 / SC037844",exp:"£98.7m",note:"Culture, sport, libraries, museums (trading as Glasgow Life). Sole member controlled by GCC. Service contract with GCC ~£77m in 2021/22. Group accounts filed at Companies House for years ended 31 March 2020–2025.",companiesHouseUrl:"https://find-and-update.company-information.service.gov.uk/company/SC313851",turnover:[{y:"2020/21",t:"£107.1m income"},{y:"2021/22",t:"£102.7m income"}]},
{id:"city-building",name:"City Building (Glasgow) LLP",type:"Joint Venture",reg:"SO300990",exp:"£52.6m",note:"Repairs, construction, manufacturing. JV with GCC. Accounts filed at Companies House for 2020–2025 (2022–23 delayed by whistleblowing investigations; group audits qualified). Turnover recovered post-COVID then stabilised ~£153–162m.",companiesHouseUrl:"https://find-and-update.company-information.service.gov.uk/company/SO300990",turnover:[{y:"2019/20",t:"£142.6m"},{y:"2020/21",t:"£98.4m"},{y:"2021/22",t:"£161.9m"},{y:"2022/23",t:"£162.2m"},{y:"2023/24",t:"£154.2m"},{y:"2024/25",t:"£153.3m"}]},
{id:"city-building-contracts",name:"City Building (Contracts) LLP",type:"LLP",reg:"SO301080",exp:"Turnover series",note:"Contracts arm of City Building group. Construction, repairs and maintenance including RSL work. Registered office: 350 Darnick Street, Glasgow G21 4BA. Accounts filed 2020–2025.",accountsUrl:"https://citizen.glascc1-prd.gosshosted.com/1252",companiesHouseUrl:"https://find-and-update.company-information.service.gov.uk/company/SO301080",turnover:[{y:"2016/17",t:"£74.9m"},{y:"2017/18",t:"£86.2m"},{y:"2018/19",t:"£87.9m"},{y:"2019/20",t:"£65.2m"},{y:"2020/21",t:"£45.8m"},{y:"2021/22",t:"£80.7m"},{y:"2022/23",t:"£64.3m"},{y:"2023/24",t:"£44.6m"},{y:"2024/25",t:"£46.0m"}]},
{id:"city-parking",name:"City Parking (Glasgow) LLP",type:"LLP",reg:"SO301266",exp:"-",note:"Parking services. COVID impact clear in 2020/21 turnover drop.",companiesHouseUrl:"https://find-and-update.company-information.service.gov.uk/company/SO301266",turnover:[{y:"2019/20",t:"£16.1m"},{y:"2020/21",t:"£6.4m"}]},
{id:"ijb",name:"Glasgow City IJB",type:"Integration Joint Board",reg:"Statutory",exp:"£574m",note:"Health & social care partnership with NHS Greater Glasgow & Clyde."},
{id:"city-property",name:"City Property (Glasgow) LLP",type:"ALEO",reg:"SO302223",exp:"-",note:"Property and commercial estate management. Related: Investments LLP (SO302466), Operations SL Ltd (SC635243), SL1/SL2 LLPs.",companiesHouseUrl:"https://find-and-update.company-information.service.gov.uk/company/SO302223",turnover:[{y:"2019/20",t:"£2.6m"},{y:"2020/21",t:"£2.4m"}]},
{id:"jobs-business",name:"Jobs & Business Glasgow",type:"Charity / ALEO",reg:"SC108565 / SC023930",exp:"-",note:"Economic development and employability. Company limited by guarantee + registered charity.",companiesHouseUrl:"https://find-and-update.company-information.service.gov.uk/company/SC108565",turnover:[{y:"2020/21",t:"£9.4m income"},{y:"2021/22",t:"£9.4m income"}]},
{id:"sec",name:"Scottish Event Campus Limited",type:"Company",reg:"SC082081",exp:"-",note:"Scottish Event Campus (SEC). Accounts 2021/22 uploaded; turnover extraction pending (large/image-heavy PDF).",companiesHouseUrl:"https://find-and-update.company-information.service.gov.uk/company/SC082081"}
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
{name:"ABS 2025/26 Work Package 1 - South Carntyne",type:"New Build",value:"£8.1m",status:"In procurement",route:"Scotland Excel Framework"},
{name:"Roads Maintenance Contract 2026/27",type:"Maintenance",value:"£5.0m",status:"In procurement",route:"Scotland Excel Framework"},
{name:"ABS 2025/26 Work Package 2 - North Pollok",type:"New Build",value:"£3.1m",status:"In procurement",route:"Scotland Excel Framework"},
{name:"Ground Investigation Framework",type:"Enabling Works",value:"£2.8m",status:"In procurement",route:"Authority Framework"},
{name:"Solar Panels Supply, Installation & Commissioning",type:"Retrofit",value:"£2.5m",status:"In procurement",route:"Authority Framework"},
{name:"Camlachie Burn Improvement Works - Phase 3",type:"Enabling Works",value:"£2.0m",status:"In procurement",route:"Authority Framework"},
{name:"Green Connectors Tree Planting & Habitat Creation",type:"Enabling Works",value:"£0.34m",status:"-",route:"-"}
];
const departments=[
{
  id:"ceo",
  name:"Chief Executive's Office",
  note:"Corporate & democratic core, strategy, governance. CIES actuals + approved Budget 2025/26.",
  budget2526:"£124.5m",
  years:[
    {y:"2023/24",gross:"£179.5m",income:"£50.6m",net:"£128.9m"},
    {y:"2024/25",gross:"£158.6m",income:"£40.8m",net:"£117.8m"},
    {y:"2025/26",gross:"£170.3m",income:"£40.3m",net:"£130.0m"}
  ]
},
{
  id:"education",
  name:"Education Services",
  note:"Largest service. Schools, early years, additional support.",
  budget2526:"£823.4m",
  years:[
    {y:"2023/24",gross:"£846.3m",income:"£115.8m",net:"£730.5m"},
    {y:"2024/25",gross:"£923.6m",income:"£54.6m",net:"£869.0m"},
    {y:"2025/26",gross:"£963.6m",income:"£52.3m",net:"£911.3m"}
  ]
},
{
  id:"financial",
  name:"Financial Services",
  note:"Revenues, benefits, corporate finance, audit. High income (housing benefit subsidy etc).",
  budget2526:"£157.6m",
  years:[
    {y:"2023/24",gross:"£376.9m",income:"£270.0m",net:"£106.9m"},
    {y:"2024/25",gross:"£345.0m",income:"£259.6m",net:"£85.4m"},
    {y:"2025/26",gross:"£306.9m",income:"£212.4m",net:"£94.5m"}
  ]
},
{
  id:"nrs",
  name:"Neighbourhoods, Regeneration & Sustainability",
  note:"NRS - development, regeneration, sustainability, neighbourhood services.",
  budget2526:"£219.3m",
  years:[
    {y:"2023/24",gross:"£502.1m",income:"£237.4m",net:"£264.7m"},
    {y:"2024/25",gross:"£514.8m",income:"£243.1m",net:"£271.7m"},
    {y:"2025/26",gross:"£511.5m",income:"£283.3m",net:"£228.2m"}
  ]
},
{
  id:"social",
  name:"Social Work Services",
  note:"Adult and children social care. Significant overlap with Glasgow City IJB.",
  budget2526:"£591.9m",
  years:[
    {y:"2023/24",gross:"£1,395.9m",income:"£870.0m",net:"£525.9m"},
    {y:"2024/25",gross:"£1,526.0m",income:"£921.0m",net:"£605.0m"},
    {y:"2025/26",gross:"£1,661.0m",income:"£1,011.3m",net:"£649.8m"}
  ]
},
{
  id:"related",
  name:"Related Companies",
  note:"Net cost of ALEOs and group entities (Glasgow Life, City Building, etc.). See Entities and Money trails.",
  budget2526:"£110.0m",
  years:[
    {y:"2023/24",gross:"£136.0m",income:"£0.1m",net:"£135.9m"},
    {y:"2024/25",gross:"£118.7m",income:"-",net:"£118.7m"},
    {y:"2025/26",gross:"£112.5m",income:"-",net:"£112.5m"}
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
      <div class="fin-box"><div class="flabel">2022</div><div class="fval" style="font-size:0.95rem">${w.pop2022||'-'}</div></div>
      <div class="fin-box"><div class="flabel">Change 22-24</div><div class="fval" style="font-size:0.9rem;color:var(--green)">${w.popChange||'-'}</div></div>
    </div>
    <p class="gap" style="margin-bottom:0.8rem">Source: National Records of Scotland, mid-year estimates (2011 Data Zones best-fit to Electoral Wards).</p>
    <div class="sec">
      <h4>Deprivation (SIMD)</h4>
      <div class="fin-grid" style="margin:0.5rem 0 0.8rem">
        <div class="fin-box"><div class="flabel">Ward profile</div><div class="fval" style="font-size:0.9rem">${w.simd||'-'}</div></div>
        <div class="fin-box"><div class="flabel">City context</div><div class="fval" style="font-size:0.85rem;color:var(--amber)">44% of Glasgow data zones in Scotland's 20% most deprived</div></div>
      </div>
      <p class="fact">${w.notes||''}</p>
      <p class="gap">Source: Scottish Index of Multiple Deprivation 2020. Ward-level % most deprived requires Data Zone aggregation (Phase 2).</p>
    </div>
    <div class="sec"><h4>Housing</h4>
      <p class="fact">${w.housing||''}</p>
      <div class="fin-grid" style="margin:0.5rem 0">
        <div class="fin-box"><div class="flabel">Affordable pipeline</div><div class="fval">${w.affEst||'-'}</div></div>
        <div class="fin-box"><div class="flabel">Expected to be built</div><div class="fval">${w.affEff||'-'}</div></div>
      </div>
      <p class="gap">Pipeline = total affordable homes identified in the land supply. Expected = the portion programmed to be delivered (to ~2031). Source: GCC Housing Land Audit March 2024.</p>
      <p class="gap">${FOI.h.homelessness}</p>
    </div>
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
  list.innerHTML=filtered.map(e=>`<div class="card clickable" onclick="openEntity('${e.id}')"><h3>${e.name}</h3><p class="meta">${e.type} · ${e.reg||''}</p><p class="fact">GCC related spend: <strong>${e.exp||'-'}</strong></p><p class="gap">${e.note||''}</p></div>`).join('');
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

  let turnoverBlock = '';
  if(e.turnover && e.turnover.length){
    turnoverBlock = `
      <div class="sec"><h4>Financial history</h4>
      <div class="dept-row" style="font-weight:600;color:var(--muted);font-size:.78rem;border-bottom:1px solid var(--border);padding-bottom:.4rem;margin-bottom:.3rem">
        <div>Year</div><div></div><div></div><div>Figure</div>
      </div>
      ${e.turnover.map(t=>`<div class="dept-row" style="font-size:.82rem"><div>${t.y}</div><div></div><div></div><div style="font-weight:600;color:var(--amber)">${t.t}</div></div>`).join('')}
      <p class="gap" style="margin-top:.5rem">Source: published Members' Reports / Financial Statements / Group Accounts.</p>
      </div>`;
  }

  let links = '';
  if(e.companiesHouseUrl){
    links += `<p class="fact" style="margin-top:.4rem"><a href="${e.companiesHouseUrl}" target="_blank" rel="noopener" style="color:var(--accent);font-weight:600">→ Companies House</a></p>`;
  }
  if(e.accountsUrl){
    links += `<p class="fact" style="margin-top:.3rem"><a href="${e.accountsUrl}" target="_blank" rel="noopener" style="color:var(--accent);font-weight:600">→ Official accounts page (GCC)</a></p>`;
  }

  document.getElementById('detail-content').innerHTML=`
    <div class="card"><h3>${e.name}</h3>
    <p class="meta">${e.type} · ${e.reg||'-'}</p>
    <div class="sec"><h4>GCC related expenditure</h4><p class="fact" style="font-size:1.2rem;color:var(--amber)">${e.exp||'-'}</p></div>
    <div class="sec"><h4>Notes</h4><p class="fact">${e.note||''}</p></div>
    ${turnoverBlock}
    <div class="sec"><h4>Sources & accounts</h4>
    <p class="gap">GCC Annual Accounts Note 16 + Companies House + published entity accounts.</p>
    ${links}
    </div>
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
    const y2425 = d.years.find(y=>y.y==='2024/25');
    const y2526 = d.years.find(y=>y.y==='2025/26');
    return `<div class="dept-row"><div class="dname" onclick="openDept('${d.id}')">${d.name}</div><div>${y2425 ? y2425.net : '-'}</div><div>${y2526 ? y2526.net : '-'}</div><div>${d.budget2526 || '-'}</div></div>`;
  }).join('');
}
function renderProcurement(){
  const list=document.getElementById('procurement-list');
  if(!list)return;
  list.innerHTML=`
    <div class="card" style="margin-bottom:1rem">
      <h3>Construction Pipeline</h3>
      <p class="meta">Glasgow City Council projects from the Scottish Futures Trust Construction Pipeline Forecast Tool (Q1 2026 submission).</p>
      <p class="fact" style="margin-top:.6rem">
        <a href="https://app.powerbi.com/view?r=eyJrIjoiNjQyNDExZjMtYTZlMy00NjM3LWE0OWQtYWEyYjkzMTNmNmFiIiwidCI6ImI5ODZlNzBmLWEwMWUtNGU0MS04YTg5LTdhMjY1MmI0NWE1MiJ9" target="_blank" rel="noopener" style="color:var(--accent);font-weight:600">
          → View Live Contracts (Power BI)
        </a>
      </p>
    </div>
    <div class="dept-row" style="font-weight:600;color:var(--muted);font-size:.78rem;border-bottom:1px solid var(--border);padding-bottom:.4rem;margin-bottom:.3rem">
      <div style="flex:2">Project</div><div>Type</div><div>Value</div><div>Status</div>
    </div>
    ${procurement.map(p=>`
      <div class="dept-row" style="font-size:.82rem;align-items:flex-start">
        <div style="flex:2">
          <strong>${p.name}</strong><br>
          <span class="meta">${p.route||''}</span>
        </div>
        <div>${p.type}</div>
        <div style="font-weight:600;color:var(--amber)">${p.value}</div>
        <div>${p.status}</div>
      </div>`).join('')}
    <div class="sec" style="margin-top:1.2rem">
      <p class="gap">Source: Glasgow City Council CPFT submission to Scottish Futures Trust (May 2026). Values are estimated construction values.</p>
    </div>`;
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
      <div>${yr.gross || '-'}</div>
      <div>${yr.income || '-'}</div>
      <div style="font-weight:600">${yr.net || '-'}</div>
    </div>`).join('');

  document.getElementById('detail-content').innerHTML=`
    <div class="card">
      <h3>${d.name}</h3>
      <p class="meta" style="margin-bottom:.8rem">${d.note || ''}</p>
      <div class="fin-grid" style="margin:0.5rem 0 1rem">
        <div class="fin-box"><div class="flabel">Budget 2025/26 (approved)</div><div class="fval">${d.budget2526 || '-'}</div></div>
      </div>
      <div class="dept-row" style="font-weight:600;color:var(--muted);font-size:.78rem;border-bottom:1px solid var(--border);padding-bottom:.4rem;margin-bottom:.3rem">
        <div>Year</div><div>Gross</div><div>Income</div><div>Net</div>
      </div>
      ${rows}
      <div class="sec" style="margin-top:1.2rem">
        <h4>Notes</h4>
        <p class="fact">${d.note || ''}</p>
        <p class="gap" style="margin-top:.5rem">Actual figures from GCC Comprehensive Income & Expenditure Statement (Pre-Audit Accounts). Budget 2025/26 = approved net direct service expenditure from Council minutes.</p>
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

function filterAll(){const q=document.getElementById('search').value;renderWards(q);renderEntities(q)}
renderWards();renderEntities();renderTrails();renderProcurement();
if(typeof renderDepts==='function')renderDepts();
