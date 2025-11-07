document.addEventListener("DOMContentLoaded", () => {
  // Theme choices (footer buttons)
  const themeChoices = document.querySelectorAll(".theme-choice");
  themeChoices.forEach((btn) => {
    btn.addEventListener("click", () => {
      document.body.className = btn.dataset.theme;
    });
  });

  // Add to Cart buttons
  document.querySelectorAll(".add-cart").forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("✅ Item added to cart successfully!");
    });
  });

  // Chat button
  const chatBtn = document.getElementById("chatBtn");
  if (chatBtn) {
    chatBtn.addEventListener("click", () => {
      alert("💬 Chatbot coming soon — AI assistant for farmers and buyers!");
    });
  }

  // Login simulation
  const loginBtn = document.getElementById("loginBtn");
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      alert("🔐 Login simulation — connect to database later for full access.");
    });
  }

  // Marketplace button (scroll to marketplace)
  const marketBtn = document.getElementById("marketBtn");
  if (marketBtn) {
    marketBtn.addEventListener("click", () => {
      const marketSection = document.getElementById("marketSection");
      if (marketSection) {
        marketSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Theme button (scroll to footer)
  const themeBtn = document.getElementById("themeBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const footer = document.querySelector(".footer");
      if (footer) {
        footer.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});
