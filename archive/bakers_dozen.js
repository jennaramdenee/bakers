(function(){

	var app=angular.module('store', []);

//main products controller
	app.controller=('storeController', function(){
		this.cakes = cake_props;
	});

//viewing cakes on product list page
	app.directive('productName', function(){
		return {
			restrict: 'E',
			templateUrl: 'bakers_dozen_products.html'
		};
	});



//panel controller
	app.controller=('panelController', function(){
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab;
		}
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		}
	});

//reviews
	app.contoller=('reviewController', function(){
		this.review={};
		this.addReview = function(cake){
			cake.reviews.push(this.review);
			this.review={};
		}
	});


//products array
	var cake_props = [
		{
			id: 1,
			name: "Victoria Sponge",
			description: "Spongy on the outside, jammy on the inside",
			long_description: "XXXX",
			price: 2.99,
			img:
			nutritional: '100% fat',
			reviews: [
				{
					stars: 4,
					body: "Tastes amazing",
					author: "calum" 
				}	
			]
		},
		
		{
			id: 2,	
			name: "Chocolate Dream",
			description: "Like a dream, only chocolate",
			long_description: "XXXX",
			price: 3.99,
			img: 
			nutritional: '10% sugar',
			reviews: [
				{
					stars: 4,
					body: "Needs more chocolate",
					author: "carla"
				}
			]
		},	

	];


})();
