var scrollPosition = 0;

window.addEventListener('scroll', () => {
    if((document.body.getBoundingClientRect()).top > scrollPosition)
        document.getElementById('profile-pic').style = "filter: blur(0px);";
    else    document.getElementById('profile-pic').style = "filter: blur(3px);";

    scrollPosition = (document.body.getBoundingClientRect()).top;
});

