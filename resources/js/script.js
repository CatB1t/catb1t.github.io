document.addEventListener('DOMContentLoaded', function() {
  fetch('projects.json')
    .then(response => response.json())
    .then(data => {
      const projectsContainer = document.getElementById('projects-container');
      data.forEach(project => {
        const projectElement = document.createElement('div');
        image_path = project.image;
        if (image_path == "") {
          image_path = "/static/projects/placeholder.png";
        }
        projectElement.innerHTML = `
          <div class="project">
            <img src="${image_path}" alt="Logo">
            <div class="project-text">
              <div class="project-header">
                <div class="project-name">${project.title}</div>
                <div class="project-tech">${project.tech}</div>
              </div>
              <div class="project-links">
                <a href="${project.link}" target="_blank">[GITHUB]</a>
              </div>
              <div class="project-desc"><p>${project.description}</p></div>
            </div>
          </div>
        `;
        projectsContainer.appendChild(projectElement);
      });
    });
});
