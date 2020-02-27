app.controller('DisciplinasCtrl', function ($scope, $http) {

    $scope.add = function (disciplina) {
        var data = {
            disciplina: disciplina
        };

        $http.post('http://localhost:8080/materia', data).then(function (response) {
           
        }, function () {

        });
    };

});
