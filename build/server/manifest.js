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
		client: {start:"_app/immutable/entry/start.DtPFrpG4.js",app:"_app/immutable/entry/app.BuwwuW4i.js",imports:["_app/immutable/entry/start.DtPFrpG4.js","_app/immutable/chunks/BAmVcGD5.js","_app/immutable/chunks/D5u2eZmz.js","_app/immutable/chunks/BalwrVC8.js","_app/immutable/entry/app.BuwwuW4i.js","_app/immutable/chunks/D5u2eZmz.js","_app/immutable/chunks/CVzWLPMS.js","_app/immutable/chunks/Cej3kk_0.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-DzQs8a0u.js')),
			__memo(() => import('./chunks/1-DvB2ZV3z.js')),
			__memo(() => import('./chunks/2-C63yZHor.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: __memo(() => import('./chunks/_server-W0_UFmCr.js'))
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
				endpoint: __memo(() => import('./chunks/_server-BMyCstIb.js'))
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
