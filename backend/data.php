<?php
//
$nombre = trim(strtolower($_POST['nombre']));
$apellidoP = trim(strtolower($_POST['apellidoP']));
$apellidoM = trim(strtolower($_POST['apellidoM']));
$dni = trim($_POST['dni']);
$fechaNac = ($_POST['fechaNac']);
$email = trim($_POST['email']);
$telefono = $_POST['telefono'];
$php = $_POST['php'];
$html = $_POST['html'];
$js = $_POST['js'];
$css = $_POST['css'];
$genero = $_POST['genero'];
$pais = $_POST['pais'];

//strlen nos sirve para obtener la longitud de cadena de las variables
//se le agerga un espacio a los conocimientos si han sido seleccionados
if(strlen($php) != 0){
    $php = $php." ";
}
if(strlen($html) != 0){
    $html = $html." ";
}
if(strlen($js) != 0){
    $js = $js." ";
}
if(strlen($css) != 0){
    $css = $css." ";
}

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="../style/main.css" />
</head>
<body>
  <!-- Los contenedores(containers) se utilizan para contener, rellenar y (a veces) centrar el contenido dentro de ellos -->
  <!--la clase border pertenece al bootstrap el cual le da un borde a todos los lados del container, form esta en main.css en donde se define el margen superior y el ancho del container-->
  
    <div class="container border form">
        <h1>Registro de Datos</h1>

      <!--las clases php_data, p_titulo, p_info son estilos que se han definido en main.css)-->
       <!-- dispay: flex para alterar sus dimensiones y llenar el espacio disponible-->
        <div class="php_data">
            <p class="p_titulo">Nombre y Apellidos:</p>
            <p class="p_info">
                <?php
                    echo ucwords(" ".$nombre." ".$apellidoP." ".$apellidoM);
                ?>
            </p>
        </div>
        
        <div class="php_data">
            <p class="p_titulo">DNI: </p>
            <p class="p_info">
                <?php
                    echo $dni;
                ?>
            </p>
        </div>

        <div class="php_data">
            <p class="p_titulo">Fecha de Nacimiento: </p>
            <p class="p_info">
                <?php
          /*Devuelve un array de string, siendo cada uno un substring del parámetro string formado por la división realizada por los delimitadores indicados en el parámetro string separator.*/
					$fecha = explode('-',$fechaNac);
				    $anio = $fecha[0];
				    $mes = $fecha[1];
				    $dia = $fecha[2];
                    echo $dia."/".$mes."/".$anio;
                ?>
            </p>
        </div>

        <div class="php_data">
            <p class="p_titulo">Correo Electrónico: </p>
            <p class="p_info">
                <?php
                  echo $email;
               ?>
            </p>
        </div>

        <div class="php_data">
            <p class="p_titulo">Telefono: </p>
            <p class="p_info">
                <?php
                    echo $telefono;
                ?>
            </p>
        </div>

        <div class="php_data">
            <p class="p_titulo">Conocimientos: </p>
            <p class="p_info">
                <?php
                    echo $php.$html.$js.$css;
                ?>
            </p>
        </div>

        <div class="php_data">
            <p class="p_titulo">Genero: </p>
            <p class="p_info">
                <?php
                    echo $genero;
                ?>
            </p>
        </div>

        <div class="php_data">
            <p class="p_titulo">Pais: </p>
            <p class="p_info">
                <?php
                    echo $pais;
                ?>
            </p>
        </div>
    </div>
</body>
</html>