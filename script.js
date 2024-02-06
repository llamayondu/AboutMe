
function showOverlay(section) {

    var aboutContent = document.getElementById('about-content');
    var profilePicture = document.getElementById('profile-picture');

    document.getElementById('overlay-title').innerHTML = section;
    switch (section) {
        case 'Education':
            document.getElementById('overlay-text').innerHTML = 'Nursery to Pre-primary - DPS, Secunderabad<br>1st grade to 10th grade - DPS, Hyderabad<br>11th to 12th - FIITJEE, Madhapur<br>Undergraduate Program - IIIT, Hyderabad, CSE';
            break;
        case 'Achievements':
            document.getElementById('overlay-text').innerHTML = 'I got 9.28 SGPA in the first sem.<br>I got a rank of 51 in UGEE.<br>I got a rank of 7500 in JEE Mains.';
            break;
        case 'Skills':
            document.getElementById('overlay-text').innerHTML = 'I am smart.<br>I can play the drums.<br>I am good at Valorant.';
            break;
        case 'About':
            document.getElementById('overlay-text').innerHTML = 'I am Prabhas Varma. I like math and Valorant. <br>I have lived in Hyderabad all my life and hence I also love Biryani.<br><br> I am approximately 5 feet and 10 inches tall. <br>I like food and games a lot.<br>Also, I like ducks ';
            break;
    }
    document.getElementById('overlay').style.display = 'flex';
}

function downloadResume() {
    fetch('resume.pdf')
        .then(response => response.blob())
        .then(blob => {
            var a = document.createElement('a');
            var url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = 'resume.pdf';

            document.body.appendChild(a);
            a.click();

            document.body.removeChild(a);

            window.URL.revokeObjectURL(url);
        })
        .catch(error => console.error('Error downloading resume:', error));
}

document.addEventListener("DOMContentLoaded", function (){

    var icon = document.getElementById("icon");
    var github_icon = document.getElementById("github-icon"); 
    var insta_icon = document.getElementById("insta-icon"); 
    var mail_icon = document.getElementById("mail-icon");

    console.log(icon);

    icon.onclick = function () {
        document.body.classList.toggle("light-theme");

        if (document.body.classList.contains("light-theme")) {
            icon.src = "moon.png";
            github_icon.src = "github-black.png";
            insta_icon.src = "insta-black.png";
            mail_icon.src = "mail-black.png";
            document.documentElement.style.setProperty('--background-image', 'url(light-bg.jpg)');
        } else {
            icon.src = "sun.png";
            github_icon.src = "github-white.png";
            insta_icon.src = "insta-white.png";
            mail_icon.src = "mail-white.png";
            document.documentElement.style.setProperty('--background-image', 'url(dark-bg.jpg)');
        }
    }

    function hideOverlay() {
        document.getElementById('overlay').style.display = 'none';
    }

    document.getElementById("blog-button").addEventListener("click", function () {
        var url = 'blog.html';
        window.open(url, '_blank');
    })
});
