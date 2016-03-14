angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, contatosAPI, serialGenerator, $location, operadoras) {

    $scope.operadoras = operadoras.data;

    $scope.adicionarContato = function (contato) {
        //$scope.contatos.push(contato);
        //$scope.contatos.push(angular.copy(contato));
        //delete $scope.contato;
        //$scope.contatoForm.$setPristine();

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

        $location.path("/contatos");
    };

});