angular.module("listaTelefonica").config(function(serialGeneratorProvider){

    //console.log(serialGeneratorProvider.getLength())

    serialGeneratorProvider.setLength(100);

    //console.log(serialGeneratorProvider.getLength())

});