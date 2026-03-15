// ==========================================================================
// DATA — SÉRIES COMPLÈTES MAROC + EUROPE
// ==========================================================================
const FOURN = {
  MA:{l:'Maroc Aluminium',f:'🇲🇦',c:'ma'},
  ST:{l:'Strugal',f:'🟢',c:'st'},
  EU:{l:'Européen',f:'🇪🇺',c:'eu'},
  CU:{l:'Personnalisé',f:'⚡',c:'cu'}
};

const CAT = {
  poignee:'🤝 Poignées',serrure:'🔐 Serrures',joint:'🔵 Joints',
  visserie:'🔩 Visserie',glissiere:'🔄 Glissières',charniere:'🔗 Charnières',
  vitrage:'🪟 Vitrage',etancheite:'💧 Étanchéité',quincaillerie:'⚙ Quincaillerie',autre:'📦 Autre'
};

// REMPLISSAGES COMPLETS
const REMPLISSAGES = {
  sv_4:{lib:'Verre Simple 4mm',ep:4,comp:'4mm',cat:'simple',prix:95},
  sv_5:{lib:'Verre Simple 5mm',ep:5,comp:'5mm',cat:'simple',prix:105},
  sv_6:{lib:'Verre Simple 6mm',ep:6,comp:'6mm',cat:'simple',prix:120},
  sv_8:{lib:'Verre Simple 8mm',ep:8,comp:'8mm',cat:'simple',prix:145},
  dv_4_16_4:{lib:'Double Vitrage 4/16/4',ep:24,comp:'4+16+4',cat:'double',prix:280},
  dv_4_16Ar_4:{lib:'DV Argon 4/16Ar/4',ep:24,comp:'4+16Ar+4',cat:'double',prix:320},
  dv_5_16_5:{lib:'Double Vitrage 5/16/5',ep:26,comp:'5+16+5',cat:'double',prix:310},
  dv_6_16_6:{lib:'Double Vitrage 6/16/6',ep:28,comp:'6+16+6',cat:'double',prix:340},
  dv_4_20_4:{lib:'DV 4/20/4',ep:28,comp:'4+20+4',cat:'double',prix:290},
  dv_6_20_6:{lib:'DV 6/20/6',ep:32,comp:'6+20+6',cat:'double',prix:360},
  dv_6_22_6:{lib:'DV 6/22/6',ep:34,comp:'6+22+6',cat:'double',prix:375},
  dv_6_24_6:{lib:'DV 6/24/6',ep:36,comp:'6+24+6',cat:'double',prix:390},
  tv_4_12_4_12_4:{lib:'Triple Vitrage 4/12/4/12/4',ep:36,comp:'4+12+4+12+4',cat:'triple',prix:480},
  tv_4_16_4_16_4:{lib:'Triple Vitrage 4/16/4/16/4',ep:44,comp:'4+16+4+16+4',cat:'triple',prix:520},
  tv_6_16_6_16_6:{lib:'Triple Vitrage 6/16/6/16/6',ep:50,comp:'6+16+6+16+6',cat:'triple',prix:580},
  pan_10:{lib:'Panneau Opaque 10mm',ep:10,comp:'Opaque 10mm',cat:'opaque',prix:180},
  pan_20:{lib:'Panneau Opaque 20mm',ep:20,comp:'Opaque 20mm',cat:'opaque',prix:220},
  comp_4:{lib:'Composite Alucobond 4mm',ep:4,comp:'Alu+PE+Alu',cat:'composite',prix:250},
  comp_6:{lib:'Composite Alucobond 6mm',ep:6,comp:'Alu+PE+Alu',cat:'composite',prix:295},
};

const TYPES_VERRE = {
  clair:{lib:'Clair Float',desc:'Verre standard clair — bonne transparence'},
  securit:{lib:'Sécurit (Trempé)',desc:'Résistance x4 — obligatoire zones risque'},
  feuillte:{lib:'Feuilleté PVB/SGP',desc:'Sécurité anti-effraction — bris maintenu'},
  reflexion:{lib:'Réfléchissant',desc:'Contrôle apports solaires — façades'},
  controle_sol:{lib:'Contrôle Solaire',desc:'Facteur solaire bas — confort été'},
  depoli:{lib:'Dépoli / Satiné',desc:'Intimité — salles bains, cloisons'},
  planitherm:{lib:'SGG Planitherm (Low-E)',desc:'Ug≤1.0 — haute isolation thermique'},
  parsol:{lib:'SGG Parsol Teinté',desc:'Teinté masse — réduction éblouissement'},
  stadip:{lib:'Stadip Feuilleté',desc:'Sécurité + insonorisation — 38dB'},
  climalit:{lib:'Climalit DV',desc:'Double vitrage standard Saint-Gobain'},
  thermobel:{lib:'Thermobel Argon',desc:'DV Argon — Ug 1.1 W/m²K'},
  antelio:{lib:'SGG Antelio Réfléchissant',desc:'Façades vitrées — effets miroir jour'},
  cool_lite:{lib:'Cool-Lite SKN',desc:'Contrôle solaire haute perf. — Façades'},
};

// STATE
const S = {
  ouvrages:[],
  activeSerie:'MA-45',
  tarifs:{
    mo_montage:120, mo_pose:100, marge_chantier:10,
    quincaillerie_fen:180, quincaillerie_porte:350,
    joint_ml:8, silicone_ml:12
  },
  series:[
    // MAROC ALUMINIUM
    {id:'s1',nom:'MA-40',f:'MA',des:'Série 40mm légère',px:30,po:1.20,lg:6000,app:'fen',rpt:'non',notes:'Petites fenêtres, impostes'},
    {id:'s2',nom:'MA-45',f:'MA',des:'Série 45mm standard',px:36,po:1.40,lg:6000,app:'fen',rpt:'non',notes:'Fenêtres standard, portes légères'},
    {id:'s3',nom:'MA-50',f:'MA',des:'Série 50mm',px:42,po:1.62,lg:6000,app:'fen',rpt:'non',notes:'Fenêtres, baies coulissantes'},
    {id:'s4',nom:'MA-55',f:'MA',des:'Série 55mm RPT',px:56,po:1.82,lg:6000,app:'all',rpt:'oui',notes:'Thermique — rupture de pont'},
    {id:'s5',nom:'MA-60',f:'MA',des:'Série 60mm',px:64,po:2.05,lg:6000,app:'all',rpt:'non',notes:'Portes, baies vitrées, vérandas'},
    {id:'s6',nom:'MA-65',f:'MA',des:'Série 65mm RPT',px:72,po:2.25,lg:6000,app:'all',rpt:'oui',notes:'Haute perf. thermique'},
    {id:'s7',nom:'MA-70',f:'MA',des:'Série 70mm',px:80,po:2.50,lg:6000,app:'all',rpt:'oui',notes:'Portes, vérandas premium'},
    {id:'s8',nom:'MA-FC60',f:'MA',des:'Façade coulissante 60',px:78,po:2.80,lg:6000,app:'fac',rpt:'non',notes:'Mur rideau façade'},
    // STRUGAL
    {id:'s9',nom:'S45',f:'ST',des:'Strugal S45',px:44,po:1.48,lg:6000,app:'fen',rpt:'non',notes:'Fenêtres battantes simples'},
    {id:'s10',nom:'S52',f:'ST',des:'Strugal S52 Fenêtre',px:48,po:1.55,lg:6000,app:'fen',rpt:'non',notes:'Oscillo-battant'},
    {id:'s11',nom:'S60',f:'ST',des:'Strugal S60',px:60,po:1.90,lg:6000,app:'fen',rpt:'oui',notes:'Thermique standard'},
    {id:'s12',nom:'S67',f:'ST',des:'Strugal S67 Porte',px:66,po:2.12,lg:6000,app:'por',rpt:'non',notes:'Portes vitrées'},
    {id:'s13',nom:'S77',f:'ST',des:'Strugal S77 Thermique',px:80,po:2.35,lg:6000,app:'all',rpt:'oui',notes:'Haute perf. thermique'},
    {id:'s14',nom:'W72',f:'ST',des:'Strugal W72 Façade',px:94,po:3.15,lg:6000,app:'fac',rpt:'non',notes:'Mur rideau'},
    {id:'s15',nom:'W86',f:'ST',des:'Strugal W86 Façade',px:110,po:3.60,lg:6000,app:'fac',rpt:'non',notes:'Mur rideau lourd'},
    // EUROPÉEN — TECHNAL / HYDRO
    {id:'s16',nom:'T45',f:'EU',des:'Technal T45 / Hydro',px:38,po:1.45,lg:6000,app:'fen',rpt:'non',notes:'Standard européen'},
    {id:'s17',nom:'T60',f:'EU',des:'Technal T60',px:52,po:1.85,lg:6000,app:'all',rpt:'non',notes:'Fenêtres et portes'},
    {id:'s18',nom:'T65',f:'EU',des:'Technal T65 Thermique',px:60,po:2.12,lg:6000,app:'all',rpt:'oui',notes:'RPT haute perf.'},
    {id:'s19',nom:'T80',f:'EU',des:'Technal T80 Façade',px:90,po:3.22,lg:6000,app:'fac',rpt:'non',notes:'Mur rideau'},
    // SCHÜCO
    {id:'s20',nom:'AWS60',f:'EU',des:'Schüco AWS 60',px:88,po:1.95,lg:6000,app:'fen',rpt:'non',notes:'Fenêtre premium'},
    {id:'s21',nom:'AWS75',f:'EU',des:'Schüco AWS 75.SI',px:115,po:2.20,lg:6000,app:'fen',rpt:'oui',notes:'Super isolation — Passivhaus'},
    {id:'s22',nom:'ADS65',f:'EU',des:'Schüco ADS 65',px:105,po:2.50,lg:6000,app:'por',rpt:'non',notes:'Porte aluminium'},
    {id:'s23',nom:'ADS90',f:'EU',des:'Schüco ADS 90.SI',px:135,po:2.80,lg:6000,app:'por',rpt:'oui',notes:'Porte haute isolation'},
    {id:'s24',nom:'FW50',f:'EU',des:'Schüco FW 50+',px:95,po:3.10,lg:6000,app:'fac',rpt:'non',notes:'Façade mullion-transom'},
    {id:'s25',nom:'FW60',f:'EU',des:'Schüco FW 60',px:115,po:3.40,lg:6000,app:'fac',rpt:'non',notes:'Façade structurale'},
    // REYNAERS
    {id:'s26',nom:'CS52',f:'EU',des:'Reynaers CS 52',px:82,po:1.80,lg:6000,app:'fen',rpt:'non',notes:'Fenêtre coulissante'},
    {id:'s27',nom:'CS68',f:'EU',des:'Reynaers CS 68',px:98,po:2.10,lg:6000,app:'all',rpt:'oui',notes:'Coulissant thermique'},
    {id:'s28',nom:'CW50',f:'EU',des:'Reynaers CW 50',px:108,po:3.20,lg:6000,app:'fac',rpt:'non',notes:'Mur rideau aluminium'},
    {id:'s29',nom:'CW65',f:'EU',des:'Reynaers CW 65',px:128,po:3.70,lg:6000,app:'fac',rpt:'oui',notes:'Mur rideau RPT'},
    // WICONA
    {id:'s30',nom:'WICLINE75',f:'EU',des:'Wicona Wicline 75',px:110,po:2.15,lg:6000,app:'fen',rpt:'oui',notes:'Fenêtre premium RPT'},
    {id:'s31',nom:'WICSTYLE65',f:'EU',des:'Wicona Wicstyle 65',px:92,po:1.98,lg:6000,app:'por',rpt:'oui',notes:'Porte aluminium'},
    {id:'s32',nom:'WICTEC50',f:'EU',des:'Wicona Wictec 50',px:105,po:3.15,lg:6000,app:'fac',rpt:'non',notes:'Mur rideau'},
    // CORTIZO
    {id:'s33',nom:'COR4200',f:'EU',des:'Cortizo 4200',px:75,po:1.75,lg:6000,app:'fen',rpt:'non',notes:'Fenêtre coulissante'},
    {id:'s34',nom:'COR6200',f:'EU',des:'Cortizo 6200',px:90,po:2.20,lg:6000,app:'all',rpt:'oui',notes:'Thermique RPT'},
    // ALUK
    {id:'s35',nom:'AluK38',f:'EU',des:'AluK 38 Series',px:68,po:1.55,lg:6000,app:'fen',rpt:'non',notes:'Fenêtre compacte'},
    {id:'s36',nom:'AluK58',f:'EU',des:'AluK 58 BW',px:95,po:2.00,lg:6000,app:'all',rpt:'oui',notes:'RPT haute perf.'},
    {id:'s37',nom:'AluK77',f:'EU',des:'AluK 77 BW Facade',px:118,po:3.25,lg:6000,app:'fac',rpt:'oui',notes:'Façade structurale'},
    // HUECK
    {id:'s38',nom:'HUECK60',f:'EU',des:'Hueck Trigon 60',px:100,po:2.05,lg:6000,app:'fen',rpt:'oui',notes:'Fenêtre design premium'},
    {id:'s39',nom:'HUECKF60',f:'EU',des:'Hueck Fassade 60',px:115,po:3.35,lg:6000,app:'fac',rpt:'non',notes:'Façade légère'},
    // SAPA / HYDRO EXTRUSION
    {id:'s40',nom:'SA3600',f:'EU',des:'Sapa/Hydro 3600',px:72,po:1.70,lg:6000,app:'fen',rpt:'non',notes:'Fenêtre standard'},
    {id:'s41',nom:'SA5600',f:'EU',des:'Sapa/Hydro 5600',px:88,po:2.00,lg:6000,app:'all',rpt:'oui',notes:'RPT thermique'},
    {id:'s42',nom:'SA7600',f:'EU',des:'Sapa/Hydro 7600',px:105,po:3.10,lg:6000,app:'fac',rpt:'non',notes:'Façade Hydro'},
  ],
  profiles:[
    {id:'p1',code:'MA-CADS-45',s:'MA-45',f:'MA',t:'Cadre dormant',po:1.45,lg:6000,pb:34,pa:44,pl:52},
    {id:'p2',code:'MA-OUVR-45',s:'MA-45',f:'MA',t:'Ouvrant',po:1.20,lg:6000,pb:28,pa:37,pl:44},
    {id:'p3',code:'MA-TRVE-45',s:'MA-45',f:'MA',t:'Traverse',po:0.98,lg:6000,pb:24,pa:31,pl:38},
    {id:'p4',code:'MA-CADS-60',s:'MA-60',f:'MA',t:'Cadre dormant',po:1.92,lg:6000,pb:60,pa:74,pl:88},
    {id:'p5',code:'ST-CADS-52',s:'S52',f:'ST',t:'Cadre dormant',po:1.55,lg:6000,pb:46,pa:58,pl:68},
    {id:'p6',code:'ST-OUVR-52',s:'S52',f:'ST',t:'Ouvrant',po:1.30,lg:6000,pb:40,pa:50,pl:60},
    {id:'p7',code:'ST-W72-MON',s:'W72',f:'ST',t:'Montant façade',po:3.12,lg:6000,pb:90,pa:108,pl:128},
    {id:'p8',code:'EU-T45-CD',s:'T45',f:'EU',t:'Cadre dormant',po:1.45,lg:6000,pb:36,pa:46,pl:55},
    {id:'p9',code:'EU-T60-OV',s:'T60',f:'EU',t:'Ouvrant',po:1.56,lg:6000,pb:50,pa:63,pl:75},
    {id:'p10',code:'EU-T80-COL',s:'T80',f:'EU',t:'Colonne façade',po:3.22,lg:6000,pb:86,pa:104,pl:124},
    {id:'p11',code:'SC-AWS60-CD',s:'AWS60',f:'EU',t:'Cadre dormant',po:1.95,lg:6000,pb:85,pa:105,pl:125},
    {id:'p12',code:'SC-AWS60-OV',s:'AWS60',f:'EU',t:'Ouvrant',po:1.65,lg:6000,pb:72,pa:90,pl:108},
    {id:'p13',code:'SC-FW50-MON',s:'FW50',f:'EU',t:'Montant façade',po:3.10,lg:6000,pb:92,pa:112,pl:135},
  ],
  accessoires:[
    {id:'a1',ref:'QF-001',nom:'Poignée alu standard',f:'MA',cat:'poignee',px:45,u:'pièce',ser:'MA-45,MA-50,MA-55',stk:50,no:''},
    {id:'a2',ref:'QF-002',nom:'Poignée oscillo-battant',f:'ST',cat:'poignee',px:85,u:'pièce',ser:'S52,S67',stk:30,no:''},
    {id:'a3',ref:'QF-003',nom:'Poignée Schüco premium',f:'EU',cat:'poignee',px:165,u:'pièce',ser:'AWS60,ADS65',stk:18,no:''},
    {id:'a4',ref:'SR-001',nom:'Serrure 3 pts fenêtre',f:'EU',cat:'serrure',px:220,u:'pièce',ser:'T45,T60,AWS60',stk:20,no:''},
    {id:'a5',ref:'SR-002',nom:'Serrure multipoints porte',f:'MA',cat:'serrure',px:450,u:'pièce',ser:'MA-60,MA-65',stk:15,no:''},
    {id:'a6',ref:'SR-003',nom:'Verrou façade W72',f:'ST',cat:'serrure',px:320,u:'pièce',ser:'W72,W86',stk:12,no:''},
    {id:'a7',ref:'JT-001',nom:'Joint EPDM dormant 45',f:'MA',cat:'joint',px:7.5,u:'ml',ser:'MA-45',stk:500,no:''},
    {id:'a8',ref:'JT-002',nom:'Joint souple ouvrant T60',f:'EU',cat:'joint',px:8.5,u:'ml',ser:'T45,T60,T65',stk:300,no:''},
    {id:'a9',ref:'JT-003',nom:'Joint Strugal S52',f:'ST',cat:'joint',px:9.0,u:'ml',ser:'S52,S67,S77',stk:250,no:''},
    {id:'a10',ref:'JT-004',nom:'Parclose 4mm',f:'MA',cat:'joint',px:12,u:'ml',ser:'Tous',stk:400,no:''},
    {id:'a11',ref:'VS-001',nom:'Vis inox 6x50 (b.100)',f:'MA',cat:'visserie',px:35,u:'boîte',ser:'Tous',stk:80,no:''},
    {id:'a12',ref:'VS-002',nom:'Cheville chimique M10',f:'CU',cat:'visserie',px:28,u:'pièce',ser:'Tous',stk:60,no:''},
    {id:'a13',ref:'CH-001',nom:'Charnière paumelle régl.',f:'ST',cat:'charniere',px:65,u:'pièce',ser:'S52,S67,S77',stk:40,no:''},
    {id:'a14',ref:'CH-002',nom:'Paumelle 3D Schüco',f:'EU',cat:'charniere',px:145,u:'pièce',ser:'AWS60,ADS65',stk:22,no:''},
    {id:'a15',ref:'GL-001',nom:'Rail coulissant double 2m',f:'EU',cat:'glissiere',px:185,u:'pièce',ser:'T60,AluK58',stk:25,no:''},
    {id:'a16',ref:'GL-002',nom:'Rail bas coulissant 6m',f:'MA',cat:'glissiere',px:95,u:'pièce',ser:'MA-50,MA-60',stk:30,no:''},
    {id:'a17',ref:'VT-001',nom:'Cale vitrage 28mm (s.100)',f:'MA',cat:'vitrage',px:28,u:'boîte',ser:'Tous',stk:60,no:''},
    {id:'a18',ref:'VT-002',nom:'Taquet vitrage EPDM',f:'EU',cat:'vitrage',px:3.5,u:'pièce',ser:'Tous',stk:200,no:''},
    {id:'a19',ref:'ET-001',nom:'Silicone neutre 600ml',f:'CU',cat:'etancheite',px:55,u:'pièce',ser:'Tous',stk:40,no:''},
    {id:'a20',ref:'ET-002',nom:'Mousse expansive 750ml',f:'CU',cat:'etancheite',px:48,u:'pièce',ser:'Tous',stk:35,no:''},
  ]
};

// ==========================================================================
// NAVIGATION
// ==========================================================================
function showPage(id, el) {
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('on'));
  document.querySelectorAll('.tb-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('on');
  if(el) el.classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n=>{
    if(n.textContent.includes(id.charAt(0).toUpperCase()+id.slice(1))||n.getAttribute('onclick')?.includes(id)) n.classList.add('active');
  });
  const rend = {series:renderSeries,accessoires:renderAccContent,tarifs:renderTarifs,dashboard:renderDashboard,remplissage:renderRemplissage,debit:genDebit,dessin:updateDrawSelect};
  if(rend[id]) rend[id]();
  populateSelects();
}

function navClick(el, id) {
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  el.classList.add('active');
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('on'));
  document.querySelectorAll('.tb-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('on');
  const rend = {series:renderSeries,accessoires:renderAccContent,tarifs:renderTarifs,dashboard:renderDashboard,remplissage:renderRemplissage,debit:genDebit,dessin:updateDrawSelect};
  if(rend[id]) rend[id]();
  populateSelects();
}

function stab(el, cid) {
  el.closest('.tabs').querySelectorAll('.tab').forEach(t=>t.classList.remove('on'));
  el.classList.add('on');
  el.closest('.page').querySelectorAll('.tc').forEach(c=>c.classList.remove('on'));
  document.getElementById(cid).classList.add('on');
  if(cid==='tlist') renderOuvragesList();
  if(cid==='tmp') renderMP();
  if(cid==='tacc') renderAccDevis();
}

// ==========================================================================
// POPULATE SELECTS
// ==========================================================================
function populateSelects() {
  const ids = ['o-serie','fn-s','pt-s'];
  ids.forEach(sid=>{
    const sel=document.getElementById(sid); if(!sel) return;
    const cur=sel.value;
    sel.innerHTML = S.series.map(s=>`<option value="${s.nom}">${FOURN[s.f].f} ${s.nom} — ${s.des}</option>`).join('');
    if(cur) sel.value=cur;
  });
  renderSidebarTags();
}

function filterSeriesModal() {
  const f = document.getElementById('mp-f').value;
  const sel = document.getElementById('mp-s');
  sel.innerHTML = S.series.filter(s=>s.f===f).map(s=>`<option value="${s.nom}">${s.nom}</option>`).join('');
}

function renderSidebarTags() {
  document.getElementById('sidebar-tags').innerHTML =
    S.series.map(s=>`<span class="stag ${s.nom===S.activeSerie?'on':''}" onclick="setAS('${s.nom}',this)">${s.nom}</span>`).join('');
}

function setAS(nom,el){
  S.activeSerie=nom;
  document.querySelectorAll('.stag').forEach(t=>t.classList.remove('on'));
  if(el) el.classList.add('on');
  document.getElementById('o-serie').value=nom;
}

// ==========================================================================
// REMPLISSAGE DETAILS
// ==========================================================================
function updateRempliDetails(){
  const k=document.getElementById('o-rempl').value;
  const r=REMPLISSAGES[k];
  const el=document.getElementById('rempl-detail');
  if(!r){el.textContent='—';return;}
  const cats={simple:'🟦 Vitrage simple',double:'🔵 Double vitrage',triple:'🔷 Triple vitrage',opaque:'⬛ Panneau opaque',composite:'🔲 Composite'};
  el.innerHTML=`<strong>${r.lib}</strong> &nbsp;|&nbsp; Épaisseur totale: <strong>${r.ep}mm</strong> &nbsp;|&nbsp; Composition: <code style="color:var(--gold)">${r.comp}</code> &nbsp;|&nbsp; Catégorie: ${cats[r.cat]||r.cat} &nbsp;|&nbsp; Prix indicatif: <strong style="color:var(--green)">${r.prix} MAD/m²</strong>`;
}

// ==========================================================================
// DEVIS — CALCUL
// ==========================================================================
function getSerieByNom(nom){return S.series.find(s=>s.nom===nom)||{px:40,po:1.5};}
function getPrixML(serieNom,fin){
  const s=getSerieByNom(serieNom);
  const m={brut:1,anod_argent:1.18,anod_or:1.22,anod_bronze:1.20,ral_9016:1.28,ral_9005:1.30,ral_7016:1.27,ral_7035:1.25,ral_6005:1.26,ral_8017:1.24,bois_ch:1.38,bois_no:1.40,brossé:1.15};
  return s.px*(m[fin]||1);
}
function getPrixRempl(k){return REMPLISSAGES[k]?.prix||200;}

function calcOuvrage(o){
  const L=o.larg/1000,H=o.haut/1000,surf=L*H,ch=o.chute/100;
  const pML=getPrixML(o.serie,o.finition),pV=getPrixRempl(o.rempl);
  let ml=0,cP=0,cV=0,cA=0,hMO=0;
  const nb=o.nouvrants||2;
  if(o.type==='fenetre'||o.type==='baie'){
    ml=(2*L+2*H)+(2*(L/nb)+2*H)*nb+(nb-1)*H;
    cP=ml*(1+ch)*pML; cV=surf*pV;
    cA=nb*S.tarifs.quincaillerie_fen+ml*S.tarifs.joint_ml; hMO=Math.ceil(surf*3.5);
  } else if(o.type==='porte'){
    ml=2*(L+H)*1.4; cP=ml*(1+ch)*pML*1.2;
    cV=surf*pV*0.75; cA=S.tarifs.quincaillerie_porte+ml*S.tarifs.joint_ml; hMO=Math.ceil(surf*4);
  } else if(o.type==='veranda'||o.type==='claustra'){
    ml=2*(L+H)*3+4*H; cP=ml*(1+ch)*pML*1.5;
    cV=surf*pV; cA=800+ml*S.tarifs.joint_ml; hMO=Math.ceil(surf*2.5);
  } else if(o.type==='facade'){
    ml=(2*(L+H)+Math.ceil(L/1.2)*H+Math.ceil(H/1.2)*L)*1.1;
    cP=ml*(1+ch)*pML; cV=surf*0.8*pV; cA=600+ml*15; hMO=Math.ceil(surf*3);
  }
  const ml_brut=ml*(1+ch),cMO=hMO*S.tarifs.mo_montage;
  const sub=cP+cV+cA+cMO,chtr=sub*S.tarifs.marge_chantier/100,total=(sub+chtr)*o.qty;
  return{ml_net:ml*o.qty,ml_brut:ml_brut*o.qty,surf:surf*o.qty,cP:cP*o.qty,cV:cV*o.qty,cA:cA*o.qty,cMO:cMO*o.qty,total,hMO:hMO*o.qty};
}

// Calcul coupes pour liste de débit
function calcCoupes(o){
  const L=o.larg,H=o.haut,nb=o.nouvrants||2;
  const lOuv=Math.round(L/nb);
  const chute=Math.ceil(o.chute*1.5); // espace coupe
  const coupes=[];
  // DORMANT
  coupes.push({profile:'Cadre dormant',serie:o.serie,longueur:L,angle:'90°',qty:2*o.qty,role:'Dormant bas/haut'});
  coupes.push({profile:'Cadre dormant',serie:o.serie,longueur:H,angle:'90°',qty:2*o.qty,role:'Dormant montants'});
  // OUVRANT
  if(o.type==='fenetre'||o.type==='baie'){
    coupes.push({profile:'Ouvrant',serie:o.serie,longueur:lOuv-10,angle:'45°',qty:2*nb*o.qty,role:'Ouvrant haut/bas'});
    coupes.push({profile:'Ouvrant',serie:o.serie,longueur:H-10,angle:'45°',qty:2*nb*o.qty,role:'Ouvrant montants'});
    if(nb>1) coupes.push({profile:'Traverse',serie:o.serie,longueur:H-10,angle:'90°',qty:(nb-1)*o.qty,role:'Traverse inter.'});
  } else if(o.type==='porte'){
    coupes.push({profile:'Ouvrant',serie:o.serie,longueur:L-10,angle:'45°',qty:2*o.qty,role:'Porte haut/bas'});
    coupes.push({profile:'Ouvrant',serie:o.serie,longueur:H-10,angle:'45°',qty:2*o.qty,role:'Porte montants'});
  }
  // SEUIL
  if(o.type==='porte') coupes.push({profile:'Seuil',serie:o.serie,longueur:L,angle:'90°',qty:o.qty,role:'Seuil bas'});
  return coupes;
}

// ==========================================================================
// ADD OUVRAGE
// ==========================================================================
function addOuvrage(){
  const larg=+document.getElementById('o-larg').value,haut=+document.getElementById('o-haut').value;
  if(!larg||!haut){alert('Saisir les dimensions !');return;}
  const o={
    id:Date.now(),
    type:document.getElementById('o-type').value,
    nom:document.getElementById('o-nom').value||'Ouvrage '+(S.ouvrages.length+1),
    larg,haut,qty:+document.getElementById('o-qty').value||1,
    serie:document.getElementById('o-serie').value,
    nouvrants:+document.getElementById('o-nouvrants').value||2,
    ouvrant:document.getElementById('o-ouvrant').value,
    rempl:document.getElementById('o-rempl').value,
    tverre:document.getElementById('o-tverre').value,
    finition:document.getElementById('o-finition').value,
    chute:+document.getElementById('o-chute').value||15
  };
  o.calc=calcOuvrage(o);
  o.coupes=calcCoupes(o);
  S.ouvrages.push(o);
  document.getElementById('nb-ouv').textContent=S.ouvrages.length;
  updatePanel();
  document.getElementById('calc-preview').textContent=`✔ Ajouté — ${fmt(o.calc.total)} MAD`;
  updateDrawSelect();
}

function addOuvrageAndDraw(){
  addOuvrage();
  navClick(document.querySelector('.nav-item:nth-child(8)'),'dessin');
  const sel=document.getElementById('draw-select');
  sel.value=S.ouvrages[S.ouvrages.length-1].id;
  renderDrawing();
}

function removeOuvrage(id){
  S.ouvrages=S.ouvrages.filter(o=>o.id!==id);
  document.getElementById('nb-ouv').textContent=S.ouvrages.length;
  updatePanel(); renderOuvragesList(); updateDrawSelect();
}

function renderOuvragesList(){
  const el=document.getElementById('ouvrages-list');
  if(!S.ouvrages.length){el.innerHTML=`<div class="empty"><div class="empty-i">📦</div><div class="empty-t">Aucun ouvrage ajouté</div></div>`;return;}
  const TL={fenetre:'🪟 Fenêtre',porte:'🚪 Porte',veranda:'🏗 Véranda',facade:'🏢 Façade',baie:'🔲 Baie',claustra:'🔳 Claustra'};
  el.innerHTML=`<table>
    <thead><tr><th>Ouvrage</th><th>Type</th><th>Dimensions</th><th>Série</th><th>Rempl.</th><th>Verre</th><th>Qté</th><th class="tr">Total MAD</th><th></th></tr></thead>
    <tbody>${S.ouvrages.map(o=>`<tr>
      <td style="color:var(--text);font-weight:500">${o.nom}</td>
      <td><span class="badge b-bl">${TL[o.type]||o.type}</span></td>
      <td class="tnum">${o.larg}×${o.haut}</td>
      <td><span class="badge b-alu">${o.serie}</span></td>
      <td style="font-size:0.62rem;color:var(--muted)">${REMPLISSAGES[o.rempl]?.lib||o.rempl}</td>
      <td style="font-size:0.62rem;color:var(--blue2)">${TYPES_VERRE[o.tverre]?.lib||o.tverre}</td>
      <td class="tnum">${o.qty}</td>
      <td class="tnum ta">${fmt(o.calc.total)}</td>
      <td><button class="btn btn-d" onclick="removeOuvrage(${o.id})">✕</button></td>
    </tr>`).join('')}</tbody>
    <tfoot><tr><td colspan="7" style="color:var(--gold)">TOTAL</td><td class="tnum ta">${fmt(S.ouvrages.reduce((s,o)=>s+o.calc.total,0))}</td><td></td></tr></tfoot>
  </table>`;
}

function renderMP(){
  const el=document.getElementById('mp-detail');
  if(!S.ouvrages.length){el.innerHTML=`<div class="empty"><div class="empty-i">🔩</div><div class="empty-t">Ajoutez des ouvrages</div></div>`;return;}
  let tML=0,tS=0,tP=0,tV=0,tA=0,tM=0;
  S.ouvrages.forEach(o=>{tML+=o.calc.ml_brut;tS+=o.calc.surf;tP+=o.calc.cP;tV+=o.calc.cV;tA+=o.calc.cA;tM+=o.calc.cMO;});
  const g=tP+tV+tA+tM;
  el.innerHTML=`<div class="metrics m4">
    <div class="metric"><div class="mv">${tML.toFixed(1)}</div><div class="mu">ml profilés brut</div><div class="ml">À commander</div></div>
    <div class="metric bl"><div class="mv">${tS.toFixed(1)}</div><div class="mu">m² vitrage</div><div class="ml">Surface totale</div></div>
    <div class="metric gr"><div class="mv">${fmt(g)}</div><div class="mu">MAD</div><div class="ml">Total MP+MO</div></div>
    <div class="metric pu"><div class="mv">${S.ouvrages.reduce((s,o)=>s+o.calc.hMO,0)}</div><div class="mu">heures</div><div class="ml">Main d'œuvre</div></div>
  </div>
  <div class="card"><div class="ct">💰 Décomposition des coûts</div>
    <table>
      <thead><tr><th>Composant</th><th class="tr">Montant (MAD)</th><th class="tr">%</th></tr></thead>
      <tbody>
        <tr><td>Profilés aluminium (ML brut)</td><td class="tnum">${fmt(tP)}</td><td class="tnum ta">${pct(tP,g)}%</td></tr>
        <tr><td>Vitrage / Remplissage</td><td class="tnum">${fmt(tV)}</td><td class="tnum ta">${pct(tV,g)}%</td></tr>
        <tr><td>Accessoires & Quincaillerie</td><td class="tnum">${fmt(tA)}</td><td class="tnum ta">${pct(tA,g)}%</td></tr>
        <tr><td>Main d'œuvre (montage)</td><td class="tnum">${fmt(tM)}</td><td class="tnum ta">${pct(tM,g)}%</td></tr>
      </tbody>
      <tfoot><tr><td style="color:var(--gold)">TOTAL</td><td class="tnum ta">${fmt(g)}</td><td class="tnum">100%</td></tr></tfoot>
    </table>
  </div>
  <div class="card"><div class="ct">📋 Détail par Ouvrage</div>
    <table>
      <thead><tr><th>Ouvrage</th><th>Série</th><th class="tr">ML brut</th><th class="tr">Surface m²</th><th class="tr">Profilés MAD</th><th class="tr">Vitrage MAD</th><th class="tr">Total MAD</th></tr></thead>
      <tbody>${S.ouvrages.map(o=>`<tr>
        <td>${o.nom}</td>
        <td><span class="badge b-alu">${o.serie}</span></td>
        <td class="tnum">${o.calc.ml_brut.toFixed(2)}</td>
        <td class="tnum">${o.calc.surf.toFixed(2)}</td>
        <td class="tnum">${fmt(o.calc.cP)}</td>
        <td class="tnum">${fmt(o.calc.cV)}</td>
        <td class="tnum ta">${fmt(o.calc.total)}</td>
      </tr>`).join('')}</tbody>
    </table>
  </div>`;
}

function renderAccDevis(){
  const el=document.getElementById('acc-devis');
  if(!S.ouvrages.length){el.innerHTML=`<div class="empty"><div class="empty-i">⚙</div><div class="empty-t">Ajoutez des ouvrages</div></div>`;return;}
  let rows=[];
  S.ouvrages.forEach(o=>{
    const nb=o.nouvrants||2;
    if(o.type==='fenetre'||o.type==='baie'){
      rows.push({ref:'QF-STD',nom:'Poignée standard',qty:nb*o.qty,u:'pièce',px:45,ouvrage:o.nom});
      rows.push({ref:'SR-FEN',nom:'Serrure fenêtre',qty:nb*o.qty,u:'pièce',px:220,ouvrage:o.nom});
      rows.push({ref:'JT-DOM',nom:'Joint dormant',qty:Math.ceil((2*o.larg+2*o.haut)/1000)*o.qty,u:'ml',px:7.5,ouvrage:o.nom});
      rows.push({ref:'JT-OUV',nom:'Joint ouvrant',qty:Math.ceil((2*(o.larg/nb)+2*o.haut)/1000)*nb*o.qty,u:'ml',px:8.5,ouvrage:o.nom});
      rows.push({ref:'VT-CAL',nom:'Cales vitrage',qty:nb*4*o.qty,u:'pièce',px:3.5,ouvrage:o.nom});
    } else if(o.type==='porte'){
      rows.push({ref:'QF-PTE',nom:'Poignée porte',qty:o.qty,u:'pièce',px:85,ouvrage:o.nom});
      rows.push({ref:'SR-MPT',nom:'Serrure multipoints',qty:o.qty,u:'pièce',px:450,ouvrage:o.nom});
      rows.push({ref:'CH-PTE',nom:'Charnières (jeu)',qty:o.qty,u:'lot',px:195,ouvrage:o.nom});
      rows.push({ref:'JT-PTE',nom:'Joint porte',qty:Math.ceil((2*o.larg+2*o.haut)/1000)*o.qty,u:'ml',px:9,ouvrage:o.nom});
    }
    rows.push({ref:'ET-SIL',nom:'Silicone (tubes)',qty:Math.ceil((2*o.larg+2*o.haut)/1000/3)*o.qty,u:'pièce',px:55,ouvrage:o.nom});
    rows.push({ref:'VS-INX',nom:'Visserie inox (boîtes)',qty:Math.ceil(o.qty/2)+1,u:'boîte',px:35,ouvrage:o.nom});
  });
  const totAcc=rows.reduce((s,r)=>s+r.qty*r.px,0);
  el.innerHTML=`<div class="metrics m3">
    <div class="metric"><div class="mv">${rows.length}</div><div class="mu">lignes accessoires</div><div class="ml">Total articles</div></div>
    <div class="metric bl"><div class="mv">${rows.reduce((s,r)=>s+r.qty,0)}</div><div class="mu">unités</div><div class="ml">Quantité totale</div></div>
    <div class="metric gr"><div class="mv">${fmt(totAcc)}</div><div class="mu">MAD</div><div class="ml">Coût accessoires</div></div>
  </div>
  <div class="card"><div class="ct">⚙ Liste des Accessoires par Ouvrage</div>
    <table>
      <thead><tr><th>Ouvrage</th><th>Réf.</th><th>Accessoire</th><th class="tr">Qté</th><th>Unité</th><th class="tr">PU (MAD)</th><th class="tr">Total MAD</th></tr></thead>
      <tbody>${rows.map(r=>`<tr>
        <td style="font-size:0.62rem;color:var(--muted)">${r.ouvrage}</td>
        <td><span class="badge b-alu">${r.ref}</span></td>
        <td>${r.nom}</td>
        <td class="tnum">${r.qty}</td>
        <td style="color:var(--muted);font-size:0.62rem">${r.u}</td>
        <td class="tnum">${r.px.toFixed(2)}</td>
        <td class="tnum ta">${fmt(r.qty*r.px)}</td>
      </tr>`).join('')}</tbody>
      <tfoot><tr><td colspan="6" style="color:var(--gold)">TOTAL ACCESSOIRES</td><td class="tnum ta">${fmt(totAcc)}</td></tr></tfoot>
    </table>
  </div>`;
}

// ==========================================================================
// PANEL
// ==========================================================================
function updatePanel(){
  const el=document.getElementById('panel-summary');
  if(!S.ouvrages.length){el.innerHTML=`<div class="empty"><div class="empty-i">📋</div><div class="empty-t">Aucun devis</div></div>`;return;}
  const tot=S.ouvrages.reduce((s,o)=>s+o.calc.total,0);
  const tML=S.ouvrages.reduce((s,o)=>s+o.calc.ml_brut,0);
  const tS=S.ouvrages.reduce((s,o)=>s+o.calc.surf,0);
  el.innerHTML=`
    <div class="si"><span class="sk">Client</span><span class="sv">${document.getElementById('cl-nom').value||'—'}</span></div>
    <div class="si"><span class="sk">Réf.</span><span class="sv b">${document.getElementById('cl-ref').value||'—'}</span></div>
    <div class="si"><span class="sk">Ouvrages</span><span class="sv a">${S.ouvrages.length}</span></div>
    <div class="dv">Métrés</div>
    <div class="si"><span class="sk">ML brut</span><span class="sv">${tML.toFixed(1)} m</span></div>
    <div class="si"><span class="sk">Surface</span><span class="sv">${tS.toFixed(2)} m²</span></div>
    <div class="dv">Ouvrages</div>
    ${S.ouvrages.map(o=>`<div class="si"><span class="sk" style="max-width:135px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:0.6rem">${o.nom}</span><span class="sv" style="font-size:0.65rem">${fmt(o.calc.total)}</span></div>`).join('')}
    <div class="tot-box"><div class="tl">Prix de Revient Total</div><div class="tv">MAD ${fmt(tot)}</div></div>
    <div style="margin-top:0.6rem">${['Profilés','Vitrage','Acc.','MO'].map((l,i)=>{
      const vals=[S.ouvrages.reduce((s,o)=>s+o.calc.cP,0),S.ouvrages.reduce((s,o)=>s+o.calc.cV,0),S.ouvrages.reduce((s,o)=>s+o.calc.cA,0),S.ouvrages.reduce((s,o)=>s+o.calc.cMO,0)];
      const p=tot>0?(vals[i]/tot*100):0;
      return `<div style="margin-bottom:0.3rem"><div style="display:flex;justify-content:space-between;font-size:0.58rem;margin-bottom:0.12rem"><span style="color:var(--muted)">${l}</span><span>${p.toFixed(0)}%</span></div><div style="height:2.5px;background:var(--bd);border-radius:1px"><div style="height:100%;width:${p}%;background:var(--blue);border-radius:1px"></div></div></div>`;
    }).join('')}</div>`;
}

// ==========================================================================
// CALC PAGES
// ==========================================================================
function getPrixVitrage(v){return REMPLISSAGES[v]?.prix||200;}

function buildResultHTML(d){
  return `<div class="metrics m3">
    <div class="metric"><div class="mv">${d.ml_brut.toFixed(1)}</div><div class="mu">ml profilés brut</div><div class="ml">À commander</div></div>
    <div class="metric bl"><div class="mv">${d.surf.toFixed(1)}</div><div class="mu">m²</div><div class="ml">Surface</div></div>
    <div class="metric gr"><div class="mv">${fmt(d.total)}</div><div class="mu">MAD</div><div class="ml">Prix de revient</div></div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.8rem">
    <div class="card"><div class="ct">📐 Métrés détaillés</div><table>
      ${d.details.map(r=>`<tr><td style="color:var(--muted);font-size:0.68rem">${r.l}</td><td class="tnum ${r.a?'ta':''}">${r.v}</td></tr>`).join('')}
    </table></div>
    <div class="card"><div class="ct">💰 Coûts</div><table>
      <tr><td style="color:var(--muted);font-size:0.68rem">Profilés</td><td class="tnum">${fmt(d.cP)} MAD</td></tr>
      <tr><td style="color:var(--muted);font-size:0.68rem">Vitrage</td><td class="tnum">${fmt(d.cV)} MAD</td></tr>
      <tr><td style="color:var(--muted);font-size:0.68rem">Accessoires</td><td class="tnum">${fmt(d.cA)} MAD</td></tr>
      <tr><td style="color:var(--muted);font-size:0.68rem">Main d'œuvre</td><td class="tnum">${fmt(d.cMO)} MAD</td></tr>
      <tfoot><tr><td style="color:var(--gold)">TOTAL</td><td class="tnum ta">${fmt(d.total)}</td></tr></tfoot>
    </table></div>
  </div>`;
}

function calcFenetre(){
  const L=+document.getElementById('fn-l').value,H=+document.getElementById('fn-h').value;
  const nb=+document.getElementById('fn-n').value||2,s=document.getElementById('fn-s').value;
  const v=document.getElementById('fn-v').value,ch=(+document.getElementById('fn-c').value||15)/100;
  if(!L||!H) return;
  const lm=L/1000,hm=H/1000,surf=lm*hm;
  const dormant=2*lm+2*hm,ouv=nb*(2*(lm/nb)+2*hm),tr=(nb-1)*hm;
  const net=dormant+ouv+tr,brut=net*(1+ch);
  const cP=brut*getPrixML(s,'brut'),cV=surf*getPrixVitrage(v);
  const cA=nb*S.tarifs.quincaillerie_fen+net*S.tarifs.joint_ml,cMO=Math.ceil(surf*3.5)*S.tarifs.mo_montage;
  document.getElementById('fn-result').innerHTML=buildResultHTML({ml_net:net,ml_brut:brut,surf,cP,cV,cA,cMO,total:cP+cV+cA+cMO,
    details:[{l:'Dormant bas/haut',v:(2*lm).toFixed(2)+' m'},{l:'Dormant montants',v:(2*hm).toFixed(2)+' m'},{l:'Ouvrants ('+nb+')',v:ouv.toFixed(2)+' m'},{l:'Traverses',v:tr.toFixed(2)+' m'},{l:'ML net',v:net.toFixed(2)+' m'},{l:'Chute ('+ch*100+'%)',v:(brut-net).toFixed(2)+' m'},{l:'ML brut commandé',v:brut.toFixed(2)+' m',a:true}]});
}

function calcPorte(){
  const L=+document.getElementById('pt-l').value,H=+document.getElementById('pt-h').value;
  const t=document.getElementById('pt-t').value,r=document.getElementById('pt-r').value;
  const s=document.getElementById('pt-s').value,ch=(+document.getElementById('pt-c').value||15)/100;
  if(!L||!H) return;
  const lm=L/1000,hm=H/1000,surf=lm*hm;
  const mult={battante:1,double:1.8,coulissante:1.4,galandage:1.6}[t]||1;
  const net=(2*(lm+hm)+lm)*mult,brut=net*(1+ch);
  const cP=brut*getPrixML(s,'brut'),cV=surf*200*(r==='opaque'?0.3:r==='mixte'?0.6:0.85);
  const cA=S.tarifs.quincaillerie_porte*(t==='double'?2:1)+net*S.tarifs.joint_ml,cMO=Math.ceil(surf*4)*S.tarifs.mo_montage;
  document.getElementById('pt-result').innerHTML=buildResultHTML({ml_net:net,ml_brut:brut,surf,cP,cV,cA,cMO,total:cP+cV+cA+cMO,
    details:[{l:'ML net',v:net.toFixed(2)+' m'},{l:'ML brut',v:brut.toFixed(2)+' m',a:true},{l:'Surface',v:surf.toFixed(2)+' m²'}]});
}

function calcVeranda(){
  const Lm=+document.getElementById('vr-l').value,Wm=+document.getElementById('vr-w').value,Hm=+document.getElementById('vr-h').value;
  const t=document.getElementById('vr-t').value,c=+document.getElementById('vr-c').value||4,ch=(+document.getElementById('vr-ch').value||18)/100;
  if(!Lm||!Wm||!Hm) return;
  const sT=Lm*Wm,sF=2*(Lm+Wm)*Hm,net=2*(Lm+Wm)+c*Hm*1.2+Math.ceil(Lm/1.5)*Wm+Math.ceil(Wm/1.5)*Lm,brut=net*(1+ch);
  const pV=t==='veranda'?280:t==='couverture'?180:0;
  const cP=brut*65,cV=(sT+(t==='veranda'?sF*0.7:0))*pV,cA=1200+net*S.tarifs.joint_ml+c*250,cMO=Math.ceil((sT+sF)*2)*S.tarifs.mo_montage;
  document.getElementById('vr-result').innerHTML=buildResultHTML({ml_net:net,ml_brut:brut,surf:sT+sF,cP,cV,cA,cMO,total:cP+cV+cA+cMO,
    details:[{l:'Surface toiture',v:sT.toFixed(2)+' m²'},{l:'Surface façades',v:sF.toFixed(2)+' m²'},{l:'ML net',v:net.toFixed(2)+' m'},{l:'ML brut',v:brut.toFixed(2)+' m',a:true},{l:'Colonnes',v:c}]});
}

function calcFacade(){
  const Lm=+document.getElementById('fc-l').value,Hm=+document.getElementById('fc-h').value;
  const mod=+document.getElementById('fc-m').value||1200,r=document.getElementById('fc-r').value,ch=(+document.getElementById('fc-ch').value||20)/100;
  if(!Lm||!Hm) return;
  const surf=Lm*Hm,nV=Math.ceil(Lm*1000/mod)+1,nH=Math.ceil(Hm*1000/mod)+1;
  const net=nV*Hm+nH*Lm,brut=net*(1+ch);
  const vitPct=r==='vitre'?0.8:r==='mixte'?0.5:0.2;
  const cP=brut*85,cV=surf*vitPct*280+surf*(1-vitPct)*380,cA=1500+net*18,cMO=Math.ceil(surf*3)*S.tarifs.mo_montage;
  document.getElementById('fc-result').innerHTML=buildResultHTML({ml_net:net,ml_brut:brut,surf,cP,cV,cA,cMO,total:cP+cV+cA+cMO,
    details:[{l:'Surface façade',v:surf.toFixed(2)+' m²'},{l:'Montants vert.',v:nV},{l:'Traverses horiz.',v:nH},{l:'ML net',v:net.toFixed(2)+' m'},{l:'ML brut',v:brut.toFixed(2)+' m',a:true}]});
}

// ==========================================================================
// LISTE DE DÉBITS
// ==========================================================================
function genDebit(){
  const el=document.getElementById('debit-content');
  if(!S.ouvrages.length){el.innerHTML=`<div class="empty"><div class="empty-i">✂</div><div class="empty-t">Ajoutez des ouvrages dans le Devis</div></div>`;return;}

  // Agréger toutes les coupes
  let allCoupes=[];
  S.ouvrages.forEach(o=>{ o.coupes.forEach(c=>allCoupes.push({...c,ouvrage:o.nom})); });

  // Grouper par profil type + série
  const grouped={};
  allCoupes.forEach(c=>{
    const key=c.profile+'|'+c.serie;
    if(!grouped[key]) grouped[key]={profile:c.profile,serie:c.serie,coupes:[]};
    grouped[key].coupes.push(c);
  });

  let html=`<div class="metrics m4">
    <div class="metric"><div class="mv">${allCoupes.length}</div><div class="mu">lignes de coupe</div><div class="ml">Total</div></div>
    <div class="metric bl"><div class="mv">${allCoupes.reduce((s,c)=>s+c.qty,0)}</div><div class="mu">pièces</div><div class="ml">Toutes coupes</div></div>
    <div class="metric gr"><div class="mv">${S.ouvrages.length}</div><div class="mu">ouvrages</div><div class="ml">En débit</div></div>
    <div class="metric pu"><div class="mv">${Object.keys(grouped).length}</div><div class="mu">profilés types</div><div class="ml">Distincts</div></div>
  </div>`;

  // TABLE DEBITS DETAILLEE
  html+=`<div class="card"><div class="ct">✂ Liste de Débits Détaillée — Tous Profilés</div>
    <div class="debit-row debit-head">
      <span>Profilé / Rôle</span><span>Série</span><span style="text-align:right">Long. (mm)</span>
      <span style="text-align:center">Angle</span><span style="text-align:right">Qté</span><span>Ouvrage</span>
    </div>
    ${allCoupes.map(c=>`<div class="debit-row">
      <span style="color:var(--text)">${c.profile} <span style="color:var(--muted);font-size:0.6rem">— ${c.role}</span></span>
      <span><span class="badge b-alu">${c.serie}</span></span>
      <span style="text-align:right;font-family:'JetBrains Mono';color:var(--gold)">${c.longueur}</span>
      <span style="text-align:center"><span class="cut-badge ${c.angle==='45°'?'cut-45':'cut-90'}">${c.angle}</span></span>
      <span style="text-align:right;font-weight:600;color:var(--blue2)">${c.qty}</span>
      <span style="color:var(--muted);font-size:0.62rem">${c.ouvrage}</span>
    </div>`).join('')}
  </div>`;

  // PLAN DE DEBIT VISUEL PAR BARRE
  html+=`<div class="card"><div class="ct">📊 Schéma Visuel Plan de Débit — Optimisation Barres</div>`;
  Object.values(grouped).forEach(g=>{
    const barreLen=6000;
    const chuteAjout=15;
    // Trier coupes par longueur décroissante pour optimisation
    const sortedCoupes=[...g.coupes].sort((a,b)=>b.longueur-a.longueur);
    // Simulation bin packing simple
    const barres=[];
    sortedCoupes.forEach(c=>{
      for(let i=0;i<c.qty;i++){
        const lCoupe=c.longueur+chuteAjout;
        let placed=false;
        for(let b of barres){
          if(b.used+lCoupe<=barreLen){
            b.segments.push({longueur:c.longueur,role:c.role,angle:c.angle});
            b.used+=lCoupe; placed=true; break;
          }
        }
        if(!placed){
          barres.push({used:lCoupe,segments:[{longueur:c.longueur,role:c.role,angle:c.angle}]});
        }
      }
    });
    html+=`<div style="margin-bottom:1rem">
      <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.45rem">
        <span class="badge b-alu">${g.profile}</span>
        <span class="badge b-bl">${g.serie}</span>
        <span style="font-size:0.62rem;color:var(--muted)">${barres.length} barre${barres.length>1?'s':''} de 6000mm nécessaire${barres.length>1?'s':''}</span>
      </div>`;
    barres.forEach((b,bi)=>{
      const pct_used=(b.used/barreLen*100).toFixed(1);
      const rest=barreLen-b.used;
      html+=`<div class="bar-row">
        <div class="bar-label">Barre #${bi+1}</div>
        <div class="bar-track">`;
      let pos=0;
      b.segments.forEach(seg=>{
        const w=((seg.longueur+chuteAjout)/barreLen*100).toFixed(2);
        html+=`<div class="bar-seg used" style="left:${pos}%;width:${w}%" title="${seg.longueur}mm — ${seg.role}"><span style="color:#fff">${seg.longueur}</span></div>`;
        pos+=parseFloat(w);
      });
      if(rest>50){
        html+=`<div class="bar-seg rest" style="left:${pos}%;width:${(rest/barreLen*100).toFixed(2)}%"></div>`;
      }
      html+=`</div><div class="bar-info">${pct_used}% utilisé<br><span style="color:var(--green);font-size:0.58rem">+${rest}mm chute</span></div>
      </div>`;
    });
    html+=`<div style="font-size:0.6rem;color:var(--muted);margin-top:0.25rem">
      Total barres: <strong style="color:var(--gold)">${barres.length}</strong> × 6000mm = <strong>${barres.length*6000}mm</strong> commandés
    </div></div>`;
  });
  html+=`</div>`;

  // ANGLES DE COUPE — SCHEMA SVG
  html+=`<div class="card"><div class="ct">📐 Schéma des Angles de Coupe</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.8rem">
      <div style="background:var(--s3);border:1px solid var(--bd);border-radius:2px;padding:1rem;text-align:center">
        <div style="font-size:0.65rem;color:var(--muted);margin-bottom:0.5rem;text-transform:uppercase;letter-spacing:0.08em">Coupe à 90° — Dormant / Seuil</div>
        <svg viewBox="0 0 120 60" style="width:180px;height:90px">
          <rect x="10" y="20" width="100" height="20" fill="rgba(168,188,208,0.15)" stroke="${getVar('--alu')}" stroke-width="1.5"/>
          <line x1="10" y1="10" x2="10" y2="50" stroke="${getVar('--blue')}" stroke-width="1" stroke-dasharray="3,2"/>
          <line x1="110" y1="10" x2="110" y2="50" stroke="${getVar('--blue')}" stroke-width="1" stroke-dasharray="3,2"/>
          <path d="M10,40 L10,50 L20,50" fill="none" stroke="${getVar('--gold')}" stroke-width="1"/>
          <path d="M110,40 L110,50 L100,50" fill="none" stroke="${getVar('--gold')}" stroke-width="1"/>
          <text x="55" y="16" text-anchor="middle" fill="${getVar('--blue2')}" font-size="7" font-family="JetBrains Mono">L (mm)</text>
          <text x="5" y="58" fill="${getVar('--muted')}" font-size="6">90°</text>
          <text x="105" y="58" text-anchor="end" fill="${getVar('--muted')}" font-size="6">90°</text>
        </svg>
        <div style="font-size:0.6rem;color:var(--blue2)">Coupé droit — scie à 90°</div>
      </div>
      <div style="background:var(--s3);border:1px solid var(--bd);border-radius:2px;padding:1rem;text-align:center">
        <div style="font-size:0.65rem;color:var(--muted);margin-bottom:0.5rem;text-transform:uppercase;letter-spacing:0.08em">Coupe à 45° — Ouvrant / Cadre onglet</div>
        <svg viewBox="0 0 120 60" style="width:180px;height:90px">
          <polygon points="20,20 100,20 110,40 10,40" fill="rgba(168,188,208,0.15)" stroke="${getVar('--alu')}" stroke-width="1.5"/>
          <line x1="20" y1="10" x2="10" y2="50" stroke="${getVar('--red')}" stroke-width="1" stroke-dasharray="3,2"/>
          <line x1="100" y1="10" x2="110" y2="50" stroke="${getVar('--red')}" stroke-width="1" stroke-dasharray="3,2"/>
          <text x="55" y="35" text-anchor="middle" fill="${getVar('--gold')}" font-size="7" font-family="JetBrains Mono">L (mm)</text>
          <text x="5" y="58" fill="${getVar('--red')}" font-size="6">45°</text>
          <text x="115" y="58" text-anchor="end" fill="${getVar('--red')}" font-size="6">45°</text>
          <path d="M18,30 L12,24 L18,24" fill="none" stroke="${getVar('--red')}" stroke-width="0.8"/>
          <path d="M102,30 L108,24 L102,24" fill="none" stroke="${getVar('--red')}" stroke-width="0.8"/>
        </svg>
        <div style="font-size:0.6rem;color:var(--red)">Coupe onglet 45° — assemblage angle</div>
      </div>
    </div>
  </div>`;

  el.innerHTML=html;
}

// ==========================================================================
// DESSIN 2D
// ==========================================================================
function updateDrawSelect(){
  const sel=document.getElementById('draw-select');
  if(!sel) return;
  sel.innerHTML=`<option value="">-- Sélectionner un ouvrage --</option>`+
    S.ouvrages.map(o=>`<option value="${o.id}">${o.nom} (${o.larg}×${o.haut}mm)</option>`).join('');
}

function renderDrawing(){
  const sel=document.getElementById('draw-select');
  const el=document.getElementById('drawing-content');
  if(!sel||!sel.value){el.innerHTML=`<div class="empty"><div class="empty-i">📏</div><div class="empty-t">Sélectionnez un ouvrage</div></div>`;return;}
  const o=S.ouvrages.find(o=>o.id==sel.value);
  if(!o){return;}
  const L=o.larg,H=o.haut,T=45; // T = épaisseur profilé représentée
  const rInfo=REMPLISSAGES[o.rempl]||{lib:'Vitrage',ep:24,comp:'—'};
  const vInfo=TYPES_VERRE[o.tverre]||{lib:'Verre Clair'};
  const scale=Math.min(320/L,360/H,0.5);
  const W=Math.round(L*scale),Hd=Math.round(H*scale),Ts=Math.round(T*scale);
  const svgW=W+120,svgH=Hd+140;

  // Couleur vitrage selon type
  const glassColors={simple:'rgba(184,224,248,0.25)',double:'rgba(150,200,240,0.35)',triple:'rgba(120,180,230,0.45)',opaque:'rgba(100,100,100,0.4)',composite:'rgba(180,180,180,0.4)'};
  const glCol=glassColors[rInfo.cat]||glassColors.simple;
  const nb=o.nouvrants||2;

  let svgContent=`<svg viewBox="0 0 ${svgW} ${svgH}" style="background:var(--s3);border-radius:2px">
    <defs>
      <pattern id="hatch" patternUnits="userSpaceOnUse" width="6" height="6">
        <line x1="0" y1="6" x2="6" y2="0" stroke="${getVar('--bd2')}" stroke-width="0.5"/>
      </pattern>
    </defs>
    <!-- TITLE -->
    <text x="${svgW/2}" y="18" text-anchor="middle" fill="${getVar('--gold')}" font-size="9" font-family="JetBrains Mono" font-weight="bold">${o.nom} — ${o.type.toUpperCase()}</text>
    <text x="${svgW/2}" y="28" text-anchor="middle" fill="${getVar('--muted')}" font-size="7" font-family="JetBrains Mono">Vue de face — Échelle ~1:${Math.round(1/scale)}</text>`;

  const ox=60,oy=45; // origin

  // === VUE DE FACE ===
  // Cadre dormant extérieur
  svgContent+=`<rect x="${ox}" y="${oy}" width="${W}" height="${Hd}" fill="url(#hatch)" stroke="${getVar('--alu')}" stroke-width="${Ts/2}"/>`;
  // Vitrage zone intérieure
  const inset=Ts;
  if(nb===1){
    // 1 ouvrant simple
    svgContent+=`<rect x="${ox+inset}" y="${oy+inset}" width="${W-2*inset}" height="${Hd-2*inset}" fill="${glCol}" stroke="${getVar('--blue2')}" stroke-width="0.8"/>`;
    svgContent+=`<text x="${ox+W/2}" y="${oy+Hd/2}" text-anchor="middle" dominant-baseline="middle" fill="${getVar('--blue2')}" font-size="7" font-family="JetBrains Mono">${rInfo.lib}</text>`;
    // Croix ouvrant
    svgContent+=`<line x1="${ox+inset+5}" y1="${oy+inset}" x2="${ox+W-inset-5}" y2="${oy+Hd-inset}" stroke="${getVar('--alu')}" stroke-width="0.5" stroke-dasharray="3,2"/>`;
    svgContent+=`<line x1="${ox+inset+5}" y1="${oy+Hd-inset}" x2="${ox+W-inset-5}" y2="${oy+inset}" stroke="${getVar('--alu')}" stroke-width="0.5" stroke-dasharray="3,2"/>`;
  } else {
    // Multi ouvrants
    const wOuv=Math.round((W-2*inset-(nb-1)*Ts)/nb);
    for(let i=0;i<nb;i++){
      const xOuv=ox+inset+i*(wOuv+Ts);
      svgContent+=`<rect x="${xOuv}" y="${oy+inset}" width="${wOuv}" height="${Hd-2*inset}" fill="${glCol}" stroke="${getVar('--blue2')}" stroke-width="0.8"/>`;
      // Flèche ouverture
      if(i===0) svgContent+=`<polyline points="${xOuv+8},${oy+inset+12} ${xOuv+3},${oy+inset+6} ${xOuv+wOuv-3},${oy+inset+6}" fill="none" stroke="${getVar('--gold')}" stroke-width="0.7"/>`;
      else svgContent+=`<polyline points="${xOuv+wOuv-8},${oy+inset+12} ${xOuv+wOuv-3},${oy+inset+6} ${xOuv+3},${oy+inset+6}" fill="none" stroke="${getVar('--gold')}" stroke-width="0.7"/>`;
      if(i<nb-1) svgContent+=`<line x1="${xOuv+wOuv}" y1="${oy}" x2="${xOuv+wOuv}" y2="${oy+Hd}" stroke="${getVar('--alu')}" stroke-width="${Ts/2}"/>`;
    }
    // Label vitrage
    svgContent+=`<text x="${ox+W/2}" y="${oy+Hd/2+12}" text-anchor="middle" fill="${getVar('--blue2')}" font-size="6" font-family="JetBrains Mono">${rInfo.comp}</text>`;
  }

  // === COTATIONS ===
  const dl=12; // décalage ligne cote
  // Largeur
  svgContent+=`
    <line x1="${ox}" y1="${oy+Hd+25}" x2="${ox+W}" y2="${oy+Hd+25}" stroke="${getVar('--blue')}" stroke-width="0.7"/>
    <line x1="${ox}" y1="${oy+Hd+20}" x2="${ox}" y2="${oy+Hd+30}" stroke="${getVar('--blue')}" stroke-width="0.7"/>
    <line x1="${ox+W}" y1="${oy+Hd+20}" x2="${ox+W}" y2="${oy+Hd+30}" stroke="${getVar('--blue')}" stroke-width="0.7"/>
    <text x="${ox+W/2}" y="${oy+Hd+38}" text-anchor="middle" fill="${getVar('--blue2')}" font-size="8" font-family="JetBrains Mono">${L} mm</text>`;
  // Hauteur
  svgContent+=`
    <line x1="${ox-20}" y1="${oy}" x2="${ox-20}" y2="${oy+Hd}" stroke="${getVar('--blue')}" stroke-width="0.7"/>
    <line x1="${ox-25}" y1="${oy}" x2="${ox-15}" y2="${oy}" stroke="${getVar('--blue')}" stroke-width="0.7"/>
    <line x1="${ox-25}" y1="${oy+Hd}" x2="${ox-15}" y2="${oy+Hd}" stroke="${getVar('--blue')}" stroke-width="0.7"/>
    <text x="${ox-22}" y="${oy+Hd/2}" text-anchor="middle" fill="${getVar('--blue2')}" font-size="8" font-family="JetBrains Mono" transform="rotate(-90,${ox-22},${oy+Hd/2})">${H} mm</text>`;

  // Cotes ouvrants (si >1)
  if(nb>1){
    const wOuv=Math.round((W-2*inset-(nb-1)*Ts)/nb);
    for(let i=0;i<nb;i++){
      const xOuv=ox+inset+i*(wOuv+Ts);
      svgContent+=`<line x1="${xOuv}" y1="${oy-12}" x2="${xOuv+wOuv}" y2="${oy-12}" stroke="${getVar('--gold')}" stroke-width="0.5" stroke-dasharray="2,1.5"/>
      <text x="${xOuv+wOuv/2}" y="${oy-5}" text-anchor="middle" fill="${getVar('--gold')}" font-size="6" font-family="JetBrains Mono">${Math.round(o.larg/nb)}mm</text>`;
    }
  }

  // INFO BLOC
  const iy=oy+Hd+50;
  svgContent+=`
    <rect x="${ox}" y="${iy}" width="${W}" height="42" fill="var(--s4)" stroke="var(--bd)" stroke-width="0.8" rx="1"/>
    <text x="${ox+6}" y="${iy+11}" fill="${getVar('--gold')}" font-size="7" font-family="JetBrains Mono" font-weight="bold">FICHE TECHNIQUE</text>
    <text x="${ox+6}" y="${iy+21}" fill="${getVar('--muted')}" font-size="6" font-family="JetBrains Mono">Série: ${o.serie}  |  Remplissage: ${rInfo.lib} (${rInfo.ep}mm)  |  Verre: ${vInfo.lib}</text>
    <text x="${ox+6}" y="${iy+30}" fill="${getVar('--muted')}" font-size="6" font-family="JetBrains Mono">Finition: ${o.finition}  |  Ouvrant: ${o.ouvrant}  |  Nb ouv: ${nb}</text>
    <text x="${ox+6}" y="${iy+39}" fill="${getVar('--blue2')}" font-size="6" font-family="JetBrains Mono">ML brut: ${o.calc.ml_brut.toFixed(2)}m  |  Surface: ${o.calc.surf.toFixed(2)}m²  |  Prix rev.: ${fmt(o.calc.total)} MAD</text>`;

  svgContent+=`</svg>`;

  // COUPES H et V
  const coupeW=180,coupeH=80;
  const epP=16; // épaisseur profilé dessin coupe
  const epV=rInfo.ep/10*scale*4; // épaisseur vitrage dessin
  const cSVG_H=`<svg viewBox="0 0 ${coupeW} ${coupeH}" style="background:var(--s3);border-radius:2px;width:100%">
    <text x="${coupeW/2}" y="10" text-anchor="middle" fill="${getVar('--gold')}" font-size="6.5" font-family="JetBrains Mono">Coupe Horizontale</text>
    <!-- DORMANT G -->
    <rect x="10" y="25" width="${epP}" height="30" fill="rgba(168,188,208,0.2)" stroke="${getVar('--alu')}" stroke-width="1.2"/>
    <!-- OUVRANT G -->
    <rect x="${10+epP+2}" y="28" width="${epP-4}" height="24" fill="rgba(168,188,208,0.15)" stroke="${getVar('--alu')}" stroke-width="0.8"/>
    <!-- VITRAGE -->
    <rect x="${10+epP*2}" y="22" width="${epV+4}" height="36" fill="${glCol}" stroke="${getVar('--blue2')}" stroke-width="0.8"/>
    <text x="${10+epP*2+(epV+4)/2}" y="${coupeH/2+2}" text-anchor="middle" fill="${getVar('--blue2')}" font-size="5" font-family="JetBrains Mono">${rInfo.ep}mm</text>
    <!-- OUVRANT D -->
    <rect x="${10+epP*2+epV+6}" y="28" width="${epP-4}" height="24" fill="rgba(168,188,208,0.15)" stroke="${getVar('--alu')}" stroke-width="0.8"/>
    <!-- DORMANT D -->
    <rect x="${10+epP*3+epV+4}" y="25" width="${epP}" height="30" fill="rgba(168,188,208,0.2)" stroke="${getVar('--alu')}" stroke-width="1.2"/>
    <!-- COTES -->
    <text x="18" y="${coupeH-4}" text-anchor="middle" fill="${getVar('--muted')}" font-size="5" font-family="JetBrains Mono">${o.serie}</text>
    <text x="${coupeW-15}" y="${coupeH-4}" text-anchor="middle" fill="${getVar('--muted')}" font-size="5" font-family="JetBrains Mono">${o.serie}</text>
  </svg>`;

  const cSVG_V=`<svg viewBox="0 0 ${coupeH} ${coupeW}" style="background:var(--s3);border-radius:2px;width:100%">
    <text x="${coupeH/2}" y="10" text-anchor="middle" fill="${getVar('--gold')}" font-size="6.5" font-family="JetBrains Mono">Coupe Verticale</text>
    <!-- DORMANT H -->
    <rect x="8" y="15" width="64" height="${epP}" fill="rgba(168,188,208,0.2)" stroke="${getVar('--alu')}" stroke-width="1.2"/>
    <!-- OUVRANT H -->
    <rect x="10" y="${15+epP+2}" width="60" height="${epP-4}" fill="rgba(168,188,208,0.15)" stroke="${getVar('--alu')}" stroke-width="0.8"/>
    <!-- VITRAGE -->
    <rect x="8" y="${15+epP*2}" width="64" height="${epV+4}" fill="${glCol}" stroke="${getVar('--blue2')}" stroke-width="0.8"/>
    <text x="40" y="${15+epP*2+(epV+4)/2+2}" text-anchor="middle" fill="${getVar('--blue2')}" font-size="5" font-family="JetBrains Mono">${rInfo.ep}mm</text>
    <!-- OUVRANT B -->
    <rect x="10" y="${15+epP*2+epV+6}" width="60" height="${epP-4}" fill="rgba(168,188,208,0.15)" stroke="${getVar('--alu')}" stroke-width="0.8"/>
    <!-- DORMANT B -->
    <rect x="8" y="${15+epP*3+epV+4}" width="64" height="${epP}" fill="rgba(168,188,208,0.2)" stroke="${getVar('--alu')}" stroke-width="1.2"/>
    <text x="40" y="${coupeW-4}" text-anchor="middle" fill="${getVar('--muted')}" font-size="5" font-family="JetBrains Mono">Seuil / Soleplate</text>
  </svg>`;

  el.innerHTML=`
    <div class="coupe-view">
      <div class="coupe-tabs">
        <div class="coupe-tab on" onclick="switchCoupeTab(this,'cv-face')">Vue Face</div>
        <div class="coupe-tab" onclick="switchCoupeTab(this,'cv-coupes')">Coupes H+V</div>
        <div class="coupe-tab" onclick="switchCoupeTab(this,'cv-detail')">Détail Profilés</div>
      </div>
      <div class="coupe-body">
        <div id="cv-face">${svgContent}</div>
        <div id="cv-coupes" style="display:none">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem">
            <div><div style="font-size:0.6rem;color:var(--muted);margin-bottom:0.4rem;text-transform:uppercase;letter-spacing:0.08em">Coupe A-A (Horizontale)</div>${cSVG_H}</div>
            <div><div style="font-size:0.6rem;color:var(--muted);margin-bottom:0.4rem;text-transform:uppercase;letter-spacing:0.08em">Coupe B-B (Verticale)</div>${cSVG_V}</div>
          </div>
          <div class="card" style="margin-top:0.8rem">
            <div class="ct">📐 Légende Composition</div>
            <div style="display:flex;gap:1rem;flex-wrap:wrap;font-size:0.65rem">
              <div><span style="display:inline-block;width:14px;height:10px;background:rgba(168,188,208,0.2);border:1px solid var(--alu);margin-right:4px;vertical-align:middle"></span>Cadre dormant (${o.serie})</div>
              <div><span style="display:inline-block;width:14px;height:10px;background:rgba(168,188,208,0.15);border:1px solid var(--alu);margin-right:4px;vertical-align:middle"></span>Ouvrant</div>
              <div><span style="display:inline-block;width:14px;height:10px;background:${glCol};border:1px solid var(--blue2);margin-right:4px;vertical-align:middle"></span>${rInfo.lib} — ${rInfo.comp}</div>
            </div>
          </div>
        </div>
        <div id="cv-detail" style="display:none">
          <div class="card"><div class="ct">🔩 Nomenclature Profilés</div>
            <table>
              <thead><tr><th>Profilé</th><th>Rôle</th><th class="tr">Long. nette (mm)</th><th class="tr">Angle</th><th class="tr">Qté</th></tr></thead>
              <tbody>${o.coupes.map(c=>`<tr>
                <td><span class="badge b-alu">${c.serie}</span> ${c.profile}</td>
                <td style="color:var(--muted);font-size:0.65rem">${c.role}</td>
                <td class="tnum ta">${c.longueur}</td>
                <td style="text-align:right"><span class="cut-badge ${c.angle==='45°'?'cut-45':'cut-90'}">${c.angle}</span></td>
                <td class="tnum">${c.qty/o.qty}</td>
              </tr>`).join('')}</tbody>
            </table>
          </div>
          <div class="card"><div class="ct">🪟 Remplissage & Vitrage</div>
            <div style="background:var(--s3);border:1px solid var(--bd);border-radius:2px;padding:0.8rem;font-size:0.72rem">
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem">
                <div><div style="color:var(--muted);font-size:0.58rem;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.2rem">Remplissage</div><div style="color:var(--text)">${rInfo.lib}</div><div style="color:var(--blue2)">${rInfo.comp} (${rInfo.ep}mm)</div></div>
                <div><div style="color:var(--muted);font-size:0.58rem;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.2rem">Type Verre</div><div style="color:var(--text)">${vInfo.lib}</div><div style="color:var(--muted);font-size:0.62rem">${vInfo.desc}</div></div>
                <div><div style="color:var(--muted);font-size:0.58rem;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.2rem">Surface vitrage</div><div style="color:var(--gold)">${o.calc.surf.toFixed(2)} m²</div></div>
                <div><div style="color:var(--muted);font-size:0.58rem;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.2rem">Prix vitrage</div><div style="color:var(--green)">${fmt(o.calc.cV)} MAD</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

function switchCoupeTab(el,cid){
  el.parentElement.querySelectorAll('.coupe-tab').forEach(t=>t.classList.remove('on'));
  el.classList.add('on');
  ['cv-face','cv-coupes','cv-detail'].forEach(id=>{
    const e=document.getElementById(id);
    if(e) e.style.display=id===cid?'block':'none';
  });
}

function getVar(v){
  const map={'--gold':'#e8a020','--blue':'#4d8ef0','--blue2':'#7db0ff','--alu':'#a8bcd0','--bd':'#2d3650','--bd2':'#3a4560','--s3':'#1e2535','--s4':'#242c3e','--muted':'#68738f','--red':'#e8524a','--green':'#2ecc8e','--text':'#dde4f0'};
  return map[v]||'#888';
}

// ==========================================================================
// REMPLISSAGE PAGE
// ==========================================================================
function renderRemplissage(){
  const el=document.getElementById('remplissage-content');
  const cats=['simple','double','triple','opaque','composite'];
  const catLabel={simple:'🟦 Vitrage Simple',double:'🔵 Double Vitrage',triple:'🔷 Triple Vitrage',opaque:'⬛ Panneaux Opaques',composite:'🔲 Composites'};

  let html=`<div class="card"><div class="ct">ℹ Types de Verre disponibles</div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.5rem">
    ${Object.entries(TYPES_VERRE).map(([k,v])=>`<div style="background:var(--s3);border:1px solid var(--bd);border-radius:2px;padding:0.6rem">
      <div style="font-size:0.7rem;color:var(--text);font-weight:500;margin-bottom:0.2rem">${v.lib}</div>
      <div style="font-size:0.6rem;color:var(--muted)">${v.desc}</div>
    </div>`).join('')}
    </div>
  </div>`;

  cats.forEach(cat=>{
    const items=Object.entries(REMPLISSAGES).filter(([k,r])=>r.cat===cat);
    if(!items.length) return;
    html+=`<div class="card"><div class="ct">${catLabel[cat]||cat}</div>
      <div class="glass-grid">
      ${items.map(([k,r])=>`<div class="glass-card" onclick="selectRempl('${k}',this)">
        <div class="glass-card-ep">${r.ep}<span style="font-size:0.65rem">mm</span></div>
        <div class="glass-card-type">${r.lib}</div>
        <div class="glass-card-comp">${r.comp}</div>
        <div style="margin-top:0.3rem;font-size:0.6rem;color:var(--green)">${r.prix} MAD/m²</div>
      </div>`).join('')}
      </div>
    </div>`;
  });

  // Sélecteur épaisseur pour calcul direct
  html+=`<div class="card g"><div class="ct">🔢 Calcul Rapide par Épaisseur</div>
    <div class="fg fg3">
      <div class="field"><label>Épaisseur souhaitée (mm)</label>
        <select id="ep-select" onchange="calcRempl()">
          ${Object.entries(REMPLISSAGES).map(([k,r])=>`<option value="${k}">${r.ep}mm — ${r.lib}</option>`).join('')}
        </select>
      </div>
      <div class="field"><label>Surface (m²)</label><input type="number" id="ep-surf" placeholder="1.68" step="0.01" oninput="calcRempl()"></div>
      <div class="field"><label>Quantité ouvrages</label><input type="number" id="ep-qty" value="1" min="1" oninput="calcRempl()"></div>
    </div>
    <div id="ep-result" style="font-size:0.72rem;color:var(--muted)">—</div>
  </div>`;
  el.innerHTML=html;
}

function selectRempl(k,el){
  document.querySelectorAll('.glass-card').forEach(c=>c.classList.remove('on'));
  el.classList.add('on');
}

function calcRempl(){
  const k=document.getElementById('ep-select').value;
  const surf=+document.getElementById('ep-surf').value;
  const qty=+document.getElementById('ep-qty').value||1;
  if(!surf) return;
  const r=REMPLISSAGES[k];
  const total=r.prix*surf*qty;
  document.getElementById('ep-result').innerHTML=`<strong>${r.lib}</strong> — ${r.comp} — ${r.ep}mm &nbsp;|&nbsp; Surface: <strong>${surf}m²</strong> × ${qty} = <strong>${(surf*qty).toFixed(2)}m²</strong> &nbsp;|&nbsp; Coût: <strong style="color:var(--green)">${fmt(total)} MAD</strong>`;
}

// ==========================================================================
// SÉRIES PAGE
// ==========================================================================
function renderSeries(){
  const el=document.getElementById('series-content');
  let html='';
  ['MA','ST','EU','CU'].forEach(f=>{
    const series=S.series.filter(s=>s.f===f);
    html+=`<div class="fb">
      <div class="fh">
        <div class="fn ${f.toLowerCase()}">${FOURN[f].f} ${FOURN[f].l} <span style="font-size:0.62rem;color:var(--muted);font-weight:400">(${series.length})</span></div>
        <button class="btn btn-s xs" onclick="openModal('m-profil');document.getElementById('mp-f').value='${f}';filterSeriesModal()">＋ Profilé</button>
      </div>`;
    if(!series.length){html+=`<div style="color:var(--muted);font-size:0.65rem;padding:0.3rem 0;font-style:italic">Aucune série</div>`;}
    else series.forEach(s=>{
      const profs=S.profiles.filter(p=>p.s===s.nom);
      html+=`<div class="serie-card">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.4rem;margin-bottom:${profs.length?'0.55rem':'0'}">
          <div style="display:flex;align-items:center;gap:0.4rem;flex-wrap:wrap">
            <span class="badge b-${f==='MA'?'ma':f==='ST'?'st':f==='EU'?'eu':'cu'}">${s.nom}</span>
            <span style="font-size:0.75rem;color:var(--text)">${s.des}</span>
            ${s.rpt==='oui'?'<span class="badge b-gr" style="font-size:0.5rem">RPT</span>':''}
          </div>
          <div style="display:flex;align-items:center;gap:0.4rem">
            <span style="font-size:0.6rem;color:var(--muted)">${s.po}kg/m · ${s.lg}mm</span>
            <span style="font-family:\'Barlow Condensed\',sans-serif;font-size:0.88rem;font-weight:700;color:var(--gold)">${s.px} MAD/ml</span>
            <button class="btn btn-d" onclick="delSerie('${s.id}')">✕</button>
          </div>
        </div>
        ${s.notes?`<div style="font-size:0.58rem;color:var(--muted);margin-bottom:0.4rem">📝 ${s.notes}</div>`:''}
        ${profs.length?`<table style="font-size:0.68rem">
          <thead><tr><th>Code</th><th>Type</th><th class="tr">Poids</th><th class="tr">Barre</th><th class="tr">Brut MAD</th><th class="tr">Anod. MAD</th><th class="tr">Laqué MAD</th><th></th></tr></thead>
          <tbody>${profs.map(p=>`<tr>
            <td><span class="badge b-alu">${p.code}</span></td>
            <td style="color:var(--muted)">${p.t}</td>
            <td class="tnum">${p.po}</td>
            <td class="tnum">${p.lg}</td>
            <td class="tnum ta">${p.pb}</td>
            <td class="tnum">${p.pa}</td>
            <td class="tnum">${p.pl}</td>
            <td><button class="btn btn-d" onclick="delProfile('${p.id}')">✕</button></td>
          </tr>`).join('')}</tbody>
        </table>`:
        `<div style="font-size:0.6rem;color:var(--muted)">Aucun profilé — <span style="color:var(--blue2);cursor:pointer" onclick="openModal('m-profil');document.getElementById('mp-f').value='${f}';document.getElementById('mp-s').innerHTML='<option>${s.nom}</option>'">＋ Ajouter</span></div>`}
      </div>`;
    });
    html+='</div>';
  });
  el.innerHTML=html;
}

// ==========================================================================
// ACCESSOIRES PAGE
// ==========================================================================
function renderAccContent(){
  const el=document.getElementById('acc-content');
  if(!S.accessoires.length){el.innerHTML=`<div class="empty"><div class="empty-i">⚙</div><div class="empty-t">Aucun accessoire</div></div>`;return;}
  const fStats={};
  S.accessoires.forEach(a=>{fStats[a.f]=(fStats[a.f]||0)+1;});
  const cats=[...new Set(S.accessoires.map(a=>a.cat))];
  let html=`<div style="display:flex;gap:0.35rem;flex-wrap:wrap;margin-bottom:0.8rem">
    ${Object.entries(fStats).map(([f,n])=>`<span class="badge b-${f==='MA'?'ma':f==='ST'?'st':f==='EU'?'eu':'cu'}">${FOURN[f]?.f||''} ${FOURN[f]?.l||f} · ${n}</span>`).join('')}
    <span style="font-size:0.6rem;color:var(--muted);padding:0.1rem 0.4rem">${S.accessoires.length} total</span>
  </div>`;
  cats.forEach(cat=>{
    const items=S.accessoires.filter(a=>a.cat===cat);
    html+=`<div class="card"><div class="ct">${CAT[cat]||cat} <span style="color:var(--muted)">(${items.length})</span></div>
      <table>
        <thead><tr><th>Réf.</th><th>Désignation</th><th>Fournisseur</th><th>Séries</th><th class="tr">Prix MAD</th><th>Unité</th><th class="tr">Stock</th><th></th></tr></thead>
        <tbody>${items.map(a=>`<tr>
          <td><span class="badge b-alu">${a.ref||'—'}</span></td>
          <td style="color:var(--text)">${a.nom}</td>
          <td><span class="badge b-${a.f==='MA'?'ma':a.f==='ST'?'st':a.f==='EU'?'eu':'cu'}">${FOURN[a.f]?.f||''} ${FOURN[a.f]?.l||a.f}</span></td>
          <td style="color:var(--muted);font-size:0.6rem;max-width:120px">${a.ser||'—'}</td>
          <td class="tnum ta">${a.px.toFixed(2)}</td>
          <td style="color:var(--muted);font-size:0.62rem">${a.u}</td>
          <td class="tnum" style="${a.stk<5?'color:var(--red)':''}">${a.stk}</td>
          <td><button class="btn btn-d" onclick="delAcc('${a.id}')">✕</button></td>
        </tr>`).join('')}</tbody>
      </table>
    </div>`;
  });
  el.innerHTML=html;
}

// ==========================================================================
// TARIFS PAGE
// ==========================================================================
function renderTarifs(){
  const t=S.tarifs;
  document.getElementById('tarifs-form').innerHTML=`<div style="display:grid;grid-template-columns:1fr 1fr;gap:0.8rem">
    <div class="card"><div class="ct">👷 Main d'Œuvre & Marges</div><div class="fg fg1">
      <div class="field"><label>MO montage (MAD/h)</label><input type="number" value="${t.mo_montage}" onchange="S.tarifs.mo_montage=+this.value"></div>
      <div class="field"><label>MO pose chantier (MAD/h)</label><input type="number" value="${t.mo_pose}" onchange="S.tarifs.mo_pose=+this.value"></div>
      <div class="field"><label>Frais chantier (%)</label><input type="number" value="${t.marge_chantier}" onchange="S.tarifs.marge_chantier=+this.value"></div>
    </div></div>
    <div class="card"><div class="ct">⚙ Accessoires Standard</div><div class="fg fg1">
      <div class="field"><label>Quincaillerie fenêtre (MAD)</label><input type="number" value="${t.quincaillerie_fen}" onchange="S.tarifs.quincaillerie_fen=+this.value"></div>
      <div class="field"><label>Quincaillerie porte (MAD)</label><input type="number" value="${t.quincaillerie_porte}" onchange="S.tarifs.quincaillerie_porte=+this.value"></div>
      <div class="field"><label>Joint (MAD/ml)</label><input type="number" value="${t.joint_ml}" onchange="S.tarifs.joint_ml=+this.value"></div>
      <div class="field"><label>Silicone (MAD/ml)</label><input type="number" value="${t.silicone_ml}" onchange="S.tarifs.silicone_ml=+this.value"></div>
    </div></div>
    <div class="card g"><div class="ct">📊 Bibliothèque</div>
      <div class="si"><span class="sk">Séries totales</span><span class="sv a">${S.series.length}</span></div>
      <div class="si"><span class="sk">Maroc Aluminium</span><span class="sv">${S.series.filter(s=>s.f==='MA').length} séries</span></div>
      <div class="si"><span class="sk">Strugal</span><span class="sv">${S.series.filter(s=>s.f==='ST').length} séries</span></div>
      <div class="si"><span class="sk">Européen</span><span class="sv">${S.series.filter(s=>s.f==='EU').length} séries</span></div>
      <div class="si"><span class="sk">Profilés</span><span class="sv a">${S.profiles.length}</span></div>
      <div class="si"><span class="sk">Accessoires</span><span class="sv a">${S.accessoires.length}</span></div>
    </div>
    <div class="card"><div class="ct">🪟 Prix Vitrages indicatifs (MAD/m²)</div>
      ${Object.entries(REMPLISSAGES).slice(0,8).map(([k,r])=>`<div class="si"><span class="sk">${r.lib}</span><span class="sv">${r.prix}</span></div>`).join('')}
    </div>
  </div>`;
}

// ==========================================================================
// DASHBOARD
// ==========================================================================
function renderDashboard(){
  const tot=S.ouvrages.reduce((s,o)=>s+o.calc.total,0);
  const tML=S.ouvrages.reduce((s,o)=>s+o.calc.ml_brut,0);
  const tS=S.ouvrages.reduce((s,o)=>s+o.calc.surf,0);
  const types={};S.ouvrages.forEach(o=>{types[o.type]=(types[o.type]||0)+1;});
  document.getElementById('dashboard-content').innerHTML=`
    <div class="db-grid">
      <div class="db-card"><div class="db-t">Total Devis (MAD)</div><div class="db-n" style="color:var(--gold)">${fmt(tot)}</div></div>
      <div class="db-card"><div class="db-t">Ouvrages</div><div class="db-n">${S.ouvrages.length}</div></div>
      <div class="db-card"><div class="db-t">ML Profilés brut</div><div class="db-n" style="color:var(--alu)">${tML.toFixed(1)}m</div></div>
      <div class="db-card"><div class="db-t">Surface totale</div><div class="db-n" style="color:var(--blue2)">${tS.toFixed(1)}m²</div></div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:0.8rem">
      <div class="card"><div class="ct">🏭 Fournisseurs Séries</div>
        ${['MA','ST','EU','CU'].map(f=>`<div class="si"><span class="sk"><span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:${f==='MA'?'var(--gold)':f==='ST'?'var(--green)':f==='EU'?'var(--purple)':'var(--teal)'};margin-right:5px"></span>${FOURN[f].l}</span><span class="sv">${S.series.filter(s=>s.f===f).length} séries · ${S.profiles.filter(p=>p.f===f).length} profilés</span></div>`).join('')}
      </div>
      <div class="card"><div class="ct">⚙ Accessoires</div>
        ${Object.entries(S.accessoires.reduce((a,c)=>{a[c.cat]=(a[c.cat]||0)+1;return a},{})).map(([c,n])=>`<div class="si"><span class="sk" style="font-size:0.62rem">${CAT[c]||c}</span><span class="sv a">${n}</span></div>`).join('')}
      </div>
      <div class="card"><div class="ct">📦 Dévis par Type</div>
        ${Object.entries(types).map(([t,n])=>{
          const c=S.ouvrages.filter(o=>o.type===t).reduce((s,o)=>s+o.calc.total,0);
          return `<div class="si"><span class="sk">${t}</span><span class="sv">${n} · ${fmt(c)} MAD</span></div>`;
        }).join('')}
        ${!S.ouvrages.length?'<div style="color:var(--muted);font-size:0.65rem">Aucun ouvrage</div>':''}
      </div>
    </div>`;
}

// ==========================================================================
// CRUD
// ==========================================================================
function openModal(id){document.getElementById(id).style.display='flex';}
function closeModal(id){document.getElementById(id).style.display='none';}

function saveSerie(){
  const nom=document.getElementById('ms-nom').value.trim();
  if(!nom){alert('Nom requis');return;}
  S.series.push({id:'s'+Date.now(),nom,f:document.getElementById('ms-f').value,des:document.getElementById('ms-des').value,px:+document.getElementById('ms-px').value||40,po:+document.getElementById('ms-po').value||1.5,lg:+document.getElementById('ms-lg').value||6000,app:document.getElementById('ms-app').value,rpt:document.getElementById('ms-rpt').value,notes:document.getElementById('ms-no').value});
  populateSelects();renderSeries();closeModal('m-serie');
  document.getElementById('ms-nom').value='';document.getElementById('ms-des').value='';document.getElementById('ms-no').value='';
}

function saveProfile(){
  const code=document.getElementById('mp-code').value.trim();
  if(!code){alert('Code requis');return;}
  S.profiles.push({id:'p'+Date.now(),code,f:document.getElementById('mp-f').value,s:document.getElementById('mp-s').value,t:document.getElementById('mp-t').value,po:+document.getElementById('mp-po').value||1.5,lg:+document.getElementById('mp-lg').value||6000,pb:+document.getElementById('mp-pb').value||40,pa:+document.getElementById('mp-pa').value||50,pl:+document.getElementById('mp-pl').value||60});
  renderSeries();closeModal('m-profil');document.getElementById('mp-code').value='';
}

function saveAcc(){
  const nom=document.getElementById('ma-nom').value.trim();
  if(!nom){alert('Désignation requise');return;}
  S.accessoires.push({id:'a'+Date.now(),ref:document.getElementById('ma-ref').value,nom,f:document.getElementById('ma-f').value,cat:document.getElementById('ma-cat').value,px:+document.getElementById('ma-px').value||0,u:document.getElementById('ma-u').value,ser:document.getElementById('ma-ser').value,stk:+document.getElementById('ma-stk').value||0,no:document.getElementById('ma-no').value});
  renderAccContent();closeModal('m-acc');
  ['ma-ref','ma-nom','ma-ser','ma-stk','ma-no'].forEach(id=>document.getElementById(id).value='');
}

function delSerie(id){if(!confirm('Supprimer ?'))return;const s=S.series.find(s=>s.id===id);if(s)S.profiles=S.profiles.filter(p=>p.s!==s.nom);S.series=S.series.filter(s=>s.id!==id);populateSelects();renderSeries();}
function delProfile(id){if(!confirm('Supprimer ?'))return;S.profiles=S.profiles.filter(p=>p.id!==id);renderSeries();}
function delAcc(id){if(!confirm('Supprimer ?'))return;S.accessoires=S.accessoires.filter(a=>a.id!==id);renderAccContent();}

// ==========================================================================
// UTILS
// ==========================================================================
function fmt(n){return Math.round(n).toLocaleString('fr-MA');}
function pct(a,b){return b>0?(a/b*100).toFixed(1):'0.0';}

function clearDevis(){if(!confirm('Vider tout le devis ?'))return;S.ouvrages=[];document.getElementById('nb-ouv').textContent=0;updatePanel();renderOuvragesList();updateDrawSelect();}
function printDevis(){window.print();}
function printDebit(){window.print();}
function printDrawing(){window.print();}

function exportData(){
  const data=JSON.stringify({series:S.series,profiles:S.profiles,accessoires:S.accessoires,tarifs:S.tarifs,ouvrages:S.ouvrages},null,2);
  const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([data],{type:'application/json'}));a.download='alumcalc-v3.json';a.click();
}

// ==========================================================================
// INIT
// ==========================================================================
document.getElementById('cl-date').valueAsDate=new Date();
populateSelects();
updateRempliDetails();