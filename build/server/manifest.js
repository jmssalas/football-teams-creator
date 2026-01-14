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
		client: {start:"_app/immutable/entry/start.rjRm0E_w.js",app:"_app/immutable/entry/app.IH4PwK3q.js",imports:["_app/immutable/entry/start.rjRm0E_w.js","_app/immutable/chunks/vSGxQUo7.js","_app/immutable/chunks/D5u2eZmz.js","_app/immutable/chunks/BalwrVC8.js","_app/immutable/entry/app.IH4PwK3q.js","_app/immutable/chunks/D5u2eZmz.js","_app/immutable/chunks/CVzWLPMS.js","_app/immutable/chunks/Cej3kk_0.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-DzQs8a0u.js')),
			__memo(() => import('./chunks/1-BNRbhYsP.js')),
			__memo(() => import('./chunks/2-BOnj01RC.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: __memo(() => import('./chunks/_server-DGYadRHA.js'))
			},
			{
				id: "/api/matches",
				pattern: /^\/api\/matches\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-SBUldM66.js'))
			},
			{
				id: "/api/players",
				pattern: /^\/api\/players\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-CiEzNw5a.js'))
			}
		],
		prerendered_routes: new Set([]),
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
