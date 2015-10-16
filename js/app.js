angular.module('baker', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/products");

   $stateProvider

    .state('productListerPage', {
      url: "/products",
      templateUrl: "views/bakersList.html",
      controller: "bakerCtrl"
    })

    .state('productDetailsPage', {
      url: "/products/:id",
      templateUrl: "views/bakersDetail.html",
      controller: "panelCtrl"
    })

})


.controller('bakerCtrl', function($scope, products){

  $scope.products = products;

})

.controller('panelCtrl', function($scope, $state, products){

  $scope.product = products[$state.params.id];

  $scope.tab = 1;
  $scope.setTab = function(a){
    this.tab = a;
  }

})

.factory("products", function(){

  var products = {
    "vs1": {
      name: "Victoria Sponge",
      price: 2.99,
      image: './images/victoria_sponge.jpg',
      description: "Spongy on the outside, jammy and creamy on the inside",
      nutrition: "Suitable for vegans",
      reviews: "Had this at my tea party. Went down a treat"
    },
    "ch1": {
      name: "Chocolate Fondant", 
      price: 8.49,
      image: './images/chocolate_fondant.jpg',
      description: "Luxury chocolate at its best",
      nutrition: "Not suitable for nut allergies",
      reviews: "Needs more chocolate"
    },
    "fu1": {
      name: "Fudge Cake",
      price: 5.69,
      image: './images/fudge_cake.jpg',
      description: "Joyous on those winter evenings",
      nutrition: "Don't pack fudge on an empty stomach",
      reviews: "Kids loved it"
    },
    "st1": {
      name: "Sticky Toffee Pudding",
      price: 3.99,
      image: './images/sticky_toffee_pudding.jpg',
      description: "Sticky",
      nutrition: "Sticky",
      reviews: "Sticky indeed"
    } 
  };

  return products;

});


