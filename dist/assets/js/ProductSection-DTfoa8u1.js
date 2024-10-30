import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, d as createAstro, b as addAttribute } from './astro/server-Bpp7M_eh.js';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { b as $$Icon, c as $$Button, $ as $$Image, p as productData } from './Layout-Dr8BzTC7.js';
import { $ as $$MainHeading } from './MainHeading-d9tiTf_C.js';
import 'clsx';

const $$Astro$3 = createAstro();
const $$CardButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CardButton;
  const { IsStatus = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="cardButtons absolute"> ${IsStatus ? renderTemplate`${renderComponent($$result, "Button", $$Button, { "type": "button", "aria": `quickView`, "ClassName": "d-flex items-center iconButton BtnDelete px-5	 py-4	 round-6  relative overflow-hidden" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": `delete`, "size": `30`, "class": `relative` })} <span class="absolute round-tl-6 round-bl-6 d-flex items-center justify-center fs-14 px-3">
حذف
</span> ` })}` : renderTemplate`${renderComponent($$result, "Button", $$Button, { "type": "button", "aria": `addToCart`, "ClassName": "d-flex items-center iconButton px-5	 py-4 round-6  relative overflow-hidden mb-1" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": `cart2`, "size": `30`, "class": `relative` })} <span class="absolute round-tl-6 round-bl-6 d-flex items-center justify-center fs-14 px-3">اضف للسلة</span> ` })}
  ${renderComponent($$result, "Button", $$Button, { "type": "button", "aria": `quickView`, "ClassName": "d-flex items-center iconButton px-5	quickView  py-4	 round-6  relative overflow-hidden" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": `search`, "size": `30`, "class": `relative` })} <span class="absolute round-tl-6 round-bl-6 d-flex items-center justify-center fs-14 px-3">نظرة سريعة</span> ` })}`} </div>`;
}, "D:/project/version/2/Astro 2024/e-commerce/src/components/ui/Private/CardButton.astro", void 0);

const $$Astro$2 = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, title, des, img, price, discount = false, Status = false, StatusValue, StatusClass } = Astro2.props;
  return renderTemplate`<!-- card > img > title > des > price  > discount  -->${maybeRenderHead()}<div class="card pro-1 py-6 px-8 round-6 relative overflow-hidden"> ${renderComponent($$result, "CardButton", $$CardButton, { "IsStatus": Status })} <!-- img --> <figure class="proImg-1 round-4 mx-auto relative"> ${renderComponent($$result, "Image", $$Image, { "src": img, "alt": `image ${title}`, "format": "webp", "quality": 70, "class": ` round-4 img-contain` })} ${Status && StatusValue && renderTemplate`<p${addAttribute(`Status absolute top-0 right-0 px-4 py-2 round-4 ${StatusClass}`, "class")}> ${StatusValue} </p>`} ${discount && discount.value && renderTemplate`<p class="discount absolute top-0 left-0 px-4 py-2 round-4">
%${discount.value} </p>`} </figure> <!-- pro title des price --> <div class="proDetails"> ${discount && discount.newPrice ? renderTemplate`<div class="price pb-4	"> <span class=" fw-700">${discount.newPrice}</span> <small>ر.س</small> <del>${price}</del> <small class="smallDel">ر.س</small> </div>` : renderTemplate`<div${addAttribute(`price fs-20 pb-4	  `, "class")}> <span${addAttribute(`fw-700 `, "class")}>${price}</span> <small>ر.س</small> </div>`} <h3 class="proTitle pb-3 fw-500 line-relaxed">${title}</h3> <p class="des line-relaxed fs-14"> ${des} </p> </div> <a${addAttribute(href, "href")} class="absolute top-0 left-0"${addAttribute(`link ${title}`, "aria-label")}${addAttribute(title, "title")}></a> <!--  --> </div>`;
}, "D:/project/version/2/Astro 2024/e-commerce/src/components/ui/Private/Card.astro", void 0);

const $$Astro$1 = createAstro();
const $$MainHeading2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainHeading2;
  const { title, swiperBtn = false, Show = true, subtitle, Word } = Astro2.props;
  return renderTemplate`${Show && renderTemplate`${maybeRenderHead()}<div class="mainHeading2 mb-10 relative "><span class="subTitle d-block fs-18">${subtitle}</span><h2 class=" fw-700 fs-r-48  relative  pt-6 d-inline-block">${title}<br><span class="WorldColor">${Word}</span></h2>${swiperBtn && renderTemplate`<div class="swiperBtn relative "><div class="swiper-button-next  round-t-6"></div><div class="swiper-button-prev round-t-6"></div></div>`}</div>`}`;
}, "D:/project/version/2/Astro 2024/e-commerce/src/components/ui/global/MainHeading2.astro", void 0);

const $$Astro = createAstro();
const $$ProductSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductSection;
  const {
    title,
    sectionName,
    Show = true,
    SectionClass = true,
    isLoader = false,
    ClassName,
    HeadType,
    subtitle
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`product ${ClassName ? ClassName : ""} ${SectionClass ? "section-1" : ""}`, "class")}${addAttribute(sectionName, "aria-label")}> <div class="container"> ${Show && HeadType ? renderTemplate`${renderComponent($$result, "MainHeading", $$MainHeading, { "title": title, "Show": Show })}` : renderTemplate`${renderComponent($$result, "MainHeading2", $$MainHeading2, { "title": title, "Show": Show, "subtitle": subtitle })}`} <div class="d-grid product-1 gap-6"> ${productData.map((item) => renderTemplate`${renderComponent($$result, "Card", $$Card, { "title": item.title, "des": item.des, "href": item.href, "img": item.img, "price": item.price, "discount": {
    value: item.discount?.value,
    newPrice: item.discount?.newPrice
  } })}`)} </div> ${isLoader && renderTemplate`${renderComponent($$result, "Button", $$Button, { "type": "button", "aria": `loadMore`, "ClassName": "btnMore d-flex items-center justify-center mx-auto mt-10  " }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "loader", "size": `28` })} ` })}`} </div> </section>`;
}, "D:/project/version/2/Astro 2024/e-commerce/src/components/product/ProductSection.astro", void 0);

export { $$ProductSection as $, $$Card as a, $$MainHeading2 as b };
