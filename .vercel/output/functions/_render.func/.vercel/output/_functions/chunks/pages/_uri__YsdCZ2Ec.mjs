/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, u as unescapeHTML } from '../astro_bGjyVLik.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import { q as queryPageBy, $ as $$Layout } from './_slug__NvB_kWfX.mjs';

const $$Astro = createAstro();
const $$uri = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$uri;
  const { uri } = Astro2.params;
  if (!uri)
    return `<p>Provide uri</p>`;
  const post = await queryPageBy(uri);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${uri} | Ks Ostrovia` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article> <h1>${post?.title}</h1> <time>Page ${post.date}</time> <p>${unescapeHTML(post?.content)}</p> </article> ` })}`;
}, "/Users/mgromek/projects/ksostrovia/wp-content/themes/astro/src/pages/page/[uri].astro", void 0);

const $$file = "/Users/mgromek/projects/ksostrovia/wp-content/themes/astro/src/pages/page/[uri].astro";
const $$url = "/page/[uri]";

export { $$uri as default, $$file as file, $$url as url };
