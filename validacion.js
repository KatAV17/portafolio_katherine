export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }

    if (input.validity.valid) {
        input.parentElement.classList.remove("form--invalid");
    } else {
        input.parentElement.classList.add("form--invalid");
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
]

const mensajesDeError = {
    nombre: {
        valueMissing: "Este espacio no puede estar vacío."
    },
    email: {
        valueMissing: "Este espacio no puede estar vacío.",
        typeMismatch: "El correo no es válido.",
    },
    asunto: {
        valueMissing: "Este espacio no puede estar vacío."
    },
    mensaje: {
        valueMissing: "Este espacio no puede estar vacío."
    },
};

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = ""
    tipoDeErrores.forEach( error => {
        if (input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })
    return mensaje
}
