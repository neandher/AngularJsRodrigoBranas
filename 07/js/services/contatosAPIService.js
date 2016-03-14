angular.module("listaTelefonica").factory("contatosAPI", function ($http, config) {

    var _getContatos = function () {
        return $http.get(config.baseUrl + "/contatosBackend.php");
    };

    var _getContato = function (id) {
        return $http.get(config.baseUrl + "/detalhesContatosBackend.php/" + id);
    };

    var _saveContato = function (contato) {
        return $http.post(config.baseUrl + "/contatosBackend.php", contato);
    };

    return {
        getContatos: _getContatos,
        getContato: _getContato,
        saveContato: _saveContato
    };
});