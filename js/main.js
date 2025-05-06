// Fungsi untuk inisialisasi aplikasi
document.addEventListener('DOMContentLoaded', function() {
    // Set tahun copyright otomatis
    setCopyrightYear();
    
    // Inisialisasi slider kamar
    initRoomSlider();
    
    // Setup event listener untuk form kontak
    setupContactForm();
    
    // Tambahkan efek scroll smooth untuk navigasi
    setupSmoothScrolling();
   });
   
   // Fungsi untuk mengupdate tahun copyright di footer
   function setCopyrightYear() {
    const yearElement = document.getElementById('copyright-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
   }
   
   // Fungsi untuk inisialisasi slider kamar (jika ada)
   function initRoomSlider() {
    const roomSlider = document.querySelector('.room-slider');
    if (roomSlider) {
        let currentSlide = 0;
        const slides = document.querySelectorAll('.room-slide');
        const totalSlides = slides.length;
        
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.display = i === index ? 'block' : 'none';
            });
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }
        
        // Tampilkan slide pertama
        showSlide(currentSlide);
        
        // Otomatis ganti slide setiap 5 detik
        setInterval(nextSlide, 5000);
    }
   }
   
   // Fungsi untuk setup form kontak
   function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Ambil data form
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Validasi sederhana
            if (!name || !email || !message) {
                alert('Harap isi semua field!');
                return;
            }
            
            // Simulasi pengiriman data
            console.log('Form submitted:', { name, email, message });
            alert('Terima kasih atas pesan Anda! Kami akan segera menghubungi Anda.');
            contactForm.reset();
        });
    }
   }
   
   // Fungsi untuk smooth scrolling
   function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
   }
   
   // Fungsi untuk toggle menu mobile (jika ada)
   function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('active');
    }
   }