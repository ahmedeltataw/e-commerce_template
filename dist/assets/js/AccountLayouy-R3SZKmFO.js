import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as addAttribute, e as renderSlot, d as createAstro } from './astro/server-Bpp7M_eh.js';
import 'kleur/colors';
import { g as $$Avatar, h as $$Link } from './Layout-Dr8BzTC7.js';

const $$AccountSideBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<aside class="accountSide"> <div class="userInfo d-flex items-center gap-8 p-8 mb-9"> ${renderComponent($$result, "Avatar", $$Avatar, {})} <h3 class="userName ">احمد التطاوي</h3> </div> <ul class="accountList d-flex items-start p-8 gap-8"> <li class=""> ${renderComponent($$result, "Link", $$Link, { "href": "MyAccount.html", "aria": "editUser", "text": "\u062A\u0639\u062F\u064A\u0644 \u062D\u0633\u0627\u0628\u064A", "icon": { name: "EditUser", ClassIcon: "", side: "left" }, "Class": "navLink d-flex items-center py-6 px-8 gap-4" })} </li> <li> ${renderComponent($$result, "Link", $$Link, { "href": "Order.html", "aria": "userOrder", "Class": "navLink d-flex items-center py-6 px-8 gap-4", "text": "\u0637\u0644\u0628\u0627\u062A\u064A", "icon": { name: "order", ClassIcon: "", side: "left" } })} </li> <li> ${renderComponent($$result, "Link", $$Link, { "href": "notifications.html", "aria": "notifications", "Class": "navLink d-flex items-center py-6 px-8 gap-4", "text": "\u0627\u0644\u0627\u0634\u0639\u0627\u0631\u0627\u062A ", "icon": { name: "notifications", ClassIcon: "", side: "left" } })} </li> <li> ${renderComponent($$result, "Link", $$Link, { "href": "#!", "aria": "logout", "Class": "navLink d-flex items-center py-6 px-8 gap-4", "text": "\u062A\u0633\u062C\u064A\u0644 \u062E\u0631\u0648\u062C", "icon": { name: "logout", ClassIcon: "logout", side: "left" } })} </li> </ul> </aside>`;
}, "D:/project/version/2/Astro 2024/e-commerce/src/components/Account/AccountSideBar.astro", void 0);

const $$Astro = createAstro();
const $$AccountLayouy = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AccountLayouy;
  const { sectionName } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section-1"> <div class="container"> <div class="d-grid AccountLayOut-1 gap-10 "> <!-- side bar --> ${renderComponent($$result, "AccountSideBar", $$AccountSideBar, {})} <!-- g section --> <section${addAttribute(`globalSection ${sectionName}`, "class")}> ${renderSlot($$result, $$slots["default"])} </section> </div> </div> </section>`;
}, "D:/project/version/2/Astro 2024/e-commerce/src/components/Account/AccountLayouy.astro", void 0);

export { $$AccountLayouy as $ };
