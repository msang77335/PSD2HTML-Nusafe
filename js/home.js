const header = document.querySelector(".header");

const bars = document.querySelector(".header__bars");

const menu = document.querySelector(".menu");

window.addEventListener("load", function () {
  function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
      if ((el.style.opacity -= 0.05) < 0) {
        el.style.display = "none";
      } else {
        requestAnimationFrame(fade);
      }
    })();
  }
  const loader = document.querySelector(".loader-bg");
  fadeOut(loader);
});

bars.addEventListener("click", function () {
  if (menu.style.maxHeight == 0 || menu.style.maxHeight == "0px") {
    header.classList.add("open");
    menu.style.maxHeight = menu.scrollHeight + "px";
  } else {
    header.classList.remove("open");
    menu.style.maxHeight = "0";
  }
});

//Active Button Scroll Top
const btnScrollTop = document.querySelector(".scroll-top");
btnScrollTop.addEventListener("click", function () {
  smoothScroll(1000);
});
//function smoothScroll(target, duration)
function smoothScroll(duration) {
  //var target = document.querySelector(target);
  //const targetPosition = target.getBoundingClientRect().top;
  const targetPosition = 0;
  let startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    btnScrollTop.classList.add("show");
  } else {
    btnScrollTop.classList.remove("show");
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 800) {
    menu.style.maxHeight = menu.scrollHeight + "px";
  } else {
    header.classList.remove("open");
    menu.style.maxHeight = "0";
  }
});

//Play Video
const btnPlay = document.querySelector(".btn-play");
const btnCloseVideo = document.querySelector(".trailer__close");
const trailer = document.querySelector(".trailer");
const trailerVideo = document.querySelector(".trailer__video");

btnPlay.addEventListener("click", function () {
  trailer.classList.add("show");
  trailerVideo.play();
});

btnCloseVideo.addEventListener("click", function () {
  trailer.classList.remove("show");
  trailerVideo.pause();
  trailerVideo.currentTime = 0;
});

//Causes__item Counter percent
const counters = document.querySelectorAll(".causes__item-percent");

let options = {
  root: null,
  rootMargin: "0px 0px -50px 0px",
};

try {
  const coutersSectionObsever = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        runCounter(entry.target);
      }
    });
  }, options);

  function runCounter(counter) {
    counter.innerText = 0;

    let target = +counter.dataset.count;

    let step = target / 1000;

    let countIt = function () {
      let displayedCount = +counter.innerText;
      if (displayedCount < target) {
        counter.innerText = Math.ceil(displayedCount + step);
        setTimeout(countIt, 1);
      } else {
        counter.innerText = target;
        coutersSectionObsever.unobserve(counter);
      }
    };
    countIt();
  }

  function runCounters() {
    counters.forEach((counter) => {
      coutersSectionObsever.observe(counter);
    });
  }

  runCounters();
} catch (error) {}

//Causes__item load status
const processes = document.querySelectorAll(".causes__item-process");

function loadProcess() {
  processes.forEach((process) => {
    let children = process.children;
    let processValue = +process.dataset.process;
    children[0].style.width = processValue + "%";
    children[1].style.left = `calc(${processValue}% - 1rem)`;
  });
}

function resetProcess() {
  let children = process.children;
  children[0].style.width = "0%";
  children[1].style.left = "0%";
}

try {
  const processSectionObsever = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        runProcess(entry.target);
      }
    });
  }, options);

  function runProcess(process) {
    let children = process.children;
    let processValue = +process.dataset.process;
    children[0].style.width = processValue + "%";
    children[1].style.left = `calc(${processValue}% - 1rem)`;
    processSectionObsever.unobserve(process);
  }

  function runProcesses() {
    processes.forEach((process) => {
      processSectionObsever.observe(process);
    });
  }

  runProcesses();
} catch (error) {
  loadProcess();
}
