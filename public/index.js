
let iconWrappers = document.getElementsByClassName("iconWrap");
let iconTexts = document.getElementsByClassName("iconText");
let bgs = document.getElementsByClassName("iconTextBg");
for (let i in iconWrappers) {
    iconWrappers[i].onmouseenter = function () {
        let element = bgs[i];
        element.style.animation = 'none';
        element.offsetHeight; /* trigger reflow */
        element.style.animation = null;
        element.classList.remove("hid");
        element.classList.remove("unhoverani");
        element.classList.add('hoverani');
    };
    iconWrappers[i].onmouseleave = function () {
        let element = bgs[i];
        element.style.animation = 'none';
        element.offsetHeight; /* trigger reflow */
        element.style.animation = null;
        element.classList.remove('hoverani');
        element.classList.add('unhoverani');
    }


    iconWrappers[i].ontouchstart = function () {
        let element = bgs[i];
        if (element.classList.contains('hoverani')) {
            element.style.animation = 'none';
            element.offsetHeight; /* trigger reflow */
            element.style.animation = null;
            element.classList.remove('hoverani');
            element.classList.add('unhoverani');
        }
        else {
            element.style.animation = 'none';
            element.offsetHeight; /* trigger reflow */
            element.style.animation = null;
            element.classList.remove("hid");
            element.classList.remove("unhoverani");
            element.classList.add('hoverani');
        }
    };
}

let bgImg = document.getElementById("backgroundImage");
let navBar = document.getElementById("navbarWrap");
let checkDown = true;
let checkBounds = function () {
    let bottomNav = navBar.getBoundingClientRect().bottom;
    let bottom = bgImg.getBoundingClientRect().bottom;
    if (bottomNav >= bottom) {
        navBar.classList.remove('sticky');
        bgImg.style.visibility = "hidden";
        navBar.parentNode.insertBefore(bgImg, navBar);
        setTimeout(() => {
            checkDown = false;
        }, 100);
    }
}
let checkUp = function () {
    let topNav = navBar.getBoundingClientRect().top;
    let bottom = bgImg.getBoundingClientRect().bottom;
    let backUp = topNav > bottom;
    if (bottom >= 0) {
        bgImg.style.visibility = "visible";
        bgImg.parentNode.insertBefore(navBar, bgImg);
        navBar.classList.add('sticky');

        setTimeout(() => {
            checkDown = true;
        }, 500);

    }

}

let lastScrollTop = 0;
window.onscroll = function () {
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop) {
        // downscroll code
        if (checkDown) {
            checkBounds();
        }

    } else {
        // upscroll code

        if (checkDown == false) {
            checkUp();
        }
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrollingx
}

let links = document.getElementsByClassName("linksLink");
let linkTexts = document.getElementsByClassName("linkText");
let linkImgs = document.getElementsByClassName("linkImg");
for (let i in links) {
    links[i].onmouseenter = () => {
        linkImgs[i].style.animation = 'none';
        linkImgs[i].offsetHeight; /* trigger reflow */
        linkImgs[i].style.animation = null;
        linkImgs[i].classList.remove('resizeAni');
        linkImgs[i].classList.add('sizeAni');
    };

    links[i].onmouseleave = () => {
        linkImgs[i].style.animation = 'none';
        linkImgs[i].offsetHeight; /* trigger reflow */
        linkImgs[i].style.animation = null;
        linkImgs[i].classList.remove('sizeAni');
        linkImgs[i].classList.add('resizeAni');
    };
}

let copyBtn = document.getElementById("emailCopy");
let copy = function () {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", "ulawless@wisc.edu");
}
copyBtn.onmousedown = copy;
copyBtn.ontouchstart = copy;