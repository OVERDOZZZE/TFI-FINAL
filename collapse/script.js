const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})












// Andrei gay
































































// document.getElementById("faqToggle1").addEventListener("click", playAudio);
document.getElementById("faqToggle2").addEventListener("click", playAudio);

function playAudio() {
  var audio = document.getElementById("myAudio");
  audio.play();
}