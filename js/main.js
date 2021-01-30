
// blur profle pic on scrolling down
let scrollPosition = 0;

window.addEventListener('scroll', () => {
    if ((document.body.getBoundingClientRect()).top > scrollPosition)
        document.getElementById('profile-pic').style = "filter: blur(0px);";
    else document.getElementById('profile-pic').style = "filter: blur(3px);";

    scrollPosition = (document.body.getBoundingClientRect()).top;
});

// rotate profile pic
window.addEventListener('load', () => {
    let pic = document.getElementById('profile-pic');
    pic.style = "transform: rotate(360deg);";
});

// show "about me" text and call changeRocketPosition method
let showAboutText = () => {
    rocketPosition = !rocketPosition;
    changeRocketPosition();

    document.getElementById('about-hoobies-text').innerHTML = `
    <p class="about-and-working-text">⭐ I live in Prishtina.</p>
    <p class="about-and-working-text">🔥 Eager to learn new technologies.</p>
    <p class="about-and-working-text">🅰️ I find myself mostly working with: C#, Angular and SQL.</p>
    <p class="about-and-working-text">☎️ For my contact info, click on my profile pic!</p>
    `;
};

// show "working on" text and call changeRocketPosition method
let showWorkingText = () => {
    rocketPosition = !rocketPosition;
    changeRocketPosition();

    document.getElementById('about-hoobies-text').innerHTML = `
    <p class="about-and-working-text">🔭 I’m currently working on my github projects.</p>
    <p class="about-and-working-text">🌱 I’ve a strong sense of curiosity about new technologies.</p>
    <p class="about-and-working-text">📫 I'm open for new opportunities.</p>
    `;
};

// rotate rocket
var rocketPosition = true; // if is true, rocket position is 0degree, else is 180degree

let changeRocketPosition = () => {
    let rocket = document.getElementById('animated-rocket');

    if (rocketPosition) rocket.style = "transform: rotate(0deg);";
    else rocket.style = "transform: rotate(180deg);";
}