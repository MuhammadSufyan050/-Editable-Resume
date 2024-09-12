
const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
const editButton = document.getElementById('editButton') as HTMLButtonElement;


form.addEventListener('submit', (event: Event) => {
    event.preventDefault();


    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('educationTextarea') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experienceTextarea') as HTMLTextAreaElement;
    const skillElement = document.getElementById('skill') as HTMLInputElement;
    const profilePictureElement = document.getElementById('profile-picture') as HTMLInputElement;


    if (!nameElement || !emailElement || !phoneElement || !educationElement || !experienceElement || !skillElement || !profilePictureElement) {
        console.error('One or more form elements not found.');
        return;
    }

    const name = nameElement.value || 'Not provided';
    const email = emailElement.value || 'Not provided';
    const phone = phoneElement.value || 'Not provided';
    const education = educationElement.value || 'Not provided';
    const experience = experienceElement.value || 'Not provided';
    const skills = skillElement.value || 'Not provided';
    const profilePicture = profilePictureElement.files?.[0];


    console.log('Form Values:', {
        name,
        email,
        phone,
        education,
        experience,
        skills,
        profilePicture
    });

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


    resumeOutput.style.display = 'block';
    form.style.display = 'none';
    editButton.style.display = 'block';
});


editButton.addEventListener('click', () => {

    resumeOutput.style.display = 'none';
    form.style.display = 'block';
    editButton.style.display = 'none';
});
