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
		client: {start:"_app/immutable/entry/start.EPOxuWiS.js",app:"_app/immutable/entry/app.CQJnYGpF.js",imports:["_app/immutable/entry/start.EPOxuWiS.js","_app/immutable/chunks/DMMWzERq.js","_app/immutable/chunks/Dzd4HRd2.js","_app/immutable/chunks/YYtkNPTQ.js","_app/immutable/entry/app.CQJnYGpF.js","_app/immutable/chunks/Dzd4HRd2.js","_app/immutable/chunks/mNhXAasa.js","_app/immutable/chunks/DIQ9jnIP.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-CTUbdE46.js')),
			__memo(() => import('./chunks/1-CKe1JQoO.js')),
			__memo(() => import('./chunks/2-Beq7T-2-.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: __memo(() => import('./chunks/_server-3h0rMn7W.js'))
			},
			{
				id: "/api/matches",
				pattern: /^\/api\/matches\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-CZTgvEFP.js'))
			},
			{
				id: "/api/players",
				pattern: /^\/api\/players\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-CmSUGEai.js'))
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
