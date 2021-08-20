
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
        if(element.classList.contains('hoverani')){ 
            element.style.animation = 'none';
            element.offsetHeight; /* trigger reflow */
            element.style.animation = null;
            element.classList.remove('hoverani');
            element.classList.add('unhoverani');
        }
        else{
            element.style.animation = 'none';
            element.offsetHeight; /* trigger reflow */
            element.style.animation = null;
            element.classList.remove("hid");
            element.classList.remove("unhoverani");
            element.classList.add('hoverani');
        }
       
    };
}