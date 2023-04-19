// Scripts for website

// hamburger
function openHamburger(hmb) {
  hmb.textContent = "x";
  hmb.classList.remove("closed");
  hmb.classList.add("opened");

  const sayHello = document.createElement("li");
  sayHello.addEventListener("mouseover", () => {
    sayHello.style.color = "rgb(110, 7, 243)";
  });
  sayHello.addEventListener("mouseout", () => {
    sayHello.style.color = "rgb(31,41,55)";
  });
  sayHello.style.cursor = "pointer";
  sayHello.style.color = "rgb(31,41,55)";
  sayHello.style.fontWeight = "500";
  sayHello.style.fontStyle = "font-sans";
  sayHello.style.transitionProperty = "all";
  sayHello.style.transitionTimingFunction = "cubic-bezier(0.4, 0, 0.2, 1)";
  sayHello.style.transitionDuration = "100ms";
  sayHello.textContent = "Say Hello";
  sayHello.addEventListener("click", () => {
    location.href = "./sign-up-code.html";
  });
  const mentorship = document.createElement("li");
  mentorship.addEventListener("mouseover", () => {
    mentorship.style.color = "rgb(110, 7, 243)";
  });
  mentorship.addEventListener("mouseout", () => {
    mentorship.style.color = "rgb(31,41,55)";
  });
  mentorship.style.cursor = "pointer";
  mentorship.style.color = "rgb(31,41,55)";
  mentorship.style.fontWeight = "500";
  mentorship.style.fontStyle = "font-sans";
  mentorship.style.transitionProperty = "all";
  mentorship.style.transitionTimingFunction = "cubic-bezier(0.4, 0, 0.2, 1)";
  mentorship.style.transitionDuration = "100ms";
  mentorship.textContent = "Mentorship";
  mentorship.addEventListener("click", () => {
    location.href = "./mentorship.html";
  });

  const navOptions = document.createElement("div");
  navOptions.classList.add("options");
  navOptions.style.width = "100%";

  const containerList = document.createElement("ul");
  containerList.style.margin = "0 auto";
  containerList.style.marginTop = "1.25rem";
  containerList.style.padding = "10px 1rem";
  containerList.style.width = "80%";
  containerList.style.height = "fit-content";
  containerList.style.display = "flex";
  containerList.style.flexDirection = "column";
  containerList.style.gap = "0.75rem";
  containerList.style.background = "rgb(203 213 225)";
  containerList.style.borderRadius = "0.5rem";
  containerList.style.transitionProperty = "all";
  containerList.style.transitionTimingFunction = "cubic-bezier(0.4, 0, 0.2, 1)";
  containerList.style.transitionDuration = "200ms";
  containerList.style.textAlign = "center";
  containerList.style.boxShadow = "7px 10px 2px #888888";
  containerList.addEventListener("mouseover", () => {
    containerList.style.boxShadow = "7px 10px 2px #555555";
  });
  containerList.addEventListener("mouseout", () => {
    containerList.style.boxShadow = "7px 10px 2px #888888";
  });
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
  const total_width = project_container.clientWidth;
  const button_width = button_div.clientWidth;
  const left_margin = total_width / 2 - button_width / 2;
  button_div.style.marginLeft = `${left_margin}px`;
}
const project_containers = document.querySelectorAll(".project-container");
for (const project_container of project_containers) {
  project_container.addEventListener("mouseover", () => {
    projects_responsive(project_container);
  });
}

function give_bottom_margin(container) {
  // to absolute div
  const parent_height = container.parentNode.clientHeight;
  const required_height = parent_height - 100;
  container.style.top = `${required_height}px`;
}
function center_absolute(container) {
  const parent_width = container.parentNode.clientWidth;
  const self_width = container.clientWidth;
  container.style.left = `${(parent_width - self_width) / 2}px`;
}
function add_bottom_margin(container) {
  // to relative div
  const parent = container.parentNode;
  bottom_length = container.clientHeight;
  parent.style.marginBottom = `${bottom_length}px`;
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

window.addEventListener("resize", () => {
  about_me();
  startup();
});
about_me();
startup();

function togglePointer(toggle, pt) {
  const pt1 = toggle.firstElementChild;
  const pt2 = toggle.lastElementChild;
  if (pt1.classList.contains("pointing")) {
    remove_existing(pt1, "pointing");
    pt1.style.background = "white";
    pt1.style.border = "solid";
    pt1.style.borderWidth = "2px";
    pt1.style.borderColor = "rgb(0,0,0)";
  } else {
    remove_existing(pt2, "pointing");
    pt2.style.background = "white";
    pt2.style.border = "solid";
    pt2.style.borderWidth = "2px";
    pt2.style.borderColor = "rgb(0,0,0)";
  }
  if (!pt.classList.contains("pointing")) {
    pt.classList.add("pointing");
    updatePointer();
  }
}

function updatePointer() {
  const pointer = document.querySelector(".pointing");
  pointer.style.background = "#6e07f3";
  pointer.style.borderStyle = "none";
}

const toggle = document.querySelector(".slider");
const pt1 = toggle.firstElementChild;
const pt2 = toggle.lastElementChild;

pt1.addEventListener("click", (e) => {
  togglePointer(toggle, e.target);
});
pt2.addEventListener("click", (e) => {
  togglePointer(toggle, e.target);
});

updatePointer();

const t1 = document.querySelector(".parent-testimonials").firstElementChild;
const t2 = document.querySelector(".parent-testimonials").lastElementChild;

toggle.addEventListener("click", () => {
  if (pt1.classList.contains("pointing")) {
    t1.style.display = "block";
    t2.style.display = "none";
  } else {
    t2.style.display = "block";
    t1.style.display = "none";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth < "768") {
    setInterval(() => {
      if (pt1.classList.contains("pointing")) {
        togglePointer(toggle, pt2);
      } else {
        togglePointer(toggle, pt1);
      }
      if (pt1.classList.contains("pointing")) {
        t1.style.display = "block";
        t2.style.display = "none";
      } else {
        t2.style.display = "block";
        t1.style.display = "none";
      }
    }, 5500);
  } else {
    setInterval(() => {
      t1.style.display = "block";
      t2.style.display = "block";
    }, 100);
    t1.style.display = "block";
    t2.style.display = "block";
  }
  // small glitch if sized to small screen then again large but quite irrelevant in most cases
});
