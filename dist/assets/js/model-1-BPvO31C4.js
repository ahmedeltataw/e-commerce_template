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

export { img as i };
