import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, d as createAstro } from './astro/server-Bpp7M_eh.js';
import 'kleur/colors';
import { g as $$Link } from './Layout-CQBdZetp.js';

const $$Astro = createAstro();
const $$SmallBeadcrumb = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SmallBeadcrumb;
  const { defaultPage, linkPage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="smallBreadcrumb py-8"> <div class="container"> <ul class="d-flex items-center"> <li class="fw-500"> ${renderComponent($$result, "Link", $$Link, { "href": "/", "aria": "", "Class": "d-flex items-center ", "icon": { name: "Home", side: "left", ClassIcon: "ml-2 " }, "text": defaultPage })} </li> <li class="fw-500 px-5  fs-16 separator">&gt</li> <li class="fw-500"> ${linkPage}</li> </ul> </div> </section>`;
}, "D:/project/version/2/Astro 2024/e-commerce/src/components/ui/global/SmallBeadcrumb.astro", void 0);

export { $$SmallBeadcrumb as $ };
