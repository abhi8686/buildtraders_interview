app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/form1.html"
    })
    .when("/red", {
        templateUrl : "views/form2.html"
    })
    .when("/green", {
        templateUrl : "views/form3.html"
    })
    .when("/blue", {
        templateUrl : "views/finsih.html"
    });
});