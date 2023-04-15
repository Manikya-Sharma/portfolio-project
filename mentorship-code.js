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

const toggle = document.querySelector(".slider");
const pt1 = toggle.firstElementChild;
const pt2 = pt1.nextElementSibling;
const pt3 = pt2.nextElementSibling;
const pt4 = pt3.nextElementSibling;
const pt5 = pt4.nextElementSibling;

pt1.addEventListener("click", (e) => {
  togglePointer(toggle, e.target);
});
pt2.addEventListener("click", (e) => {
  togglePointer(toggle, e.target);
});
pt3.addEventListener("click", (e) => {
  togglePointer(toggle, e.target);
});
pt4.addEventListener("click", (e) => {
  togglePointer(toggle, e.target);
});
pt5.addEventListener("click", (e) => {
  togglePointer(toggle, e.target);
});

updatePointer();

const t1 = document.querySelector(".parent-testimonials").firstElementChild;
const t2 = t1.nextElementSibling;
const t3 = t2.nextElementSibling;
const t4 = t3.nextElementSibling;
const t5 = t4.nextElementSibling;

toggle.addEventListener("click", () => {
  if (pt1.classList.contains("pointing")) {
    remove_existing(t1, "hidden");
    t2.classList.add("hidden");
    t3.classList.add("hidden");
    t4.classList.add("hidden");
    t5.classList.add("hidden");
  } else if (pt2.classList.contains("pointing")) {
    remove_existing(t2, "hidden");
    t1.classList.add("hidden");
    t3.classList.add("hidden");
    t4.classList.add("hidden");
    t5.classList.add("hidden");
  } else if (pt3.classList.contains("pointing")) {
    remove_existing(t3, "hidden");
    t1.classList.add("hidden");
    t2.classList.add("hidden");
    t4.classList.add("hidden");
    t5.classList.add("hidden");
  } else if (pt4.classList.contains("pointing")) {
    remove_existing(t4, "hidden");
    t1.classList.add("hidden");
    t2.classList.add("hidden");
    t3.classList.add("hidden");
    t5.classList.add("hidden");
  } else {
    remove_existing(t5, "hidden");
    t1.classList.add("hidden");
    t2.classList.add("hidden");
    t3.classList.add("hidden");
    t4.classList.add("hidden");
  }
});

setInterval(() => {
  if (pt1.classList.contains("pointing")) {
    togglePointer(toggle, pt2);
  } else if (pt2.classList.contains("pointing")) {
    togglePointer(toggle, pt3);
  } else if (pt3.classList.contains("pointing")) {
    togglePointer(toggle, pt4);
  } else if (pt3.classList.contains("pointing")) {
    togglePointer(toggle, pt5);
  } else {
    togglePointer(toggle, pt1);
  }
  if (pt1.classList.contains("pointing")) {
    remove_existing(t1, "hidden");
    t2.classList.add("hidden");
    t3.classList.add("hidden");
    t4.classList.add("hidden");
    t5.classList.add("hidden");
  } else if (pt2.classList.contains("pointing")) {
    remove_existing(t2, "hidden");
    t1.classList.add("hidden");
    t3.classList.add("hidden");
    t4.classList.add("hidden");
    t5.classList.add("hidden");
  } else if (pt3.classList.contains("pointing")) {
    remove_existing(t3, "hidden");
    t1.classList.add("hidden");
    t2.classList.add("hidden");
    t4.classList.add("hidden");
    t5.classList.add("hidden");
  } else if (pt4.classList.contains("pointing")) {
    remove_existing(t4, "hidden");
    t1.classList.add("hidden");
    t2.classList.add("hidden");
    t3.classList.add("hidden");
    t5.classList.add("hidden");
  } else {
    remove_existing(t5, "hidden");
    t1.classList.add("hidden");
    t2.classList.add("hidden");
    t3.classList.add("hidden");
    t4.classList.add("hidden");
  }
}, 3500);
