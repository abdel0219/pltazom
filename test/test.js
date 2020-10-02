

const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function (){


it('si la palabra termina en ar, se le quitan los 2 ultimos caracteres', function(){


const translation = platzom("Programar")
expect(translation).to.equal("Program")

})
it('si la palabra inicia con Z adicionar "pe" al final', function(){

const translation = platzom("zorro")
const translation2 = platzom("Zarpar")

expect(translation).to.equal("zorrope")
expect(translation2).to.equal("Zarppe")


	
})

it('si la palabra es un palindromo ninguna regla anteriror cuneta y se devuelve la palabra intercalando mayusculas y minusculas', function(){

const translation = platzom("sometemos")
expect(translation).to.equal("SoMeTeMoS")
	
})


it('si la palbra tiene mas de 10 caracteres  se debe partir a la mitad y unir con un -', function(){

const translation = platzom("abecedario")
expect(translation).to.equal("abece-dario")

	
})

})