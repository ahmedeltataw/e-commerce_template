import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as addAttribute, d as createAstro } from './astro/server-Bpp7M_eh.js';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { e as $$Icon, c as $$Button, $ as $$Image, p as productData } from './Layout-DfNeseKW.js';
import { $ as $$MainHeading } from './MainHeading-BfGzsKJK.js';

const $$CardButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="cardButtons absolute"> ${renderComponent($$result, "Button", $$Button, { "type": "button", "aria": `addToCart`, "ClassName": "d-flex items-center iconButton px-5	 py-4 round-6  relative overflow-hidden mb-1" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": `cart2`, "size": `30`, "class": `relative` })} <span class="absolute round-tl-6 round-bl-6 d-flex items-center justify-center fs-14 px-3">اضف للسلة</span> ` })} ${renderComponent($$result, "Button", $$Button, { "type": "button", "aria": `quickView`, "ClassName": "d-flex items-center iconButton px-5	 py-4	 round-6  relative overflow-hidden" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": `search`, "size": `30`, "class": `relative` })} <span class="absolute round-tl-6 round-bl-6 d-flex items-center justify-center fs-14 px-3">نظرة سريعة</span> ` })} </div>`;
}, "D:/project/version/2/Astro 2024/e-commerce/src/components/ui/Private/CardButton.astro", void 0);

const $$Astro$1 = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, title, des, img, price, discount = false } = Astro2.props;
  return renderTemplate`<!-- card > img > title > des > price  > discount  -->${maybeRenderHead()}<div class="card pro-1 py-6 px-8 round-6 relative overflow-hidden"> ${renderComponent($$result, "CardButton", $$CardButton, {})} <!-- img --> <figure class="proImg-1 round-4 mx-auto relative"> ${renderComponent($$result, "Image", $$Image, { "src": img, "alt": `image ${title}`, "format": "webp", "quality": 70, "class": ` round-4 img-contain` })} ${discount && discount.value && renderTemplate`<p class="discount absolute top-0 left-0 px-4 py-2 round-4">
%${discount.value} </p>`} </figure> <!-- pro title des price --> <div class="proDetails"> ${discount && discount.newPrice ? renderTemplate`<div class="price fs-20 pb-4	"> <span class=" fw-700">${discount.newPrice}</span> <small>ر.س</small> <del class="pr-4">${price}</del> <small class="smallDel">ر.س</small> </div>` : renderTemplate`<div${addAttribute(`price fs-20 pb-4	  `, "class")}> <span${addAttribute(`fw-700 `, "class")}>${price}</span> <small>ر.س</small> </div>`} <h3 class="proTitle pb-4 fw-500 line-relaxed">${title}</h3> <p class="des line-relaxed fs-14"> ${des} </p> </div> <a${addAttribute(href, "href")} class="absolute top-0 left-0"${addAttribute(`link ${title}`, "aria-label")}${addAttribute(title, "title")}></a> <!--  --> </div>`;
}, "D:/project/version/2/Astro 2024/e-commerce/src/components/ui/Private/Card.astro", void 0);

const $$Astro = createAstro();
const $$ProductSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductSection;
  const {
    title,
    sectionName,
    Show = true,
    SectionClass = true,
    isLoader = false
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`product  ${SectionClass ? "section-1" : ""}`, "class")}${addAttribute(sectionName, "aria-label")}> <div class="container"> ${Show && renderTemplate`${renderComponent($$result, "MainHeading", $$MainHeading, { "title": title, "Show": Show })}`} <div class="d-grid product-1 gap-6"> ${productData.map((item) => renderTemplate`${renderComponent($$result, "Card", $$Card, { "title": item.title, "des": item.des, "href": item.href, "img": item.img, "price": item.price, "discount": {
    value: item.discount?.value,
    newPrice: item.discount?.newPrice
  } })}`)} </div> ${isLoader && renderTemplate`${renderComponent($$result, "Button", $$Button, { "type": "button", "aria": `loadMore`, "ClassName": "btnMore d-flex items-center justify-center mx-auto mt-10  " }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "loader", "size": `28` })} ` })}`} </div> </section>`;
}, "D:/project/version/2/Astro 2024/e-commerce/src/components/product/ProductSection.astro", void 0);

export { $$ProductSection as $ };
