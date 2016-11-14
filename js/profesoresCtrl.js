app.controller('profesoresCtrl', ['$scope', function($scope){
	
	$scope.setActive("mProfesores");

	$scope.inicio = 5;
	$scope.filtrando = "";

	$scope.personas = ["Carlos","Pedro","Maria","Susana","Melissa","Fernando","Hernando","Juan","Camila","Ubaldina","Jocelyn","Arlette","Dilcia","Andrea","Antonio","Jose","Alberto"];


	$scope.siguientes = function(){

		if ( $scope.inicio < $scope.personas.length  ) {
			$scope.inicio += 5;
		};

	}

	$scope.anteriores = function(){
		if ( $scope.inicio > 5   ) {
			$scope.inicio -= 5;
		};		
	}


}]);