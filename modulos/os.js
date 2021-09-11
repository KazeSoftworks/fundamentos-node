const os = require("os");

//arquitectura
//console.log(os.arch());
//console.log(os.platform());

//Especifica nucleos de cpu
//console.log(os.cpus());
//Para determinar el numero solamente
//console.log(os.cpus().length);

//Constantes de sistemas
//console.log(os.constants);

//Memoria

const SIZE = 1024;
const kb = (bytes) => {
    return bytes / SIZE;
};
const mb = (bytes) => {
    return kb(bytes) / SIZE;
};

const gb = (bytes) => {
    return mb(bytes) / SIZE;
};

console.log(os.freemem());
console.log(gb(os.freemem()));

console.log(gb(os.totalmem()));

//Directorio principal
console.log(os.homedir());
//Directorio temporal
console.log(os.tmpdir());

//Hostname e interfaces de red
console.log(os.hostname());
console.log(os.networkInterfaces());
