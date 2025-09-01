// Buton tıklanınca çalışacak kod
document.addEventListener("DOMContentLoaded", function() {
  const btn = document.querySelector("button");
  btn.addEventListener("click", function() {
    alert("Butona bastın! 🎉");
  });
});
