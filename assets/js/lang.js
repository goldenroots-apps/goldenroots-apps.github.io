var LANG_FLAGS={en:"us",th:"th",ja:"jp",zh:"cn",ko:"kr",hi:"in",es:"es"};
var SUPPORTED_LANGS=Object.keys(LANG_FLAGS);
var _langCache={};

function _basePath(){var s=document.querySelector('script[src*="lang.js"]');if(!s)return"";var p=s.getAttribute("src").replace(/assets\/js\/lang\.js$/,"");return p}

function setLang(lang){if(SUPPORTED_LANGS.indexOf(lang)===-1)lang="en";var cached=_langCache[lang];if(cached){_applyLang(lang,cached);return}var base=_basePath();fetch(base+"locales/"+lang+".json").then(function(r){return r.json()}).then(function(data){_langCache[lang]=data;_applyLang(lang,data)})}

function _applyLang(lang,o){document.documentElement.lang=lang;document.documentElement.dir=o.dir||"ltr";localStorage.setItem("lang",lang);document.querySelectorAll("[data-i18n]").forEach(function(el){var k=el.getAttribute("data-i18n");if(o[k])el.innerHTML=o[k]});var f=document.getElementById("lang-flag"),c=document.getElementById("lang-code");if(f)f.className="fi fi-"+(LANG_FLAGS[lang]||"us");if(c)c.textContent=lang.toUpperCase();document.querySelectorAll(".lang-option").forEach(function(el){el.classList.toggle("active",el.getAttribute("data-lang")===lang)});var isPriv=window.location.pathname.indexOf("privacy")!==-1;var title=isPriv&&o.priv_meta_title||o.meta_title;var desc=isPriv&&o.priv_meta_description||o.meta_description;if(title){document.title=title;var og=document.querySelector('meta[property="og:title"]');if(og)og.setAttribute("content",title);var tw=document.querySelector('meta[name="twitter:title"]');if(tw)tw.setAttribute("content",title)}if(desc){var md=document.querySelector('meta[name="description"]');if(md)md.setAttribute("content",desc);var od=document.querySelector('meta[property="og:description"]');if(od)od.setAttribute("content",desc);var td=document.querySelector('meta[name="twitter:description"]');if(td)td.setAttribute("content",desc)}}

function toggleLangMenu(){var e=document.getElementById("lang-dropdown");if(e)e.classList.toggle("open")}

function pickLang(lang){setLang(lang);var e=document.getElementById("lang-dropdown");if(e)e.classList.remove("open")}

document.addEventListener("click",function(e){var d=document.getElementById("lang-dropdown");if(d&&!d.contains(e.target))d.classList.remove("open")});

(function(){var p=new URLSearchParams(window.location.search).get("lang");var s=localStorage.getItem("lang");var lang=p&&SUPPORTED_LANGS.indexOf(p)!==-1?p:s&&SUPPORTED_LANGS.indexOf(s)!==-1?s:"en";document.addEventListener("DOMContentLoaded",function(){setLang(lang)})})();
