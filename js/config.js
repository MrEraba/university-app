app.config( function($routeProvider){

	$routeProvider
		.when('/',{
			templateUrl: 'parciales/home.html',
			controller: 'inicioCtrl'
		})
		.when('/profesores',{
			templateUrl: 'parciales/profesores.html',
			controller: 'profesoresCtrl'
		})
		.when('/alumnos',{
			templateUrl: 'parciales/alumnos.html',
			controller: 'alumnosCtrl'
		})
		.when('/alumno/:codigo',{
			templateUrl: 'parciales/alumno.html',
			controller: 'alumnoCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});


});
