/**
 * TP Japan Recruitment Site - JavaScript
 */

// Hero Typewriter Effect
(function(){
  const el = document.getElementById('hero-rotate');
  if(!el) return;
  
  const lines = [
    '暮らすように、海外で働く。',
    '日本語で始める、グローバルキャリア。',
    '東南アジアの"ちょうどいい"生活。'
  ];
  
  const speed = 46;
  const hold = 1400;
  const gap = 350;
  let i = 0, j = 0, del = false;

  function tick(){
    const text = lines[i];
    el.textContent = del ? text.slice(0, j--) : text.slice(0, j++);
    
    if(!del && j > text.length){ 
      del = true; 
      setTimeout(tick, hold); 
      return; 
    }
    
    if(del && j < 0){ 
      del = false; 
      i = (i+1) % lines.length; 
      setTimeout(tick, gap); 
      return; 
    }
    
    setTimeout(tick, speed);
  }
  
  tick();
})();

// GPTW Years Animation
(function(){
  const el = document.getElementById('gptwYears');
  if(!el) return;
  
  const logo = '<img src="photos/great place to work.png" alt="Great Place to Work®">';
  let n = 0, target = 6;
  let hasAnimated = false;
  
  function animate(){
    if(hasAnimated) return;
    hasAnimated = true;
    
    function step(){ 
      n++; 
      el.innerHTML = `${logo}<span>Great Place to Work® <strong>${n}</strong> 年連続</span>`;
      if(n < target) setTimeout(step, 240);
    }
    step();
  }
  
  // Trigger on scroll into view
  const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) animate();
  });
  observer.observe(el);
})();

// Mobile Menu Toggle
(function(){
  const toggle = document.getElementById('mobileToggle');
  const menu = document.getElementById('mobileMenu');
  
  if(toggle && menu){
    toggle.addEventListener('click', function(){
      toggle.classList.toggle('active');
      menu.classList.toggle('active');
      toggle.setAttribute('aria-expanded', menu.classList.contains('active'));
    });
    
    // Close menu when clicking links
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        menu.classList.remove('active');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if(!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove('active');
        toggle.classList.remove('active');
      }
    });
  }
})();

// Back to Top Button
(function(){
  const backToTop = document.getElementById('backToTop');
  if(!backToTop) return;
  
  // Show/hide button on scroll
  window.addEventListener('scroll', () => {
    if(window.pageYOffset > 300){
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });
  
  // Scroll to top when clicked
  backToTop.addEventListener('click', () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  });
})();

// FAQ Accordion
(function(){
  const items = document.querySelectorAll('.faq-item');
  
  items.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all items
      items.forEach(i => i.classList.remove('active'));
      
      // Open clicked item if it wasn't active
      if(!isActive) {
        item.classList.add('active');
      }
    });
  });
})();

// ChatGPT Prompt Handling
(function(){
  const copyBtn = document.getElementById('copyPrompt');
  const openBtn = document.getElementById('openChatGPT');
  
  if(copyBtn) {
    copyBtn.addEventListener('click', () => {
      const prompt = document.querySelector('.chatgpt-prompt');
      if(prompt) {
        navigator.clipboard.writeText(prompt.value).then(() => {
          const originalText = copyBtn.textContent;
          copyBtn.textContent = 'コピーしました！';
          setTimeout(() => {
            copyBtn.textContent = originalText;
          }, 2000);
        }).catch(() => {
          alert('コピーに失敗しました。手動でコピーしてください。');
        });
      }
    });
  }
  
  if(openBtn) {
    openBtn.addEventListener('click', () => {
      window.open('https://chat.openai.com', '_blank');
    });
  }
})();

// Smooth Scroll for Anchor Links
(function(){
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if(href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if(target){
        const offset = 70; // Header height
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
})();

// Fade In Animation on Scroll
(function(){
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        entry.target.classList.add('animated');
      }
    });
  }, observerOptions);
  
  // Observe sections
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(section);
  });
})();

// Lazy Loading Enhancement for YouTube Iframes
(function(){
  const videos = document.querySelectorAll('.video-embed iframe');
  
  if('IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          const iframe = entry.target;
          const src = iframe.getAttribute('src');
          
          // Add autoplay=0 to prevent autoplay
          if(src && !src.includes('autoplay=')) {
            iframe.setAttribute('src', src + '&autoplay=0');
          }
          
          videoObserver.unobserve(iframe);
        }
      });
    }, {
      rootMargin: '100px'
    });
    
    videos.forEach(video => {
      videoObserver.observe(video);
    });
  }
})();

// Form Validation Helper (for future use)
function validateForm(form) {
  const required = form.querySelectorAll('[required]');
  let valid = true;
  
  required.forEach(field => {
    // Remove previous error state
    field.classList.remove('error');
    
    // Check if field is empty
    if(!field.value.trim()) {
      field.classList.add('error');
      valid = false;
      
      // Add error message if not exists
      if(!field.nextElementSibling || !field.nextElementSibling.classList.contains('error-message')) {
        const errorMsg = document.createElement('span');
        errorMsg.classList.add('error-message');
        errorMsg.textContent = 'このフィールドは必須です';
        errorMsg.style.color = 'red';
        errorMsg.style.fontSize = '0.75rem';
        field.parentNode.insertBefore(errorMsg, field.nextSibling);
      }
    } else {
      // Remove error message if exists
      const errorMsg = field.nextElementSibling;
      if(errorMsg && errorMsg.classList.contains('error-message')) {
        errorMsg.remove();
      }
    }
  });
  
  return valid;
}

// Enhanced Accessibility - Focus Management
(function(){
  // Add keyboard navigation for cards
  const cards = document.querySelectorAll('.card, .icon-card, .city-card, .office-card');
  
  cards.forEach(card => {
    // Make cards keyboard accessible
    if(!card.hasAttribute('tabindex')) {
      card.setAttribute('tabindex', '0');
    }
    
    // Handle Enter key
    card.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });
  
  // Escape key closes mobile menu
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
      const mobileMenu = document.getElementById('mobileMenu');
      const mobileToggle = document.getElementById('mobileToggle');
      
      if(mobileMenu && mobileToggle) {
        mobileMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    }
  });
})();

// Performance Monitoring (Optional)
(function(){
  // Log performance metrics in development
  if(window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.addEventListener('load', () => {
      const perfData = performance.getEntriesByType('navigation')[0];
      if(perfData) {
        console.log('Page Load Performance:', {
          'DOM Interactive': perfData.domInteractive + 'ms',
          'DOM Complete': perfData.domComplete + 'ms',
          'Load Complete': perfData.loadEventEnd + 'ms'
        });
      }
    });
  }
})();

// Initialize all components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Add any initialization code here
  console.log('TP Japan site initialized');
  
  // Check for required elements
  const requiredElements = ['hero-rotate', 'gptwYears', 'backToTop'];
  requiredElements.forEach(id => {
    if(!document.getElementById(id)) {
      console.warn(`Element with ID "${id}" not found`);
    }
  });
});

// Service Worker Registration (for future PWA support)
if('serviceWorker' in navigator && window.location.protocol === 'https:') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('ServiceWorker registration successful');
      })
      .catch(err => {
        console.log('ServiceWorker registration failed: ', err);
      });
  });
}
