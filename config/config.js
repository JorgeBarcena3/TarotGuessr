var IMAGE_PATH = "./images/";
var MAX_ANSWERS = 4;
var APP_NAME = "Tarot Guessr"
var CONFIG = [
    {
        "Name": "LOCO",
        "Value": 0,
        "Image": "22.LOCO.png",
        "Response": "Espontaneidad, aventura, riesgo",
        "Description": "El Loco representa el espíritu libre,  la ilusión y el amor ideal, aquel que no existe en realidad. Simboliza al aventurero que deja todo para ir hacia lo desconocido. Sin embargo, puede representar a la persona que se hace el loco pero que, en verdad, no lo es y sabe perfectamente a dónde va y lo que quiere."
    },
    {
        "Name": "MAGO",
        "Value": 1,
        "Image": "1.MAGO.png",
        "Response": "Poder, habilidad, manifestación",
        "Description": "El Mago, representado por un hombre joven con ímpetu y energía, simboliza tanto voluntad personal como la lógica y el intelecto. Transmite la seguridad de que todo está en sus manos y de que tiene todas las posibilidades de elección. Es un gran conversador, un buen vendedor y tiene don de gentes."
    },
    {
        "Name": "SACERDOTISA",
        "Value": 2,
        "Image": "2.SACERDOTISA.png",
        "Response": "Intuición, secreto, misterio",
        "Description": "La Sacerdotisa representa la sabiduría humana, los conocimientos secretos y los misterios ocultos. Está simbolizada con la figura de una mujer madura pero muy guapa todavía. También representa el poder anímico, espiritual y material, así como la iluminación espiritual e interior."
    },
    {
        "Name": "EMPERATRIZ",
        "Value": 3,
        "Image": "3.EMPERATRIZ.png",
        "Response": "Fertilidad, creatividad, abundancia",
        "Description": "La Emperatriz representa la fertilidad y la intuición femenina. Esta carta nos enseña a conocer nuestras emociones y sentimientos y, además, simboliza el poder de lo emotivo, de la sensualidad, del amor, de la armonía y del equilibrio. A diferencia de la Sacerdotisa, la Emperatriz representa el mundo físico y tangible."
    },
    {
        "Name": "EMPERADOR",
        "Value": 4,
        "Image": "4.EMPERADOR.png",
        "Response": "Autoridad, liderazgo, control",
        "Description": "Representa el control autoritario mediante la inteligencia y la estabilidad. También simboliza una buena posición social en base a importantes logros, fortuna, solidez y bienestar. Es comúnmente relacionado con el poder temporal y terrenal gracias a la toma de buenas decisiones."
    },
    {
        "Name": "PAPA",
        "Value": 5,
        "Image": "5.PAPA.png",
        "Response": "Espiritualidad, tradición, conocimiento",
        "Description": "El Papa, también conocido como El Hierofante, El Gran Sacerdote, El Sumo Sacerdote o El Papa, representa conformismo y ortodoxia. Es un símbolo de la necesidad de adaptarse a las reglas o a situaciones prefijadas y simboliza los buenos consejos, la aprobación y la unión. Esta carta nos enseña el camino hacia la realización personal."
    },
    {
        "Name": "ENAMORADOS",
        "Value": 6,
        "Image": "6.ENAMORADOS.png",
        "Response": "Elección, amor, dilema",
        "Description": "Los amantes representan la perfección, la armonía y el atractivo mutuo. Su confianza mutua les da fuerza y ​​confianza para superar los obstáculos en la vida. También representan el equilibrio entre dos fuerzas y la posibilidad de vernos enfrentados ante una importante elección."
    },
    {
        "Name": "CARRO",
        "Value": 7,
        "Image": "7.CARRO.png",
        "Response": "Determinación, avance, control",
        "Description": "El Carro, controlado por un hombre triunfante que se pasea por la vida haciendo alarde de su poder. Representa el dominio y el espíritu triunfando y simboliza el éxito, el poder y la posición social. También tiene que ver con los viajes, el carácter fuerte, el éxito conseguido gracias al esfuerzo y el avance en la vida a base de sacrificio."
    },
    {
        "Name": "JUSTICIA",
        "Value": 8,
        "Image": "8.JUSTICIA.png",
        "Response": "Equilibrio, imparcialidad, karma",
        "Description": "La Justicia representa el espíritu equilibrado, el rigor y la justicia. Como ya podrás imaginar ,esta carta está estrechamente relacionada con la sensibilidad moral, la empatía y la compasión."
    },
    {
        "Name": "HERMITANO",
        "Value": 9,
        "Image": "9.HERMITANO.png",
        "Response": "Reflexión, soledad, sabiduría",
        "Description": "El ermitaño, cuyo cabello blanco denota conocimiento y sabiduría, es de naturaleza humilde y representa el espíritu que guía. También simboliza la soledad, la reflexión, la prudencia y el estudio."
    },
    {
        "Name": "RUEDA",
        "Value": 10,
        "Image": "10.RUEDA.png",
        "Response": "Cambio, destino, oportunidad",
        "Description": "La Rueda de la Fortuna representa el espíritu enfrentándose con el destino. Es, en definitiva, el símbolo de la transformación. Hay buenos tiempos y hay malos tiempos, pero lo importante es no quedarse quieto y aceptar lo que la vida te ofrece."
    },
    {
        "Name": "FUERZA",
        "Value": 11,
        "Image": "11.FUERZA.png",
        "Response": "Coraje, dominio, paciencia",
        "Description": "La carta del Tarot La Fuerza simboliza energía, vitalidad, fuerza de voluntad y, en definitiva, el valor para enfrentarse a los problemas de la vida. Representa el espíritu eterno, capaz de vencer todos los obstáculos y resistencias."
    },
    {
        "Name": "COLGADO",
        "Value": 12,
        "Image": "12.COLGADO.png",
        "Response": "Sacrificio, liberación, perspectiva",
        "Description": "El Colgado representa el espíritu de renuncia y sacrificio, el altruismo y el desinterés. Invita a meditar para conseguir romper viejos patrones de conducta y malos hábitos. Los colores de su ropa son el blanco y el rojo, que simbolizan la inocencia y la pureza."
    },
    {
        "Name": "MUERTE",
        "Value": 13,
        "Image": "13.MUERTE.png",
        "Response": "Transformación, renacimiento, final",
        "Description": "Al contrario de lo que se suele pesar, esta la carta no significa la muerte literal de ninguna persona. La Muerte, o también conocida como El Arcano XIII, representa el fin de una etapa, plan o relación, mostrando un nuevo comienzo ante nosotros. Dicho de otra forma, simboliza el espíritu de la transformación."
    },
    {
        "Name": "TEMPLANZA",
        "Value": 14,
        "Image": "14.TEMPLANZA.png",
        "Response": "Equilibrio, armonía, moderación",
        "Description": "La Templanza representa el espíritu dominándose. Hace referencia al control, a la capacidad de moderación de los excesos y al equilibrio. También simboliza la necesidad de ‘probar las aguas’ antes de saltar de cabeza en circunstancias desconocidas."
    },
    {
        "Name": "DIABLO",
        "Value": 15,
        "Image": "15.DIABLO.png",
        "Response": "Tentación, adicción, ataduras",
        "Description": "Aunque El Diablo es una carta de miedos y de temores que nos paralizan, representa el espíritu dominándose. También es reflejo de los instintos más bajos, de las pasiones y de las dificultades en enfrentamientos."
    },
    {
        "Name": "TORRE",
        "Value": 16,
        "Image": "16.TORRE.png",
        "Response": "Cambio abrupto, destrucción, revelación",
        "Description": "La carta de La Torre representa el espíritu frente a la destrucción. La torre es ancha en su base por lo que nos indica que tenemos una base sólida. El rayo sólo destruye la parte superior, que representa la cabeza, el conocimiento y los valores. Significa que debemos replantearnos nuestras ideas."
    },
    {
        "Name": "ESTRELLA",
        "Value": 17,
        "Image": "17.ESTRELLA.png",
        "Response": "Esperanza, inspiración, guía",
        "Description": "La Estrella tiene connotaciones positivas y esperanzadoras. La chica representa la juventud, la belleza y el espíritu dotado de esperanza. Su desnudez denota pureza y transparencia. El trasvase de agua simboliza la fertilidad y la comunicación."
    },
    {
        "Name": "LUNA",
        "Value": 18,
        "Image": "18.LUNA.png",
        "Response": "Ilusiones, emociones, intuición",
        "Description": "La Luna es la carta de la intuición, los sueños y el inconsciente. Invita a dejar atrás el pasado y mirar al futuro, a cambiar y renovarse. Si se vive un periodo de confusión y oscuridad hay que enfrentarse a los problemas a pesar del miedo."
    },
    {
        "Name": "SOL",
        "Value": 19,
        "Image": "19.SOL.png",
        "Response": "Alegría, éxito, claridad",
        "Description": "El Sol te da fuerza y ​​te dice que no importa a donde vayas o lo que hagas, tu energía positiva y radiante te seguirá y te traerá felicidad y alegría. Transmite suerte, bienestar, conciencia positiva, entusiasmo, logro y éxito."
    },
    {
        "Name": "JUICIO",
        "Value": 20,
        "Image": "20.JUICIO.png",
        "Response": "Evaluación, despertar, resolución",
        "Description": "El Juicio representa el espíritu dotado de conciencia cósmica. Simboliza que es momento de diferenciar lo material de lo espiritual. Es la hora del cambio, de la renovación y de la reconciliación sobre unas nuevas bases positivas."
    },
    {
        "Name": "MUNDO",
        "Value": 21,
        "Image": "21.MUNDO.png",
        "Response": "Logro, completitud, realización",
        "Description": "El Mundo representa al espíritu que ha dejado atrás el mundo material. En la carta se distinguen un ángel, un pájaro, un toro y un león, dispuestos cada uno en una esquina. Éstos representan a los cuatro elementos: fuego, aire, agua y tierra."
    }
]
