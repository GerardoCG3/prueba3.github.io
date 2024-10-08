import express from "express";
//fix para __dirname
import path from "path";
import {fileURLToPath} from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//Server
const app = express();

app.set("port", 3000);
app.listen(app.get("port"));
console.log("Servidor corriendo en puerto",app.get("port"));

//Configuración
app.use(express.static(__dirname + "/public"));

//Rutas
app.get("/", (req, res) => res.sendfile(__dirname + "/pages/login.html"));
app.get("/register", (req, res) => res.sendfile(__dirname + "/pages/register.html"));