function jumlahkan() {
    var bilanganPertama = parseInt(document.getElementById("bilanganPertama").value);
    var bilanganKedua = parseInt(document.getElementById("bilanganKedua").value);
    if (!isNaN(bilanganPertama) && !isNaN(bilanganKedua)) {
      var hasil = bilanganPertama + bilanganKedua;
      document.getElementById("hasil").textContent = hasil;
    } else {
      document.getElementById("hasil").textContent = "Input tidak valid";
    }
  }
  
  function reset() {
    document.getElementById("bilanganPertama").value = "";
    document.getElementById("bilanganKedua").value = "";
    document.getElementById("hasil").textContent = "0";
  }
  