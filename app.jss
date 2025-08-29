const texts = {
  uz: {
    title: "AI kurslari bilan kelajakni o‘rganing",
    subtitle: "Sun’iy intellekt, Runway, Veo3 va KlingAI integratsiyasi bilan",
  },
  en: {
    title: "Learn the Future with AI Courses",
    subtitle: "With Artificial Intelligence, Runway, Veo3 and KlingAI integration",
  }
};

function setLang(lang) {
  document.getElementById("title").textContent = texts[lang].title;
  document.getElementById("subtitle").textContent = texts[lang].subtitle;
}

document.getElementById("year").textContent = new Date().getFullYear();
