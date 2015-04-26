'use strict';

// Use applicaion configuration module to register a new module
AppConfig.registerModule('feeds');
//Setting up route
angular.module('feeds').config(['$stateProvider',
	function($stateProvider) {
		// Feeds state routing
		$stateProvider.
		state('listFeeds', {
			url: '/feeds',
			templateUrl: 'modules/feeds/views/list-feeds.html'
		}).
		state('createFeed', {
			url: '/feeds/create',
			templateUrl: 'modules/feeds/views/create-feed.html'
		}).
		state('viewFeed', {
			url: '/feeds/:feedId',
			templateUrl: 'modules/feeds/views/view-feed.html'
		}).
		state('editFeed', {
			url: '/feeds/:feedId/edit',
			templateUrl: 'modules/feeds/views/edit-feed.html'
		});
	}
]);