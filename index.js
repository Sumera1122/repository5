var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var shareablelinkcontainer = document.getElementById('shareable-link-container');
var shareablelinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contactNumber = document.getElementById('contactNumber').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeData = {
        name: name,
        email: email,
        contactNumber: contactNumber,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    var resumeHTML = "\n    <h2>  Editable Resume</h2>\n    <h3> Personal Information</h3>\n    <p> Name: <span contenteditable=\"true\">".concat(name, "</span></p>\n    <p> Name: <span contenteditable=\"true\">").concat(email, "</span></p>\n    <p> Name:<span contenteditable=\"true\">").concat(contactNumber, "</span></p>\n    \n    <h3> Education </h3>\n    <p contenteditable=\"true\"> Name:").concat(education, "</p>\n\n    <h3> Experience</h3>\n    <p contenteditable=\"true\"> Name:").concat(experience, "</p>\n\n    <h3> Skills</h3>\n    <p contenteditable=\"true\"> Name:").concat(skills, "</p>");
    resumeDisplayElement.innerHTML = resumeHTML;
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    shareablelinkcontainer.style.display = 'block';
    shareablelinkElement.href = shareableURL;
    shareablelinkElement.textContent = shareableURL;
});
downloadPdfButton.addEventListener('click', function () {
    window.print();
});
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('contactNumber').value = resumeData.contactNumber;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
