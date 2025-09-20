// Texto de bienvenida (NO SE TOCA porque es personal ❤️)
const introLines = [
  "Hola, Maurhelen :3",
  "Yo se que has estado muy confundida con lo último que ha pasado... :<",
  "Y yo también lo estoy, pero quisiera que tomemos esta nueva oportunidad",
  "Para retomar lo que alguna vez fuimos :c",
  "La verdad es que te sigo amando como en el primer día que te vi",
  "Aún te sigo viendo con los mismos ojos enamorados de ti, mi vida<3",
  "Aún quiero una relación contigo y ser felices juntos, mi amor",
  "¿Por qué no intentarlo otra vez?, No se perderá nada con intentarlo :c",
  "Además, nada nos asegura que esta vez salga mal, hasta podria ser totalmente alrevez ,podria salir todo bien :3",
  "Prometo que te haré feliz y mejoraré en todo, sere mejor persona y dejare de ser tan tonto T_T",
  "Volveremos a pasar momentos felices y nuevos juntos",
  "Reírnos, jugar, darnos cariño",
  "Además siempre estare para ti, en las buenas y en las malas",
  "Podré escuchar tus problemas cuando lo necesites, aun que se que no te gusta contarlos ,pero siempre estare ahi por si alguna vez quieres desahogarte",
  "te amo maurhelen ,con todo mi corazon",
  "¿quieres volver conmigo?"
];

// Elementos principales
const startSection = document.getElementById("start");
const startBtn = document.getElementById("startBtn");
const typingEl = document.getElementById("typing");
const introSection = document.getElementById("intro");
const menuSection = document.getElementById("menu");
const gallerySection = document.getElementById("gallery");

const bgMusic = document.getElementById("bgMusic");
const clickSound = document.getElementById("clickSound");

let lineIndex = 0;

// 🎹 Activar intro al pulsar el botón inicial
startBtn.addEventListener("click", () => {
  clickSound.play();
  transitionTo(introSection);
  bgMusic.play().catch(err => console.log("No se pudo reproducir la música:", err));
  showIntro();
});

// ⌨️ Efecto máquina de escribir
function typeLine(text, callback) {
  let i = 0;
  typingEl.textContent = "";
  const interval = setInterval(() => {
    typingEl.textContent = text.slice(0, i++);
    if (i > text.length) {
      clearInterval(interval);
      setTimeout(callback, 1200);
    }
  }, 50);
}

// Mostrar la intro línea por línea
function showIntro() {
  introSection.classList.add("active");
  if (lineIndex < introLines.length) {
    typeLine(introLines[lineIndex], () => {
      lineIndex++;
      showIntro();
    });
  } else {
    setTimeout(() => {
      transitionTo(menuSection);
    }, 1500);
  }
}

// ❤️ Botones principales
document.getElementById("yesBtn").addEventListener("click", () => {
  clickSound.play();
  window.location.href = "https://instagram.com/bismarckvjz"; // tu perfil IG
});

document.getElementById("noBtn").addEventListener("click", () => {
  clickSound.play();
  alert("Gracias por tu sinceridad 💔. Siempre estaré para ti.");
});

document.getElementById("albumBtn").addEventListener("click", () => {
  clickSound.play();
  transitionTo(gallerySection);
});

document.getElementById("backBtn").addEventListener("click", () => {
  clickSound.play();
  transitionTo(menuSection);
});

// ✨ Transiciones entre secciones
function transitionTo(target) {
  [startSection, introSection, menuSection, gallerySection].forEach(sec => {
    if (sec) {
      sec.classList.add("hidden");
      sec.classList.remove("active");
    }
  });
  target.classList.remove("hidden");
  setTimeout(() => target.classList.add("active"), 50);
}

// 🌸 Pétalos reales en zig-zag
function createPetal() {
  const petal = document.createElement("div");
  petal.className = "petal";

  // 👉 Usa tu link de pétalo real (PNG transparente)
  petal.style.backgroundImage = "url('petalo.png')";

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = (6 + Math.random() * 5) + "s";
  petal.style.opacity = Math.random() * 0.7 + 0.3;
  petal.style.transform = "rotate(" + (Math.random() * 360) + "deg)";

  document.getElementById("petals").appendChild(petal);

  setTimeout(() => petal.remove(), 12000);
}

// Generar pétalos cada 300ms
setInterval(createPetal, 300);

// Tooltips en móviles: aparecen al tocar la imagen
document.querySelectorAll(".tooltip img").forEach(img => {
  img.addEventListener("click", () => {
    const tooltip = img.parentElement;

    // Cierra cualquier otro tooltip abierto
    document.querySelectorAll(".tooltip").forEach(t => {
      if (t !== tooltip) t.classList.remove("show");
    });

    // Alterna el tooltip de la imagen tocada
    tooltip.classList.toggle("show");
  });
});

// Si haces clic fuera de la imagen, se cierra el tooltip
document.addEventListener("click", (e) => {
  if (!e.target.closest(".tooltip")) {
    document.querySelectorAll(".tooltip").forEach(t => t.classList.remove("show"));
  }
});
