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
		client: {"start":"_app/immutable/entry/start.ChU9Ps22.js","app":"_app/immutable/entry/app.DKhAhd-f.js","imports":["_app/immutable/entry/start.ChU9Ps22.js","_app/immutable/chunks/entry.CDRMqQzP.js","_app/immutable/chunks/utils.BK9Us6OE.js","_app/immutable/chunks/index.C6AkZlzq.js","_app/immutable/entry/app.DKhAhd-f.js","_app/immutable/chunks/utils.BK9Us6OE.js","_app/immutable/chunks/disclose-version.BtVxORtl.js","_app/immutable/chunks/index-client.Bi3ZiDwv.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-B3IxTB9d.js')),
			__memo(() => import('./chunks/1-Blae_ls0.js')),
			__memo(() => import('./chunks/2-BxD9GPfl.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: __memo(() => import('./chunks/_server-CepNTIWa.js'))
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
