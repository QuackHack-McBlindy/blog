document.addEventListener('DOMContentLoaded', function() {
    const tocDetails = document.querySelector('.toc-details');
    const tocHeader = document.querySelector('.toc-header');
    
    if (tocHeader) {
        tocHeader.addEventListener('click', function() {
            const isOpening = !tocDetails.open;
            
            if (isOpening) {
                tocDetails.style.maxHeight = tocDetails.scrollHeight + 'px';
            } else {
                tocDetails.style.maxHeight = '60px';
            }
        });
    }
    
    if (tocDetails) {
        tocDetails.addEventListener('toggle', function() {
            if (tocDetails.open) {
                tocDetails.style.maxHeight = tocDetails.scrollHeight + 'px';
            } else {
                setTimeout(() => {
                    tocDetails.style.maxHeight = null;
                }, 300);
            }
        });
    }
    

    const duckToggle = document.getElementById('duckToggle');
    let ducksHidden = false;
            
    function toggleCodeDucks() {
        ducksHidden = !ducksHidden;
        

        //const duckComments = document.querySelectorAll('.duck-comment');
        //duckComments.forEach(comment => {
        //    comment.style.display = ducksHidden ? 'none' : 'block';
        //});
        
        const duckVersions = document.querySelectorAll('.duck-version');
        const cleanVersions = document.querySelectorAll('.clean-version');
        
        if (ducksHidden) {
            duckVersions.forEach(el => el.classList.add('hidden'));
            cleanVersions.forEach(el => el.classList.remove('hidden'));
        } else {
            duckVersions.forEach(el => el.classList.remove('hidden'));
            cleanVersions.forEach(el => el.classList.add('hidden'));
        }
        
        duckToggle.innerHTML = ducksHidden ? 
            '<span class="duck-icon">🦆</span> Show duck commentary' : 
            '<span class="duck-icon">🦆</span> Hide duck commentary';
        
        const duckIcon = duckToggle.querySelector('.duck-icon');
        duckIcon.style.transform = 'scale(1.2)';
        setTimeout(() => {
            duckIcon.style.transform = 'scale(1)';
        }, 300);
    }
            
    if (duckToggle) {
        duckToggle.addEventListener('click', toggleCodeDucks);
    }
    
    document.querySelectorAll('pre span').forEach(function(span) {
        var text = document.createElement('textarea');
        text.innerHTML = span.innerHTML;
        span.textContent = text.value;
    });
    
    const scrollImages = document.querySelectorAll('.scroll-image');
    
    if (scrollImages.length > 0) {
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
    }
});
