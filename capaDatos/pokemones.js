const mongoose = require("mongoose");


// Funciones 
mongoose.connect("mongodb://127.0.0.1:27017/pokemon", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Se conecto con Exito a la base de datos"))
.catch(err => console.log("Error de conexion en la base de datos", err));

const pokemonSchema =  new mongoose.Schema(
    {
        nombre: String,
        tipo: String,
        nivel: Number
    });

    const pokeModel = mongoose.model("pokemones", pokemonSchema);

    const nuevoPokemon = new pokeModel( {
        nombre: "pikachu",
        tipo: "electrico",
        nivel: 18
    })


    //Metodo Post - Crear Pokemon
    nuevoPokemon.save()
    .then(() => console.log("Se creo con exito el pokemon"))
    .catch(err => console.log("No se pudo guardar el pokemon", err));

    // Metodo Get - Leer los registros

    pokeModel.find()
    .then(pokemones => console.log("Estos son todos los pokemones en la Base de Datos ", pokemones))
    .catch(err => console.log("No se encontro nada.", err));

    
    // mongoose.disconnect();