// 04 - email
// Partiendo de un objeto guardado en la variable user
// Verificar si tiene la propiedad email
// Si no la tiene, mostrar en pantalla: 'El usuario no tiene la propiedad email'
// Si la tiene, mostrar en pantalla: 'El usuario tiene la propiedad email'

// const user = {
//     username: "ada_lovelace",
//     password: "1234567890!",
//     email: 'gfsgjfs@gmail.com'
//   };

// if(user.email) {
//     console.log('El usuario tiene la propiedad email')
// } else {
//     console.log('El usuario no tiene la propiedad email')
// };




// Objetos 004
// Tenemos una variable user, con información sobre una persona (firstName, lastName, age)
// Al objeto vamos a agregarle un método que se llame getFullname, que no tiene parámetros y tiene que retornar un string con el firstName y lastName concatenadas, separados por un espacio.


const user = {
    name: {
        names: ['Hedy', 'Adam'],
        lastName: "Lamarr",
    },
    age: 30,
    getFullname: function(){ return `${this.name.names[0]} ${this.name.names[1]} ${this.name.lastName}` },
  };



console.log(  user.getFullname() )

// 45
// 'hola'
// true
// function(){}
// [4,4,4]
// {}
// null
// undefined