
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
            document.getElementById('overlay-text').innerHTML = 'I am Prabhas Varma. I like math and Valorant. <br>I have lived in Hyderabad all my life and hence I also love Biryani.<br><br> I am approximately 5 feet and 10 inches tall. <br>I like food and games a lot. ';
            break;
    }
    document.getElementById('overlay').style.display = 'flex';
}

function downloadResume() {
    // Create a blob from the resume file
    fetch('resume.pdf')
        .then(response => response.blob())
        .then(blob => {
            // Create an anchor element and set the necessary attributes for downloading
            var a = document.createElement('a');
            var url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = 'resume.pdf';

            // Append the anchor to the body and trigger a click event
            document.body.appendChild(a);
            a.click();

            // Remove the anchor from the body
            document.body.removeChild(a);

            // Release the URL object
            window.URL.revokeObjectURL(url);
        })
        .catch(error => console.error('Error downloading resume:', error));
}

document.addEventListener("DOMContentLoaded", function (){

    var icon = document.getElementById("icon");
    var github_icon = document.getElementById("github-icon"); 
    var insta_icon = document.getElementById("insta-icon"); 

    console.log(icon);

    icon.onclick = function(){
        document.body.classList.toggle("light-theme");
        if(document.body.classList.contains("light-theme")){
            icon.src="moon.png";
            github_icon.src="github-black.png";
            insta_icon.src="insta-black.png";

        } else {
            icon.src="sun.png";
            github_icon.src="github-white.png";
            insta_icon.src="insta-white.png";
        }
    }

    function hideOverlay() {
        // Hide the overlay by changing its display property back to 'none'
        document.getElementById('overlay').style.display = 'none';
    }

    document.getElementById("blog-button").addEventListener("click", function () {
        var url = 'blog.html';
        window.open(url, '_blank');
    })
});
