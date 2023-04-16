// hamburger
function openHamburger(hmb) {
  hmb.textContent = "x";
  hmb.classList.remove("closed");
  hmb.classList.add("opened");

  const sayHello = document.createElement("li");
  sayHello.classList.add(
    "hover:text-[#6e07f3]",
    "font-bold",
    "cursor-pointer",
    "text-gray-800",
    "font-sans",
    "font-medium",
    "transition-all",
    "duration-100"
  );
  sayHello.addEventListener("click", () => {
    location.href = "./sign-up-code.html";
  });
  sayHello.textContent = "Say Hello";
  const mentorship = document.createElement("li");
  mentorship.classList.add(
    "hover:text-[#6e07f3]",
    "font-bold",
    "cursor-pointer",
    "text-gray-800",
    "font-sans",
    "font-medium",
    "transition-all",
    "duration-100"
  );
  mentorship.textContent = "Mentorship";
  mentorship.addEventListener("click", () => {
    location.href = "./mentorship.html";
  });

  const navOptions = document.createElement("div");
  navOptions.classList.add("options", "w-full");

  const containerList = document.createElement("ul");
  containerList.classList.add(
    "flex",
    "flex-col",
    "gap-3",
    "mx-auto",
    "mt-5",
    "py-4",
    "px-[100px]",
    "shadow-md",
    "shadow-black/30",
    "block",
    "w-fit",
    "bg-slate-300",
    "rounded-lg",
    "transition-all",
    "duration-200",
    "hover:shadow-black/50",
    "text-center"
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
const mnt_hmb = document.querySelector(".hamburger");
mnt_hmb.addEventListener("click", () => {
  for (const _class of mnt_hmb.classList) {
    if (_class.match("closed")) {
      openHamburger(mnt_hmb);
      break;
    } else if (_class.match("opened")) {
      closeHamburger(mnt_hmb);
      break;
    }
  }
});

// responsiveness
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

window.addEventListener("resize", () => {
  about_me();
});
about_me();

// testimonials

function remove_existing(container, cls) {
  for (const _class of container.classList) {
    if (_class.match(cls)) {
      container.classList.remove(_class);
    }
  }
}

function togglePointer(toggle, pt) {
  const pt1 = toggle.firstElementChild;
  const pt2 = pt1.nextElementSibling;
  const pt3 = pt2.nextElementSibling;
  const pt4 = pt3.nextElementSibling;
  const pt5 = pt4.nextElementSibling;

  if (pt1.classList.contains("pointing")) {
    remove_existing(pt1, "pointing");
    remove_existing(pt1, "bg");
    remove_existing(pt1, "border-none");
  } else if (pt2.classList.contains("pointing")) {
    remove_existing(pt2, "pointing");
    remove_existing(pt2, "bg");
    remove_existing(pt2, "border-none");
  } else if (pt3.classList.contains("pointing")) {
    remove_existing(pt3, "pointing");
    remove_existing(pt3, "bg");
    remove_existing(pt3, "border-none");
  } else if (pt4.classList.contains("pointing")) {
    remove_existing(pt4, "pointing");
    remove_existing(pt4, "bg");
    remove_existing(pt4, "border-none");
  } else {
    remove_existing(pt5, "pointing");
    remove_existing(pt5, "bg");
    remove_existing(pt5, "border-none");
  }
  if (!pt.classList.contains("pointing")) {
    pt.classList.add("pointing");
    updatePointer();
  }
}

function updatePointer() {
  const pointer = document.querySelector(".pointing");
  pointer.classList.add("bg-[#6e07f3]", "border-none");
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
    remove_existing(mnt_t1, "hidden");
    mnt_t2.classList.add("hidden");
    t3.classList.add("hidden");
    t4.classList.add("hidden");
    t5.classList.add("hidden");
  } else if (mnt_pt2.classList.contains("pointing")) {
    remove_existing(mnt_t2, "hidden");
    mnt_t1.classList.add("hidden");
    t3.classList.add("hidden");
    t4.classList.add("hidden");
    t5.classList.add("hidden");
  } else if (pt3.classList.contains("pointing")) {
    remove_existing(t3, "hidden");
    mnt_t1.classList.add("hidden");
    mnt_t2.classList.add("hidden");
    t4.classList.add("hidden");
    t5.classList.add("hidden");
  } else if (pt4.classList.contains("pointing")) {
    remove_existing(t4, "hidden");
    mnt_t1.classList.add("hidden");
    mnt_t2.classList.add("hidden");
    t3.classList.add("hidden");
    t5.classList.add("hidden");
  } else {
    remove_existing(t5, "hidden");
    mnt_t1.classList.add("hidden");
    mnt_t2.classList.add("hidden");
    t3.classList.add("hidden");
    t4.classList.add("hidden");
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
    remove_existing(mnt_t1, "hidden");
    mnt_t2.classList.add("hidden");
    t3.classList.add("hidden");
    t4.classList.add("hidden");
    t5.classList.add("hidden");
  } else if (mnt_pt2.classList.contains("pointing")) {
    remove_existing(mnt_t2, "hidden");
    mnt_t1.classList.add("hidden");
    t3.classList.add("hidden");
    t4.classList.add("hidden");
    t5.classList.add("hidden");
  } else if (pt3.classList.contains("pointing")) {
    remove_existing(t3, "hidden");
    mnt_t1.classList.add("hidden");
    mnt_t2.classList.add("hidden");
    t4.classList.add("hidden");
    t5.classList.add("hidden");
  } else if (pt4.classList.contains("pointing")) {
    remove_existing(t4, "hidden");
    mnt_t1.classList.add("hidden");
    mnt_t2.classList.add("hidden");
    t3.classList.add("hidden");
    t5.classList.add("hidden");
  } else {
    remove_existing(t5, "hidden");
    mnt_t1.classList.add("hidden");
    mnt_t2.classList.add("hidden");
    t3.classList.add("hidden");
    t4.classList.add("hidden");
  }
}, 5500);
