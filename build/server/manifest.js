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
		client: {"start":"_app/immutable/entry/start.267bcb28.js","app":"_app/immutable/entry/app.27f3198f.js","imports":["_app/immutable/entry/start.267bcb28.js","_app/immutable/chunks/scheduler.348e368f.js","_app/immutable/chunks/singletons.7e26c637.js","_app/immutable/entry/app.27f3198f.js","_app/immutable/chunks/scheduler.348e368f.js","_app/immutable/chunks/index.f58bf1ae.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-8106ce6e.js')),
			__memo(() => import('./chunks/1-92dbd5e4.js')),
			__memo(() => import('./chunks/2-c524a69e.js')),
			__memo(() => import('./chunks/3-e7c737f4.js')),
			__memo(() => import('./chunks/4-79f6583f.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/[roomId]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"roomId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
