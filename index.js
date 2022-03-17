// JS FILE

// Variable Declaration
const nav = document.getElementById("navBar");
const ham = document.getElementById("ham");
const menu = document.getElementById("menu");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const imgOne = document.getElementById("carOneImg");
const imgTwo = document.getElementById("carTwoImg");
const carOne = document.getElementById("car1");
const carTwo = document.getElementById("car2");
const textOne = document.getElementById("carText1");
const textTwo = document.getElementById("carText2");
const carTime = document.getElementById("carTime");
const left = document.getElementById("leftArrow");
const right = document.getElementById("rightArrow");
const rightOne = document.getElementById("invite");
const upOne = document.getElementById("greenWay");
const upTwo = document.getElementById("lotMore");
const playVideo = document.getElementById("bgVideo");
const bgVideo = document.getElementById("cursor");
const invVid1 = document.getElementById("invVidOne");
const invVid2 = document.getElementById("invVidTwo");
const projVid1 = document.getElementById("projVidOne");
const projVid2 = document.getElementById("projVidTwo");
const projVid3 = document.getElementById("projVidThree");
const invImg1 = document.getElementById("invImgOne");
const invImg2 = document.getElementById("invImgTwo");
const projImg1 = document.getElementById("projImgOne");
const projImg2 = document.getElementById("projImgTwo");
const projImg3 = document.getElementById("projImgThree");
const title = document.getElementById("formTitle");
const mini = document.getElementById("miniParallax");
const input = document.getElementById("formInput");
const form = document.forms;
const email = form["email"]["formEmail"];
const search = form["search"]["search"];
const holder = document.getElementById("formHolder");
const text = document.getElementById("searchText");
const arrow = document.getElementById("formArrow");
let lastScrollY = window.scrollY;
let mouse = false;
let visible = 0;
let heading = document.getElementById("title");
let slide1 = document.getElementById("project1");
let slide2 = document.getElementById("project2");
let slide3 = document.getElementById("project3");
let name1 = document.getElementById("projectNameOne");
let name2 = document.getElementById("projectNameTwo");
let name3 = document.getElementById("projectNameThree");

// Carousel Slide
left.addEventListener("click", () => {
    change();
})

right.addEventListener("click", () => {
    change();
})

function change() {
    if (visible % 2 == 0) {
        imgOne.style.animation = "aniFour 1s cubic-bezier(0.33, 1, 0.68, 1)";
        textOne.style.animation = "aniThree 1s cubic-bezier(0.32, 0, 0.67, 0)";
        carTime.style.animation = "aniSeven 1s";

        setTimeout(() => {

            carOne.classList.toggle("carHide");
            carTwo.classList.toggle("carHide");
            carTime.classList.toggle("carHide");

            imgTwo.style.animation = "aniFive 1s cubic-bezier(0.33, 1, 0.68, 1)";
            textTwo.style.animation = "aniTwo 1s cubic-bezier(0.32, 0, 0.67, 0)";
        }, 1001);
    }
    else {
        imgTwo.style.animation = "aniFour 1s cubic-bezier(0.33, 1, 0.68, 1)";
        textTwo.style.animation = "aniThree 1s cubic-bezier(0.32, 0, 0.67, 0)";
        carTime.style.animation = "aniSix 4s, aniOne 40s linear infinite";

        setTimeout(() => {

            carOne.classList.toggle("carHide");
            carTwo.classList.toggle("carHide");
            carTime.classList.toggle("carHide");

            imgOne.style.animation = "aniFive 1s cubic-bezier(0.33, 1, 0.68, 1)";
            textOne.style.animation = "aniTwo 1s cubic-bezier(0.32, 0, 0.67, 0)";
        }, 1001);
    }
    visible++;
}

// Scroll Events
window.addEventListener("scroll", () => {
    parallax();

    if (lastScrollY < window.scrollY && !nav.classList.contains("mode")) nav.classList.add("navHide");
    else nav.classList.remove("navHide");

    lastScrollY = window.scrollY;

    let limitOne = rightOne.getBoundingClientRect();
    let limitTwo = upOne.getBoundingClientRect();
    let limitThree = upTwo.getBoundingClientRect();

    if (window.scrollY >= limitOne.top) {
        rightOne.style.opacity = "1";
        rightOne.style.transform = "translate(0, 3rem)";
        rightOne.style.transition = "0.8s ease-in-out";
    }
    else {
        rightOne.style.opacity = "0";
        rightOne.style.transform = "translate(-50px, 3rem)";
        rightOne.style.transition = "0.8s ease-in-out";
    }

    if (window.scrollY >= limitTwo.bottom) {
        upOne.style.opacity = "1";
        upOne.style.transform = "translateY(0)";
        upOne.style.transition = "2s ease-in-out";
    }
    else {
        upOne.style.opacity = "0";
        upOne.style.transform = "translateY(10rem)";
        upOne.style.transition = "2s ease-in-out";
    }

    if (window.scrollY >= limitThree.bottom) {
        upTwo.style.opacity = "1";
        upTwo.style.transform = "translateY(0)";
        upTwo.style.transition = "2s ease-in-out";
    }
    else {
        upTwo.style.opacity = "0";
        upTwo.style.transform = "translateY(8rem)";
        upTwo.style.transition = "2s ease-in-out";
    }
});

// Hover Video
setInterval(() => {
    playVideo.onmouseover = () => { mouse = true; }
    playVideo.onmouseout = () => { mouse = false; }
}, 1);

document.addEventListener("mousemove", (element) => {
    let lateral = element.pageX;
    let vertical = element.pageY;

    if (mouse) {
        bgVideo.style.left = lateral - 250 + "px";
        bgVideo.style.top = vertical - 150 + "px";
        bgVideo.style.display = "block";
        playVideo.style.cursor = "default";
    }

    else {
        bgVideo.style.display = "none";
    }
});

// Form Events
holder.addEventListener("click", () => {
    email.focus();
})

text.addEventListener("click", () => {
    search.focus();
})

email.addEventListener("focus", () => {
    holder.style.color = "rgb(14, 167, 83)";
    email.style.borderBottomColor = "black";
})

search.addEventListener("focus", () => {
    text.style.color = "grey";
})

email.addEventListener("blur", () => {
    holder.style.color = "rgb(15, 129, 67)";
    email.style.borderBottomColor = "rgb(1, 187, 85)";
})

search.addEventListener("blur", () => {
    text.style.color = "white";
})

email.addEventListener("input", () => {

    if (email.value.length != 0) {
        holder.style.display = "none";
        arrow.style.stroke = "black";
    }

    else {
        holder.style.display = "block";
        arrow.style.stroke = "rgb(15, 129, 67)";
    }
})

search.addEventListener("input", () => {

    if (search.value.length != 0) {
        text.style.display = "none";
    }

    else {
        text.style.display = "block";
    }
})

// Submit Form
arrow.addEventListener("click", () => {
    formSubmit();
})

form["email"].addEventListener("submit", (element) => {
    element.preventDefault();
    formSubmit();
})

form["search"].addEventListener("submit", (element) => {
    element.preventDefault();
    window.open("https://www.therailpark.org/search/?query=" + search.value, "_self");
})

function formSubmit() {

    if (email.value.length != 0) {
        input.style.display = "none";

        if (email.value.search(/@gmail.com/) == -1 || email.value.length < 11) title.innerHTML = "The email you entered is not valid.";
        else title.innerHTML = "Thank you for subscribing!";
    }
}

// Parallax Scroll
function parallax() {

    let scrolltop = window.pageYOffset;

    slide1.style.top = 200 + (-scrolltop * 0.1) + 'px';
    slide2.style.top = 'calc(50% - ' + (scrolltop * 0.1) + 'px)';
    slide3.style.bottom = -200 + (scrolltop * 0.1) + 'px';

    heading.style.top = (scrolltop * 0.22) + 'px';

    name1.style.top = (scrolltop * 0.08) + 'px';
    name2.style.left = (scrolltop * 0.08) + 'px';

    mini.style.top = (scrolltop * 0.07) + 'px';
}

// Hamburger Events
ham.addEventListener('click', () => {
    ham.classList.toggle('mode');
    menu.classList.toggle('mode');
    nav.classList.toggle('mode');

    if (ham.classList.contains("mode")) {
        nav.style.borderBottom = "1px solid grey";
        nav.style.padding = "1rem 0";

        one.style.display = "block";
        two.style.display = "block";

        three.style.display = "none";
        five.style.display = "none";
        six.style.display = "none";

        if (screen.width > 510) {
            four.style.display = "none";
        }
        else {
            four.style.fill = "white";
            two.style.display = "none";
        }
    }
    else {
        nav.style.borderBottom = "none";
        nav.style.padding = "0";
        four.style.display = "block";

        one.style.display = "none";
        two.style.display = "none";

        if (screen.width > 510) {
            three.style.display = "block";
            five.style.display = "block";
            six.style.display = "block";
        }
        else {
            four.style.fill = "black";
        }
    }
})