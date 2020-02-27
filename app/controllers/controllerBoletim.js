app.controller('BoletimCtrl', function ($scope, $http) {

    $scope.buscar = function (id,nome) {
        var data = {
            id : id,
            nome: nome
        };

        $http.get('http://localhost:8080/alunos', data).then(function (response) {
           
            $scope.alunoList = response.data;


        });
    };


    $scope.imprimir = function (idAluno) {
      
        $http.get('http://localhost:8080/notas/report/'+ idAluno) 
    };

});
