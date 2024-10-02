const test = new Proxy({"src":"./assets/images/blog-img2-6MX61W3h.jpg","width":790,"height":600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/project/version/2/Astro 2024/e-commerce/src/assets/images/blog/blog-img2.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("D:/project/version/2/Astro 2024/e-commerce/src/assets/images/blog/blog-img2.jpg");
							return target[name];
						}
					});

export { test as t };
