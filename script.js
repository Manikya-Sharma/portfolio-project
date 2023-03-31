// Scripts for website

// hamburger
function openHamburger(hmb) {
  hmb.textContent = "x";
  hmb.classList.remove("closed");
  hmb.classList.add("opened");

  const containerList = document.createElement("ul");
  const sayHello = document.createElement("li");
  sayHello.classList.add(
    "hover:text-[#6e07f3]",
    "mr-6",
    "cursor-pointer",
    "text-gray-700",
    "font-sans",
    "font-medium",
    "transition-all",
    "duration-100"
  );
  sayHello.textContent = "Say Hello";
  const mentorship = document.createElement("li");
  mentorship.classList.add(
    "hover:text-[#6e07f3]",
    "mr-6",
    "cursor-pointer",
    "text-gray-700",
    "font-sans",
    "font-medium",
    "transition-all",
    "duration-100"
  );
  mentorship.textContent = "Mentorship";

  const navOptions = document.createElement("div");
  navOptions.classList.add("options");
  containerList.classList.add(
    "flex",
    "flex-col",
    "gap-3",
    "ml-auto",
    "block",
    "w-fit",
    "mr-8",
    "bg-slate-300",
    "rounded-lg",
    "pl-6",
    "py-2"
  );
  containerList.appendChild(mentorship);
  containerList.appendChild(sayHello);

  navOptions.appendChild(containerList);
  hmb.parentNode.parentNode.parentNode.appendChild(navOptions);
}
function closeHamburger(hmb) {
  hmb.textContent = "≡";
  hmb.classList.remove("opened");
  hmb.classList.add("closed");
  options = document.querySelector(".options");
  options.remove();
}
const hmb = document.querySelector(".hamburger");
hmb.addEventListener("click", () => {
  for (const _class of hmb.classList) {
    if (_class.match("closed")) {
      openHamburger(hmb);
      break;
    } else if (_class.match("opened")) {
      closeHamburger(hmb);
      break;
    }
  }
});

// responsiveness
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

function startup() {
  const startup_container = document.querySelector(".startup");
  give_bottom_margin(startup_container);
  center_absolute(startup_container);
  add_bottom_margin(startup_container);
}

about_me();
startup();
