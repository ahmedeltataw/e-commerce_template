let Q=document.querySelector("header"),g=document.querySelector(".BtnLang"),A=document.getElementById("dropDownLang"),R=document.querySelectorAll("#dropDownLang li"),f=document.querySelector(".AvatarBtn"),M=document.getElementById("dropDownUser"),j=document.querySelectorAll("#dropDownUser li"),h=document.getElementById("openMenu"),E=document.getElementById("btnCloseMenu"),U=document.getElementById("responsiveNavLinks"),m=document.getElementById("overlay"),N=document.getElementById("CartShop"),L=document.getElementById("openCart"),I=document.getElementById("closeCart"),p=document.getElementById("navSearchForm"),c=document.getElementById("openNavSearch"),s=document.getElementById("closeNavSearch"),G=document.querySelectorAll(".accordionItem button"),w=document.getElementById("openFilter"),k=document.getElementById("closeFilter"),P=document.getElementById("accordionResponsive"),H=document.getElementById("userPhoto"),S=document.getElementById("uploadUserPhoto"),F=document.getElementById("whatsAppBtn");function V(t){let e=0;return t.forEach(n=>{e+=n.clientHeight}),e}const u=(t,e,n)=>{let o=t==="down"?0:V(e),i=t==="down"?V(e):0,r=t==="down"?i/(i*.05):o/(o*.05);function a(){if(o<=0&&t==="up"||o>=i&&t==="down"){t==="up"&&(n.style.height="0");return}o+=t==="down"?r:-r,o>i&&t==="down"&&(o=i),n.style.height=`${o}px`,requestAnimationFrame(a)}requestAnimationFrame(a)},l=(t,e,n)=>{if(!t)return console.log("no element");e.forEach(o=>{n==="add"?o&&t.classList.add(o):n==="remove"?o&&t.classList.remove(o):n==="toggle"&&o&&t.classList.toggle(o)})},y=(t,e)=>{t?.setAttribute("aria-expanded",e.toString())},W=(t,e,n,o)=>{t=="open"?(n&&l(n,["open"],"add"),n&&e&&u("down",e,n)):(n&&e&&u("up",e,n),setTimeout(()=>{n&&l(n,["open"],"remove")},o))},d=(t,e,n,o,i,r,a,x)=>{!e||!i||!r||(t==="open"?(l(e,[o],"remove"),n&&l(e,[n],"add"),y(i,!0),y(r,!0),a&&l(m,["active"],"add"),x&&e.querySelectorAll("li .navLink").forEach((J,K)=>{J.style.setProperty("--i",`${K+1}`)}),requestAnimationFrame(()=>{l(e,["open"],"add")})):(l(e,["open"],"remove"),y(i,!1),y(r,!1),a&&l(m,["active"],"remove"),setTimeout(()=>{l(e,[o],"add"),n&&l(e,[n],"remove")},500)))},B=(t,e,n,o,i)=>{if(!n)return;l(n,["open"],i);let r=n.classList.contains("open");W(r?"open":"close",t,e,o),y(n,r)},T=t=>{if(t=="open"){l(s,["d-none"],"remove"),l(c,["showIcon"],"remove"),l(c,["hideIcon"],"add"),d("open",p,null,"d-none",c,s,!1,!1);let e=Q.clientHeight;p.style.top=`${e}px`,requestAnimationFrame(()=>{l(s,["hideIcon"],"remove"),l(s,["showIcon"],"add"),l(c,["d-none"],"add")})}else l(c,["d-none"],"remove"),l(s,["showIcon"],"remove"),l(s,["hideIcon"],"add"),d("close",p,null,"d-none",c,s,!1,!1),p.style.top="-80px",requestAnimationFrame(()=>{l(c,["hideIcon"],"remove"),l(c,["showIcon"],"add"),l(s,["d-none"],"add")})},Y=()=>{G.forEach(t=>{let e=t.nextElementSibling,n=Array.from(e.children);if(e&&n)if(t.classList.contains("active")){let o=V(n);e.style.height=`${o}px`,u("down",n,e)}else u("up",n,e);t.addEventListener("click",()=>{G.forEach(r=>{if(r!==t&&r.classList.contains("active")){r.classList.remove("active");let a=r.nextElementSibling,x=Array.from(a.children);a&&u("up",x,a)}}),t.classList.toggle("active");let o=t.nextElementSibling,i=Array.from(o.children);o&&i&&(t.classList.contains("active")?u("down",i,o):u("up",i,o))})})};console.log(Y);const X=()=>{S&&H&&S.files?.[0]&&(H.src=URL.createObjectURL(S.files[0]))};let $=document.getElementById("myOderTable"),C=document.getElementById("ModelMyOrder"),v=document.getElementById("CloseOrderModel");const Z=()=>{$&&$.addEventListener("click",t=>{let e=t.target;if(e.closest(".ViewOrderBtn")){let n=e.closest(".ViewOrderBtn");console.log(n),n&&d("open",C,null,"d-none",n,v,!0,!1),v&&v.addEventListener("click",()=>d("close",C,null,"d-none",n,v,!0,!1)),window.addEventListener("click",o=>{let i=o.target;m&&m.contains(i)&&d("close",C,null,"d-none",n,v,!0,!1)})}})};Z();let b=document.getElementById("quickyViewModel"),q=document.getElementById("CloseViewModel"),D=document.querySelectorAll(".pro-1");const O=(t,e)=>{e&&d(t==="open"?"open":"close",b,null,"d-none",e,q,!0,!1)},_=()=>{D&&D.forEach(t=>{t&&t.addEventListener("click",e=>{let n=e.target;if(n.closest(".quickView")){let o=n.closest(".quickView");console.log(o),o&&O("open",o),q&&q.addEventListener("click",()=>O("close",o)),window.addEventListener("click",i=>{let r=i.target;m&&m.contains(r)&&O("close",o)})}})})};_();let ee=document.querySelector(".gridSystem #productImgGallery .mainImg img"),te=document.querySelectorAll(".gridSystem #productImgGallery .subImg img"),ne=document.querySelector(".showModel #ModelImgGallery .mainImg img"),oe=document.querySelectorAll(".showModel #ModelImgGallery .subImg img");const z=(t,e)=>{t&&e&&e.forEach(n=>{n.addEventListener("click",()=>{e.forEach(o=>o.classList.remove("active")),l(n,["active"],"add"),t.style.opacity="0",setTimeout(()=>{t.style.opacity="1",t.src=n.src},200)})})};z(ee,te);z(ne,oe);h&&h.addEventListener("click",()=>d("open",U,"responsiveNavLinks","lg-max-d-none",h,E,!0,!0));E&&E.addEventListener("click",()=>d("close",U,"responsiveNavLinks","lg-max-d-none",h,E,!0,!0));g&&g.addEventListener("click",()=>B(R,A,g,100,"toggle"));f&&f.addEventListener("click",()=>B(j,M,f,200,"toggle"));L&&L.addEventListener("click",()=>d("open",N,null,"d-none",L,I,!0,!1));I&&I.addEventListener("click",()=>d("close",N,null,"d-none",L,I,!0,!1));w&&w.addEventListener("click",()=>d("open",P,"responsive-accordion","lg-max-d-none",w,k,!0,!1));k&&k.addEventListener("click",()=>d("close",P,"responsive-accordion","lg-max-d-none",w,k,!0,!1));c&&c.addEventListener("click",()=>T("open"));s&&s.addEventListener("click",()=>T("close"));S&&S.addEventListener("change",X);window.addEventListener("click",t=>{const e=t.target;m&&m.contains(e)&&(d("close",U,"responsiveNavLinks","lg-max-d-none",h,E,!0,!0),d("close",N,null,"d-none",L,I,!0,!1),d("close",P,"responsive-accordion","lg-max-d-none",w,k,!0,!1)),!c.contains(e)&&!p.contains(e)&&T("close"),f!==null&&M!==null&&!f.contains(e)&&!M.contains(e)&&B(j,M,f,200,"remove"),g!==null&&A!==null&&!g.contains(e)&&!A.contains(e)&&B(R,A,g,100,"remove")});window.addEventListener("DOMContentLoaded",Y);const le=()=>{F&&(window.scrollY>=120?l(F,["show"],"add"):l(F,["show"],"remove"))};window.addEventListener("scroll",le);
