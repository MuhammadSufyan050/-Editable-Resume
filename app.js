var form = document.getElementById('resumeForm');
var resumeOutput = document.getElementById('resumeOutput');
var editButton = document.getElementById('editButton');
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('educationTextarea');
    var experienceElement = document.getElementById('experienceTextarea');
    var skillElement = document.getElementById('skill');
    var profilePictureElement = document.getElementById('profile-picture');
    if (!nameElement || !emailElement || !phoneElement || !educationElement || !experienceElement || !skillElement || !profilePictureElement) {
        console.error('One or more form elements not found.');
        return;
    }
    var name = nameElement.value || 'Not provided';
    var email = emailElement.value || 'Not provided';
    var phone = phoneElement.value || 'Not provided';
    var education = educationElement.value || 'Not provided';
    var experience = experienceElement.value || 'Not provided';
    var skills = skillElement.value || 'Not provided';
    var profilePicture = (_a = profilePictureElement.files) === null || _a === void 0 ? void 0 : _a[0];
    console.log('Form Values:', {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills,
        profilePicture: profilePicture
    });
    var resumeContent = "\n        <h2>Resume</h2>\n        <h3>Personal Information</h3>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n    ");
    if (profilePicture) {
        var reader_1 = new FileReader();
        reader_1.onload = function () {
            resumeContent = "\n                <h2>Resume</h2>\n                <img src=\"".concat(reader_1.result, "\" alt=\"Profile Picture\" class=\"profile-picture\" />\n                <h3>Personal Information</h3>\n                <p><strong>Name:</strong> ").concat(name, "</p>\n                <p><strong>Email:</strong> ").concat(email, "</p>\n                <p><strong>Phone:</strong> ").concat(phone, "</p>\n                <h3>Education</h3>\n                <p>").concat(education, "</p>\n                <h3>Experience</h3>\n                <p>").concat(experience, "</p>\n                <h3>Skills</h3>\n                <p>").concat(skills, "</p>\n            ");
            resumeOutput.innerHTML = resumeContent;
        };
        reader_1.onerror = function () {
            console.error('Error reading file.');
        };
        reader_1.readAsDataURL(profilePicture);
    }
    else {
        resumeOutput.innerHTML = resumeContent;
    }
    resumeOutput.style.display = 'block';
    form.style.display = 'none';
    editButton.style.display = 'block';
});
editButton.addEventListener('click', function () {
    resumeOutput.style.display = 'none';
    form.style.display = 'block';
    editButton.style.display = 'none';
});
