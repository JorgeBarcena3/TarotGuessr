var IMAGE_PATH = "./images/";
var MAX_ANSWERS = 4;
var APP_NAME = "Tarot Guessr";

var CONFIG = [
    {
        "Name": "EL LOCO",
        "Value": 0,
        "Image": "22.LOCO.png",
        "Upright": {
            "Response": "Espontaneidad, comienzos, aventura y libertad",
            "Keywords": ["Espontaneidad", "Nuevos comienzos", "Libertad", "Fe ciega"],
            "Description": "El Loco representa el espíritu libre, la inocencia, el salto al vacío hacia lo desconocido y la confianza plena en la vida. Es el punto cero de todo viaje espiritual y existencial."
        },
        "Reversed": {
            "Response": "Imprudencia, insensatez, caos y miedo al riesgo",
            "Keywords": ["Imprudencia", "Temeridad", "Ingenuidad", "Bloqueo por miedo"],
            "Description": "Invertido, El Loco advierte sobre actuar sin pensar, riesgos innecesarios, falta de dirección o, por el contrario, quedar paralizado por el miedo a emprender un nuevo camino."
        }
    },
    {
        "Name": "EL MAGO",
        "Value": 1,
        "Image": "1.MAGO.png",
        "Upright": {
            "Response": "Poder personal, habilidad, manifestación y recursos",
            "Keywords": ["Manifestación", "Fuerza de voluntad", "Recursos", "Acción decidida"],
            "Description": "El Mago simboliza la capacidad de transformar ideas en realidad. Posee todas las herramientas sobre la mesa (los 4 elementos) para materializar su visión con ingenio y concentración."
        },
        "Reversed": {
            "Response": "Manipulación, talentos desaprovechados y engaño",
            "Keywords": ["Manipulación", "Ilusionismo tramposo", "Falta de plan", "Potencial no usado"],
            "Description": "Invertido, El Mago refleja el uso egoísta de la inteligencia, engaños, charlatanería o la frustración por no aprovechar las capacidades innatas."
        }
    },
    {
        "Name": "LA SACERDOTISA",
        "Value": 2,
        "Image": "2.SACERDOTISA.png",
        "Upright": {
            "Response": "Intuición, sabiduría interior, misterio y subconsciente",
            "Keywords": ["Intuición profunda", "Secretos", "Paciencia", "Mundo interior"],
            "Description": "La Sacerdotisa custodia los secretos y el conocimiento esotérico. Invita a escuchar la voz interior, confiar en los sueños e intuiciones antes de actuar en el mundo exterior."
        },
        "Reversed": {
            "Response": "Secretos dañinos, desconexión intuitiva y superficialidad",
            "Keywords": ["Desconexión intuitiva", "Chismes/Secretos", "Represión", "Superficialidad"],
            "Description": "Invertida, señala bloqueo de la propia intuición, guardar secretos tóxicos, desconfianza interna o dejarse guiar solo por apariencias superficiales."
        }
    },
    {
        "Name": "LA EMPERATRIZ",
        "Value": 3,
        "Image": "3.EMPERATRIZ.png",
        "Upright": {
            "Response": "Fertilidad, abundancia, creatividad y nutrición",
            "Keywords": ["Abundancia", "Creatividad", "Maternidad/Cuidado", "Placer sensual"],
            "Description": "La Emperatriz encarna la Madre Naturaleza, el florecimiento, la sensualidad, el confort material y la gestación de proyectos creativos con amor y dedicación."
        },
        "Reversed": {
            "Response": "Bloqueo creativo, dependencia, asfixia afectiva y descuido",
            "Keywords": ["Bloqueo creativo", "Sobreprotección", "Descuido personal", "Vacío afectivo"],
            "Description": "Invertida, sugiere sofocar a los demás con control afectivo, problemas de autoestima, descuido del bienestar propio o esterilidad en ideas creativas."
        }
    },
    {
        "Name": "EL EMPERADOR",
        "Value": 4,
        "Image": "4.EMPERADOR.png",
        "Upright": {
            "Response": "Estructura, autoridad, estabilidad y liderazgo firme",
            "Keywords": ["Estructura", "Liderazgo", "Orden y ley", "Estabilidad sólida"],
            "Description": "El Emperador provee orden, límites, disciplina y protección. Representa el poder de consolidar estructuras sólidas y gobernar con lógica, justicia y determinación."
        },
        "Reversed": {
            "Response": "Tiranía, rigidez extrema, abuso de poder o caos",
            "Keywords": ["Autoritarismo", "Inflexibilidad", "Pérdida de control", "Micromanagement"],
            "Description": "Invertido, se manifiesta como despotismo, terquedad intransigente, incapacidad para aceptar opiniones ajenas o una total falta de disciplina y desorden."
        }
    },
    {
        "Name": "EL PAPA",
        "Value": 5,
        "Image": "5.PAPA.png",
        "Upright": {
            "Response": "Tradición, guía espiritual, enseñanza y valores compartidos",
            "Keywords": ["Guía moral", "Enseñanza", "Ortodoxia", "Comunidad espiritual"],
            "Description": "El Papa (El Hierofante) es el puente entre lo divino y lo humano terrenal. Representa maestros de sabiduría, apego a principios éticos y aprendizaje dentro de sistemas probados."
        },
        "Reversed": {
            "Response": "Dogmatismo, rebelión, hipocresía y dogmas obsoletos",
            "Keywords": ["Dogmatismo ciego", "Rebeldía", "Ruptura con lo tradicional", "Falsos maestros"],
            "Description": "Invertido, advierte contra el fanatismo ciego, normas asfixiantes, consejos engañosos o la imperiosa necesidad de cuestionar creencias heredadas y buscar el propio camino."
        }
    },
    {
        "Name": "LOS ENAMORADOS",
        "Value": 6,
        "Image": "6.ENAMORADOS.png",
        "Upright": {
            "Response": "Amor, unión armónica, valores afines y gran elección",
            "Keywords": ["Amor verdadero", "Decisión crucial", "Alineación ética", "Atracción"],
            "Description": "Los Enamorados simbolizan relaciones auténticas basadas en la confianza y el respeto mutuo, así como encrucijadas morales donde se debe elegir guiado por el corazón y los valores íntimos."
        },
        "Reversed": {
            "Response": "Conflicto interno, mala elección, desunión e infidelidad",
            "Keywords": ["Dilema paralizante", "Ruptura/Discordia", "Falta de compromiso", "Confusión de valores"],
            "Description": "Invertida, revela falta de armonía en vínculos, malas decisiones tomadas por presión externa, traición a los principios de uno mismo o miedo a comprometerse."
        }
    },
    {
        "Name": "EL CARRO",
        "Value": 7,
        "Image": "7.CARRO.png",
        "Upright": {
            "Response": "Victoria, determinación, fuerza de voluntad y avance",
            "Keywords": ["Determinación férrea", "Triunfo", "Superación de obstáculos", "Autocontrol"],
            "Description": "El Carro avanza con ímpetu dirigiendo fuerzas opuestas hacia un único objetivo. Significa conquistar dificultades mediante disciplina mental, confianza y empuje decidido."
        },
        "Reversed": {
            "Response": "Falta de control, agresión desmedida, choque o estancamiento",
            "Keywords": ["Pérdida de rumbo", "Frustración", "Agresividad", "Obstáculos insuperables"],
            "Description": "Invertido, advierte que las fuerzas se han salido de control: exceso de velocidad arriesgado, arrogancia destructiva o sensación de estar completamente atascado."
        }
    },
    {
        "Name": "LA JUSTICIA",
        "Value": 8,
        "Image": "8.JUSTICIA.png",
        "Upright": {
            "Response": "Equilibrio, verdad, causa y efecto, imparcialidad moral",
            "Keywords": ["Verdad y equidad", "Karma/Causa y efecto", "Claridad mental", "Decisión justa"],
            "Description": "La Justicia sopesa hechos con la balanza y corta falsedades con la espada. Representa la honestidad sin adornos, asumir la responsabilidad de los actos y el restablecimiento del equilibrio."
        },
        "Reversed": {
            "Response": "Injusticia, sesgo, deshonestidad y evasión de responsabilidad",
            "Keywords": ["Trato injusto", "Prejuicios", "Negación de culpa", "Problemas legales/corrupción"],
            "Description": "Invertida, habla de juicios severos o parciales, sentirse víctima injustamente, falta de rendición de cuentas personal o resoluciones legales desfavorables y turbias."
        }
    },
    {
        "Name": "EL HERMITAÑO",
        "Value": 9,
        "Image": "9.HERMITANO.png",
        "Upright": {
            "Response": "Introspección, soledad buscada, sabiduría y guía interior",
            "Keywords": ["Búsqueda interior", "Luz de sabiduría", "Prudencia", "Retiro consciente"],
            "Description": "El Hermitaño se retira voluntariamente del ruido cotidiano con su linterna para hallar la verdad profunda. Simboliza madurez, silencio reflexivo y la búsqueda del propósito esencial."
        },
        "Reversed": {
            "Response": "Aislamiento excesivo, soledad amarga, terquedad y rechazo a la ayuda",
            "Keywords": ["Aislamiento tóxico", "Ermitaño huraño", "Rechazar consejos", "Perderse en su mundo"],
            "Description": "Invertido, indica soledad involuntaria o defensiva, volverse ermitaño por resentimiento, negarse a escuchar razones o miedo a reconectar con la sociedad."
        }
    },
    {
        "Name": "LA RUEDA DE LA FORTUNA",
        "Value": 10,
        "Image": "10.RUEDA.png",
        "Upright": {
            "Response": "Ciclos, giros del destino, oportunidades y evolución",
            "Keywords": ["Cambio favorable", "Ciclos vitales", "Buena suerte", "Destino en movimiento"],
            "Description": "La Rueda nos recuerda que la única constante es el cambio. Anuncia giros inesperados y afortunados del destino, el inicio de un nuevo ciclo expansivo y sincronicidades."
        },
        "Reversed": {
            "Response": "Mala racha, resistencia al cambio, contratiempos y repetición",
            "Keywords": ["Mala racha temporal", "Resistencia al fluir", "Contratiempo imprevisto", "Ciclos repetitivos"],
            "Description": "Invertida, refleja rachas adversas, aferrarse desesperadamente a lo que cambia por fuerza o sentirse atrapado en patrones repetitivos sin aprender la lección del ciclo."
        }
    },
    {
        "Name": "LA FUERZA",
        "Value": 11,
        "Image": "11.FUERZA.png",
        "Upright": {
            "Response": "Coraje sereno, compasión, dominio suave de los instintos",
            "Keywords": ["Fortaleza interior", "Paciencia", "Amor que doma", "Autocontrol noble"],
            "Description": "La Fuerza muestra a una figura domando al león no con cadenas ni violencia, sino con ternura, firmeza y confianza interior. Representa la superioridad del espíritu sobre los instintos básicos."
        },
        "Reversed": {
            "Response": "Inseguridad, impulsividad desbordada, vulnerabilidad y debilidad",
            "Keywords": ["Falta de confianza", "Ira descontrolada", "Sentimiento de impotencia", "Tiranía animal"],
            "Description": "Invertida, habla de dejarse dominar por la rabia, impulsos destructivos, o bien una profunda falta de autoestima y sensación de no tener energía para resistir."
        }
    },
    {
        "Name": "EL COLGADO",
        "Value": 12,
        "Image": "12.COLGADO.png",
        "Upright": {
            "Response": "Nueva perspectiva, pausa voluntaria, desapego y entrega",
            "Keywords": ["Pausar y soltar", "Cambio de óptica", "Sacrificio voluntario", "Iluminación serena"],
            "Description": "Suspendido boca abajo con serenidad, El Colgado invierte la mirada común del mundo. Simboliza soltar el control egoico, hacer una pausa reflexiva y ver las cosas desde un ángulo revelador."
        },
        "Reversed": {
            "Response": "Martirio inútil, estancamiento testarudo y resistencia a soltar",
            "Keywords": ["Sacrificio estéril", "Victimismo", "Parálisis tozuda", "Aferramiento inútil"],
            "Description": "Invertido, advierte sobre hacerse la víctima, sacrificarse por causas perdidas que nadie agradece, o demorar decisiones indispensables por miedo al cambio."
        }
    },
    {
        "Name": "LA MUERTE",
        "Value": 13,
        "Image": "13.MUERTE.png",
        "Upright": {
            "Response": "Transformación radical, cierre de ciclo, poda y renacimiento",
            "Keywords": ["Fin de ciclo", "Transformación profunda", "Renovación inevitable", "Soltar lo muerto"],
            "Description": "Rara vez muerte física, el arcano XIII es el gran podador de lo obsoleto. Corta lo marchito para que brote nueva vida: el fin definitivo de una etapa que da paso a una renovación total."
        },
        "Reversed": {
            "Response": "Miedo a cambiar, agonía prolongada, negación y aferramiento",
            "Keywords": ["Resistencia al final", "Prolongar el dolor", "Miedo al vacío", "Estancamiento forzado"],
            "Description": "Invertida, muestra la resistencia desesperada a dejar ir una relación, trabajo o actitud caduca, prolongando un sufrimiento innecesario en lugar de permitir la regeneración."
        }
    },
    {
        "Name": "LA TEMPLANZA",
        "Value": 14,
        "Image": "14.TEMPLANZA.png",
        "Upright": {
            "Response": "Moderación, armonía, sanación, paciencia y alquimia",
            "Keywords": ["Equilibrio paciente", "Sanación", "Fusión de opuestos", "Paz interior"],
            "Description": "Un ángel vierte líquidos entre dos ánforas logrando la mezcla perfecta. Simboliza el punto medio virtuoso, paciencia, curación paulatina y convivencia pacífica de polaridades."
        },
        "Reversed": {
            "Response": "Desequilibrio, excesos, impaciencia y falta de armonía",
            "Keywords": ["Excesos perjudiciales", "Impaciencia", "Discordia", "Falta de balance"],
            "Description": "Invertida, acusa conductas extremas, polarización, impaciencia por forzar resultados antes de tiempo o agotamiento físico y emocional por falta de mesura."
        }
    },
    {
        "Name": "EL DIABLO",
        "Value": 15,
        "Image": "15.DIABLO.png",
        "Upright": {
            "Response": "Apegos materiales, tentación, pasiones intensas y cadenas invisibles",
            "Keywords": ["Ataduras terrenales", "Adicciones o fijaciones", "Pasión desbordada", "Sombra psicológica"],
            "Description": "El Diablo señala las cadenas que nosotros mismos elegimos llevar: adicciones, obsesiones por poder o placer material y la sombra inconsciente que proyectamos en otros."
        },
        "Reversed": {
            "Response": "Liberación de ataduras, toma de consciencia y romper cadenas",
            "Keywords": ["Romper dependencias", "Despertar lúcido", "Superar adicciones", "Reclamar libertad"],
            "Description": "Invertido, es una carta muy esperanzadora de desintoxicación moral o física: abrir los ojos, deshacerse de dependencias tóxicas y recuperar el timón de la propia vida."
        }
    },
    {
        "Name": "LA TORRE",
        "Value": 16,
        "Image": "16.TORRE.png",
        "Upright": {
            "Response": "Quiebre repentino, derrumbe de ilusiones, crisis liberadora",
            "Keywords": ["Derrumbe inesperado", "Ruptura de falsedades", "Crisis y catarsis", "Despertar abrupto"],
            "Description": "El rayo de la verdad derriba la torre construida sobre falsas certezas o soberbia. Aunque shockeante, destruye la prisión de engaño para posibilitar una reconstrucción real y auténtica."
        },
        "Reversed": {
            "Response": "Desastre apenas evitado, crisis postergada o temor al colapso",
            "Keywords": ["Retrasar lo inevitable", "Crisis reprimida", "Temor al derrumbe", "Reconstrucción lenta"],
            "Description": "Invertida, indica evitar un colapso inminente por poco margen, o bien el intento de sostener una estructura carcomida por mero pánico al cambio necesario."
        }
    },
    {
        "Name": "LA ESTRELLA",
        "Value": 17,
        "Image": "17.ESTRELLA.png",
        "Upright": {
            "Response": "Esperanza, inspiración divina, fe renovada y serenidad",
            "Keywords": ["Fe y optimismo", "Sanación espiritual", "Generosidad", "Luz en la oscuridad"],
            "Description": "Bajo el cielo estrellado, una joven derrama agua nutricia. Simboliza la paz tras la tormenta de la Torre, la confianza incondicional en el porvenir, inspiración artística y calma sublime."
        },
        "Reversed": {
            "Response": "Desesperanza, pesimismo, falta de fe y desánimo temporal",
            "Keywords": ["Pérdida de ilusión", "Pesimismo", "Desconexión espiritual", "Sensación de desamparo"],
            "Description": "Invertida, refleja un apagón momentáneo de la fe: creer que nada saldrá bien, no ver la luz al final del túnel y caer en el desánimo o la autocompasión."
        }
    },
    {
        "Name": "LA LUNA",
        "Value": 18,
        "Image": "18.LUNA.png",
        "Upright": {
            "Response": "Ilusiones, miedos inconscientes, confusión e intuición onírica",
            "Keywords": ["Confusión y espejismos", "Sombras y miedos", "Mundo onírico", "Camino incierto"],
            "Description": "La luz lunar distorsiona los contornos creando sombras y temores del subconsciente. Invita a transitar la incertidumbre confiando en la intuición sin caer en paranoias o engaños ópticos."
        },
        "Reversed": {
            "Response": "Disipación de miedos, engaños descubiertos y retorno de claridad",
            "Keywords": ["Aclarar confusiones", "Superación de temores", "Desenmascarar mentiras", "Amanecer mental"],
            "Description": "Invertida, anuncia el amanecer tras la noche oscura: las dudas y fantasmas mentales se disuelven, los secretos turbios salen a la luz y se recupera la sensatez."
        }
    },
    {
        "Name": "EL SOL",
        "Value": 19,
        "Image": "19.SOL.png",
        "Upright": {
            "Response": "Alegría radiante, éxito, claridad, vitalidad y celebración",
            "Keywords": ["Felicidad pura", "Éxito pleno", "Claridad y calidez", "Vitalidad infantil"],
            "Description": "El astro rey ilumina todo con calidez y vida. Es la carta del júbilo indiscutible, la sinceridad, la salud boyante, el triunfo merecido y el entusiasmo contagioso por vivir."
        },
        "Reversed": {
            "Response": "Alegría empañada, retrasos temporales, arrogancia o nublado pasajero",
            "Keywords": ["Éxito demorado", "Optimismo excesivo/ingenuo", "Orgullo desmedido", "Nubarrón temporal"],
            "Description": "Invertido, no anula el sol sino que lo nubla levemente: satisfacciones a medias, euforia ingenua que no prevé detalles prácticos, o arrogancia que quema a los demás."
        }
    },
    {
        "Name": "EL JUICIO",
        "Value": 20,
        "Image": "20.JUICIO.png",
        "Upright": {
            "Response": "Despertar, llamada interior, perdón, absolución y renacer",
            "Keywords": ["Llamado de vocación", "Despertar consciente", "Perdón y reconciliación", "Juicio final favorable"],
            "Description": "La trompeta angélica despierta a las almas de sus tumbas. Es la llamada ineludible a una vida superior más auténtica, liberación de culpas del pasado y consagración del verdadero ser."
        },
        "Reversed": {
            "Response": "Autocrítica destructiva, ignorar el llamado, culpa y dudas",
            "Keywords": ["Auto-condena", "Ignorar la vocación", "Dudas paralizantes", "Culpabilidad no resuelta"],
            "Description": "Invertida, muestra a quien se juzga con saña implacable, se niega a perdonarse errores pasados o hace oídos sordos a la clara llamada de renovar su vida."
        }
    },
    {
        "Name": "EL MUNDO",
        "Value": 21,
        "Image": "21.MUNDO.png",
        "Upright": {
            "Response": "Plenitud total, meta alcanzada, integración y coronación del viaje",
            "Keywords": ["Culminación exitosa", "Integración completa", "Plenitud y gozo", "Viajes y expansión"],
            "Description": "La danzante dentro de la corona de laurel rodeada por los cuatro querubines representa la consumación gloriosa del viaje del Loco. Armonía entre cuerpo, mente y alma; éxito rotundo y paz."
        },
        "Reversed": {
            "Response": "Falta de cierre, meta incompleta, retraso final y frustración",
            "Keywords": ["Incompletitud", "Falta del toque final", "Miedo a cerrar ciclos", "Retraso en la meta"],
            "Description": "Invertida, indica que falta apenas un último paso para concluir un ciclo pero se resiste a cerrar la puerta, o bien sentimientos de vacío a pesar del logro aparente."
        }
    }
];

// Helper retrocompatible
CONFIG.forEach(function (c) {
    if (!c.Response && c.Upright) {
        c.Response = c.Upright.Response;
    }
    if (!c.Description && c.Upright) {
        c.Description = c.Upright.Description;
    }
});
