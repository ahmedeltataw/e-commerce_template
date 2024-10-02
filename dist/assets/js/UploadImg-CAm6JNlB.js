import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, d as createAstro } from './astro/server-Bpp7M_eh.js';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './Layout-D4dtAE8-.js';

const $$Astro = createAstro();
const $$UploadImg = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$UploadImg;
  const { img } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="uploadImg mb-8 relative"> ${renderComponent($$result, "Image", $$Image, { "src": img, "alt": "userPhoto", "id": `userPhoto`, "quality": 70 })} <label for="uploadUserPhoto" class="absolute"></label> <input type="file" name="uploadUserPhoto" id="uploadUserPhoto" class="d-none"> </div>`;
}, "D:/project/version/2/Astro 2024/e-commerce/src/components/ui/global/UploadImg.astro", void 0);

export { $$UploadImg as $ };
