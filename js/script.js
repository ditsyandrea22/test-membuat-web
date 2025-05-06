// Fungsi untuk menangani pemesanan kamar
function handleRoomBooking() {
    const bookButtons = document.querySelectorAll('.book-btn');
    
    bookButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const roomCard = this.closest('.room-card');
            const roomName = roomCard.querySelector('h3').textContent;
            const roomPrice = roomCard.querySelector('.price').textContent;
            
            // Simpan data kamar yang dipilih di localStorage
            localStorage.setItem('selectedRoom', JSON.stringify({
                name: roomName,
                price: roomPrice
            }));
            
            // Redirect ke halaman pemesanan
            window.location.href = 'booking.html';
        });
    });
  }
  
  // Fungsi untuk menampilkan modal
  function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
  }
  
  // Fungsi untuk menyembunyikan modal
  function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
  }
  
  // Fungsi untuk inisialisasi gallery kamar (jika ada)
  function initRoomGallery() {
    const galleryImages = document.querySelectorAll('.gallery-thumbnail');
    const mainImage = document.querySelector('.gallery-main-img');
    
    if (galleryImages && mainImage) {
        galleryImages.forEach(img => {
            img.addEventListener('click', function() {
                // Update gambar utama
                mainImage.src = this.src;
                mainImage.alt = this.alt;
                
                // Update active class
                galleryImages.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
  }
  
  // Fungsi untuk menangani filter kamar
  function setupRoomFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const roomCards = document.querySelectorAll('.room-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.dataset.filter;
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter kamar
            roomCards.forEach(card => {
                if (filterValue === 'all' || card.dataset.type === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
  }
  
  // Fungsi untuk menampilkan notifikasi
  function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Hilangkan notifikasi setelah 3 detik
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
  }
  
  // Panggil fungsi yang diperlukan saat DOM siap
  document.addEventListener('DOMContentLoaded', function() {
    handleRoomBooking();
    initRoomGallery();
    setupRoomFilters();
    
    // Setup event listener untuk tombol close modal
    document.querySelectorAll('.modal-close').forEach(button => {
        button.addEventListener('click', function() {
            const modalId = this.closest('.modal').id;
            hideModal(modalId);
        });
    });
    
    // Close modal ketika klik di luar konten modal
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                hideModal(this.id);
            }
        });
    });
  });