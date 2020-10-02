# Platzom

Platzom es un Traductor de idiomas para el [Curso de Fundamentos de JavaScript] (https://platzi.com/js)

## Descripcion  

- si la palabra termina en ar, se le quitan los 2 ultimos caracteres

- si la palabra inicia con Z adicionar "pe" al final

- si la palbra tiene mas de 10 caracteres  se debe partir a la mitad y unir con un -

- si la palabra es un palindromo ninguna regla anteriror cuneta y se devuelve la palabra intercalando mayusculas y minusculas

## Instalacion 
```
npm instal
```

## Uso
```
import platzom from 'platzom'

platzom("Programar")// 
platzom("Zorro")//zorrope
platzom("Zarpar")//zarppe
platzom("abecedario")//abece-dario
platzom("sometemos")//SoMeTeMoS

```

## Creditos
[Abdel](https://www.instagram.com/abdel_new_official/)

## Licencia 
[MIT](https://opensource.org/licenses/MIT)