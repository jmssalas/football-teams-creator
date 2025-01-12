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
		client: {"start":"_app/immutable/entry/start.B2Xzj5Tb.js","app":"_app/immutable/entry/app.DlH7Ucol.js","imports":["_app/immutable/entry/start.B2Xzj5Tb.js","_app/immutable/chunks/entry.CT896-Jm.js","_app/immutable/chunks/runtime.B5iW8Zo5.js","_app/immutable/chunks/utils.DIs2teQl.js","_app/immutable/entry/app.DlH7Ucol.js","_app/immutable/chunks/runtime.B5iW8Zo5.js","_app/immutable/chunks/store.D6VYYOxz.js","_app/immutable/chunks/disclose-version.CtQfRNkA.js","_app/immutable/chunks/utils.DIs2teQl.js","_app/immutable/chunks/index-client.CXIdME2p.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-C4gbVVii.js')),
			__memo(() => import('./chunks/1-BNBiL9BA.js')),
			__memo(() => import('./chunks/2-DPbrz36s.js'))
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
