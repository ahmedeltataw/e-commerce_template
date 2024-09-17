import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, d as createAstro, b as addAttribute } from './astro/server-Bpp7M_eh.js';
import 'kleur/colors';
import { $ as $$Image, e as $$FormGroup, g as $$Link, d as $$Button, c as $$Icon } from './Layout-CQBdZetp.js';
import { $ as $$SelectForm } from './SelectForm-BhreREzA.js';
import '@astrojs/internal-helpers/path';

const $$Astro$1 = createAstro();
const $$UploadImg = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$UploadImg;
  const { img } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="uploadImg mb-8 relative"> ${renderComponent($$result, "Image", $$Image, { "src": img, "alt": "userPhoto", "id": `userPhoto`, "quality": 70 })} <label for="uploadUserPhoto" class="absolute"></label> <input type="file" name="uploadUserPhoto" id="uploadUserPhoto" class="d-none"> </div>`;
}, "D:/project/version/2/Astro 2024/e-commerce/src/components/ui/global/UploadImg.astro", void 0);

const img = new Proxy({"src":"/assets/images/model-1-CGGG64Sm.png","width":1200,"height":1200,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/project/version/2/Astro 2024/e-commerce/src/assets/images/model-1.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("D:/project/version/2/Astro 2024/e-commerce/src/assets/images/model-1.png");
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Form = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Form;
  const { isLogin = true, isSignUp = false, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section-1 auth-1"> <div class="container"> <h3 class="pb-5 text-center"> ${isLogin ? "\u062A\u0633\u062C\u064A\u0644 \u062F\u062E\u0648\u0644" : "\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628 \u062C\u062F\u064A\u062F"} </h3> <p class="pb-4 text-center "> ${isLogin ? "\u0623\u062F\u062E\u0644 \u0628\u064A\u0627\u0646\u0627\u062A\u0643 \u0627\u0644\u0645\u0633\u062C\u0644\u0629 \u0644\u0625\u0643\u0645\u0627\u0644 \u0639\u0645\u0644\u064A\u0629 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644" : "\u0645\u0631\u062D\u0628\u064B\u0627\u060C \u0623\u062F\u062E\u0644 \u0628\u064A\u0627\u0646\u0627\u062A\u0643 \u0627\u0644\u062D\u0642\u064A\u0642\u064A\u0629 \u0648\u0627\u0644\u0635\u062D\u064A\u062D\u0629 \u0644\u0636\u0645\u0627\u0646 \u062A\u062D\u0642\u0642 \u062D\u0633\u0627\u0628\u0643 \u0648\u0628\u062F\u0621 \u0627\u0644\u0639\u0645\u0644"} </p> <form action="#!" class="mx-auto"${addAttribute(id, "id")}> ${isSignUp && renderTemplate`${renderComponent($$result, "UploadImg", $$UploadImg, { "img": img })}
              ${renderComponent($$result, "FormGroup", $$FormGroup, { "type": "text", "isDisabled": false, "isLabel": true, "title": "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0643\u0627\u0645\u0644", "place": "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 ", "name": "userName", "id": "userName", "FormClassName": "d-flex gap-4 mb-8 relative", "InputClassName": "round-8", "LabelClassName": "pr-4" })}`} ${renderComponent($$result, "FormGroup", $$FormGroup, { "type": "email", "isDisabled": false, "isLabel": true, "title": "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A", "place": "\u0627\u062F\u062E\u0644 \u0628\u0631\u064A\u062F\u0643 \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A", "name": "userEmail", "id": "userEmail", "FormClassName": "d-flex gap-4 mb-8", "InputClassName": "round-8", "LabelClassName": "pr-4" })} ${renderComponent($$result, "FormGroup", $$FormGroup, { "type": "password", "isDisabled": false, "isLabel": true, "title": " \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631", "place": "\u0627\u062F\u062E\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631", "name": "userPassword", "id": "userPassword", "FormClassName": `d-flex gap-4  relative ${isLogin ? "mb-4" : "mb-8"}`, "InputClassName": "round-8", "LabelClassName": "pr-4", "IsPassword": true, "Icons": {
    openEye: { name: "openEye", ClassName: "d-none", id: "openEye" },
    closeEye: { name: "closeEye", ClassName: "", id: "closeEye" }
  } })} ${isSignUp && renderTemplate`${renderComponent($$result, "FormGroup", $$FormGroup, { "type": "password", "isDisabled": false, "isLabel": true, "title": " \u062A\u0627\u0643\u064A\u062F \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631", "place": "\u062A\u0627\u0643\u064A\u062F \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631", "name": "SureUserPassword", "id": "SureUserPassword", "FormClassName": "d-flex gap-4 mb-8 relative", "InputClassName": "round-8", "LabelClassName": "pr-4", "IsPassword": true, "Icons": {
    openEye: { name: "openEye", ClassName: "d-none", id: "openEye1" },
    closeEye: { name: "closeEye", ClassName: "", id: "closeEye1" }
  } })}
          ${renderComponent($$result, "FormGroup", $$FormGroup, { "type": "number", "isDisabled": false, "isLabel": true, "title": "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641", "place": "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641", "name": "userPhone", "id": "userPhone", "FormClassName": "d-flex gap-4 mb-8 relative", "InputClassName": "round-8", "LabelClassName": "pr-4" })}
            ${renderComponent($$result, "SelectForm", $$SelectForm, { "id": "userGender", "title": "\u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0646\u0648\u0639" }, { "default": ($$result2) => renderTemplate` <option value="male">ذكر</option> <option value="famale">انثي</option> ` })}`} ${isLogin && renderTemplate`<p class="pr-4"> ${renderComponent($$result, "Link", $$Link, { "href": "#!", "aria": "forgetPassword", "Class": "", "text": "\u0647\u0644 \u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631\u061F" })} </p>`} ${isSignUp && renderTemplate`<p class="pr-4 text-center mt-10">
من خلال الاستمرار، أنت توافق على
${renderComponent($$result, "Link", $$Link, { "href": "#!", "aria": "signUp", "Class": "", "text": "\u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0623\u062D\u0643\u0627\u0645" })}
و
${renderComponent($$result, "Link", $$Link, { "href": "#!", "aria": "signUp", "Class": "", "text": "\u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629" })} </p>`} <div class="mt-10 d-flex items-center justify-center mx-auto"> ${renderComponent($$result, "Button", $$Button, { "type": "submit", "aria": `\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644`, "ClassName": "btn-run relative  round-6  px-8 py-2", "id": `${isLogin ? "LoginBtn" : "SignUpBtn"}` }, { "default": ($$result2) => renderTemplate` <span class="px-10 py-6 fw-500 fs-18 relative"> ${isLogin ? "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644" : "\u062A\u0633\u062C\u064A\u0644"} </span> ` })} </div> <div class="mt-14 authWith text-center "> <div class="break relative "> <p class="  absolute"> ${isLogin ? " \u0623\u0648 \u0642\u0645 \u0628\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645" : "\u0623\u0648 \u0623\u0646\u0634\u0626 \u062D\u0633\u0627\u0628\u064B\u0627 \u0628\u0627\u0633\u062A\u062E\u062F\u0627\u0645"} </p> </div> ${renderComponent($$result, "Button", $$Button, { "type": "submit", "aria": `\u062A\u0633\u062C\u064A\u0644 \u0628\u0627\u0633\u062A\u062D\u062F\u0627\u0645 \u062D\u0633\u0627\u0628 \u062C\u0648\u062C\u0644`, "ClassName": "btn-runBorder relative  round-6 px-8 py-2 d-flex items-center justify-center mx-auto mt-14" }, { "default": ($$result2) => renderTemplate` <span class="px-10 py-6 fw-500 fs-18 relative "> حساب جوحل</span> ${renderComponent($$result2, "Icon", $$Icon, { "name": "Google", "size": "28", "class": `relative` })} ` })} </div> ${isLogin && renderTemplate`<p class="pr-4 text-center mt-10">
ليس لديك حساب؟
${renderComponent($$result, "Link", $$Link, { "href": "SignUp.html", "aria": "signUp", "Class": "", "text": "\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628 \u062C\u062F\u064A\u062F" })} </p>`} </form> </div> </section>`;
}, "D:/project/version/2/Astro 2024/e-commerce/src/components/Auth/Form.astro", void 0);

export { $$Form as $ };
