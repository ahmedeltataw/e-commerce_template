let header = document.querySelector('header') as HTMLDivElement
// dropDown menu language
let BtnLang = document.querySelector(".BtnLang") as HTMLButtonElement;
let dropDownLang = document.getElementById("dropDownLang") as HTMLUListElement;
let dropDownLangLi = document.querySelectorAll("#dropDownLang li") as NodeListOf<HTMLElement>;
// dropDown user setting
let BtnUser = document.querySelector(".AvatarBtn") as HTMLButtonElement;
let dropDownUser = document.getElementById("dropDownUser") as HTMLUListElement;
let dropDownUserLi = document.querySelectorAll("#dropDownUser li") as NodeListOf<HTMLElement>;
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
// upload img
let userImage = document.getElementById("userPhoto") as HTMLImageElement;
let uploadFile = document.getElementById("uploadUserPhoto") as HTMLInputElement;
// 
let whatsAppBtn = document.getElementById("whatsAppBtn") as HTMLButtonElement;

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
  let speed = dir === 'down' ? (targetHeight / (targetHeight * 0.05)) : (height / (height * 0.05));
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
const toggleDropDown = (action: 'open' | 'close', Li: NodeListOf<HTMLLIElement> | any, DropDown: HTMLUListElement | any,time:number) => {
  if (action == 'open') {
    if (DropDown) toggleClass(DropDown, ['open'], 'add');
    if (DropDown && Li) animationSlide('down', Li, DropDown);
  } else {
    if (DropDown && Li) animationSlide('up', Li, DropDown);
    setTimeout(() => {
      if (DropDown) toggleClass(DropDown, ['open'], 'remove');
    }, time)
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
const showDropDownLang = ( Li: NodeListOf<HTMLLIElement> | any, DropDown: HTMLUListElement | any , Btn:HTMLButtonElement,time:number ,classAction:'toggle' | 'remove') => {
  if (!Btn) return;
  toggleClass(Btn, ['open'], classAction);
  let isOpen = Btn.classList.contains('open');
  toggleDropDown(isOpen ? 'open' : 'close', Li, DropDown,time);
  setAriaExpanded(Btn, isOpen);
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
console.log(filterProductAcc)
/////////////////////////upload img\\\\\\\\\\\\\\\
const UploadImage = () => {
  if(uploadFile && userImage){
    uploadFile.files?.[0] && (userImage.src = URL.createObjectURL(uploadFile.files[0]))
  }
  
}
// ////////////////////////////////////start model order//////////////////////////////////
// toggle order models
let myOderTable = document.getElementById("myOderTable") as HTMLTableElement;
let ModelMyOrder = document.getElementById("ModelMyOrder") as HTMLDivElement;
let CloseOrderModel = document.getElementById("CloseOrderModel") as HTMLButtonElement;
const toggleModelOrder = ()=>{
  if(myOderTable)myOderTable.addEventListener('click',(e:Event)=>{
    let target = e.target as HTMLElement;
    if(target.closest('.ViewOrderBtn')){
      let button = target.closest('.ViewOrderBtn') as HTMLButtonElement;
      console.log(button)
      if(button){
        toggleAsideMenu('open',ModelMyOrder,null,'d-none',button,CloseOrderModel,true,false);
      }
      if(CloseOrderModel) CloseOrderModel.addEventListener('click', ()=> toggleAsideMenu('close',ModelMyOrder,null,'d-none',button,CloseOrderModel,true,false));
      window.addEventListener("click", (e: Event) =>{
        let target = e.target as HTMLElement;
        if(overlay && overlay.contains(target)){
          toggleAsideMenu('close',ModelMyOrder,null,'d-none',button,CloseOrderModel,true,false)
        }
      })
    }

  })
}
toggleModelOrder();
// ////////////////////////////////////end model order//////////////////////////////////
// //////////////////////////////////start view model //////////////////////////////////
let quickyViewModel = document.getElementById("quickyViewModel") as HTMLDivElement;
let CloseViewModel = document.getElementById("CloseViewModel") as HTMLButtonElement;
let openViewModel = document.querySelectorAll(".pro-1") as NodeListOf<HTMLDivElement>
const toggleViewModel = (action:'open'|'close' , btn:HTMLButtonElement | null)=>{
  if(!btn) return ;
  if(action === 'open'){
    toggleAsideMenu('open',quickyViewModel,null,'d-none',btn,CloseViewModel,true,false)
  } else{
    toggleAsideMenu('close',quickyViewModel,null,'d-none',btn,CloseViewModel,true,false)
  }
}
const ViewModel =()=>{
  if(openViewModel)openViewModel.forEach((Div:HTMLDivElement)=>{
    if(Div)Div.addEventListener('click',(e:Event)=>{
      let target = e.target as HTMLElement;
      if(target.closest('.quickView')){
        let button = target.closest('.quickView') as HTMLButtonElement;
        console.log(button)
        if(button){
          toggleViewModel('open', button);
        }
        if(CloseViewModel) CloseViewModel.addEventListener('click', ()=>toggleViewModel('close', button));
        window.addEventListener("click", (e: Event) =>{
          let target = e.target as HTMLElement;
          if(overlay && overlay.contains(target)){
            toggleViewModel('close', button);
          }
        })
      }
    })
    
  })
  // if(openViewModel) openViewModel.addEventListener('click',()=>{
    
  // })

}
ViewModel();
// //////////////////////////////////end view model //////////////////////////////////
// //////////////////////////////////start gallery model //////////////////////////////////
// /////////////////////////////////img galley //////////////////////////
let MainImagePro = document.querySelector(".gridSystem #productImgGallery .mainImg img") as HTMLImageElement;
let SubImagePro = document.querySelectorAll(".gridSystem #productImgGallery .subImg img")as NodeListOf<HTMLImageElement>;
let MainImageModel = document.querySelector(".showModel #ModelImgGallery .mainImg img") as HTMLImageElement;
let SubImageModel = document.querySelectorAll(".showModel #ModelImgGallery .subImg img")as NodeListOf<HTMLImageElement>;
const ImageGallery = (Main:HTMLImageElement,Sub: NodeListOf<HTMLImageElement>)=>{
  if(Main && Sub){
    Sub.forEach((img:HTMLImageElement )=>{
      
      img.addEventListener('click',()=>{
        // document.querySelector(".active")?.classList.remove("active");
        Sub.forEach(subImg => subImg.classList.remove("active"));
        
        toggleClass(img , ['active'] ,'add')
        Main.style.opacity= "0"
        setTimeout(()=>{
          Main.style.opacity= "1"
          Main.src = img.src;
        },200)
      })
    })
  }
}
ImageGallery(MainImagePro , SubImagePro);
ImageGallery(MainImageModel , SubImageModel);
// //////////////////////////////////end gallery model //////////////////////////////////
if (openMenu) openMenu.addEventListener("click", () => toggleAsideMenu('open', responsiveNavLinks, 'responsiveNavLinks', 'lg-max-d-none', openMenu, btnCloseMenu, true, true));
if (btnCloseMenu) btnCloseMenu.addEventListener("click", () => toggleAsideMenu('close', responsiveNavLinks, 'responsiveNavLinks', 'lg-max-d-none', openMenu, btnCloseMenu, true, true));

if (BtnLang) BtnLang.addEventListener('click', ()=>showDropDownLang(dropDownLangLi ,dropDownLang,BtnLang ,100,'toggle'));
if (BtnUser) BtnUser.addEventListener('click', ()=>showDropDownLang(dropDownUserLi ,dropDownUser,BtnUser ,200,'toggle'));

  if(openCart) openCart.addEventListener('click', ()=>toggleAsideMenu('open', CartShop, null, 'd-none', openCart, closeCart, true, false));
  if(closeCart) closeCart.addEventListener('click', ()=>toggleAsideMenu('close', CartShop, null, 'd-none', openCart, closeCart, true, false));

  if(openFilter)openFilter.addEventListener('click' , ()=>toggleAsideMenu('open', Filter, 'responsive-accordion', 'lg-max-d-none', openFilter, closeFilter, true, false));
  if(closeFilter)closeFilter.addEventListener('click' , ()=>toggleAsideMenu('close', Filter, 'responsive-accordion', 'lg-max-d-none', openFilter, closeFilter, true, false));
  if(openNavSearch) openNavSearch.addEventListener('click',()=>toggleSearch('open'));
  if(closeNavSearch) closeNavSearch.addEventListener('click',()=>toggleSearch('close'));
if(uploadFile)uploadFile.addEventListener("change", UploadImage)
window.addEventListener("click", (e: Event) => {
  const target = e.target as HTMLElement;

  if (overlay && overlay.contains(target)) {

    toggleAsideMenu('close', responsiveNavLinks, 'responsiveNavLinks', 'lg-max-d-none',openMenu, btnCloseMenu, true, true);
    toggleAsideMenu('close', CartShop, null, 'd-none', openCart, closeCart, true, false);
    toggleAsideMenu('close', Filter, 'responsive-accordion', 'lg-max-d-none', openFilter, closeFilter, true, false);


    
  }
  if(!openNavSearch.contains(target) &&!SearchForm.contains(target) ){
    toggleSearch('close');
    
  };
  
  if(BtnUser !== null && dropDownUser !== null){
    if(!BtnUser.contains(target) &&!dropDownUser.contains(target) ){
      showDropDownLang(dropDownUserLi ,dropDownUser,BtnUser ,200,'remove')
    }
  }
  if(BtnLang !== null && dropDownLang !==null){
    if(!BtnLang.contains(target) &&!dropDownLang.contains(target) ){
      showDropDownLang(dropDownLangLi ,dropDownLang,BtnLang ,100,'remove')
    }
  }
  

});


window.addEventListener('DOMContentLoaded' , filterProductAcc);

// window scrolling effect
const ScrollingEffect = ()=>{
  if(!whatsAppBtn) return;
  if(window.scrollY >= 120){
    toggleClass(whatsAppBtn , ['show'] ,'add')
  }else{
    toggleClass(whatsAppBtn , ['show'] ,'remove')
  }
}
window.addEventListener('scroll' , ScrollingEffect)