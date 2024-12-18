document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('schedule-pickup-form');

    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        sendMail();
        function sendMail(){
            let params = {
                 pickupDate : document.getElementById('pickup-date').value,
                 wasteType : document.getElementById('waste-type').value,
                 location : document.getElementById('location').value,
                 product : document.getElementById("product-type").value
            }
            emailjs.send("service_vwuxcsu", "template_p9xha0f", params).then(alert("Waste Pickup Booked Successfully"))
        }
    
    });
});



gsap.from(".animation", {
    y : -25,
    delay: 0.3,
    duration: 0.2,
    opacity: 0,
    stagger: 0.1
})