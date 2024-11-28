// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

   
    document.getElementById('contactForm').reset();
});

gsap.from(".animation", {
    y : -25,
    delay: 0.3,
    duration: 0.3,
    opacity: 0,
    stagger: 0.15
})
