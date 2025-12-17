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
		client: {start:"_app/immutable/entry/start.B2YjMvZc.js",app:"_app/immutable/entry/app.SQm7N4DZ.js",imports:["_app/immutable/entry/start.B2YjMvZc.js","_app/immutable/chunks/JT74ICdB.js","_app/immutable/chunks/Dzd4HRd2.js","_app/immutable/chunks/YYtkNPTQ.js","_app/immutable/entry/app.SQm7N4DZ.js","_app/immutable/chunks/Dzd4HRd2.js","_app/immutable/chunks/mNhXAasa.js","_app/immutable/chunks/DIQ9jnIP.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-CTUbdE46.js')),
			__memo(() => import('./chunks/1-HT4pk6wa.js')),
			__memo(() => import('./chunks/2--cCQJ7lh.js'))
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
				endpoint: __memo(() => import('./chunks/_server-CYdOLFNq.js'))
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
