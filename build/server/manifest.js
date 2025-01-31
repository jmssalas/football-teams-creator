const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DxB5-Zb-.js","app":"_app/immutable/entry/app.gKXpBHUv.js","imports":["_app/immutable/entry/start.DxB5-Zb-.js","_app/immutable/chunks/entry.Cn42m_73.js","_app/immutable/chunks/runtime.B5iW8Zo5.js","_app/immutable/chunks/utils.DIs2teQl.js","_app/immutable/entry/app.gKXpBHUv.js","_app/immutable/chunks/runtime.B5iW8Zo5.js","_app/immutable/chunks/store.D6VYYOxz.js","_app/immutable/chunks/disclose-version.CtQfRNkA.js","_app/immutable/chunks/utils.DIs2teQl.js","_app/immutable/chunks/index-client.CXIdME2p.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-C4gbVVii.js')),
			__memo(() => import('./chunks/1-DBEWxnlE.js')),
			__memo(() => import('./chunks/2-DYwBpAIr.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: __memo(() => import('./chunks/_server-Cy35B_Fr.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
