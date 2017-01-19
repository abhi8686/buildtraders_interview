app.controller('myCtrl', ['$scope', '$location',  function($scope, $location) {

  vm = this;
  vm.isLoaded = false;
  vm.values = [{
    'key': 22,
    'value': 'Kevin'
  }, {
    'key': 24,
    'value': 'Fiona'
  }];
  vm.selected;
	$scope.form1_submit = function(){
		$location.path("/red")
		$scope.first_name = this.first_name;
		$scope.last_name = this.last_name;
		$scope.email = this.email
		$scope.password = this.password
		$scope.dob = this.dob
		$scope.gender = this.gender
		$scope.subs = this.subs
		$location.path("/red")
	}
	$scope.form2_submit  =function(){
		$scope.address_1 = this.address_1
		$scope.address_2  = this.address_2
		$scope.phone_number = this.phone_number
		$location.path("/green")
	}
	$scope.form3_submit = function(){
		$scope.payment_type = this.payment_type
		$location.path("/blue")
	}
	$scope.back_url = function(a){
		$location.path("/" + a)
	}
	$scope.reset = function(a){
		$('#'+ a ).trigger('reset');
	}
}]);