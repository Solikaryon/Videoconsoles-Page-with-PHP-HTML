<?php
include 'conectar.php';
$nombre = $_POST["nombre"];
$telefono = $_POST["telefono"];
$correo = $_POST["correo"];
$mensaje = $_POST["mensaje"];

// Insaertar campos
$insertar = "INSERT INTO datos(nombre,telefono,correo,mensaje) VALUES ('$nombre','$telefono','$correo','$mensaje')";

$verificar_correo = mysqli_query($conexion,"SELECT * FROM datos WHERE correo = '$correo'");

if (mysqli_num_rows($verificar_correo) > 0) {
    echo '<script>    
         alert("El correo ya existe");
         window.history.go(-1);
    </script>';  
    exit;
}

// Ejecutar consulta
$resultado = mysqli_query($conexion,$insertar);

if (!$resultado) {
    echo '<script> 
            alert("Error de registro");
            window.history.go(-1);
        </script>';
} else {
    echo '<script> 
            alert("Registro efecturado correctamente");
            window.history.go(-1);
        </script>';   
}
// Cerrar consultas
mysqli_close($conexion);