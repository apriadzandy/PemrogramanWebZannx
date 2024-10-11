document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const alamat = document.getElementById('alamat').value.trim();

    if (!nama || !email || !alamat) {
        alert('Harap isi semua field!'); 
    } else {
        alert('Form berhasil dikirim!'); 
        document.getElementById('myForm').reset(); 
    }
});
