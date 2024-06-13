document.addEventListener("DOMContentLoaded", function() {
            const paragraphs = document.querySelectorAll('.testimonial-container > p');
            const testimonials = Array.from(paragraphs).map(p => p.textContent);
            
            paragraphs.forEach(p => p.textContent = '');
            
            let currentIndex = 0;
            let charIndex = 0;
            
            function typeWriter() {
                if (charIndex < testimonials[currentIndex].length) {
                    paragraphs[currentIndex].textContent += testimonials[currentIndex].charAt(charIndex);
                    charIndex++;
                    setTimeout(typeWriter, 50);
                } else {
                    charIndex = 0;
                    currentIndex++;
                    if (currentIndex < testimonials.length) {
                        setTimeout(typeWriter, 1000); // Jeda antara paragraf
                    }
                }
            }
            
            typeWriter();
        });