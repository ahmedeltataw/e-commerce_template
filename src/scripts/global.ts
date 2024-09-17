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
let closeNavSearch = document.getElementById("closeNavSearch") as HTMLButtonElement;
// product filtering
let AllButton = document.querySelectorAll('.accordionItem button') as NodeListOf<HTMLButtonElement>;
let openFilter = document.getElementById('openFilter') as HTMLButtonElement;
let closeFilter = document.getElementById('closeFilter') as HTMLButtonElement;
let Filter = document.getElementById("accordionResponsive") as HTMLDivElement;


// ==========(((((((((((((((((((((((((((global functions)))))))))))))))))))))))))))=============
// =====calcHeight============
function calcMaxHeight(items: NodeListOf<HTMLLIElement> | HTMLLIElement[]): number {
  let maxHeight: number = 0;
  // mobileResponsive.classList.add("open")
  items.forEach((link: any) => {
    maxHeight += link.clientHeight
  })

  return maxHeight;
}
// (((((((((animation slide )))))))))
const animationSlide = (dir: 'up' | 'down', totalHeight: NodeListOf<HTMLLIElement> | any, targetEL: HTMLUListElement | any) => {
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
// =======toggle nav search ========
const toggleSearch = (action:'open'|'close')=>{
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
// products filter

const filterProductAcc = ()=>{
  AllButton.forEach((btn: HTMLButtonElement) =>{
 
    let contentDiv = btn.nextElementSibling as HTMLDivElement
    let ArrayChild = Array.from(contentDiv.children) as HTMLLIElement []
    if(contentDiv && ArrayChild) {
      if(btn.classList.contains('active')){
        
        let h = calcMaxHeight(ArrayChild)
        contentDiv.style.height = `${h}px`
        animationSlide('down', ArrayChild, contentDiv); // Adjust duration as needed
      } else{
        animationSlide('up', ArrayChild, contentDiv); // Adjust duration as needed
      }
    }
  
  
    btn.addEventListener('click', () => {
      
      AllButton.forEach(button => {
        if (button !== btn && button.classList.contains('active')) {
          button.classList.remove('active');
          let contentDiv = button.nextElementSibling as HTMLDivElement;
          let AllDiv = Array.from(contentDiv.children) 
          if (contentDiv) {
            animationSlide('up', AllDiv, contentDiv); // Adjust duration as needed
          }
        }
      });
  
      btn.classList.toggle('active');
   
      let contentDiv = btn.nextElementSibling as HTMLDivElement
      let ArrayChild = Array.from(contentDiv.children)
      if(contentDiv && ArrayChild) {
        if(btn.classList.contains('active')){
          animationSlide('down', ArrayChild, contentDiv); // Adjust duration as needed
        } else{
          animationSlide('up', ArrayChild, contentDiv); // Adjust duration as needed
        }
      }
      
    });
    
  });
}




if (openMenu) openMenu.addEventListener("click", () => toggleAsideMenu('open', responsiveNavLinks, 'responsiveNavLinks', 'lg-max-d-none', openMenu, btnCloseMenu, true, true));
if (btnCloseMenu) btnCloseMenu.addEventListener("click", () => toggleAsideMenu('close', responsiveNavLinks, 'responsiveNavLinks', 'lg-max-d-none', openMenu, btnCloseMenu, true, true));

if (BtnLang) BtnLang.addEventListener('click', showDropDownLang)

  if(openCart) openCart.addEventListener('click', ()=>toggleAsideMenu('open', CartShop, null, 'd-none', openCart, closeCart, true, false));
  if(closeCart) closeCart.addEventListener('click', ()=>toggleAsideMenu('close', CartShop, null, 'd-none', openCart, closeCart, true, false));

  if(openFilter)openFilter.addEventListener('click' , ()=>toggleAsideMenu('open', Filter, 'responsive-accordion', 'lg-max-d-none', openFilter, closeFilter, true, false));
  if(closeFilter)closeFilter.addEventListener('click' , ()=>toggleAsideMenu('close', Filter, 'responsive-accordion', 'lg-max-d-none', openFilter, closeFilter, true, false));
  if(openNavSearch) openNavSearch.addEventListener('click',()=>toggleSearch('open'));
  if(closeNavSearch) closeNavSearch.addEventListener('click',()=>toggleSearch('close'));
window.addEventListener("click", (e: Event) => {
  const target = e.target as HTMLElement;

  if (overlay && overlay.contains(target)) {

    toggleAsideMenu('close', responsiveNavLinks, 'responsiveNavLinks', 'lg-max-d-none',openMenu, btnCloseMenu, true, true);
    toggleAsideMenu('close', CartShop, null, 'd-none', openCart, closeCart, true, false);
    toggleAsideMenu('close', Filter, 'responsive-accordion', 'lg-max-d-none', openFilter, closeFilter, true, false);


    
  }
  if(!openNavSearch.contains(target) &&!SearchForm.contains(target) ){
    toggleSearch('close');
  }


});


window.addEventListener('DOMContentLoaded' , filterProductAcc);