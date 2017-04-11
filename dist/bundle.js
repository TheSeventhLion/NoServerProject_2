'use strict';

angular.module('mueser', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'views/home.html',
    controller: 'homeCtrl'
  }).state('suiting', {
    url: '/suiting',
    templateUrl: 'views/suiting.html',
    controller: 'shopCtrl'
  }).state('shirting', {
    url: '/shirting',
    templateUrl: 'views/shirting.html',
    controller: 'shirtingCtrl'
  }).state('process', {
    url: '/process',
    templateUrl: 'views/process.html',
    controller: 'processCtrl'
  }).state('shop', {
    url: '/shop',
    templateUrl: 'views/shop.html',
    controller: 'shopCtrl'
  }).state('lookbook', {
    url: '/lookbook',
    templateUrl: 'views/lookbook.html',
    controller: 'lookbookCtrl'
  }).state('press', {
    url: '/press',
    templateUrl: 'views/press.html',
    controller: 'pressCtrl'
  }).state('inquire', {
    url: '/inquire',
    templateUrl: 'views/inquire.html',
    controller: 'inquireCtrl'
  }).state('cart', {
    url: '/cart',
    templateUrl: 'views/cart.html',
    controller: 'cartCtrl'

  });
});
"use strict";
'use strict';

angular.module('mueser').controller('homeCtrl', function (mainService, $scope) {});
"use strict";
"use strict";
"use strict";
"use strict";
"use strict";
"use strict";
'use strict';

angular.module('mueser').service('mainService', function ($http) {});
'use strict';

angular.module('mueser').directive('footerDir', function () {

    return {
        restrict: "AE",
        templateUrl: "../views/footerDir.html"

    };
});
'use strict';

angular.module('mueser').directive('headerDir', function () {

    return {
        restrict: "AE",
        templateUrl: "../views/headerDir.html"

    };
});
//# sourceMappingURL=bundle.js.map
