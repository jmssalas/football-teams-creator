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
		client: {"start":"_app/immutable/entry/start.CXonaySy.js","app":"_app/immutable/entry/app.DFhqJ9QV.js","imports":["_app/immutable/entry/start.CXonaySy.js","_app/immutable/chunks/entry.Cu1qP32D.js","_app/immutable/chunks/utils.o6p05Zo9.js","_app/immutable/chunks/index.BcA1ypkd.js","_app/immutable/entry/app.DFhqJ9QV.js","_app/immutable/chunks/utils.o6p05Zo9.js","_app/immutable/chunks/disclose-version.DZSSDbEQ.js","_app/immutable/chunks/index-client.D9aSxeXj.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-DxE8Os1I.js')),
			__memo(() => import('./chunks/1-CSrheSX0.js')),
			__memo(() => import('./chunks/2-xuT0k7PB.js'))
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
