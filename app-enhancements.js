(()=>{"use strict";
const FAV_KEY="ateFavorites";
const RECENT_KEY="ateRecent";
const THEME_KEY="ateTheme";
const MAX_RECENT=8;

function safeParse(key,fallback){
  try{const v=JSON.parse(localStorage.getItem(key)||"null");return v??fallback}catch{return fallback}
}
function pageFile(){
  const p=location.pathname.split("/").pop();
  return p||"index.html";
}
function pageTitle(){
  return (document.querySelector("header h1")?.textContent||document.querySelector("h1")?.textContent||document.title||"All Things Electrical").trim();
}
function isHome(){return pageFile()==="index.html"||pageFile()===""}
function normalizeList(value){return Array.isArray(value)?value.filter(x=>x&&typeof x.href==="string"&&typeof x.title==="string"):[]}
function getFavs(){return normalizeList(safeParse(FAV_KEY,[]))}
function saveFavs(v){localStorage.setItem(FAV_KEY,JSON.stringify(v))}
function getRecent(){return normalizeList(safeParse(RECENT_KEY,[]))}
function saveRecent(v){localStorage.setItem(RECENT_KEY,JSON.stringify(v.slice(0,MAX_RECENT)))}

function recordRecent(){
  if(isHome()) return;
  const item={href:pageFile(),title:pageTitle()};
  const next=[item,...getRecent().filter(x=>x.href!==item.href)];
  saveRecent(next);
}

function normalizeHomeLinks(){
  if(isHome()) return;
  document.querySelectorAll('a[href="index.html"], a[href="./index.html"]').forEach(a=>{
    const text=(a.textContent||"").trim();
    if(/^All Things Electrical$/i.test(text)||/^Home$/i.test(text)){
      a.textContent="← Home";
      a.setAttribute("aria-label","Return to All Things Electrical home");
    }
  });
}
function isFavorite(){const f=pageFile();return getFavs().some(x=>x.href===f)}
function toggleFavorite(){
  const f=pageFile(),title=pageTitle();
  let list=getFavs();
  if(list.some(x=>x.href===f)) list=list.filter(x=>x.href!==f);
  else list.unshift({href:f,title});
  saveFavs(list);
  updateToolbar();
  renderHomeTools();
}
function applyTheme(theme){
  document.documentElement.dataset.ateTheme=theme;
  localStorage.setItem(THEME_KEY,theme);
  updateToolbar();
}
function toggleTheme(){
  applyTheme(document.documentElement.dataset.ateTheme==="dark"?"light":"dark");
}

function searchableSections(){
  const root=document.querySelector("main")||document.body;
  const seen=new Set(),items=[];
  root.querySelectorAll("section,.panel,article").forEach((el,idx)=>{
    if(seen.has(el))return;
    const text=(el.innerText||"").replace(/\s+/g," ").trim();
    if(text.length<30)return;
    const h=el.querySelector("h2,h3");
    const title=(h?.textContent||"Section "+(idx+1)).trim();
    seen.add(el);items.push({el,title,text});
  });
  if(!items.length){
    root.querySelectorAll("h2,h3").forEach((h,idx)=>{
      const el=h.parentElement;if(!el)return;
      const text=(el.innerText||"").replace(/\s+/g," ").trim();
      items.push({el,title:(h.textContent||"Section "+(idx+1)).trim(),text});
    });
  }
  return items;
}
function closePageFinder(){
  document.getElementById("atePageFinder")?.remove();
}
function openPageFinder(){
  closePageFinder();
  const wrap=document.createElement("div");wrap.id="atePageFinder";wrap.className="ate-page-finder";
  wrap.innerHTML='<div class="ate-finder-card"><div class="ate-finder-head"><strong>Find on This Page</strong><button type="button" id="ateFinderClose" aria-label="Close search">×</button></div><input id="ateFinderInput" type="search" placeholder="Try: cathode, voltage drop, A1/A2..." autocomplete="off"><div id="ateFinderMeta" class="ate-finder-meta">Type a word or phrase from this lesson.</div><div id="ateFinderResults" class="ate-finder-results"></div></div>';
  document.body.appendChild(wrap);
  const input=document.getElementById("ateFinderInput"),results=document.getElementById("ateFinderResults"),meta=document.getElementById("ateFinderMeta");
  document.getElementById("ateFinderClose").onclick=closePageFinder;
  wrap.addEventListener("click",e=>{if(e.target===wrap)closePageFinder()});
  const items=searchableSections();
  input.addEventListener("input",()=>{
    const q=input.value.trim().toLowerCase();
    results.replaceChildren();
    if(!q){meta.textContent="Type a word or phrase from this lesson.";return}
    const hits=items.filter(x=>x.text.toLowerCase().includes(q)).slice(0,12);
    meta.textContent=hits.length?hits.length+" matching section"+(hits.length===1?"":"s"):"No matching section found.";
    hits.forEach(hit=>{
      const low=hit.text.toLowerCase(),pos=low.indexOf(q),start=Math.max(0,pos-65),end=Math.min(hit.text.length,pos+q.length+95);
      const b=document.createElement("button");b.type="button";b.className="ate-finder-result";
      b.innerHTML='<strong></strong><span></span>';
      b.querySelector("strong").textContent=hit.title;
      b.querySelector("span").textContent=(start?"…":"")+hit.text.slice(start,end)+(end<hit.text.length?"…":"");
      b.onclick=()=>{
        closePageFinder();
        hit.el.scrollIntoView({behavior:"smooth",block:"start"});
        hit.el.classList.add("ate-find-highlight");
        setTimeout(()=>hit.el.classList.remove("ate-find-highlight"),1800);
      };
      results.appendChild(b);
    });
  });
  setTimeout(()=>input.focus(),0);
}
function makeToolbar(){
  const bar=document.createElement("div");
  bar.className="ate-toolbar";
  bar.id="ateToolbar";
  if(!isHome()){
    const home=document.createElement("button");
    home.type="button";
    home.id="ateHomeBtn";
    home.textContent="← Home";
    home.setAttribute("aria-label","Return to All Things Electrical home");
    home.addEventListener("click",()=>{window.location.assign("index.html")});
    bar.appendChild(home);

    const find=document.createElement("button");
    find.type="button";find.id="ateFindBtn";find.textContent="⌕ Find on Page";find.addEventListener("click",openPageFinder);
    bar.appendChild(find);

    const fav=document.createElement("button");
    fav.type="button";fav.id="ateFavBtn";fav.addEventListener("click",toggleFavorite);
    bar.appendChild(fav);
  }
  const theme=document.createElement("button");
  theme.type="button";theme.id="ateThemeBtn";theme.addEventListener("click",toggleTheme);
  bar.appendChild(theme);
  document.body.appendChild(bar);
  updateToolbar();
}
function updateToolbar(){
  const fav=document.getElementById("ateFavBtn");
  if(fav){
    const on=isFavorite();
    fav.textContent=on?"★ Favorited":"☆ Add Favorite";
    fav.classList.toggle("ate-fav-on",on);
    fav.setAttribute("aria-pressed",on?"true":"false");
  }
  const theme=document.getElementById("ateThemeBtn");
  if(theme){
    const dark=document.documentElement.dataset.ateTheme==="dark";
    theme.textContent=dark?"☀ Light Mode":"☾ Dark Mode";
  }
}
function makeSavedGrid(items,type){
  if(!items.length){
    const empty=document.createElement("div");
    empty.className="ate-empty";
    empty.textContent=type==="fav"?"No favorites yet. Open any Explorer page and tap “Add Favorite.”":"No recently viewed pages yet.";
    return empty;
  }
  const grid=document.createElement("div");grid.className="ate-link-grid";
  items.forEach(item=>{
    const wrap=document.createElement("div");wrap.style.position="relative";
    const a=document.createElement("a");a.className="ate-saved-link";a.href=item.href;a.textContent=item.title;
    if(type==="fav"){
      const b=document.createElement("button");b.className="ate-remove";b.type="button";b.title="Remove favorite";b.textContent="×";
      b.addEventListener("click",e=>{e.preventDefault();e.stopPropagation();saveFavs(getFavs().filter(x=>x.href!==item.href));renderHomeTools()});
      wrap.appendChild(a);wrap.appendChild(b);
    }else wrap.appendChild(a);
    grid.appendChild(wrap);
  });
  return grid;
}
function getNextCourseStep(){
  const courses=[
    {name:"Electricity 101",steps:[["Electrical Basics","electrical-basics.html"],["Wiring & Installation","wiring-installation.html"],["Protection Devices","protection-devices.html"],["Grounding, Bonding & Shielding","grounding-bonding-shielding.html"],["Test Equipment","test-equipment.html"],["Electrical Basics Quiz","quizzes.html"],["AC Fundamentals Lab","ac-fundamentals-lab.html"],["Transformer Lab","transformer-lab.html"],["Three-Phase Power Lab","three-phase-power-lab.html"],["Grounding & Bonding Trainer","grounding-bonding-trainer.html"],["Home Wiring: Meter to End Device","home-wiring-overview.html"]]},
    {name:"Electronics 101",steps:[["Component Pictures & Identifiers","component-identification.html"],["Resistors / Ohm's Law","electrical-basics.html"],["Capacitors","capacitor.html"],["Inductors & Coils","inductors.html"],["Diodes & LEDs","diodes.html"],["Transistors","transistors.html"],["Integrated Circuits","integrated-circuits.html"],["Rectifier & Power Supply Lab","rectifier-power-supply-lab.html"],["Semiconductor Switching Lab","semiconductor-switching-lab.html"]]},
    {name:"Schematics & Troubleshooting",steps:[["How to Read Schematics","reading-schematics.html"],["Symbol Flashcards","symbol-flashcards.html"],["Schematic Practice","schematic-practice.html"],["Circuit Lab","circuit-lab.html"],["Troubleshooting","troubleshooting.html"],["Troubleshooting Trainer","troubleshooting-trainer.html"]]},
    {name:"Motors & Industrial Controls",steps:[["Relays & Contactors","relays.html"],["Relay / Contactor Simulator","relay-contactor-simulator.html"],["Sensors & Switches","sensors-switches.html"],["Motors & Controls","motors-controls.html"],["PLCs & Automation","plc-automation.html"],["Troubleshooting Trainer","troubleshooting-trainer.html"],["Motor Starter Trainer","motor-starter-trainer.html"],["PLC Ladder Logic Trainer","plc-ladder-trainer.html"],["VFD & Motor Speed Lab","vfd-motor-speed-lab.html"],["Sensors & Controls Lab","sensors-controls-lab.html"],["Sensors-to-PLC Trainer","sensors-plc-trainer.html"]]},
    {name:"Power & Energy",steps:[["Batteries","batteries.html"],["Battery & Charging Lab","battery-charging-lab.html"],["Power Supplies & Rectifiers","power-supplies.html"],["Rectifier & Power Supply Lab","rectifier-power-supply-lab.html"],["Transformers","transformers.html"],["Transformer Lab","transformer-lab.html"],["Generators & Alternators","generators-alternators.html"],["Generator & Alternator Lab","generator-alternator-lab.html"],["Solar Power Electronics","solar-power-electronics.html"],["Solar PV Lab","solar-pv-lab.html"],["Wire & Voltage-Drop Lab","wire-voltage-drop-lab.html"]]}
  ];
  const progress=safeParse("ateCourseProgress",{});
  let best=null;
  courses.forEach((course,ci)=>{
    const done=course.steps.filter((_,si)=>progress[ci+"-"+si]).length;
    const next=course.steps.findIndex((_,si)=>!progress[ci+"-"+si]);
    if(next>=0){
      const candidate={course:course.name,done,total:course.steps.length,title:course.steps[next][0],href:course.steps[next][1],step:next+1};
      if(!best || (done>0&&best.done===0) || done>best.done) best=candidate;
    }
  });
  return best;
}
function renderContinueLearning(){
  if(!isHome()) return;
  let sec=document.getElementById("ateContinueLearning");
  if(!sec){
    sec=document.createElement("section");
    sec.id="ateContinueLearning";
    sec.className="ate-my-tools";
    const my=document.getElementById("ateMyTools");
    if(my) my.insertAdjacentElement("beforebegin",sec);
    else{
      const learning=document.querySelector(".learning-path");
      const tabs=document.querySelector(".tabs");
      if(learning) learning.insertAdjacentElement("afterend",sec);
      else if(tabs) tabs.insertAdjacentElement("beforebegin",sec);
      else document.querySelector("main")?.prepend(sec);
    }
  }
  sec.replaceChildren();
  const h=document.createElement("h2");h.textContent="Continue Learning";sec.appendChild(h);
  const next=getNextCourseStep();
  const p=document.createElement("p");
  p.textContent=next?"Pick up where you left off, or review your most recent lesson.":"Your guided courses are complete. Keep your skills fresh with practice.";
  sec.appendChild(p);
  const items=[];
  if(next) items.push({href:next.href,title:next.course+" · Step "+next.step+": "+next.title});
  else items.push({href:"quizzes.html",title:"Review with Electrical Quizzes"});
  const recent=getRecent()[0];
  if(recent && !items.some(x=>x.href===recent.href)) items.push({href:recent.href,title:"Review: "+recent.title});
  if(items.length<2) items.push({href:"beginner-courses.html",title:"Open Beginner Courses"});
  sec.appendChild(makeSavedGrid(items.slice(0,2),"recent"));
}

function renderHomeTools(){
  if(!isHome()) return;
  let sec=document.getElementById("ateMyTools");
  if(!sec){
    sec=document.createElement("section");sec.id="ateMyTools";sec.className="ate-my-tools";
    const learning=document.querySelector(".learning-path");
    const tabs=document.querySelector(".tabs");
    if(learning) learning.insertAdjacentElement("afterend",sec);
    else if(tabs) tabs.insertAdjacentElement("beforebegin",sec);
    else document.querySelector("main")?.prepend(sec);
  }
  sec.replaceChildren();
  const h=document.createElement("h2");h.textContent="My Tools";sec.appendChild(h);
  const p=document.createElement("p");p.textContent="Your favorites and recently viewed pages stay on this device.";sec.appendChild(p);

  const fh=document.createElement("div");fh.className="ate-tool-subhead";fh.textContent="Favorites";sec.appendChild(fh);
  sec.appendChild(makeSavedGrid(getFavs(),"fav"));

  const rh=document.createElement("div");rh.className="ate-tool-subhead";rh.textContent="Recently Viewed";sec.appendChild(rh);
  sec.appendChild(makeSavedGrid(getRecent(),"recent"));
  if(getRecent().length){
    const clear=document.createElement("button");clear.className="ate-clear-recent";clear.type="button";clear.textContent="Clear Recently Viewed";
    clear.addEventListener("click",()=>{localStorage.removeItem(RECENT_KEY);renderHomeTools()});
    sec.appendChild(clear);
  }
}
const savedTheme=localStorage.getItem(THEME_KEY);
if(savedTheme==="dark"||savedTheme==="light") document.documentElement.dataset.ateTheme=savedTheme;
else if(window.matchMedia?.("(prefers-color-scheme: dark)").matches) document.documentElement.dataset.ateTheme="dark";
else document.documentElement.dataset.ateTheme="light";

function applySharedPolish(){
  if(isHome()) return;
  document.body.classList.add("ate-polished-page");
  document.querySelector("header")?.classList.add("ate-polished-header");
  const main=document.querySelector("main");
  if(!main) return;
  const nav=main.querySelector(":scope > .nav, :scope > nav.nav")||document.querySelector("body > .nav, body > nav.nav");
  nav?.classList.add("ate-polished-nav");
  const headings=[...main.querySelectorAll("h2,h3")].map(h=>(h.textContent||"").trim());
  const hasStart=headings.some(t=>/beginner start here|how to use|start here/i.test(t))||!!main.querySelector(".start,.ate-start-here");
  const skip=new Set(["progress.html","mastery-achievements.html","quizzes.html","glossary.html","beginner-courses.html","electrical-calculator.html","resistor-bands.html","solar-calculator.html","about-help-safety.html"]);
  if(!hasStart&&!skip.has(pageFile())&&nav){
    const sec=document.createElement("section");
    sec.className="ate-start-here";
    sec.innerHTML='<h2>Beginner Start Here</h2><ol><li>Read the overview before changing values or controls.</li><li>Use <strong>Find on Page</strong> when you meet an unfamiliar term.</li><li>Work through the examples from top to bottom.</li><li>Open the related simulator or trainer when one is available.</li><li>Return to the lesson after experimenting and compare what changed.</li></ol>';
    nav.insertAdjacentElement("afterend",sec);
  }
  document.querySelectorAll("footer").forEach(f=>f.classList.add("ate-polished-footer"));
}

document.addEventListener("DOMContentLoaded",()=>{
  normalizeHomeLinks();
  applySharedPolish();
  recordRecent();
  makeToolbar();
  renderHomeTools();
  renderContinueLearning();
});
})();