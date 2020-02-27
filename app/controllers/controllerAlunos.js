app.controller('AlunosCtrl', function ($scope, $http) {

    $scope.add = function (nome) {
        var data = {
            nome: nome
        };

        $http.post('http://localhost:8080/alunos', data).then(function (response) {
           
        }, function () {

        });
    };


});

