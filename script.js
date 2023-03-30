// Scripts for website

function remove_existing(container, cls) {
  for (const _class of container.classList) {
    if (_class.match(cls)) {
      container.classList.remove(_class);
    }
  }
}

function projects_responsive(project_container) {
  const button_div = project_container.lastElementChild;
  remove_existing(button_div, "left");
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

function give_bottom_margin(container) {
  // to absolute div
  remove_existing(container, "top");
  const parent_height = container.parentNode.clientHeight;
  const required_height = parent_height - 100;
  container.classList.add(`top-[${required_height}px]`);
}
function center_absolute(container) {
  remove_existing(container, "left");
  const parent_width = container.parentNode.clientWidth;
  const self_width = container.clientWidth;
  container.classList.add(`left-[${(parent_width - self_width) / 2}px]`);
}
function add_bottom_margin(container) {
  // to relative div
  const parent = container.parentNode;
  remove_existing(parent, "mb");
  bottom_length = container.clientHeight;
  parent.classList.add(`mb-[${bottom_length}px]`);
}

function about_me() {
  const about_container = document.querySelector(".about-me");
  give_bottom_margin(about_container);
  center_absolute(about_container);
  add_bottom_margin(about_container);
}
about_me();

