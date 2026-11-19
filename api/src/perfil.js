// =====================================================================
//  ✏️  EDITA ESTE ARCHIVO CON TUS DATOS
//  Todo lo que pongas aquí es PÚBLICO: aparece en tu tarjeta y el
//  chatbot lo usará para responder. No incluyas teléfono, dirección,
//  correo personal ni ningún dato sensible.
// =====================================================================

const perfil = {
  nombre: "Ana López",
  rol: "Estudiante de Ingeniería en Sistemas",
  frase: "Me gusta entender cómo funcionan las cosas… y luego romperlas un poco.",
  iniciales: "AL",

  intereses: ["Desarrollo web", "Videojuegos indie", "Fotografía", "Café de olla"],

  enlaces: [
    { texto: "GitHub", url: "https://github.com/tu-usuario" },
    { texto: "LinkedIn", url: "https://www.linkedin.com/in/tu-usuario" }
  ],

  // Información extra que SOLO usa el chatbot para conversar.
  sobreMi: `
    Estudio el sexto semestre de Ingeniería en Sistemas.
    Mi lenguaje favorito es JavaScript y estoy aprendiendo Python.
    Mi proyecto más reciente es una app para organizar torneos de videojuegos con mis amigos.
    Los fines de semana salgo a tomar fotos de la ciudad.
    Quiero trabajar en desarrollo de software en la nube.
    Mi comida favorita son los tacos al pastor.
  `,

  // Personalidad del chatbot
  tono: "amigable, entusiasta y breve, con un toque de humor",

  // Preguntas sugeridas que aparecen como botones en el chat
  sugerencias: ["¿Qué estudia?", "¿En qué proyecto trabaja?", "¿Qué hace en su tiempo libre?"]
};

module.exports = { perfil };
