document.addEventListener("DOMContentLoaded", function() {
    
    // Captura estricta de componentes mediante el DOM
    const btnCalcular = document.getElementById("btnCalcular");
    const btnLimpiar = document.getElementById("btnLimpiar");
    const formulario = document.getElementById("formularioTransporte");
    const seccionResultados = document.getElementById("resultados");
    const tarjetaResultado = document.getElementById("tarjetaResultado");
    const mensajeAlerta = document.getElementById("mensajeAlerta");

    // Registro de evento click para realizar la simulación matemática
    btnCalcular.addEventListener("click", function() {
        
        // Extracción e instanciación numérica de las entradas del usuario
        const distNormal = parseFloat(document.getElementById("distNormal").value);
        const distDesvio = parseFloat(document.getElementById("distDesvio").value);
        const costoKm = parseFloat(document.getElementById("costoKm").value);
        const viajesSemana = parseInt(document.getElementById("viajesSemana").value);

        // --- VALIDACIÓN DE INTEGRIDAD DE DATOS ---
        if (isNaN(distNormal) || isNaN(distDesvio) || isNaN(costoKm) || isNaN(viajesSemana)) {
            alert("Error de validación: Asegúrese de llenar todos los campos con valores numéricos antes de calcular.");
            return;
        }

        if (distNormal <= 0 || distDesvio <= 0 || costoKm <= 0 || viajesSemana <= 0) {
            alert("Error de rango: Las entradas del simulador deben ser estrictamente valores mayores a cero (0).");
            return;
        }

        if (distDesvio < distNormal) {
            alert("Inconsistencia operativa: La distancia con desvío no puede ser inferior a la distancia de la ruta normal.");
            return;
        }

        // --- PROCESAMIENTO MATEMÁTICO (Fórmulas del Escenario C) ---
        const costoNormalViaje = distNormal * costoKm;
        const costoDesvioViaje = distDesvio * costoKm;
        const diferenciaViaje = costoDesvioViaje - costoNormalViaje;
        
        const gastoAdicionalSemanal = diferenciaViaje * viajesSemana;
        const gastoAdicionalMensual = gastoAdicionalSemanal * 4; // Modelado mensual estándar

        // --- IMPRESIÓN DINÁMICA DE RESULTADOS EN EL DOM ---
        document.getElementById("outNormal").textContent = costoNormalViaje.toFixed(2);
        document.getElementById("outDesvio").textContent = costoDesvioViaje.toFixed(2);
        document.getElementById("outDiferencia").textContent = diferenciaViaje.toFixed(2);
        document.getElementById("outSemanal").textContent = gastoAdicionalSemanal.toFixed(2);
        document.getElementById("outMensual").textContent = gastoAdicionalMensual.toFixed(2);

        // --- EVALUACIÓN DE IMPACTO Y CAMBIO DINÁMICO DE ESTILOS ---
        tarjetaResultado.classList.remove("modo-normal", "modo-alerta", "modo-critico");

        if (gastoAdicionalSemanal <= 25) {
            tarjetaResultado.classList.add("modo-normal");
            mensajeAlerta.textContent = "Evaluación: Impacto Financiero Leve. El desvío no altera críticamente el balance semanal.";
            mensajeAlerta.style.color = "var(--estado-normal)";
        } else if (gastoAdicionalSemanal > 25 && gastoAdicionalSemanal <= 65) {
            tarjetaResultado.classList.add("modo-alerta");
            mensajeAlerta.textContent = "Atención: Impacto Financiero Moderado. Se recomienda reajustar gastos secundarios del presupuesto.";
            mensajeAlerta.style.color = "var(--estado-alerta)";
        } else {
            tarjetaResultado.classList.add("modo-critico");
            mensajeAlerta.textContent = "Peligro Crítico: Impacto Financiero Elevado. Pérdida severa del poder adquisitivo doméstico.";
            mensajeAlerta.style.color = "var(--estado-critico)";
        }

        // Remoción de la clase restrictiva para renderizar los resultados en pantalla
        seccionResultados.classList.remove("oculto");
    });

    // Control para restablecer la vista de la interfaz
    btnLimpiar.addEventListener("click", function() {
        formulario.reset();
        seccionResultados.classList.add("oculto");
        tarjetaResultado.classList.remove("modo-normal", "modo-alerta", "modo-critico");
    });
});