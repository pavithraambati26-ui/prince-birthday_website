

// 1. Start the birthday journey

function startJourney() {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
}


// 2. Background music controls

const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

musicButton.addEventListener("click", function () {

    if (music.paused) {
        music.play()
            .then(() => {
                musicButton.innerHTML = "♫ Pause Music";
            })
            .catch(() => {
                musicButton.innerHTML = "♫ Try Again";
            });

    } else {
        music.pause();
        musicButton.innerHTML = "♫ Play Music";
    }

});


// 3. Scroll reveal animation

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.12
});

sections.forEach((section) => {
    observer.observe(section);
});


// 4. Golden floating particles

function createParticle() {

    const particle = document.createElement("span");

    particle.classList.add("gold-particle");

    particle.style.left = Math.random() * 100 + "vw";

    particle.style.animationDuration =
        (Math.random() * 5 + 5) + "s";

    particle.style.opacity = Math.random();

    particle.style.width =
        particle.style.height =
        (Math.random() * 4 + 2) + "px";

    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 10000);

}

setInterval(createParticle, 500);


// 5. Photo hover effect

const photos = document.querySelectorAll(".photo-gallery img");

photos.forEach((photo) => {

    photo.addEventListener("click", function () {

        photo.classList.toggle("photo-selected");

    });

});


// 6. Welcome message in browser console

console.log("A special birthday tribute for Prince!");
console.log("Beyond What You See - Made with good wishes.");
