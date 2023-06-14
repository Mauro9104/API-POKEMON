const express = require("express");
const app = express();


app.get("/", (req, res) => {

    res.send(" API");
});

app.listen(3000, () => {
    console.log("El servidor se ha inicializado en el puerto 3000");
});

