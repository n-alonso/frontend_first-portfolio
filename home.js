const projectsButton = document.querySelector("#projectsButton");
const skillsButton = document.querySelector("#skillsButton");
const projectsContainer = document.querySelector("#projects");
const skillsContainer = document.querySelector("#skills");

skillsButton.addEventListener("click", () => {
    skillsButton.classList.add("active");
    skillsContainer.classList.remove("hidden");
    projectsButton.classList.remove("active");
    projectsContainer.classList.add("hidden");
});

projectsButton.addEventListener("click", () => {
    projectsButton.classList.add("active");
    projectsContainer.classList.remove("hidden");
    skillsButton.classList.remove("active");
    skillsContainer.classList.add("hidden");
});