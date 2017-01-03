var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/login', {
        templateUrl: 'pages/login.html',
        controller: 'LoginController',
        activetab: 'login'
    })
  .when('/', {
    templateUrl : 'pages/home.html',
    controller  : 'HomeController',
    activetab: 'home'
  })

  .when('/members', {
    templateUrl : 'pages/members.html',
    controller  : 'MembersController'
  })


  .otherwise({redirectTo: '/'});
});
	
app.controller('HomeController', function($scope) {
  $scope.message = 'Website ';
   $scope.stepsModel = [];

    $scope.imageUpload = function(element){
        var reader = new FileReader();
        reader.onload = $scope.imageIsLoaded;
        reader.readAsDataURL(element.files[0]);
    }

    $scope.imageIsLoaded = function(e){
        $scope.$apply(function() {
            $scope.stepsModel.push(e.target.result);
        });
    }
    function widgetsController($scope, $route) {
    $scope.$route = $route;

  
}
  $scope.pageScroll = function () {
   var elem = document.getElementById('data');
    // elem.scrollTop = elem.scrollHeight;
    // document.getElementById('data').scrollBy(0,1);
    elem.scrollTop =100;
    console.log(elem.scrollTop);
  }
  
});

app.controller('MembersController', function($scope) {
  $scope.message = 'Members ';
});
