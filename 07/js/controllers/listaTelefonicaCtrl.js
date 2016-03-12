angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $http) {

    $scope.app = "Lista Telefonica";

    $scope.contatos = [];

    $scope.operadoras = [];

    var carregarContatos = function () {
        $http.get("http://localhost:8080/angular/angularjsrodrigobranas/07/backend/contatosBackend.php")
            .success(function (data) {
                $scope.contatos = data;
            })
            .error(function (data) {
                $scope.message = "Aconteceu algum problema: " + data;
            });
    };

    var carregarOperadoras = function () {
        $http.get("http://localhost:8080/angular/angularjsrodrigobranas/07/backend/operadorasBackend.php").success(function (data) {
            $scope.operadoras = data;
        });
    };

    $scope.adicionarContato = function (contato) {
        //$scope.contatos.push(contato);
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
        $scope.contatoForm.$setPristine();

        // add contato
        //$http.post("http://localhost:8080/angular/angularjsrodrigobranas/07/backend/contatosBackend.php", contato).success(data, function(){
        //    delete $scope.contato;
        //    $scope.contatoForm.$setPristine();
        //    carregarContatos();
        //});
    };

    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });
    };

    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
        console.log(isContatoSelecionado);
    };

    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    }

    carregarContatos();
    carregarOperadoras();

});