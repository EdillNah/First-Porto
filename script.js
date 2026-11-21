// jquery
$('#theme-toggle').click(function() {
  $('body').toggleClass('dark-mode');
});

const textElement = document.getElementById('typing-text');
const words = ["Student", "Developer", "Designer"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    textElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    textElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  // perbandingan ketik : hapus
  let typingSpeed = isDeleting ? 50 : 100;

  // Jika kata selesai diketik penuh
  if (!isDeleting && charIndex === currentWord.length) {
    typingSpeed = 2000; // Tahan selama 2 detik sebelum dihapus
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) { // Jika kata sudah selesai dihapus
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typingSpeed = 500;
  }
  setTimeout(typeEffect, typingSpeed);
}

// Jalankan fungsi saat DOM siap
document.addEventListener('DOMContentLoaded', typeEffect);