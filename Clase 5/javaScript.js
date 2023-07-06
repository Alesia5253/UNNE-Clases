// const nombre = "Alesia";
// const apellido = "Gonzalez Pelosi";
// let edad = 37;
// const dni = 32190401;

function calcular() {
    Event.preventDefault(); //frena la ejecucion del formulario
    //Los valores N1 y N2 ingresan como string
    let resultado = 0;
    let color = "";
    let N1 = document.getElementById('numero1').value; /* -value permite traer el elemento que esta ingresado */
    let N2 = document.getElementById('numero2').value;
    let OP = parseInt(document.getElementById('operadores').value); //aca convierto directamente (en una linea de codigo) a OP a un entero
    // console.log(typeof(OP)) //permite ver el tipo (str, bool, int, etc.)
    //Aca con la funcion parseInt se pasan a enteros
    N1 = parseInt(N1);
    N2 = parseInt(N2);

    // console.log(N1 + N2);

    if(OP === 1) { //Suma
        resultado = N1 + N2;
        color = "green";
    }
    if(OP === 2) { //Resta
        resultado = N1 - N2;
        color = "red";
    }
    if(OP === 3) { //Multiplicacion
        resultado = N1 * N2;
        color = "black";
    }
    if(OP === 4) { //Division
        resultado = N1 / N2;
        color = "orange";
    }

    alert(resultado);

    document.getElementById("resultado").innerHTML = resultado; // .innerHTML permite insertar en la pagina
    document.getElementById("nombre").innerHTML = N1;
    document.getElementById("apellido").innerHTML = N2;
    document.getElementById("resultado").style.color = color;
}


