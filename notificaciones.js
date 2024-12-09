// notificaciones.js
// Este archivo manejará las notificaciones para las tareas

function enviarNotificacion(mensaje) {
    console.log("Notificación: " + mensaje);
}

function programarNotificacion(mensaje, fecha) {
    const ahora = Date.now(); // Cambio: usamos Date.now() en lugar de new Date().
    const tiempoRestante = new Date(fecha) - ahora;

    if (tiempoRestante >= 0) { // Cambio: permitimos notificaciones inmediatas.
        setTimeout(() => {
            enviarNotificacion(mensaje);
        }, tiempoRestante);
    } else {
        console.log("La fecha proporcionada no es válida.");
    }
}

// Ejemplo de uso
enviarNotificacion("Tarea pendiente.");
programarNotificacion("Recordatorio: entrega final", "2024-12-15T12:00:00");
