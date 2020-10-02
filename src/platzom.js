
 export default  function  Platzon ( str )  {
 

     let translation = str;

     // si la palabra es un palindromo ninguna regla anteriror cuneta y se devuelve la palabra intercalando mayusculas y minusculas



     const  reverse = (str) => str.split('').reverse().join('')

     function MinMay(str) {

         const length = str.length
         let translation = ''
         let capitalize = true

         for (let i = 0; i < length; i++) {

             const char = str.charAt(i)

             translation += capitalize ? char.toUpperCase() : char.toLowerCase()
             capitalize = !capitalize


         }

         return translation

     }

         if (str == reverse(str)){


             return MinMay(str)

         }





     // si la palabra termina en ar, se le quitan los 2 ultimos caracteres

     if (str.toLowerCase().endsWith('ar')) {

         translation = str.slice(0, -2)
     }

 // si la palabra inicia con Z adicionar "pe" al final
     if (str.toLowerCase().startsWith('z')) {

       translation += 'pe'
     }

     // si la palbra tiene mas de 10 caracteres  se debe partir a la mitad y unir con un -

     const length = translation.length


     if (length >= 10){

         const firstHalf = translation.slice(0 , Math.round(length/2))
         const secondtHalf = translation.slice( Math.round(length/2))

         translation = `${firstHalf}-${secondtHalf}`
     }


return translation

 }

