// Sembunyikan animasi slide setelah 1.5 detik (waktu sama seperti animasi CSS)
setTimeout(() => {
    const slide = document.getElementById("slide-opening");
    if (slide) {
      slide.style.display = "none";
    }
  }, 1500);
  