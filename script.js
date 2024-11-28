document.addEventListener("DOMContentLoaded", function() {
  
    const slideshow = document.querySelector('.slideshow');
    const images = slideshow.children;
    let currentIndex = 0;
  
    function showNextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      slideshow.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  
    setInterval(showNextImage, 3000); 
  });
  
  function getLoggedInUser() {
    return localStorage.getItem("loggedInUser");
  }
  
  function logout() {
    clearLoginState();
    window.location.href = "../HACKATHON/LOGIN/login.html";
  }
  
  function clearLoginState() {
    localStorage.removeItem("loggedInUser");
  }
  gsap.from(".animation", {
    y : -25,
    delay: 0.3,
    duration: 0.3,
    opacity: 0,
    stagger: 0.15
})
gsap.from(".animation1", {
  y : 25,
  delay: 0.3,
  duration: 0.3,
  opacity: 0,
  stagger: 0.15
})

const pickup = document.querySelector(".pickup")
const rewards = document.querySelector(".rewards")

pickup.addEventListener("click" , function(){
  window.location.href = "DASHBOARD/dashboard.html"
})

rewards.addEventListener("click", function(){
  window.location.href = "../REWARD/reward.html"
})