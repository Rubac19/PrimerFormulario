//Atrapa un elemento por su su referencia, sea nombre de etiqueta, clase o id o atributo y retorna al elemento.
const nombre = document.querySelector(".js_Nombre");
const apellidoP = document.querySelector(".js_Apellido_P");
const apellidoM = document.querySelector(".js_Apellido_M");
const dni = document.querySelector(".js_Dni");
const form = document.querySelector("form");
const telefono = document.querySelector(".js_Telefono");
const email = document.querySelector(".js_Email");
const radio = document.querySelectorAll(".js_Genero");
const conocimientos = document.querySelectorAll(".js_Conocimientos");
const fechNac = document.querySelector(".js_fechaNac");
const error = document.querySelector(".errores");
const btnLimpiar = document.querySelector(".btn-secondary");

//Se crea el objeto campos, con el que confirmaremos la validación de cierto elemento
//En caso este correcto, determinado elemento será correcto. Caso contrario será falso
campos = {
	nombre: false,
	apellidoP: false,
	apellidoM: false,
	dni: false,
	telefono: false,
	email: false,
	radio: false,
	conocimientos: false
}

/*El evento onclick sirve para que se haga determinada acción cuando se realiza click en cierto elemento*/

//Cambia el valor de los mensaje de error
btnLimpiar.onclick = function(){
	error.innerHTML = '<i class="fa fa-eraser"></i> Datos borrados.';//Inserta codigo HTML
	error.style.backgroundColor = 'gray';//Cambia el color de fondo del elemento
}

/*onkeyup -> este evento se activa cuando soltamos una tecla*/

//Validamos nombre
nombre.onkeyup=function(){
  //Valida la expresion regular y la longitud minima, la propiedad value devuelve 
  //Se utilizo una expresión regular, en caso el valor no cumpla con la condición de la cadena regular devuelve null
    if(nombre.value.length<3||/^[a-z\sA-Z]+$/.exec(nombre.value)==null){
        nombre.style.color="red";//Cambia el color de la letra del elemento
        nombre.style.border = "3px solid red";//Agrega un borde al elemento
    }else{
        nombre.style.color="black";
        nombre.style.border = "none";		
    }
	validacionesGenerales(nombre.id);
}

//Validamos Apellido Paterno
apellidoP.onkeyup=function(){
  //Valida la expresion regular y la longitud minima, la propiedad value devuelve 
  //Se utilizo una expresión regular, en caso el valor no cumpla con la condición de la cadena regular devuelve null
	if(apellidoP.value.length<3 || /^[a-zA-Z]+$/.exec(apellidoP.value)==null){
        apellidoP.style.color="red";//Cambia el color de la letra del elemento
        apellidoP.style.border = "3px solid red";//Agrega un borde al elemento
    }else{
        apellidoP.style.color="black";
        apellidoP.style.border = "none";
    }	
	//Funcion que valida los datos y muestra su respectiva salida de datos: [Rojo/Mensaje de error] - [Verde/Mensaje de validacion]
	validacionesGenerales(apellidoP.id);
}

//Validamos Apellido Materno
apellidoM.onkeyup=function(){
  //Valida la expresion regular y la longitud minima, la propiedad value devuelve 
  //Se utilizo una expresión regular, en caso el valor no cumpla con la condición de la cadena regular devuelve null
    if(apellidoM.value.length<3 || /^[a-zA-Z]+$/.exec(apellidoM.value)==null){
        apellidoM.style.color="red";//Cambia el color de la letra del elemento
        apellidoM.style.border = "3px solid red";//Agrega un borde al elemento
    }else{
        apellidoM.style.color="black";
        apellidoM.style.border = "none";		
    }
  //Funcion que valida los datos y muestra su respectiva salida de datos: [Rojo/Mensaje de error] - [Verde/Mensaje de validacion]
	validacionesGenerales(apellidoM.id);
}

//Validamos dni
dni.onkeyup=function(){
  //Valida que el DNI solo debe tener 8 digitos
	if(dni.value.length!=8){
        dni.style.color="red";//Cambia el color de la letra del elemento
        dni.style.border = "3px solid red";//Agrega un borde al elemento
    }else{
        dni.style.color="black";
        dni.style.border = "none";
    }
    //Valida que el dni debe ser solo numeros
    if(!Number(dni.value)){
        dni.style.color="red";//Cambia el color de la letra del elemento
        dni.style.border = "3px solid red";//Agrega un borde al elemento
		
    }
	else{
        dni.style.color="black";
        dni.style.border = "none";
    }
  //Funcion que valida los datos y muestra su respectiva salida de datos: [Rojo/Mensaje de error] - [Verde/Mensaje de validacion]
	validacionesGenerales(dni.id);
}

//Telefono
telefono.onkeyup=function(){
  //Valida que el telefono debe ser solo de 9 digitos
    if(telefono.value.length!=9 ||/^[0-9]+$/.exec(telefono.value)==null ){
        telefono.style.color="red";//Cambia el color de la letra del elemento
        telefono.style.border = "3px solid red";//Agrega un borde al elemento
    }else{
        telefono.style.color="black";
        telefono.style.border = "none";		
    }
  //Funcion que valida los datos y muestra su respectiva salida de datos: [Rojo/Mensaje de error] - [Verde/Mensaje de validacion]
	validacionesGenerales(telefono.id);
}
//--------------------------------------------------------------------------------------
//En este caso, tenemos la validacion respectiva al campo EMAIL
//Definimos funcion a partir del evento OKNEYP, que ocurre cuando se suelta una tecla en el teclado
email.onkeyup=function(){
    //Se define un formato para el cuerpo del email, utilizando expresiones regulares
    if(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.exec(email.value)==null){ //En caso que no cumpla el formato el resultado es nulo 
        email.style.color="red"; 
        email.style.border = "3px solid red"; //Resalta los bordes de color rojo
    }else{  //De lo contrario, se acepta el input/ entrada de datos de la cadena
        email.style.color="black";
        email.style.border = "none";
	}
  //Funcion que valida los datos y muestra su respectiva salida de datos: [Rojo/Mensaje de error] - [Verde/Mensaje de validacion]
	validacionesGenerales(email.id); 
}

//Funcion para verificar si hay valores de entradas en arreglo
function marcados(vector){
    bandera = true;
    for(i=0;i<vector.length;i++){
        if(vector[i].checked){ //Funcion cheked devuelve el estado marcado de un checkbox (Casilla de verificacion)
            bandera=false; //retornar false si no hay seleccion de datos
        }
    }
    return bandera; //retornar true si existe al menos una seleccion de datos
}

//Funcion que contiene las operaciones para la validacion de datos
function validacionesGenerales(entrada){
  //La variable Entrada tendra el valor del indentificador de un variable
	switch(entrada){  
		case dni.id: //En caso del campo de DNI es llamado
			//Funcion value() establece o retorna el valor de la variable de un text field (campo de texto)
      if(!Number(dni.value)){  //En el caso de la cadena para el DNI no sean digitos
				error.innerHTML = '<i class="fa fa-times-circle"></i> El DNI debe ser solo numeros.'; //Muestra un mensaje de error
				error.style.backgroundColor = 'red'; //Define el color para el mensaje de error
				campos.dni = false;
				return false; //Se le establece el estado de false
			}

			if(dni.value.length!=8){ //En el caso de la cadena para el DNI sean mayor o menor que 8 digitos
				error.innerHTML = '<i class="fa fa-times-circle"></i> El DNI debe ser de 8 digitos';
				error.style.backgroundColor = 'red';
				campos.dni = false;
				return false; //Se le establece el estado de false
			}
			
			if(Number(dni.value)&&dni.value.length==8){ //En el caso de la cadena para el DNI cumpla con los requisitos
				error.innerHTML = '<i class="fa fa-check"></i> DNI correcto';  //La etiqueta i de la clase fa define el tipo de incono empleado (check)
				error.style.backgroundColor = 'green'; //El campo de salida de datos se pinta de color verde
				campos.dni = true;  //Se le establece el estado de true
			}			
			break;
			
		case nombre.id: //En caso del campo de nombre es llamado
      //Se define un formato para el cuerpo de nombre, permite puro caracteres
			if(/^[a-z\sA-Z]+$/.exec(nombre.value)==null){ //En el caso que no cumpla el formato el resultado es nulo
    		    error.innerHTML = '<i class="fa fa-times-circle"></i> El Nombre no debe contener numeros.';
				error.style.backgroundColor = 'red';
				campos.nombre=false;
		        return false;
		    }
        
			if(nombre.value.length<3){ //En el caso de la cadena para el nombe sea menor que 3 digitos
    		    error.innerHTML = '<i class="fa fa-times-circle"></i> El Nombre tiene que ser de 3 a más caracteres';
				error.style.backgroundColor = 'red';
				campos.nombre=false;
		        return false;
		    }
			
			if(/^[a-z\sA-Z]+$/.exec(nombre.value)!=null && nombre.value.length>=3){ //En el caso de la cadena para el nombre cumpla con los requisitos
				error.innerHTML = '<i class="fa fa-check"></i> El nombre ingresado es aceptado.';
				error.style.backgroundColor = 'green';
				campos.nombre = true;
			}
			break;
		//Se define un formato para el cuerpo de apellido materno, permite puro caracteres	
		case apellidoM.id: //En caso del campo de apellido materno es llamado
			if(/^[a-zA-Z]+$/.exec(apellidoM.value)==null){
				error.innerHTML = '<i class="fa fa-times-circle"></i> El Apellido Materno no debe contener numeros.';
				error.style.backgroundColor = 'red';
				campos.apellidoM = false;
				return false;
			}
			if(apellidoM.value.length<3){ //En el caso de la cadena para el apellido materno sea menor que 3 digitos
				error.innerHTML = '<i class="fa fa-times-circle"></i> El Apellido Materno tiene que ser de 3 a más caracteres';
				error.style.backgroundColor = 'red';
				campos.apellidoM = false;
				return false;
			}
			if(/^[a-zA-Z]+$/.exec(apellidoM.value)!=null && apellidoM.value.length>=3){ //En el caso de la cadena para el apellido materno cumpla con los requisitos
				error.innerHTML = '<i class="fa fa-check"></i> El apellido materno ingresado es aceptado.';
				error.style.backgroundColor = 'green';
				campos.apellidoM = true;
			}
			break;
		
		case apellidoP.id:   //En caso del campo de apellido paterno es llamado
      //Se define un formato para el cuerpo de apellido paterno, permite puro caracteres
			if(/^[a-zA-Z]+$/.exec(apellidoP.value)==null){ //En el caso que no cumpla el formato el resultado es nulo
				error.innerHTML = '<i class="fa fa-times-circle"></i> El Apellido Paterno no debe contener numeros.';
				error.style.backgroundColor = 'red';
				campos.apellidoP = false;
				return false;
			}
			if(apellidoP.value.length<3){ //En el caso de la cadena para el apellido paterno sea menor que 3 digitos
				error.innerHTML = '<i class="fa fa-times-circle"></i> El Apellido Paterno tiene que ser de 3 a más caracteres';
				error.style.backgroundColor = 'red';
				campos.apellidoP = false;
				return false;
			}
			
			if(/^[a-zA-Z]+$/.exec(apellidoP.value)!=null && apellidoP.value.length>=3){ //En el caso de la cadena para el apellido paterno cumpla con los requisitos
				error.innerHTML = '<i class="fa fa-check"></i> El apellido materno ingresado es aceptado.';
				error.style.backgroundColor = 'green';
				campos.apellidoP = true;
			}
			break;
//-------------------------------------------------------------------------------------------
		case email.id: //En caso sea el id del email
      //Verifica mediante una expresion regular
      //Acepta una estructura del correo electronico
			if(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.exec(email.value)==null){
				error.innerHTML = '<i class="fa fa-times-circle"></i> El correo está mal escrito, le falta @ o .'; //Modifica el codigo html
				error.style.backgroundColor = 'red'; //Modifica el estilo del fondo 
				campos.email = false; 
				return false; 
			}
			else{
				campos.email = true; //Cambia de estado
				error.innerHTML = '<i class="fa fa-check"></i> El correo ingresado es aceptado.'; //Modifica el mensaje en html
				error.style.backgroundColor = 'green'; //Modifica el estilo del fondo
			}
			break;
		case telefono.id: //En caso sea el id del telefono
      //Solo acepta numeros
			if(/^[0-9]+$/.exec(telefono.value)==null){
				error.innerHTML = '<i class="fa fa-times-circle"></i> El Telefono no debe contener letras';
				error.style.backgroundColor = 'red'; //Modifica el estilo del fondo
				campos.telefono = false; 
				return false;
			}
			if(telefono.value.length!=9){ //Mensaje de error en caso
				error.innerHTML = '<i class="fa fa-times-circle"></i> El Telefono debe ser de 9 digitos';
				error.style.backgroundColor = 'red';
				campos.telefono = false;
				return false;
			}
			if(telefono.value.length==9 && /^[0-9]+$/.exec(telefono.value)!=null ){
				error.innerHTML = '<i class="fa fa-check"></i> El telefono ingresado es aceptado.';
				error.style.backgroundColor = 'green';
				campos.telefono = true;
			}
			break;
	}
    return true;
}

//Retorna un valor logico
function validacionEnviar(){
	if(marcados(radio)){ //Verifica que genero haya sido marcado
		radios = document.querySelector(".radios"); 
		radios.style.border = '3px solid red';
		error.innerHTML = '<i class="fa fa-times-circle"></i> No ha marcado ningún valor de género';
		error.style.backgroundColor = 'red';		
		campos.radio = false;
	}
	else{
		radios = document.querySelector(".radios");
		radios.style.border = 'None';
		campos.radio = true;
		
	}
	if(marcados(conocimientos)){ //Verifica que conocimientos haya sido marcado
			conoc = document.querySelector(".check");
			conoc.style.border = '3px solid red';
			error.innerHTML = '<i class="fa fa-times-circle"></i> Tiene que marcar mínimo un Estudio';
			error.style.backgroundColor = 'red';			
			campos.conocimientos = false;
	}
	else{
		radios = document.querySelector(".check");
		radios.style.border = 'None';
		campos.conocimientos=true;
	}
  //Condicional que determina si los campos ingresados son aceptados
	if(campos.nombre&&campos.apellidoP&&campos.apellidoM&&campos.dni&&campos.telefono&&campos.email&&campos.radio&&campos.conocimientos== true){
		return true;
	}
	else{	 
		return false;
	}
}