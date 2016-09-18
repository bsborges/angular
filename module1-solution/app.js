(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
  $scope.click = function () {
    // I don't consider empty items in the list
    if(!$scope.tb || $scope.tb.trim().length === 0)
    {
      $scope.message = "Please enter data first";
    }
    else {
      var re = /\s*,\s*/;
      var arrayStrings = $scope.tb.split(re);

      if (arrayStrings.length > 3)
      {
        $scope.message = "Too much!";
      }
      else if (arrayStrings.length > 0)
      {
        $scope.message = "Enjoy!";
      }
    }
  }

}
})();
