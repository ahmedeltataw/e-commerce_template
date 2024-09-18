import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as createAstro, b as addAttribute, a as renderComponent } from './astro/server-Bpp7M_eh.js';
import 'kleur/colors';
import { $ as $$Card } from './Card-CslnKwwp.js';
import { $ as $$MainHeading } from './MainHeading-d9tiTf_C.js';
import 'clsx';
import { p as productData, c as $$Icon, d as $$Button } from './Layout-TZliDyVf.js';

const $$Astro$1 = createAstro();
const $$MainHeading2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainHeading2;
  const { title, swiperBtn = false, Show = true, subtitle } = Astro2.props;
  return renderTemplate`${Show && renderTemplate`${maybeRenderHead()}<div class="mainHeading2 mb-10 relative "><span class="subTitle d-block fs-18">${subtitle}</span><h2 class=" fw-700 relative  pt-6 d-inline-block">${title}</h2>${swiperBtn && renderTemplate`<div class="swiperBtn "><div class="swiper-button-next  round-t-6"></div><div class="swiper-button-prev round-t-6"></div></div>`}</div>`}`;
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
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`product ${ClassName} ${SectionClass ? "section-1" : ""}`, "class")}${addAttribute(sectionName, "aria-label")}> <div class="container"> ${Show && HeadType ? renderTemplate`${renderComponent($$result, "MainHeading", $$MainHeading, { "title": title, "Show": Show })}` : renderTemplate`${renderComponent($$result, "MainHeading2", $$MainHeading2, { "title": title, "Show": Show, "subtitle": subtitle })}`} <div class="d-grid product-1 gap-6"> ${productData.map((item) => renderTemplate`${renderComponent($$result, "Card", $$Card, { "title": item.title, "des": item.des, "href": item.href, "img": item.img, "price": item.price, "discount": {
    value: item.discount?.value,
    newPrice: item.discount?.newPrice
  } })}`)} </div> ${isLoader && renderTemplate`${renderComponent($$result, "Button", $$Button, { "type": "button", "aria": `loadMore`, "ClassName": "btnMore d-flex items-center justify-center mx-auto mt-10  " }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "loader", "size": `28` })} ` })}`} </div> </section>`;
}, "D:/project/version/2/Astro 2024/e-commerce/src/components/product/ProductSection.astro", void 0);

export { $$ProductSection as $ };
