let header = document.querySelector('header') as HTMLDivElement
// dropDown menu language
let BtnLang = document.querySelector(".BtnLang") as HTMLButtonElement;
let dropDownLang = document.getElementById("dropDownLang") as HTMLUListElement;
let dropDownLangLi = document.querySelectorAll("#dropDownLang li") as NodeListOf<HTMLElement>;
// toggle aside menu 
let openMenu = document.getElementById("openMenu") as HTMLButtonElement;
let btnCloseMenu = document.getElementById("btnCloseMenu") as HTMLButtonElement;
let responsiveNavLinks = document.getElementById("responsiveNavLinks") as HTMLUListElement
let overlay = document.getElementById("overlay") as HTMLDivElement
// cart
let CartShop = document.getElementById("CartShop") as HTMLDivElement;
let openCart = document.getElementById("openCart") as HTMLButtonElement;
let closeCart = document.getElementById("closeCart") as HTMLButtonElement;
// navSearchForm
let SearchForm = document.getElementById("navSearchForm") as HTMLFormElement;
let openNavSearch = document.getElementById("openNavSearch") as HTMLButtonElement;
console.log(openNavSearch)
let closeNavSearch = document.getElementById("closeNavSearch") as HTMLButtonElement;



// ==========(((((((((((((((((((((((((((global functions)))))))))))))))))))))))))))=============
// =====calcHeight============
function calcMaxHeight(items: NodeListOf<HTMLLIElement>): number {
  let maxHeight: number = 0;
  // mobileResponsive.classList.add("open")
  items.forEach((link: any) => {
    maxHeight += link.clientHeight
  })

  return maxHeight;
}
// (((((((((animation slide )))))))))
let animationSlide = (dir: 'up' | 'down', totalHeight: NodeListOf<HTMLLIElement> | any, targetEL: HTMLUListElement | any) => {
  let height = dir === "down" ? 0 : calcMaxHeight(totalHeight);
  let targetHeight = dir === 'down' ? calcMaxHeight(totalHeight) : 0;
  let speed = dir === 'down' ? (targetHeight / (targetHeight * 0.1)) : (height / (height * 0.1));
  function animate() {
    if ((height <= 0 && dir === 'up') || (height >= targetHeight && dir === 'down')) {
      if (dir === 'up') {
        targetEL.style.height = "0";
      }
      return; // Exit animation loop
    }
    height += dir === "down" ? speed : -speed;
    if (height > targetHeight && dir === 'down') {
      height = targetHeight;
    }
    targetEL.style.height = `${height}px`;
    // Request next animation frame
    requestAnimationFrame(animate);
  }

  // Start the animation loop
  requestAnimationFrame(animate);
}
// =====toggle classes ========
const toggleClass = (Element: HTMLElement | null, Classes: string[], action: 'add' | 'remove' | 'toggle') => {
  if (!Element) return console.log("no element");
  Classes.forEach(cls => {
    if (action === 'add') {
      if(cls)Element.classList.add(cls);
    } else if (action === 'remove') {
      if(cls)Element.classList.remove(cls);
    } else if (action === 'toggle') {
      if(cls)Element.classList.toggle(cls);
    }
  });
}
// =====aria expanded=============
const setAriaExpanded = (btn: HTMLButtonElement | null, EX: boolean) => {
  btn?.setAttribute('aria-expanded', EX.toString())
};
// =======toggle dropdown=========
const toggleDropDown = (action: 'open' | 'close', Li: NodeListOf<HTMLLIElement> | any, DropDown: HTMLUListElement | any) => {
  if (action == 'open') {
    if (DropDown) toggleClass(DropDown, ['open'], 'add');
    if (DropDown && Li) animationSlide('down', Li, DropDown);
  } else {
    if (DropDown && Li) animationSlide('up', Li, DropDown);
    setTimeout(() => {
      if (DropDown) toggleClass(DropDown, ['open'], 'remove');
    }, 100)
  }
}
// =======toggleAsideMenu=========
const toggleAsideMenu = (action: 'open' | 'close', asideEl: HTMLUListElement | HTMLDivElement | HTMLFormElement, ClassName: string | null, RemoveClass: string, openBtn: HTMLButtonElement | null, closeBtn: HTMLButtonElement | null, isOverlay: boolean, isEffectLink: boolean) => {
  if (!asideEl || !openBtn || !closeBtn) return;
  if (action === 'open') {
    toggleClass(asideEl, [RemoveClass], 'remove');
    if(ClassName)toggleClass(asideEl, [ClassName], 'add');
    setAriaExpanded(openBtn, true);
    setAriaExpanded(closeBtn, true);
    isOverlay && toggleClass(overlay, ['active'], 'add');
    if (isEffectLink) {
      let allLinkEffect = asideEl.querySelectorAll('li .navLink') as NodeListOf<HTMLLinkElement>;
      allLinkEffect.forEach((link: HTMLLinkElement, index: number) => {
        link.style.setProperty('--i', `${index + 1}`)
      })
    }
    requestAnimationFrame(() => {
      toggleClass(asideEl, ['open'], 'add');
    })

  } else {
    toggleClass(asideEl, ['open'], 'remove');
    setAriaExpanded(openBtn, false);
    setAriaExpanded(closeBtn, false);
    isOverlay && toggleClass(overlay, ['active'], 'remove');
    setTimeout(()=>{
      toggleClass(asideEl, [RemoveClass], 'add');
      if(ClassName)toggleClass(asideEl, [ClassName], 'remove');
    },500)
    // requestAnimationFrame(() => {
    //   asideEl.addEventListener('transitionend', function hideMenu() {
    //     toggleClass(asideEl, [RemoveClass], 'add');
    //     if(ClassName)toggleClass(asideEl, [ClassName], 'remove');
    //     asideEl.removeEventListener('transitionend', hideMenu);
    //   }, { once: true })
    // })
  }
}



// =================================================================
// ==========(((((((((((((((((((((((((((privet functions)))))))))))))))))))))))))))=============
// drop down menu lang function 
const showDropDownLang = () => {
  if (!BtnLang) return;
  toggleClass(BtnLang, ['open'], 'toggle');
  let isOpen = BtnLang.classList.contains('open');
  toggleDropDown(isOpen ? 'open' : 'close', dropDownLangLi, dropDownLang);
  setAriaExpanded(BtnLang, isOpen);
}
// you should remove this function in build because backend make this function
// let toggleDropBtnText = () => {
//   if (!dropDownLangLi || !BtnLang) return;
//   dropDownLangLi.forEach((li: HTMLElement | any) => {
//     li.addEventListener('click', () => {
//       let LangSelect: HTMLLinkElement | null = li.querySelector('a');
//       let BtnTextValue: HTMLSpanElement | null = BtnLang.querySelector("span");
//       if (LangSelect && BtnTextValue) {
//         let LangSelectValue: string = LangSelect.textContent?.trim() || '';
//         let LangSelectImg: HTMLImageElement | null = LangSelect.querySelector('img')
//         let BtnImgValue: HTMLImageElement | null = BtnLang.querySelector("img");
//         BtnTextValue.innerText = LangSelectValue;
//         if (LangSelectImg && BtnImgValue) {
//           BtnImgValue.src = LangSelectImg.src;
//         }
//         const newLang = LangSelectValue === "English" ? 'en' : 'ar';
//         document.documentElement.setAttribute('lang', newLang);
//         localStorage.setItem('lang', newLang);


//         toggleDropDown('close', dropDownLangLi, dropDownLang);
//         if (BtnLang) toggleClass(BtnLang, ['open'], 'remove');
//         setAriaExpanded(BtnLang, false);
//       }




//     })
//   })

// }
// const SavedLang = () => {
//   if (localStorage.getItem('lang') === 'en' && localStorage.getItem('lang') !== '') {
//     document.documentElement.setAttribute('lang', 'en');
//     if (BtnLang) {
//       let BtnImgValue: HTMLImageElement | null = BtnLang.querySelector("img");
//       let BtnTextValue: HTMLSpanElement | null = BtnLang.querySelector("span");
//       let defaultImage: HTMLElement | null = Array.from(dropDownLangLi).find((li: HTMLElement) => li.querySelector('a')?.textContent?.trim() === 'English') as HTMLElement | null;
//       if (BtnTextValue) {
//         BtnTextValue.innerText = 'English';
//       }
//       if (BtnImgValue && defaultImage) {
//         BtnImgValue.src = defaultImage?.querySelector('img')?.src || '';
//       }
//     }

//   } else {
//     document.documentElement.setAttribute('lang', 'ar');
//   }
// }
// toggleDropBtnText();
// SavedLang();

// =======toggle nav search ========
let toggleSearch = (action:'open'|'close')=>{
  if(action=='open'){
    toggleClass(closeNavSearch , ['d-none'],'remove');
    toggleClass(openNavSearch , ['showIcon'],'remove');
    toggleClass(openNavSearch , ['hideIcon'],'add');
    toggleAsideMenu('open', SearchForm, null, 'd-none', openNavSearch, closeNavSearch, false, false);
    let Top = header.clientHeight;

    SearchForm.style.top = `${Top}px`;
    requestAnimationFrame(()=>{
      toggleClass(closeNavSearch , ['hideIcon'],'remove');
      toggleClass(closeNavSearch , ['showIcon'],'add');
      toggleClass(openNavSearch , ['d-none'],'add');
    })
  } else{
    toggleClass(openNavSearch , ['d-none'],'remove');
    toggleClass(closeNavSearch , ['showIcon'],'remove');
    toggleClass(closeNavSearch , ['hideIcon'],'add');
    toggleAsideMenu('close', SearchForm, null, 'd-none', openNavSearch, closeNavSearch, false, false);
    SearchForm.style.top = `-80px`;
    requestAnimationFrame(()=>{
      toggleClass(openNavSearch , ['hideIcon'],'remove');
      toggleClass(openNavSearch , ['showIcon'],'add');
      toggleClass(closeNavSearch , ['d-none'],'add');
    })
  }
}





if (openMenu) openMenu.addEventListener("click", () => toggleAsideMenu('open', responsiveNavLinks, 'responsiveNavLinks', 'lg-max-d-none', openMenu, btnCloseMenu, true, true));
if (btnCloseMenu) btnCloseMenu.addEventListener("click", () => toggleAsideMenu('close', responsiveNavLinks, 'responsiveNavLinks', 'lg-max-d-none', openMenu, btnCloseMenu, true, true));

if (BtnLang) BtnLang.addEventListener('click', showDropDownLang)

  if(openCart) openCart.addEventListener('click', ()=>toggleAsideMenu('open', CartShop, null, 'd-none', openCart, closeCart, true, false));
  if(closeCart) closeCart.addEventListener('click', ()=>toggleAsideMenu('close', CartShop, null, 'd-none', openCart, closeCart, true, false));

  if(openNavSearch) openNavSearch.addEventListener('click',()=>toggleSearch('open'))
  if(closeNavSearch) closeNavSearch.addEventListener('click',()=>toggleSearch('close'))
window.addEventListener("click", (e: Event) => {
  const target = e.target as HTMLElement;

  if (overlay && overlay.contains(target)) {
    toggleAsideMenu('close', responsiveNavLinks, 'responsiveNavLinks', 'lg-max-d-none',openMenu, btnCloseMenu, true, true);

    
    toggleAsideMenu('close', CartShop, null, 'd-none', openCart, closeCart, true, false)
  }
  if(!openNavSearch.contains(target) &&!SearchForm.contains(target) ){
    toggleSearch('close');
  }


});

