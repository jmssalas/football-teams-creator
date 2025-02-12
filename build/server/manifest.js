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
		client: {"start":"_app/immutable/entry/start.CIkoHXTU.js","app":"_app/immutable/entry/app.BdBBgb3T.js","imports":["_app/immutable/entry/start.CIkoHXTU.js","_app/immutable/chunks/entry.C9hezmhj.js","_app/immutable/chunks/utils.7i9iy7nq.js","_app/immutable/chunks/index.CTOTKQwF.js","_app/immutable/entry/app.BdBBgb3T.js","_app/immutable/chunks/utils.7i9iy7nq.js","_app/immutable/chunks/disclose-version.Cm9j5ayf.js","_app/immutable/chunks/index-client.DnYikTZg.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-Cpj6zpiP.js')),
			__memo(() => import('./chunks/1-CwVxKGmF.js')),
			__memo(() => import('./chunks/2-SPffWKmZ.js'))
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
