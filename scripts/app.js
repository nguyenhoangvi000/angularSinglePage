var myApp = angular.module('myApp', ['ngCookies', 'ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "home.html",
            controller: "HomeController"
        })
        .when("/form", {
            templateUrl: "layouts/form.html",
            controller: "FormController"
        })
        .when("/phongban", {
            templateUrl: "layouts/mainmenu.html",
            controller: "MainMenuController"

        })
});