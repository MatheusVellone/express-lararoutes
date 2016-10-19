var path = require('path');

module.exports = {
	registerRoutes: (routePath, controllerPath, app) => {
		var routes = require(routePath);
		var registeredRoutes = [];

		Object.keys(routes.routes).forEach((route) => {
			var verb_path = route.split('|');

			var verb = verb_path[0];
			var routePath = verb_path[1];

			var routeInformation = routes.routes[route];

			var controller_action = routeInformation.uses.split('|');
			var controller = controller_action[0];
			var action = controller_action[1];

			app[verb](routes.prefix + routePath, require(path.join(controllerPath, controller))[action]);
			
			registeredRoutes.push({
				path: routes.prefix + routePath,
				as: routeInformation.as
			});
		});
		return registeredRoutes;
	}
}