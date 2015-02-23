restaurant.controller('RestaurantCtrl', function RestaurantCtrl($scope) {
  $scope.restaurants = [];
  $scope.addRestaurant = function() {
    $scope.restaurants.push({ name: $scope.restaurantName,
                              location: $scope.restaurantLocation,
                              foodType: $scope.restaurantFoodType,
                              priceRange: $scope.restaurantPriceRange,
                              reviews: []
                              });
    $scope.restaurantName = null;
    $scope.restaurantLocation = null;
    $scope.restaurantFoodType = null;
    $scope.restaurantPriceRange = null;
  };
  $scope.addReview = function(item) {
    item.reviews.push(item.restaurantReview);
    item.restaurantReview = null;
  };
});
