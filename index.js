/* NOdeJS
const http = require("http");

http.createServer((req,res) => {
    res.end("hello world");
}).listen(3000);*/

const express = require("express");
const { route } = require("express/lib/application");
const app = express();
const morgan = require("morgan");

//requiriendo rutas
const router = require("./routes");
const routerApi = require("./routes_api");

//settings
app.set("appName", "Mi primer servidor");
app.set("views", __dirname + '/views');
console.log(__dirname + '/views');
app.set("view engine", "ejs");


// Middleware
app.use(morgan("short"));

/*Ejemplo
app.use(function(req, res, next){
    console.log("request url:" + req.url);
    next();
})
*/
/*Ejemplo
app.use( (req, res, next) => {
    console.log("a pasado por acá");
    next();
})*/

//rutas
app.use(router);
app.use("/api", routerApi);

app.get ("*", (req, res) =>{
    res.end("Esta pagina no existe");
})

app.listen(3000, () => {
    console.log("server ON");
    console.log("Nombre de la App: "+ app.get("appName"));
});