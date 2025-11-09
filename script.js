const form = document.getElementById("notifyForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  msg.style.color = "#9ca3af";
  msg.textContent = "Sending...";

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      msg.style.color = "#22c55e";
      msg.textContent = "✅ Thank you! You’ll be notified by Codeshell soon.";
      form.reset();
    } else {
      msg.style.color = "#ef4444";
      msg.textContent = "❌ Something went wrong. Please try again.";
    }
  } catch (error) {
    msg.style.color = "#ef4444";
    msg.textContent = "❌ Network error. Please check your internet connection.";
  }
});
