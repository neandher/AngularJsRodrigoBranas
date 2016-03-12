angular.module("listaTelefonica").config(function(serialGeneratorProvider){

    //console.log(serialGeneratorProvider.getLength())

    serialGeneratorProvider.setLength(30);

    //console.log(serialGeneratorProvider.getLength())

});