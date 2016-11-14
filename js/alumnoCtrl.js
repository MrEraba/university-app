app.controller('alumnoCtrl', ['$scope','$routeParams','$http' ,function($scope,$routeParams,$http){

  $scope.setActive("mAlumnos");

  var codigo = $routeParams.codigo;
  $scope.actualizado = false;
  $scope.alumno = {};
  $scope.creando = false;

  if (codigo === "nuevo"){
    $scope.creando = true;
  } else {
    $http.get('php/servicios/alumnos.getAlumno.php?c=' + codigo)
      .success(function(data){
        if(data.err != undefined){
          window.location = "#/alumnos";
          return;
        }

        $scope.alumno = data;
      });
  }

    if ($scope.creando){
      $scope.guardarAlumno = function(){
        $http.post('php/servicios/alumnos.crear.php', $scope.alumno)
          .success(function(data){
            if (data.err === false){
              $scope.actualizado = true;
              setTimeout(function () {
                $scope.actualizado = false;
                $scope.$apply();
              }, 3500);
            }
            //console.log(data);
          });
      };
    }else{
      $scope.guardarAlumno = function(){
        $http.post('php/servicios/alumnos.guardar.php', $scope.alumno)
          .success(function(data){
            if (data.err === false){
              $scope.actualizado = true;
              setTimeout(function () {
                $scope.actualizado = false;
                $scope.$apply();
              }, 3500);
            }
            //console.log(data);
          });
      };
    }


}]);
