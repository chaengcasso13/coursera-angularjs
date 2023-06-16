(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);

MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };

  service.getMenuItems = function (category) {
    return $http.get(ApiPath + '/menu_items/' + category + '.json').then(function (response) {
      return response.data;
    });
  };

  service.getFavoriteItem = function (item, shortName, index) {
    console.log(item);

    return $http.get(ApiPath + '/menu_items/' + shortName + '/menu_items/' + index + '.json')
    .then(function (response) {
      // if (response.data === null) {
      //   console.log(response.data);
      //   return null;
      // }
      console.log(response.data);
      // return response.data;
      return response.data;
    })
    ;
  };

  // service.getFavoriteItem = function (item, shortName, index) {
  //   console.log(item);
  
  //   return $http.get(ApiPath + '/menu_items/' + shortName + '/menu_items/' + index + '.json')
  //     .then(function (response) {
  //       if (response.data === null) {
  //         console.log(response.data);
  //         return null;
  //       }
  //       console.log(response.data);
  //       return response.data;
  //     })
  //     .then(function (data) {
  //       console.log(data.$$state.value);
  //       return data.$$state.value;
  //     });
  // };

}
})();
