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
		client: {"start":"_app/immutable/entry/start.COxP2bhY.js","app":"_app/immutable/entry/app.BHHU26xH.js","imports":["_app/immutable/entry/start.COxP2bhY.js","_app/immutable/chunks/entry.BEDBaGnM.js","_app/immutable/chunks/utils.7i9iy7nq.js","_app/immutable/chunks/index.CTOTKQwF.js","_app/immutable/entry/app.BHHU26xH.js","_app/immutable/chunks/utils.7i9iy7nq.js","_app/immutable/chunks/disclose-version.Cm9j5ayf.js","_app/immutable/chunks/index-client.DnYikTZg.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-BMhg4P4s.js')),
			__memo(() => import('./chunks/1-DKfB86kX.js')),
			__memo(() => import('./chunks/2-DX1hEjRK.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: __memo(() => import('./chunks/_server-Dt8JZ0bO.js'))
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
