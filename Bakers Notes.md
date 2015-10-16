#Notes & Learnings

###Factory

* Factory can be imported into controller
* Factory can return a function or object
	 
###UI-router

* Add links with ````ui-sref```` directives calling state name
* Uses ````$stateprovider```` and ````$urlRouterProvider````
* Then set up states using .state. States have:
	* name 
	* url
	* templateUrl: 
	* controller: (optional)
* "When this URL is sent, apply this template, and this controller"
	
*Documentation*: https://github.com/angular-ui/ui-router


#Project Work


###Purpose

Ecommerce style site for cake

###Description

- **Phase 1**: Simple content site
- **Phase 2**: Create cart
- **Phase 3**: Basket


###Product Lister Page

- Created array of product objects
- Looped through products using ng-repeat

###Product Details Page

* Requires project object as primary key
* e.g. user clicks on "Victoria Sponge", so we only want to surface properties "Victoria Sponge" related
* Create factory, in this case called "products" and place all product objects within
* Create products object

````
var productsObj = {};

  for (var i = products.length - 1; i >= 0; i--) {
    productsObj[ products[i].name ] = products[i];
  }
  
  return {
    productsArray: products,
    productsObj: productsObj
  }

});
````

* Add "products" (name of factory) as a dependency in the controller


###Linking PLP to PDP

* Use ui-router (see notes)
* Add #/ before URL so that we don't change page
	* The # is treated like an anchor, i.e just another part on the same page
