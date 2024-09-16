import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as createAstro } from './astro/server-Bpp7M_eh.js';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$MainHeading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainHeading;
  const { title, swiperBtn = false, Show = true } = Astro2.props;
  return renderTemplate`${Show && renderTemplate`${maybeRenderHead()}<div class="mainHeading mb-9 relative"><h2 class="fs-28 fw-500 relative round-t-6 px-8 pb-6 pt-4 d-inline-block">${title}</h2>${swiperBtn && renderTemplate`<div class="swiperBtn "><div class="swiper-button-next  round-t-6"></div><div class="swiper-button-prev round-t-6"></div></div>`}</div>`}`;
}, "D:/project/version/2/Astro 2024/e-commerce/src/components/ui/global/MainHeading.astro", void 0);

export { $$MainHeading as $ };
