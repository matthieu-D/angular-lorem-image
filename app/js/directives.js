'use strict';
/* Directives */

angular.module('myApp.directives',['ngSanitize','myApp.services']).
  directive('lorem', function(imageBuilder) {
    return {
	restrict: 'EA',
	scope:{
	  text:'@',
	  count:'@',
	  width:'@',
	  height:'@'
	},
templateUrl:'partials/lorem-image.html',
controller: function($scope) {
$scope.images = imageBuilder.build($scope.text,
		   $scope.count,
		   $scope.height)
}
}
});

