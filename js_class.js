// Fungsi untuk menambahkan efek timbul saat diklik dan mengarah ke halaman terkait
document.querySelectorAll('.class-card-1, .class-card-2, .class-card-3, .class-card-4, .class-card-5').forEach(card => {
    card.addEventListener('click', function() {
        // Menambahkan kelas 'clicked' untuk memberikan efek timbul saat diklik
        this.classList.add('clicked');

        // Mengarahkan pengguna ke halaman sesuai dengan kelas yang diklik
        if (this.classList.contains('class-card-1')) {
            window.location.href = '10tav1.html';
        } else if (this.classList.contains('class-card-2')) {
            window.location.href = '10tav2.html';
        } else if (this.classList.contains('class-card-3')) {
            window.location.href = '11tav1.html';
        } else if (this.classList.contains('class-card-4')) {
            window.location.href = '11tav2.html';
        } else if (this.classList.contains('class-card-5')) {
            window.location.href = '12tav.html';
        }

        // Menghapus kelas 'clicked' setelah 300ms agar animasi selesai
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 600); // Durasi animasi (300ms)
    });
});