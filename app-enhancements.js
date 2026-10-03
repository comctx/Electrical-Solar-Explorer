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

document.addEventListener("DOMContentLoaded",()=>{
  recordRecent();
  makeToolbar();
  renderHomeTools();
});
})();