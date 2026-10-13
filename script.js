
const categoriasRuleta = [
    "Vocabulary",
    "Grammar",
    "Expressions",
    "Verb Tenses",
    "Questions",
    "Everyday English",
    "Complete it!"
];

const preguntas = [
    // VOCABULARY
    {
        categoria: "Vocabulary",
        tema: "Animals",
        pregunta: "What is the meaning of 'dog'?",
        opciones: ["Gato", "Perro", "Caballo", "Pájaro"],
        correcta: 1,
        explicacion: "'Dog' significa perro en español."
    },
    {
        categoria: "Vocabulary",
        tema: "Colors",
        pregunta: "What color is the sky on a clear day?",
        opciones: ["Green", "Purple", "Blue", "Orange"],
        correcta: 2,
        explicacion: "'Blue' significa azul."
    },
    {
        categoria: "Vocabulary",
        tema: "Everyday words",
        pregunta: "What does 'book' mean?",
        opciones: ["Libro", "Mesa", "Puerta", "Ventana"],
        correcta: 0,
        explicacion: "'Book' significa libro."
    },
    {
        categoria: "Vocabulary",
        tema: "Family",
        pregunta: "What is the meaning of 'mother'?",
        opciones: ["Hermana", "Abuela", "Tía", "Madre"],
        correcta: 3,
        explicacion: "'Mother' significa madre o mamá."
    },

    // GRAMMAR
    {
        categoria: "Grammar",
        tema: "Verb to be",
        pregunta: "Choose the correct option: I ___ a student.",
        opciones: ["am", "is", "are", "be"],
        correcta: 0,
        explicacion: "Con 'I' usamos 'am': I am a student."
    },
    {
        categoria: "Grammar",
        tema: "Verb to be",
        pregunta: "Choose the correct option: They ___ happy.",
        opciones: ["is", "am", "are", "be"],
        correcta: 2,
        explicacion: "Con 'they' usamos 'are'."
    },
    {
        categoria: "Grammar",
        tema: "Articles",
        pregunta: "Choose the correct option: It is ___ apple.",
        opciones: ["a", "an", "the a", "are"],
        correcta: 1,
        explicacion: "Usamos 'an' antes de un sonido vocálico: an apple."
    },
    {
        categoria: "Grammar",
        tema: "Pronouns",
        pregunta: "Which pronoun replaces 'Maria'?",
        opciones: ["He", "It", "They", "She"],
        correcta: 3,
        explicacion: "Para referirnos a Maria usamos 'she' (ella)."
    },

    // EXPRESSIONS
    {
        categoria: "Expressions",
        tema: "Greetings",
        pregunta: "How do you say 'Buenos días' in English?",
        opciones: ["Good night", "Good morning", "Goodbye", "See you"],
        correcta: 1,
        explicacion: "'Good morning' significa buenos días."
    },
    {
        categoria: "Expressions",
        tema: "Polite expressions",
        pregunta: "What does 'Thank you' mean?",
        opciones: ["Por favor", "Perdón", "Gracias", "De nada"],
        correcta: 2,
        explicacion: "'Thank you' significa gracias."
    },
    {
        categoria: "Expressions",
        tema: "Polite expressions",
        pregunta: "How do you say 'Por favor' in English?",
        opciones: ["Please", "Sorry", "Welcome", "Thanks"],
        correcta: 0,
        explicacion: "'Please' significa por favor."
    },
    {
        categoria: "Expressions",
        tema: "Goodbyes",
        pregunta: "What does 'See you later' mean?",
        opciones: ["Hasta mañana", "Buenos días", "Mucho gusto", "Hasta luego"],
        correcta: 3,
        explicacion: "'See you later' significa hasta luego o nos vemos después."
    },

    // VERB TENSES
    {
        categoria: "Verb Tenses",
        tema: "Present Simple",
        pregunta: "Choose the correct option: She ___ to school every day.",
        opciones: ["go", "goes", "going", "went"],
        correcta: 1,
        explicacion: "En presente simple, con 'she', el verbo lleva -s o -es: goes."
    },
    {
        categoria: "Verb Tenses",
        tema: "Past Simple",
        pregunta: "What is the past form of 'play'?",
        opciones: ["Plays", "Playing", "Played", "Playes"],
        correcta: 2,
        explicacion: "'Play' es regular: en pasado se convierte en 'played'."
    },
    {
        categoria: "Verb Tenses",
        tema: "Past Simple",
        pregunta: "Choose the correct option: Yesterday, I ___ a movie.",
        opciones: ["watch", "watches", "watching", "watched"],
        correcta: 3,
        explicacion: "'Yesterday' indica pasado; usamos 'watched'."
    },
    {
        categoria: "Verb Tenses",
        tema: "Verb to be - Past",
        pregunta: "Choose the correct option: I ___ tired yesterday.",
        opciones: ["was", "were", "am", "are"],
        correcta: 0,
        explicacion: "El pasado de 'am' para 'I' es 'was'."
    },

    // QUESTIONS
    {
        categoria: "Questions",
        tema: "Question words",
        pregunta: "Which word do we use to ask about a person's name?",
        opciones: ["Where", "What", "When", "Why"],
        correcta: 1,
        explicacion: "'What is your name?' significa '¿Cómo te llamás?'."
    },
    {
        categoria: "Questions",
        tema: "Question words",
        pregunta: "Which word asks about a place?",
        opciones: ["Who", "When", "Where", "Why"],
        correcta: 2,
        explicacion: "'Where' significa dónde."
    },
    {
        categoria: "Questions",
        tema: "Question words",
        pregunta: "Complete: ___ old are you?",
        opciones: ["How", "What", "Where", "Who"],
        correcta: 0,
        explicacion: "'How old are you?' significa '¿Cuántos años tenés?'."
    },
    {
        categoria: "Questions",
        tema: "Short answers",
        pregunta: "Answer: 'Are you a student?'",
        opciones: ["Yes, I is.", "Yes, you are.", "Yes, I be.", "Yes, I am."],
        correcta: 3,
        explicacion: "La respuesta corta correcta es 'Yes, I am'."
    },

    // EVERYDAY ENGLISH
    {
        categoria: "Everyday English",
        tema: "Daily routines",
        pregunta: "What does 'wake up' mean?",
        opciones: ["Dormir", "Despertarse", "Estudiar", "Comer"],
        correcta: 1,
        explicacion: "'Wake up' significa despertarse."
    },
    {
        categoria: "Everyday English",
        tema: "Food",
        pregunta: "Which one is a drink?",
        opciones: ["Bread", "Rice", "Water", "Chicken"],
        correcta: 2,
        explicacion: "'Water' significa agua, una bebida."
    },
    {
        categoria: "Everyday English",
        tema: "School",
        pregunta: "What do you use to write in a notebook?",
        opciones: ["A pencil", "A plate", "A shoe", "A spoon"],
        correcta: 0,
        explicacion: "'A pencil' significa un lápiz."
    },
    {
        categoria: "Everyday English",
        tema: "Feelings",
        pregunta: "What does 'happy' mean?",
        opciones: ["Enojado/a", "Cansado/a", "Triste", "Feliz"],
        correcta: 3,
        explicacion: "'Happy' significa feliz."
    },

    // COMPLETE IT!
    {
        categoria: "Complete it!",
        tema: "Verb to be",
        pregunta: "Complete: He ___ my best friend.",
        opciones: ["am", "are", "is", "be"],
        correcta: 2,
        explicacion: "Con 'he' usamos 'is': He is my best friend."
    },
    {
        categoria: "Complete it!",
        tema: "Present Simple",
        pregunta: "Complete: I ___ English at school.",
        opciones: ["study", "studies", "studied", "studying"],
        correcta: 0,
        explicacion: "Con 'I' usamos 'study' en presente simple."
    },
    {
        categoria: "Complete it!",
        tema: "Negative sentences",
        pregunta: "Complete: I ___ like coffee.",
        opciones: ["doesn't", "don't", "isn't", "aren't"],
        correcta: 1,
        explicacion: "En presente simple negativo, con 'I' usamos 'don't'."
    },
    {
        categoria: "Complete it!",
        tema: "Past Simple",
        pregunta: "Complete: We ___ football yesterday.",
        opciones: ["play", "plays", "playing", "played"],
        correcta: 3,
        explicacion: "'Yesterday' indica pasado, por eso usamos 'played'."
    }
];

// ESTADO DEL JUEGO

let puntaje = 0;
let cantidadPreguntas = 0;
let preguntaActual = null;
let rotacionActual = 0;
let girando = false;
let respondida = false;
let categoriaActual = "";
let preguntasDisponibles = [...preguntas];

// ELEMENTOS HTML

const ruleta = document.getElementById("ruleta");
const botonGirar = document.getElementById("botonGirar");
const botonSiguiente = document.getElementById("botonSiguiente");
const tarjetaPregunta = document.getElementById("tarjetaPregunta");
const categoria = document.getElementById("categoria");
const tema = document.getElementById("tema");
const pregunta = document.getElementById("pregunta");
const opciones = document.getElementById("opciones");
const resultado = document.getElementById("resultado");
const marcadorPuntaje = document.getElementById("puntaje");
const contador = document.getElementById("contador");

// INICIAR

function iniciarJuego() {
    botonGirar.addEventListener("click", girarRuleta);
    botonSiguiente.addEventListener("click", prepararSiguienteDesafio);
    actualizarMarcadores();
}

function actualizarMarcadores() {
    marcadorPuntaje.textContent = puntaje;
    contador.textContent = cantidadPreguntas;
}

// GIRAR LA RULETA

function girarRuleta() {
    if (girando || respondida === false && preguntaActual !== null) {
        return;
    }

    if (girando) return;

    // Si se terminaron las preguntas, volvemos a habilitarlas.
    if (preguntasDisponibles.length === 0) {
        preguntasDisponibles = [...preguntas];
    }

    const categoriasDisponibles = categoriasRuleta.filter(nombre =>
        preguntasDisponibles.some(item => item.categoria === nombre)
    );

    if (categoriasDisponibles.length === 0) {
        preguntasDisponibles = [...preguntas];
        categoriasDisponibles.push(...categoriasRuleta);
    }

    const indiceCategoria = Math.floor(
        Math.random() * categoriasDisponibles.length
    );

    categoriaActual = categoriasDisponibles[indiceCategoria];

    const indiceOriginal = categoriasRuleta.indexOf(categoriaActual);
    const anguloPorCategoria = 360 / categoriasRuleta.length;
    const anguloCentro = indiceOriginal * anguloPorCategoria +
        anguloPorCategoria / 2;

    // Calculamos cuánto debe girar desde su posición actual.
    const giroDeseado = (360 - anguloCentro + 360) % 360;
    const posicionActual = ((rotacionActual % 360) + 360) % 360;
    const giroAdicional = (giroDeseado - posicionActual + 360) % 360;
    const vueltasExtra = 360 * 5;

    rotacionActual += vueltasExtra + giroAdicional;

    girando = true;
    respondida = false;
    botonGirar.disabled = true;
    botonSiguiente.classList.add("oculto");
    tarjetaPregunta.classList.add("oculto");
    resultado.textContent = "";
    resultado.className = "resultado";

    ruleta.style.transform =
        `translateX(-50%) rotate(${rotacionActual}deg)`;

    setTimeout(() => {
        seleccionarPregunta();
        girando = false;
        botonGirar.disabled = false;
    }, 4100);
}

// SELECCIONAR PREGUNTA

function seleccionarPregunta() {
    const preguntasCategoria = preguntasDisponibles.filter(
        item => item.categoria === categoriaActual
    );

    if (preguntasCategoria.length === 0) {
        prepararSiguienteDesafio();
        return;
    }

    const indice = Math.floor(Math.random() * preguntasCategoria.length);
    preguntaActual = preguntasCategoria[indice];

    mostrarPregunta();
}

// MOSTRAR PREGUNTA Y OPCIONES

function mostrarPregunta() {
    tarjetaPregunta.classList.remove("oculto");

    categoria.textContent = preguntaActual.categoria.toUpperCase();
    tema.textContent = preguntaActual.tema;
    pregunta.textContent = preguntaActual.pregunta;

    opciones.innerHTML = "";
    resultado.textContent = "";
    resultado.className = "resultado";
    botonSiguiente.classList.add("oculto");

    preguntaActual.opciones.forEach((texto, indice) => {
        const boton = document.createElement("button");

        boton.type = "button";
        boton.className = "opcion";
        boton.textContent = `${String.fromCharCode(65 + indice)}. ${texto}`;

        boton.addEventListener("click", () => comprobarRespuesta(indice));

        opciones.appendChild(boton);
    });

    // Lleva la pregunta a la vista sin saltos bruscos.
    tarjetaPregunta.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

// COMPROBAR RESPUESTA

function comprobarRespuesta(indiceSeleccionado) {
    if (respondida || !preguntaActual) return;

    respondida = true;
    cantidadPreguntas++;

    const botones = opciones.querySelectorAll(".opcion");
    const esCorrecta = indiceSeleccionado === preguntaActual.correcta;

    botones.forEach((boton, indice) => {
        boton.disabled = true;

        if (indice === preguntaActual.correcta) {
            boton.classList.add("respuesta-correcta");
        }

        if (indice === indiceSeleccionado && !esCorrecta) {
            boton.classList.add("respuesta-incorrecta");
        }
    });

    if (esCorrecta) {
        puntaje += 10;
        resultado.textContent =
            `🎉 Correct! +10 points! ${preguntaActual.explicacion}`;
        resultado.className = "resultado correcto";
    } else {
        resultado.textContent =
            `💗 Not quite! ${preguntaActual.explicacion}`;
        resultado.className = "resultado incorrecto";
    }

    // Evita volver a utilizar esta pregunta durante la ronda.
    preguntasDisponibles = preguntasDisponibles.filter(
        item => item !== preguntaActual
    );

    actualizarMarcadores();
    botonSiguiente.classList.remove("oculto");
    botonGirar.disabled = true;
}

// PREPARAR EL SIGUIENTE DESAFÍO

function prepararSiguienteDesafio() {
    preguntaActual = null;
    respondida = false;

    tarjetaPregunta.classList.add("oculto");
    botonSiguiente.classList.add("oculto");

    if (preguntasDisponibles.length === 0) {
        preguntasDisponibles = [...preguntas];

        resultado.textContent =
            "🌟 ¡Completaste todos los desafíos! ¡Empieza una nueva ronda!";
    }

    botonGirar.disabled = false;
    botonGirar.innerHTML = "<span>🎯</span> SPIN THE WHEEL!";

    // Volvemos a la zona de juego para continuar.
    document.querySelector(".zona-juego").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

iniciarJuego();
