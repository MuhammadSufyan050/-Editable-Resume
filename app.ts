// Get form elements
const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
const editButton = document.getElementById('editButton') as HTMLButtonElement;

// Event listener for form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // Get form values
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('educationTextarea') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experienceTextarea') as HTMLTextAreaElement;
    const skillElement = document.getElementById('skill') as HTMLInputElement;
    const profilePictureElement = document.getElementById('profile-picture') as HTMLInputElement;

    // Check if elements are found
    if (!nameElement || !emailElement || !phoneElement || !educationElement || !experienceElement || !skillElement || !profilePictureElement) {
        console.error('One or more form elements not found.');
        return;
    }

    // Get values with default empty string for undefined
    const name = nameElement.value || 'Not provided';
    const email = emailElement.value || 'Not provided';
    const phone = phoneElement.value || 'Not provided';
    const education = educationElement.value || 'Not provided';
    const experience = experienceElement.value || 'Not provided';
    const skills = skillElement.value || 'Not provided';
    const profilePicture = profilePictureElement.files?.[0];

    // Debug output
    console.log('Form Values:', {
        name,
        email,
        phone,
        education,
        experience,
        skills,
        profilePicture
    });

    // Create resume content
    let resumeContent = `
        <h2>Resume</h2>
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    // Handle profile picture
    if (profilePicture) {
        const reader = new FileReader();
        reader.onload = () => {
            resumeContent = `
                <h2>Resume</h2>
                <img src="${reader.result}" alt="Profile Picture" class="profile-picture" />
                <h3>Personal Information</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <h3>Education</h3>
                <p>${education}</p>
                <h3>Experience</h3>
                <p>${experience}</p>
                <h3>Skills</h3>
                <p>${skills}</p>
            `;
            resumeOutput.innerHTML = resumeContent;
        };
        reader.onerror = () => {
            console.error('Error reading file.');
        };
        reader.readAsDataURL(profilePicture);
    } else {
        resumeOutput.innerHTML = resumeContent;
    }

    // Show the output and hide the form
    resumeOutput.style.display = 'block';
    form.style.display = 'none';
    editButton.style.display = 'block';
});

// Event listener for edit button
editButton.addEventListener('click', () => {
    // Show the form and hide the output
    resumeOutput.style.display = 'none';
    form.style.display = 'block';
    editButton.style.display = 'none';
});
