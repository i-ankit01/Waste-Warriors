document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('schedule-pickup-form');

    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const pickupDate = document.getElementById('pickup-date').value;
        const wasteType = document.getElementById('waste-type').value;
        const productType = document.getElementById('product-type').value;
        const location = document.getElementById('location').value;
        alert(`Pickup successfully scheduled!\nPickup Date: ${pickupDate}\nWaste Type: ${wasteType}\nProduct: ${productType}\nLocation: ${location}`);
    });
});

gsap.from(".animation", {
    y : -25,
    delay: 0.3,
    duration: 0.2,
    opacity: 0,
    stagger: 0.1
})