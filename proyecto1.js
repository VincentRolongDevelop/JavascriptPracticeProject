/**
 * Script para definir datos de profesor 
 *  12/10/2021
 */

/**
 * Ingreso de datos para el profesor
 */

        var nombrePro = "Alfredo";
        var edadPro = 26; 
        var horasTrabajoSemana = 12;
        var precioPorHora = 31000 ;

/**Validación de la horas del profesor */

        console.log("*******************************************************")
        if(horasTrabajoSemana>19){
            console.log("El profesor no puede trabajar mas de 19 horas semanales")
        }else{
            console.log("Horas tomadas para el calculo del salario")
        }  
        console.log("")
        console.log("*******************************************************")

/**Creación del objeto para el programa */

        const profesor={
        
        /**Datos del profesor */
        nombre: nombrePro,
        edad: edadPro,
        pago_hora: precioPorHora,
        horas_de_trabajo: horasTrabajoSemana, 
        nomina_del_docente: precioPorHora*horasTrabajoSemana,

        /**Muestra de datos */ 
        mostrar:function(){
            console.log("Nombre: "+ this.nombre)
            console.log("Edad: "+ this.edad)
            console.log("Pago por hora: "+ this.pago_hora)
            console.log("Horas de trabajo: "+ this.horas_de_trabajo)
            console.log("Nomina del docente: "+ this.nomina_del_docente)
        }

        }

/**Uso de la función */
profesor.mostrar()


 
