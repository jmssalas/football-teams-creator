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
		client: {"start":"_app/immutable/entry/start.BNcoNdU-.js","app":"_app/immutable/entry/app.CiDSseG6.js","imports":["_app/immutable/entry/start.BNcoNdU-.js","_app/immutable/chunks/entry.CaxwCyI4.js","_app/immutable/chunks/utils.7i9iy7nq.js","_app/immutable/chunks/index.CTOTKQwF.js","_app/immutable/entry/app.CiDSseG6.js","_app/immutable/chunks/utils.7i9iy7nq.js","_app/immutable/chunks/disclose-version.Cm9j5ayf.js","_app/immutable/chunks/index-client.DnYikTZg.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-hwOWs5YE.js')),
			__memo(() => import('./chunks/1-Dn6qGaSV.js')),
			__memo(() => import('./chunks/2-QA3am9IB.js'))
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
