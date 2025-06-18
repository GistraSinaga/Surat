 function cekPassword() {
      const passwordBenar = "Yemima3000"; // Ganti dengan password kamu
      const input = document.getElementById("password").value;
      const surat = document.getElementById("surat");
      const error = document.getElementById("error");
      const awal  = document.getElementById("awal");

      if (input === passwordBenar) {
        surat.style.display = "block";
        error.style.display = "none";
        awal.style.display ="none";
      }else{
        error.style.display = "block";
        surat.style.display = "none";
      }
    }