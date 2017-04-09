'use strict';

angular.module('mueser', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'homeCtrl'
    }).state('shop', {
        url: '/shop',
        templateUrl: 'views/shop.html',
        controller: 'shopCtrl'
    }).state('details', {
        url: '/item-details/:id',
        templateUrl: 'views/details.html',
        controller: 'detailsCtrl'
    }).state('cart', {
        url: '/cart',
        templateUrl: 'views/cart.html',
        controller: 'cartCtrl'

    });
});
"use strict";
"use strict";
'use strict';

angular.module('mueser').controller('homeCtrl', function (mainService, $scope) {});
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
