/*global ga, statistics */
(function(angular) {
  'use strict';

  angular.module('angulartics.google.analytics.cordova', ['angulartics'])
      .config(['$analyticsProvider', function ($analyticsProvider) {
        $analyticsProvider.registerEventTrack(function(action, properties) {
          ga('set', 'dimension8', action);
          ga('send', 'event', action, action);

          statistics.sendAnalytics(action);

        });

      }])
      .run(['$http', function($http) {
        function sendAnalytics(eventType){
          const url = `/api/user/userSessionTrack`;

          var data = {
            projectId : statistics.projectId,
            section   : statistics.section,
            clicks    : statistics.clicks,
            timeSpent : statistics.timeSpent,
            eventType : eventType
          };
          $http.put(url, data);
        }

        statistics.sendAnalytics = sendAnalytics;
      }]);
})(angular);
