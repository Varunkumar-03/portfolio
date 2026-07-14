const projectData = {
    "1": {
        title: "Tuition Management System",
        tag: "SaaS / Management",
        description: "A comprehensive solution designed for educators and private tutors to manage their daily operations. The system automates student enrollment, fee tracking, and attendance management, reducing administrative overhead by 40%. It features a responsive dashboard for real-time performance tracking and automated SMS reminders for parents.",
        tech: ["Python", "SQL", "Flask", "Bootstrap"],
        image: "assets/tution_mngmnt.jpg",
        goals: [
            "Centralize student data",
            "Automate fee collection reminders",
            "Generate monthly attendance reports"
        ]
    },
    "2": {
        title: "Gym Management System",
        tag: "Management",
        description: "Streamlining fitness center operations with a focused member tracking system. This project addressed the common challenges of manual membership tracking by implementing an automated renewal alert system and a lightweight dashboard for trainers to track member progress and check-ins.",
        tech: ["Python", "SQL", "Custom CSS", "Java"],
        image: "assets/gym.jpg",
        goals: [
            "Track member membership status",
            "Manage trainer schedules",
            "Analyze monthly revenue growth"
        ]
    },
    "3": {
        title: "Mobile Shop Storefront",
        tag: "E-Commerce",
        description: "Developed a professional online presence for a local mobile retail shop to expand their customer reach beyond geographical limits. The platform features an intuitive product grid, real-time inventory status, and a seamless inquiry system that connects customers directly to shop owners via WhatsApp API integration.",
        tech: ["HTML5", "CSS3", "JavaScript", "React.js"],
        image: "assets/mobile.jpg",
        goals: [
            "Showcase latest smartphone inventory",
            "Enable direct customer-to-owner chat",
            "Mobile-first responsive design"
        ]
    },
    "4": {
        title: "Real-time RAG Chatbots",
        tag: "AI / NLP",
        description: "Advanced AI agents built using the Retrieval-Augmented Generation (RAG) framework. These bots utilize Langchain and Langgraph to retrieve relevant information from local documents in real-time, providing highly accurate and context-aware responses. Integrated with n8n for automated data fetching and preprocessing.",
        tech: ["Langchain", "Langgraph", "n8n", "OpenAI"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
        goals: [
            "Reduce response hallucination",
            "Instant document retrieval",
            "Multi-agent workflow orchestration"
        ]
    },
    "5": {
        title: "QR Certificate Generator",
        tag: "Web Tool",
        description: "A secure web application designed to combat certificate forgery. It generates digital certificates embedded with unique QR codes. When scanned, these codes redirect to a verification page that cross-references the student's ID against a secure database, confirming authenticity in seconds.",
        tech: ["JavaScript", "QR Engine", "Node.js", "SQL"],
        image: "assets/certificate.jpg",
        goals: [
            "Instant credential verification",
            "Automated PDF generation",
            "Secure verification portal"
        ]
    },
    "6": {
        title: "Automated Payslip Generator",
        tag: "Automation",
        description: "A hybrid payroll tool that simplifies the generation of monthly payslips for small to medium-sized teams. The system allows for both manual adjustments and bulk automated generation from CSV/Excel data. It exports clean, professional PDFs ready for distribution with zero manual formatting required.",
        tech: ["Python", "PDFKit", "Excel Automator", "CSS"],
        image: "assets/payslip.jpg",
        goals: [
            "Eliminate manual calculation errors",
            "Support bulk PDF generation",
            "Customizable earning/deduction fields"
        ]
    },
    "7": {
        title: "AgriTech Plant Disease Detection",
        tag: "AI / Computer Vision",
        description: "An advanced edge-AI application that identifies plant diseases with high precision. By leveraging TensorFlow Lite and OpenCV, the system allows farmers to upload leaf images for instant diagnosis and treatment recommendations directly on mobile devices, optimizing crop health management.",
        tech: ["Python", "TensorFlow Lite", "OpenCV", "Keras"],
        image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=1000",
        goals: [
            "Real-time disease identification at the edge",
            "High-precision leaf segmentation in various lighting",
            "Prescriptive treatment recommendations for detected pests"
        ]
    }
};

// Sticky Header Effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile Menu Toggle
const menuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
    });
}

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuBtn.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
    });
});

// Smooth Scrolling for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Reveal on Scroll using Intersection Observer
const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

document.querySelectorAll('.card, .project-card, .skill-item, .section-title, .about-description, .stat-item, .about-card, .about-card-small').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    revealObserver.observe(el);
});

// Helper style injection
if (!document.getElementById('reveal-styles')) {
    const style = document.createElement('style');
    style.id = 'reveal-styles';
    style.textContent = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.append(style);
}

// Hero Text Animation (Dropping Letters)
const heroTitle = document.getElementById('typewriter-text');
const animatedText = 'I build <span class="gradient">AI Workflows</span> & Digital Solutions';

if (heroTitle) {
    function initHeroAnimation() {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = animatedText;
        
        let htmlResult = '';
        let delay = 0;

        function traverse(node) {
            if (node.nodeType === 3) { // Text node
                const chars = node.textContent.split('');
                chars.forEach(char => {
                    const span = document.createElement('span');
                    span.className = 'letter';
                    span.style.animationDelay = `${delay}s`;
                    span.textContent = char === ' ' ? '\u00A0' : char;
                    htmlResult += span.outerHTML;
                    delay += 0.04;
                });
            } else if (node.nodeType === 1) { // Element node
                const tag = node.tagName.toLowerCase();
                const className = node.className;
                htmlResult += `<${tag} class="${className}">`;
                Array.from(node.childNodes).forEach(traverse);
                htmlResult += `</${tag}>`;
            }
        }

        Array.from(tempDiv.childNodes).forEach(traverse);
        heroTitle.innerHTML = htmlResult;
    }
    
    setTimeout(initHeroAnimation, 500);
}

// Modal Logic
const modal = document.getElementById('case-study-modal');
const modalClose = document.getElementById('modal-close');

function openModal(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-tag').textContent = data.tag;
    document.getElementById('modal-description').textContent = data.description;
    
    const modalImg = document.getElementById('modal-image');
    modalImg.src = data.image;
    modalImg.alt = data.title;

    const techContainer = document.getElementById('tech-badges');
    techContainer.innerHTML = '';
    data.tech.forEach(t => {
        const span = document.createElement('span');
        span.className = 'tech-badge';
        span.textContent = t;
        techContainer.appendChild(span);
    });

    const goalsList = document.getElementById('modal-goals');
    goalsList.innerHTML = '';
    data.goals.forEach(goal => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fa-solid fa-check-circle"></i> ${goal}`;
        goalsList.appendChild(li);
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; 
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

document.querySelectorAll('.case-study-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        const id = trigger.getAttribute('data-project-id');
        openModal(id);
    });
});

if (modalClose) modalClose.addEventListener('click', closeModal);
window.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    const successModal = document.getElementById('success-modal');
    const successClose = document.getElementById('success-close');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxN05y9CVfd5tYIhbp1F4x7bN6xxXmlslgWIlJN4_8h6DlgROjVD1E-kdqlK4BrGkAscA/exec';
        const submitBtn = this.querySelector('.submit-btn');
        const originalBtnText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
        submitBtn.style.pointerEvents = 'none';
        
        fetch(scriptURL, { method: 'POST', body: new FormData(this)})
            .then(response => {
                successModal.classList.add('active');
                this.reset();
                submitBtn.innerHTML = originalBtnText;
                submitBtn.style.pointerEvents = 'all';
            })
            .catch(error => {
                console.error('Error!', error.message);
                alert('Something went wrong. Please try again.');
                submitBtn.innerHTML = originalBtnText;
                submitBtn.style.pointerEvents = 'all';
            });
    });

    if (successClose) {
        successClose.addEventListener('click', () => {
            successModal.classList.remove('active');
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === successModal) {
            successModal.classList.remove('active');
        }
    });
}

/**
 * Premium 3D AI Node Particle System
 */
class Particle {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1; // Slightly larger dots
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.density = (Math.random() * 30) + 10;
        this.color = '#00f2fe';
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.shadowBlur = 10; // Add glow
        this.ctx.shadowColor = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.shadowBlur = 0; // Reset for performance
    }

    update(mouse) {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > this.canvas.width) this.x = 0;
        if (this.x < 0) this.x = this.canvas.width;
        if (this.y > this.canvas.height) this.y = 0;
        if (this.y < 0) this.y = this.canvas.height;

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
            let force = (mouse.radius - distance) / mouse.radius;
            this.x -= (dx / distance) * force * this.density * 0.5;
            this.y -= (dy / distance) * force * this.density * 0.5;
        }
    }
}

class BackgroundAnimation {
    constructor() {
        this.canvas = document.getElementById('bg-canvas');
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: null, y: null, radius: 200 }; // Larger influence area

        window.addEventListener('mousemove', (e) => { 
            this.mouse.x = e.x; 
            this.mouse.y = e.y; 
        });
        
        window.addEventListener('mouseout', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });

        window.addEventListener('resize', () => this.init());
        this.init();
    }

    init() {
        this.canvas.width = document.documentElement.clientWidth;
        this.canvas.height = document.documentElement.clientHeight;
        this.particles = [];
        
        // Dynamic density based on screen size
        let densityDivider = (this.canvas.width < 768) ? 20000 : 12000;
        let count = (this.canvas.width * this.canvas.height) / densityDivider;
        
        for (let i = 0; i < Math.min(count, 180); i++) {
            this.particles.push(new Particle(this.canvas));
        }
    }

    connect() {
        const connectDistance = 180; // Larger connection distance
        for (let a = 0; a < this.particles.length; a++) {
            for (let b = a; b < this.particles.length; b++) {
                let dx = this.particles[a].x - this.particles[b].x;
                let dy = this.particles[a].y - this.particles[b].y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < connectDistance) {
                    let opacity = (1 - (distance / connectDistance)) * 0.25; // Higher opacity
                    this.ctx.strokeStyle = `rgba(0, 242, 254, ${opacity})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[a].x, this.particles[a].y);
                    this.ctx.lineTo(this.particles[b].x, this.particles[b].y);
                    this.ctx.stroke();
                }
            }
            
            // Connect to mouse for extra "interconnected" feel
            if (this.mouse.x && this.mouse.y) {
                let dx = this.particles[a].x - this.mouse.x;
                let dy = this.particles[a].y - this.mouse.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < this.mouse.radius) {
                    let opacity = (1 - (distance / this.mouse.radius)) * 0.4;
                    this.ctx.strokeStyle = `rgba(0, 242, 254, ${opacity})`;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[a].x, this.particles[a].y);
                    this.ctx.lineTo(this.mouse.x, this.mouse.y);
                    this.ctx.stroke();
                }
            }
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let p of this.particles) {
            p.update(this.mouse);
            p.draw();
        }
        this.connect();
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize Background
const bg = new BackgroundAnimation();
bg.animate();
