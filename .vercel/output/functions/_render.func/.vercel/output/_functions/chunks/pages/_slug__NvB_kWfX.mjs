/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderHead, g as renderComponent, h as renderSlot, u as unescapeHTML } from '../astro_bGjyVLik.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
import dotenv from 'dotenv';

dotenv.config();
async function fetchApi({ query, variables }) {
  const headers = { "Content-Type": "application/json" };
  const response = await fetch("https://ksostrovia.haris-instal.pl/graphql", {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables })
  });
  if (!response.ok) {
    console.error(response);
    throw new Error("Failed to fetch API");
  }
  const { data } = await response.json();
  return data;
}

const queryLogo = async () => {
  const data = await fetchApi({
    query: `{
			mediaItems(where:{id: 55}) {
				nodes {
					id
					altText
					sourceUrl
					mediaItemUrl
					mediaDetails {
						height
						width
					}
				}
			}
		}`
  });
  const { mediaItems } = data;
  return mediaItems.nodes[0];
};
const querySiteTitle = async () => {
  const data = await fetchApi({
    query: `{
			generalSettings {
				title
			}
		}`
  });
  const { generalSettings } = data;
  return generalSettings?.title;
};
const queryMenuItems = async () => {
  const data = await fetchApi({
    query: `{
			menus {
				nodes {
					menuItems {
						edges {
							node {
								path
								uri
								label
								connectedNode {
									node {
										__typename
										... on Post {
											title
										}
										... on Page {
											title
										}
									}
								}
							}
						}
					}
				}
			}
		}`
  });
  const { menus } = data;
  return menus?.nodes[0]?.menuItems?.edges;
};
const queryPost = async (slug) => {
  const data = await fetchApi({
    query: `{
			post(id: "${slug}", idType: SLUG) {
				content
				date
				title
				slug
			}
		}`
  });
  const { post } = data;
  return post;
};
const queryPosts = async (first) => {
  const data = await fetchApi({
    query: `{
			posts(first: ${first}) {
				nodes {
					content
					date
					title
					excerpt
					slug
					featuredImage {
						node {
							mediaItemUrl
							altText
							mediaDetails {
								height
								width
								sizes {
									file
								}
							}
						}
					}
				}
			}
		}`
  });
  const { posts } = data;
  return posts?.nodes;
};
const queryPageBy = async (uri) => {
  const data = await fetchApi({
    query: `{
			page(idType: URI, id: "${uri}") {
				content
				date
				title
				slug
			}
		}`
  });
  const { page } = data;
  return page;
};

const $$Astro$2 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const siteTitle = await querySiteTitle();
  const logo = await queryLogo();
  const menuItems = await queryMenuItems();
  return renderTemplate`${maybeRenderHead()}<header class="md-pb-20 m-auto flex w-full items-center justify-between pb-10 md:w-[800px] lg:w-[1200px] lg:max-w-[calc(100%-2rem)]"> <a href="/" class="flex items-center gap-5"> <img class="max-w-[25%]"${addAttribute(logo.mediaItemUrl, "src")}${addAttribute(logo.altText, "alt")}${addAttribute(logo.mediaDetails.width, "width")}${addAttribute(logo.mediaDetails.height, "height")}> <div class="hidden text-5xl font-bold md:block"> ${siteTitle} <span class="block text-2xl">Ostrów Mazowiecka</span> </div> </a> <nav> <ul class="flex gap-5"> ${menuItems?.map(({ node }) => renderTemplate`<li> <a${addAttribute(
    node.path === "/" ? node.path : node?.connectedNode?.node?.__typename === "Page" ? `/page${node.path}` : `/post${node.path}`,
    "href"
  )}> ${node.label} </a> </li>`)} </ul> </nav> </header>`;
}, "/Users/mgromek/projects/ksostrovia/wp-content/themes/astro/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="font-sans"> ${renderComponent($$result, "Header", $$Header, {})} <main class="w-[calc(100%-2rem)] max-w-[1200px]"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/Users/mgromek/projects/ksostrovia/wp-content/themes/astro/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (!slug)
    return `<p>Provide slug</p>`;
  const post = await queryPost(slug);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${slug} | Ks Ostrovia` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="text-primary"> <h1>${post.title}</h1> <time>${post.date}</time> <p>${unescapeHTML(post.content)}</p> </article> ` })}`;
}, "/Users/mgromek/projects/ksostrovia/wp-content/themes/astro/src/pages/post/[slug].astro", void 0);

const $$file = "/Users/mgromek/projects/ksostrovia/wp-content/themes/astro/src/pages/post/[slug].astro";
const $$url = "/post/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _slug_ as _, queryPosts as a, queryPageBy as q };
