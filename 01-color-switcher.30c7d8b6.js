const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let r=null;t.addEventListener("click",(function(t){t.target.setAttribute("disabled",""),e.removeAttribute("disabled"),r=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;document.body.style.backgroundColor=`${t}`}),1e3)})),e.addEventListener("click",(function(e){clearInterval(r),e.target.setAttribute("disabled",""),t.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.30c7d8b6.js.map
