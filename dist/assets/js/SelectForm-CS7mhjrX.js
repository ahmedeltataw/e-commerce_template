import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderSlot, d as createAstro } from './astro/server-Bpp7M_eh.js';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$SelectForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SelectForm;
  const { id, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="formGroup relative mb-10 d-flex"> <label${addAttribute(id, "for")} class="pr-4 pb-5"> ${title}</label> <select${addAttribute(id, "name")}${addAttribute(id, "id")} class="round-8 pr-5 pl-5"> ${renderSlot($$result, $$slots["default"])} </select> </div>`;
}, "D:/project/version/2/Astro 2024/e-commerce/src/components/ui/global/SelectForm.astro", void 0);

export { $$SelectForm as $ };
