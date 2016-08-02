/*global ga */
(function(angular) {
  'use strict';


  angular.module('angulartics.google.analytics.cordova', ['angulartics'])
      .config(['$analyticsProvider', function ($analyticsProvider) {

        $analyticsProvider.registerEventTrack(function(action, properties) {
          ga('set', 'dimension8', action);
          ga('send', 'event', action, action);

        });

      }]);
})(angular);
