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

window.addEventListener("resize", () => {
  about_me();
});
about_me();

// testimonials

function togglePointer(toggle, pt) {
  const pt1 = toggle.firstElementChild;
  const pt2 = pt1.nextElementSibling;
  const pt3 = pt2.nextElementSibling;
  const pt4 = pt3.nextElementSibling;
  const pt5 = pt4.nextElementSibling;

  if (pt1.classList.contains("pointing")) {
    remove_existing(pt1, "pointing");
    pt1.style.border = "solid";
    pt1.style.background = "white";
    pt1.style.borderWidth = "2px";
    pt1.style.borderColor = "rgb(0,0,0)";
  } else if (pt2.classList.contains("pointing")) {
    remove_existing(pt2, "pointing");
    pt2.style.border = "solid";
    pt2.style.background = "white";
    pt2.style.borderWidth = "2px";
    pt2.style.borderColor = "rgb(0,0,0)";
  } else if (pt3.classList.contains("pointing")) {
    remove_existing(pt3, "pointing");
    pt3.style.border = "solid";
    pt3.style.background = "white";
    pt3.style.borderWidth = "2px";
    pt3.style.borderColor = "rgb(0,0,0)";
  } else if (pt4.classList.contains("pointing")) {
    remove_existing(pt4, "pointing");
    pt4.style.border = "solid";
    pt4.style.background = "white";
    pt4.style.borderWidth = "2px";
    pt4.style.borderColor = "rgb(0,0,0)";
  } else {
    remove_existing(pt5, "pointing");
    pt5.style.border = "solid";
    pt5.style.background = "white";
    pt5.style.borderWidth = "2px";
    pt5.style.borderColor = "rgb(0,0,0)";
  }
  if (!pt.classList.contains("pointing")) {
    pt.classList.add("pointing");
    updatePointer();
  }
}

function updatePointer() {
  const pointer = document.querySelector(".pointing");
  pointer.style.background = "#6e07f3";
  pointer.style.border = "none";
}

const mnt_toggle = document.querySelector(".slider");
const mnt_pt1 = mnt_toggle.firstElementChild;
const mnt_pt2 = mnt_pt1.nextElementSibling;
const pt3 = mnt_pt2.nextElementSibling;
const pt4 = pt3.nextElementSibling;
const pt5 = pt4.nextElementSibling;

mnt_pt1.addEventListener("click", (e) => {
  togglePointer(mnt_toggle, e.target);
});
mnt_pt2.addEventListener("click", (e) => {
  togglePointer(mnt_toggle, e.target);
});
pt3.addEventListener("click", (e) => {
  togglePointer(mnt_toggle, e.target);
});
pt4.addEventListener("click", (e) => {
  togglePointer(mnt_toggle, e.target);
});
pt5.addEventListener("click", (e) => {
  togglePointer(mnt_toggle, e.target);
});

updatePointer();

const mnt_t1 = document.querySelector(".parent-mentorship").firstElementChild;
const mnt_t2 = mnt_t1.nextElementSibling;
const t3 = mnt_t2.nextElementSibling;
const t4 = t3.nextElementSibling;
const t5 = t4.nextElementSibling;

mnt_toggle.addEventListener("click", () => {
  if (mnt_pt1.classList.contains("pointing")) {
    mnt_t1.style.display = "block";
    mnt_t2.style.display = "none";
    t3.style.display = "none";
    t4.style.display = "none";
    t5.style.display = "none";
  } else if (mnt_pt2.classList.contains("pointing")) {
    mnt_t2.style.display = "block";
    mnt_t1.style.display = "none";
    t3.style.display = "none";
    t4.style.display = "none";
    t5.style.display = "none";
  } else if (pt3.classList.contains("pointing")) {
    t3.style.display = "block";
    mnt_t1.style.display = "none";
    mnt_t2.style.display = "none";
    t4.style.display = "none";
    t5.style.display = "none";
  } else if (pt4.classList.contains("pointing")) {
    t4.style.display = "block";
    mnt_t1.style.display = "none";
    mnt_t2.style.display = "none";
    t3.style.display = "none";
    t5.style.display = "none";
  } else {
    t5.style.display = "block";
    mnt_t1.style.display = "none";
    mnt_t2.style.display = "none";
    t3.style.display = "none";
    t4.style.display = "none";
  }
});

setInterval(() => {
  if (mnt_pt1.classList.contains("pointing")) {
    togglePointer(mnt_toggle, mnt_pt2);
  } else if (mnt_pt2.classList.contains("pointing")) {
    togglePointer(mnt_toggle, pt3);
  } else if (pt3.classList.contains("pointing")) {
    togglePointer(mnt_toggle, pt4);
  } else if (pt4.classList.contains("pointing")) {
    togglePointer(mnt_toggle, pt5);
  } else {
    togglePointer(mnt_toggle, mnt_pt1);
  }
  if (mnt_pt1.classList.contains("pointing")) {
    mnt_t1.style.display = "block";
    mnt_t2.style.display = "none";
    t3.style.display = "none";
    t4.style.display = "none";
    t5.style.display = "none";
  } else if (mnt_pt2.classList.contains("pointing")) {
    mnt_t2.style.display = "block";
    mnt_t1.style.display = "none";
    t3.style.display = "none";
    t4.style.display = "none";
    t5.style.display = "none";
  } else if (pt3.classList.contains("pointing")) {
    t3.style.display = "block";
    mnt_t1.style.display = "none";
    mnt_t2.style.display = "none";
    t4.style.display = "none";
    t5.style.display = "none";
  } else if (pt4.classList.contains("pointing")) {
    t4.style.display = "block";
    mnt_t1.style.display = "none";
    mnt_t2.style.display = "none";
    t3.style.display = "none";
    t5.style.display = "none";
  } else {
    t5.style.display = "block";
    mnt_t1.style.display = "none";
    mnt_t2.style.display = "none";
    t3.style.display = "none";
    t4.style.display = "none";
  }
}, 5500);

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

// NavBar
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollPos = window.scrollY;
window.onscroll = function () {
  const navBar = document.getElementsByTagName("nav")[0];
  const currentScrollPos = window.scrollY;
  // background change
  if (currentScrollPos > 200) {
    navBar.style.backgroundColor = "rgba(255,255,255,0.4)";
    // navBar.style.backgroundColor = "black"
  } else {
    navBar.style.backgroundColor = "unset";
  }
  // scroll again
  if (prevScrollPos > currentScrollPos) {
    navBar.style.top = "0";
  } else {
    navBar.style.top = "-300px";
  }
  prevScrollPos = currentScrollPos;
};
