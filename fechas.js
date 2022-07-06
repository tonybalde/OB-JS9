// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy

const fechaHoy = Date();

// - La fecha de tu nacimiento

const fechaNac = new Date(1979, 05, 03); // Año mes y dia
console.log(fechaNac);

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

let masTarde = (fechaHoy < fechaNac);
console.log(masTarde);

// - Una variable que contenga el día de tu nacimiento - OK

const diaNac = fechaNac.getDate();

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0) - OK

const mesNac = fechaNac.getMonth()+1;

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos) - OK

const anyoNac = fechaNac.getFullYear();

