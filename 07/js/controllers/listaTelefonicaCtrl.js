angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatosAPI, operadorasAPI, serialGenerator) {

    $scope.app = "Lista Telefonica";

    $scope.contatos = [];

    $scope.operadoras = [];

    //$scope.contato = {
    //    data: 1034218800000
    //};

    var carregarContatos = function () {
        contatosAPI.getContatos()
            .success(function (data) {
                data.forEach(function(item){
                    item.serial = serialGenerator.generate();
                })
                $scope.contatos = data;
            })
            .error(function (data, status) {
                $scope.error = "Aconteceu algum problema: " + status;
            });
    };

    var carregarOperadoras = function () {
        operadorasAPI.getOperadoras().success(function (data) {
            $scope.operadoras = data;
        });
    };

    $scope.adicionarContato = function (contato) {
        //$scope.contatos.push(contato);
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
        $scope.contatoForm.$setPristine();

        // add contato API
        //$http.post("http://localhost:8080/angular/angularjsrodrigobranas/07/backend/contatosBackend.php", contato).success(data, function(){
        //    delete $scope.contato;
        //    $scope.contatoForm.$setPristine();
        //    carregarContatos();
        //});

        // add contato API SERVICES
        //contato.serial = serialGenerator.generate;
        //contato.data = new Date();
        //contatosAPI.saveContato(contato).success(data, function(){
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