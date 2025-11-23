document.addEventListener('DOMContentLoaded', function() {
    const tocDetails = document.querySelector('.toc-details');
    const tocHeader = document.querySelector('.toc-header');
    tocHeader.addEventListener('click', function() {
        const isOpening = !tocDetails.open;
        
        if (isOpening) {
            tocDetails.style.maxHeight = tocDetails.scrollHeight + 'px';
        } else {
            tocDetails.style.maxHeight = '60px';
        }
    });
    
    tocDetails.addEventListener('toggle', function() {
        if (tocDetails.open) {
            tocDetails.style.maxHeight = tocDetails.scrollHeight + 'px';
        } else {
            setTimeout(() => {
                tocDetails.style.maxHeight = null;
            }, 300);
        }
    });
});
    
document.addEventListener('DOMContentLoaded', function() {
    const duckToggle = document.getElementById('duckToggle');
    let ducksHidden = false;
            
    function toggleCodeDucks() {
        ducksHidden = !ducksHidden;
                
        const duckComments = document.querySelectorAll('.duck-comment');
                
        duckComments.forEach(comment => {
            comment.style.display = ducksHidden ? 'none' : 'block';
        });
                
        duckToggle.innerHTML = ducksHidden ? 
            '<span class="duck-icon">🦆</span> Show 🦆 commentary' : 
            '<span class="duck-icon">🦆</span> Hide 🦆 commentary';
                    
        const duckIcon = duckToggle.querySelector('.duck-icon');
        duckIcon.style.transform = 'scale(1.2)';
        setTimeout(() => {
            duckIcon.style.transform = 'scale(1)';
        }, 300);
    }
            
    duckToggle.addEventListener('click', toggleCodeDucks);
});
        
document.addEventListener('DOMContentLoaded', function() {
    const scrollImages = document.querySelectorAll('.scroll-image');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scrolled');
            }
        });
    }, {
        threshold: 0.1
    });
    
    scrollImages.forEach(image => {
        observer.observe(image);
    });
});

