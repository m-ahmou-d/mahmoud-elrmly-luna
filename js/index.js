// ---------- FOOTER ----------
const body = document.body;

// Creating and appending a <footer>
const footer = document.createElement('footer');
body.appendChild(footer);

// Grabing the current year dynamically
const today = new Date();
const thisYear = today.getFullYear();

// Creating a <p> for the copyright text
const copyright = document.createElement('p');
// Stretch goal: ©  :D
copyright.innerHTML = `&copy; Mahmoud Elrmly ${thisYear}`;

// Put this in the fotter
footer.appendChild(copyright);

// ---------- SKILLS ----------
const skills = ["JavaScript", "HTML", "CSS", "Git", "GitHub"];

// Selecting the skills section and its <ul>
const skillsSection = document.querySelector('#Skills');
const skillsList = skillsSection.querySelector('ul');

// Looping through skills and add <li> for each
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement('li');
  skill.textContent = skills[i];
  skillsList.appendChild(skill);
}
