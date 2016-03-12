angular.module("listaTelefonica").config(function(serialGeneratorProvider){

    //console.log(serialGeneratorProvider.getLength())

    serialGeneratorProvider.setLength(5);

    //console.log(serialGeneratorProvider.getLength())

});