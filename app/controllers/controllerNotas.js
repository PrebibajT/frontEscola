app.controller('NotasCtrl', function ($scope, $http) {

    $scope.buscar = function (id,nome) {
        var data = {
            id : id,
            nome: nome
        };

        $http.get('http://localhost:8080/alunos', data).then(function (response) {
           
            $scope.alunoList = response.data;


        });
    };



    $scope.add = function (id,disciplina) {
        var data = {
            id : id,
            disciplina: disciplina
        };

        $http.get('http://localhost:8080/materia', data).then(function (response) {

            $scope.materiaList = response.data;
        

        });
    };

    $scope.cadastra = function (idAluno,idMateria,nota1,nota2,nota3) {
        var data = {
          idAluno,
          idMateria,
          nota1,
          nota2,
          nota3
        };

        $http.post('http://localhost:8080/notas', data).then(function (response) {

            $scope.materiaList = response.data;
        

        });
    };
});