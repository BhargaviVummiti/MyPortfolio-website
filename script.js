function sendWhatsApp(){
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
  const phone="918125742092";
  const link = `https://wa.me/${phone}?text=${text}`;

  window.open(link,"_blank");

}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const formData = new FormData(form);

    fetch("https://formsubmit.co/ajax/bhargavivummiti10@gmail.com", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
        alert("Email sent successfully!");
        form.reset();
    })
    .catch(err => {
        alert("Failed to send email.");
    });
});
