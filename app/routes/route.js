app.config(function($routeProvider){

    $routeProvider
    .when('/', {
        templateUrl :'app/views/menu.html',
        controller  :'MenuCtrl'
    })

    .when('/imprimir', {
        templateUrl :'app/views/boletim.html',
        controller  :'BoletimCtrl'
    })
 
    .when('/disciplinas', {
        templateUrl :'app/views/disciplinas.html',
        controller  :'DisciplinasCtrl'
    })
 
    .when('/alunos', {
        templateUrl :'app/views/aluno.html',
        controller  :'AlunosCtrl',
    })

    .when('/notas', {
        templateUrl :'app/views/notas.html',
        controller  :'NotasCtrl'
    })
});

