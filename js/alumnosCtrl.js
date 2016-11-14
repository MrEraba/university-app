app.controller('alumnosCtrl', ['$scope','$http', function($scope,$http){

	$scope.setActive("mAlumnos");
	$scope.alumnos = {};
	$scope.posicion = 5;

	$http.get('php/servicios/alumnos.listado.php')
		.success(function(data){
			$scope.alumnos = data;
		});
	$scope.siguientes = function(){
		if($scope.alumnos.length > $scope.posicion){
			$scope.posicion += 5;
		}
	};

	$scope.anteriores = function(){
		if($scope.posicion > 5){
			$scope.posicion -= 5;
		}
	};



}]);
