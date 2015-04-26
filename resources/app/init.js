AppConfig = (function() {
	// Init module configuration options
	var appModuleName = 'atm';
	var appModuleVendorDependencies = [
		'ui.router', 
		'ui.bootstrap',
		'btford.socket-io',
		'ngResource', 
	];

	// Add a new vertical module
	var registerModule = function(moduleName, dependencies) {
		// Create angular module
		angular.module(moduleName, dependencies || []);

		// Add the module to the AngularJS configuration file
		angular.module(appModuleName).requires.push(moduleName);
		console.log(angular.module(appModuleName).requires);
	};

	return {
		appModuleName: appModuleName,
		appModuleVendorDependencies: appModuleVendorDependencies,
		registerModule: registerModule
	};
})();

//Start by defining the main module and adding the module dependencies
angular.module(AppConfig.appModuleName, AppConfig.appModuleVendorDependencies);

// Setting HTML5 Location Mode
angular.module(AppConfig.appModuleName).config(['$locationProvider',
	function($locationProvider) {
		$locationProvider.hashPrefix('!');
	}
]);

//Then define the init function for starting up the application
angular.element(document).ready(function() {
	//Fixing facebook bug with redirect
	if (window.location.hash === '#_=_') window.location.hash = '#!';

	//Then init the app
	angular.bootstrap(document, [AppConfig.appModuleName]);
});