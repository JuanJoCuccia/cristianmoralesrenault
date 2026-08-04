document.addEventListener("DOMContentLoaded", () => {
  const whatsappNumber = "5492616176513";

  const leadForm = document.getElementById("leadForm");

  if (leadForm) {
    leadForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();
      const telefono = document.getElementById("telefono").value.trim();
      const modelo = document.getElementById("modelo").value;
      const tipoCompra = document.getElementById("tipoCompra").value;

      const message =
        `Hola Cristian, soy ${nombre}, mi teléfono es ${telefono}. ` +
        `Me interesa el ${modelo} (compra ${tipoCompra}). ` +
        `Quisiera recibir más información sobre disponibilidad y opciones.`;

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    });
  }

  const showMoreModelsButton = document.getElementById("showMoreModels");
  const modelsGrid = document.getElementById("modelsGrid");

  if (showMoreModelsButton && modelsGrid) {
    showMoreModelsButton.addEventListener("click", () => {
      const isExpanded = modelsGrid.classList.toggle("show-all");

      showMoreModelsButton.textContent = isExpanded
        ? "Ver menos modelos"
        : "Ver todos los modelos";
    });
  }

  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const faqItem = question.closest(".faq-item");
      const isActive = faqItem.classList.contains("active");

      document.querySelectorAll(".faq-item").forEach((item) => {
        item.classList.remove("active");

        const itemQuestion = item.querySelector(".faq-question");

        if (itemQuestion) {
          itemQuestion.setAttribute("aria-expanded", "false");
        }
      });

      if (!isActive) {
        faqItem.classList.add("active");
        question.setAttribute("aria-expanded", "true");
      }
    });
  });

  const currentYear = document.getElementById("currentYear");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }
});
