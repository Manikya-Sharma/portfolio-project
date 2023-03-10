// Scripts for website

// *Manikya

function projects_responsive(project_container) {
  const button_div = project_container.lastElementChild;
  for (const _class of button_div.classList) {
    if (_class.match("left")) {
      button_div.classList.remove(_class);
    }
  }
  const total_width = project_container.clientWidth;
  const button_width = button_div.clientWidth;
  const left_margin = total_width / 2 - button_width / 2;
  button_div.classList.add(`left-[${left_margin}px]`);
}
const project_containers = document.querySelectorAll(".project-container");
for (const project_container of project_containers) {
  project_container.addEventListener("mouseover", () => {
    projects_responsive(project_container);
  });
}
