document.querySelectorAll("*").forEach((attr) => {
    attr.style.border = "0";
    attr.style.margin = "0";
    attr.style.boxSizing = "border-box";
});

const body = document.querySelector("body");
body.style.width = "100vw";
body.style.height = "100vh";
body.style.backgroundColor = "rgb(252,245,238)";
body.style.fontFamily = "Madefor,Helvetica Neue,Helvetica,Arial,メイリオ,meiryo,ヒラギノ角ゴ pro w3,hiragino kaku gothic pro,sans-serif";
body.style.overflowX = "hidden";

const nav = document.createElement("div");
nav.style.width = "100%";
nav.style.height = "100px";
nav.style.display = "flex";
nav.style.justifyContent = "center";
nav.style.alignItems = "center";
nav.style.position = "fixed";
nav.style.left = "0";
nav.style.top = "0";
nav.style.zIndex = "999";
nav.style.backgroundColor = "rgb(252,245,238)";

body.appendChild(nav);

document.addEventListener("scroll", () => {
    if(window.scrollY > 100) {
        nav.style.boxShadow = "0px 4px 16px rgba(0,0,0,0.1)";
    } else {
        nav.style.boxShadow = "none";  
    }
});

const logo = document.createElement("div");
logo.innerHTML = `<svg preserveAspectRatio="xMidYMid meet" data-bbox="39.16 20.351 121.68 159.297" viewBox="39.16 20.351 121.68 159.297" height="80" width="80" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-label="Homepage"><defs><style>#comp-l199kdeh svg [data-color="1"] {fill: #221A43;}</style></defs>
<g>
    <path d="M99.999 20.351c-33.547 0-60.839 27.292-60.839 60.839v98.458h121.68V81.19c0-33.547-27.293-60.839-60.841-60.839zm0 1.298c32.833 0 59.544 26.71 59.544 59.541v97.162H40.458V81.19c0-32.831 26.71-59.541 59.541-59.541z" fill="#221A43" data-color="1"></path>
    <path d="M84.886 103.217c3.466 2.53 7.738 4.419 12.701 5.614l.292.089c9.281 2.175 18.334 1.393 21.158 1.059l2.568 5.034c.087.185.245.308.482.369a.758.758 0 0 0 .469-.055.716.716 0 0 0 .366-.418.663.663 0 0 0-.041-.524l-2.547-4.99c.031-.241.342-1.188.671-2.188.795-2.418 2.125-6.464 2.836-10.267 1.232-6.609 1.811-16.231-2.428-24.524-.207-.49-.327-.672-.393-.746-3.484-6.344-9.614-11.739-18.22-16.035-6.213-3.1-11.543-4.505-12.51-4.742a.615.615 0 0 0-.198-.051l-.575-.135-.255.539c-.1.221-2.454 5.491-3.785 12.614-.479 2.567-.633 5.278-.719 7.843-9.068-1.66-13.606.822-13.643.845l-.264.145-.008.028-.095-.016v.296l-.029.232c-.024.151-.053.36-.08.588a23.98 23.98 0 0 0-.154 2.161 30.3 30.3 0 0 0 .713 7.328c1.212 5.399 4.568 13.238 13.688 19.907zm1.129-30.804c.058-.955.322-5.105.675-7.221a61.984 61.984 0 0 1 3.324-12.066l12.235 23.965-16.234-4.678zm18.053 5.11 6.199-15.697c4.161 3.11 7.339 6.617 9.449 10.427L111.202 91.5l-7.134-13.977zm2.143 25.891c-7.749-4.039-13.308-9.002-16.534-14.759l21.141 5.222 7.312 14.322a66.87 66.87 0 0 1-11.919-4.785zm3.759-11.197-21.146-5.22c-1.793-3.811-2.741-8.226-2.821-13.129l17.111 4.929 6.856 13.42zm-3.453 12.942a68.603 68.603 0 0 0 9.021 3.713 68.15 68.15 0 0 1-8.091-.005c-6.204-.377-15.002-1.856-21.691-6.758-8.764-6.412-11.986-13.918-13.146-19.085-1.039-4.613-.665-8.229-.489-9.413 1.005-.455 5.094-1.996 12.142-.732.063.102.16.247.304.463.016 5.32 1.007 10.11 2.947 14.238 0 .208.351.724.397.814 4.236 8.295 12.456 13.696 18.606 16.765zM91.364 52.631a67.02 67.02 0 0 1 11.753 4.736 54.964 54.964 0 0 1 5.963 3.598l-5.87 14.874-11.846-23.208zm20.669 40.493 8.513-19.239c2.786 5.986 3.489 13.286 2.089 21.709a62.277 62.277 0 0 1-3.262 11.907l-7.34-14.377z" fill="#221A43" data-color="1"></path>
</g>
</svg>`;

nav.appendChild(logo);

const ul = document.createElement("ul");
ul.style.listStyleType = "none";
ul.style.margin = "0px 300px";

nav.appendChild(ul);

navlink = ["Menu", "Our Story", "Reservations"];

for(let i=0; i<navlink.length; i++) {
    const li = document.createElement("li");
    li.style.float = "left";
    li.style.fontSize = "20px";
    li.style.fonWeight = "20px";
    li.style.margin = "0px 20px";
    li.style.cursor = "pointer";
    li.textContent = navlink[i];

    ul.appendChild(li);
}

const login = document.createElement("div");
login.style.display = "flex";

const pf = document.createElement("div");
pf.innerHTML = `<i class="fa-solid fa-user" style="font-size:20px;"></i>`;

login.appendChild(pf);

const link = document.createElement("a");
link.href = "#login";
link.textContent = "Log In";
link.style.textDecoration = "none";
link.style.color = "#000";
link.style.fontSize = "20px";
link.style.fontWeight = "400";
link.style.marginLeft = "24px";

login.appendChild(link);

nav.appendChild(login);

const home = document.createElement("div");
home.style.width = "100%";
home.style.height = "auto";
home.style.padding = "200px 0px 100px 0px";
home.style.display = "flex";
home.style.flexDirection = "column";
home.style.alignItems = "center";

body.appendChild(home);

const heading = document.createElement("div");
heading.style.width = "85%";
heading.style.fontSize = "64px";
heading.style.fontWeight = "700";
heading.textContent = "Fresh, Healthy, Made With Love";
heading.style.marginBottom = "50px";

home.appendChild(heading);

const img = document.createElement("img");
img.src = "./media/home.webp";
img.style.width = "85%";
img.style.height = "80%";

home.appendChild(img);

const menu = document.createElement("div");
menu.style.width = "100%";
menu.style.height = "auto";
menu.style.padding = "20px 0px";
menu.style.display = "flex";
menu.style.flexDirection = "column";
menu.style.justifyContent = "center";
menu.style.alignItems = "center";

body.appendChild(menu);

const text = document.createElement("div");
text.style.width = "50%";
text.style.textAlign = "center";
text.style.fontSize = "34px";
text.style.fontWeight = "500";
text.style.letterSpacing = "1.2px";
text.innerHTML = "<i>We serve delicious, nourishing food, staying true to our commitment to using local, sustainable and organic produce.</i>";
text.style.marginBottom = "28px";

menu.appendChild(text);

const btn = document.createElement("button");
btn.style.width = "150px";
btn.style.height = "45px";
btn.style.borderRadius = "25px";
btn.style.outline = "none";
btn.style.border = "none";
btn.style.backgroundColor = "rgb(34,26,67)";
btn.style.color = "#ffff";
btn.textContent = "Our menu";
btn.style.fontSize = "17px";
btn.style.letterSpacing = "1.2px";
btn.style.cursor = "pointer";
btn.style.transition = "all 0.3s ease-out";

menu.appendChild(btn);

btn.addEventListener("mousemove", () => {
    btn.style.background = "transparent";
    btn.style.border = "1px solid rgb(34,26,67)";
    btn.style.color = "rgb(34,26,67)";
});

btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = "rgb(34,26,67)";
    btn.style.border = "none";
    btn.style.color = "#ffff";
});

const about = document.createElement("div");
about.style.width = "100%";
about.style.height = "100%";
about.style.display = "flex";
about.style.justifyContent = "center";
about.style.alignItems = "center";

body.appendChild(about);

const left = document.createElement("div");
left.style.width = "30%";
left.innerHTML = `<h1 style="font-size:54px;">Farm-to-Table With a Twist</h1>
<p style="font-size:20px;font-weight:200;letter-spacing:1.2px;line-height:36px;">I'm a paragraph. Click here to add your own text and edit me. I'm a great place for you to tell a story and let your users know a little more about you.</p>
<button id="story" style="width: 150px; height: 45px; border-radius: 25px; outline: none; border: 1px solid rgb(34,26,67); background: transparent; color: rgb(34,26,67); font-size: 17px; letter-spacing: 1.2px; cursor: pointer; transition: all 0.3s ease-out;">Our story</button>
`;

about.appendChild(left);

const right = document.createElement("div");
right.style.width = "481px";
right.style.height = "628px";
right.style.borderRadius = "250px 250px 0px 0px";
right.style.background = "url('./media/salad.webp')";
right.style.backgroundSize = "cover";
right.style.position = "center";
right.style.repeat = "no-repeat";
right.style.marginLeft = "200px";

about.appendChild(right);

const section = document.createElement("div");
section.style.width = "100%";
section.style.height = "290px";
section.style.overflow = "hidden";

body.appendChild(section);

const content = document.createElement("div");
content.style.width = "70%";
content.style.height = "100%";
content.style.backgroundColor = "rgb(98,119,80)";
content.style.display = "flex";
content.style.justifyContent = "center";
content.style.alignItems = "center";

section.appendChild(content);

const arr = ["Community", "Sustainability", "Integrity"];

for(let i=0; i<3; i++) {
    const div = document.createElement("div");
    div.className = "div";
    div.style.width = "240px";
    div.style.height = "220px";
    div.innerHTML = `<h1 style="font-size:28px;font-weight:600;color:#ffff;">${arr[i]}</h1>
    <p style="font-size:18px;color:rgba(255,255,255,0.45);line-height:30px;">I'm a paragraph. Click here to add your own text and edit me. It's easy.</p>`;
    div.style.margin = "0px 24px";
    div.style.paddingTop = "45px";

    content.appendChild(div);
}

const order = document.createElement("div");
order.style.width = "90px";
order.style.height = "90px";
order.style.borderRadius = "50%";
order.style.backgroundColor = "rgb(98,119,80)";
order.style.border = "1.5px solid #ffff";
order.style.display = "grid";
order.style.placeItems = "center";
order.style.position = "fixed";
order.style.right = "35px";
order.style.bottom = "35px";
order.style.zIndex = "999";
order.innerHTML = `<svg preserveAspectRatio="xMidYMid meet" data-bbox="23.837 20.132 153.161 158.956" viewBox="23.837 20.132 153.161 158.956" height="40" width="40" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label=""><defs><style>#comp-l1dnljk6 svg [data-color="1"] {fill: #FCF5EE;}</style></defs>
<g>
    <path d="m176.6 22.2-.2-1.9-1.9-.1c-2.8-.1-68.6-2.7-106.7 36.9-36.1 37.5-33.3 98.3-32.7 107.1l-10.6 11c-.9.9-.9 2.4.1 3.3.8.8 2.2.8 3-.1l10.7-11.1h3.3c15.6 0 69.4-2.6 102.4-36.9C182.1 90.7 176.9 25 176.6 22.2zm-63 60.4-1.6-48c23.7-8.6 47.2-10 57.2-10.1l-55.6 58.1zm-36.2 37.6-4.4-62c10.2-9.9 22.3-16.9 34.7-21.9l1.6 50.7-31.9 33.2zm-8.5-57.7 4.4 62-33.9 35.3c-.4-15.8.8-65.2 29.5-97.3zm7.6 65.1 62.1 1.9c-30.9 29.9-80.1 33-95.9 33.3l33.8-35.2zm66.2-2.4-62.1-1.9 31.9-33.2 50.7-.4c-4.5 12.5-11 24.9-20.5 35.5zm22-39.9-47.9.4 55.7-58c.2 10-.2 33.5-7.8 57.6z" fill="#FFE4CC" data-color="1"></path>
</g>
</svg>`;

body.appendChild(order);

const special = document.createElement("div");
special.style.width = "100%";
special.style.height = "125%";
special.style.display = "flex";
special.style.justifyContent = "center";
special.style.alignItems = "center";

body.appendChild(special);

const left_text = document.createElement("div");
left_text.style.width = "30%";
left_text.innerHTML = `<h1 style="font-size:54px;">Kale Special Menu Is On!</h1>
<p style="font-size:20px;font-weight:200;letter-spacing:1.2px;line-height:36px;">I'm a paragraph. Click here to add your own text and edit me. I'm a great place for you to tell a story and let your users know a little more about you.</p>
<img src="./media/left.webp" style="float:right;">`;

special.appendChild(left_text);

const right_text = document.createElement("div");
right_text.style.width = "528px";
right_text.style.height = "628px";
right_text.style.background = "url('./media/right.webp')";
right_text.style.backgroundSize = "cover";
right_text.style.position = "center";
right_text.style.repeat = "no-repeat";
right_text.style.marginLeft = "200px";

special.appendChild(right_text);

const review = document.createElement("div");
review.style.width = "100%";
review.style.height = "100%";
review.style.display = "flex";
review.style.justifyContent = "center";
review.style.alignItems = "center";

body.appendChild(review);

const image = document.createElement("div");
image.style.width = "481px";
image.style.height = "592px";
image.style.borderRadius = "250px 250px 0px 0px";
image.style.background = "url('./media/Cocktails.webp')";
image.style.backgroundSize = "cover";
image.style.position = "center";
image.style.repeat = "no-repeat";
image.style.marginLeft = "200px";
image.style.transform = "translate(42px, -20px)";

review.appendChild(image);

const right_ele = document.createElement("div");
right_ele.style.width = "60%";
right_ele.style.height = "60%";
right_ele.style.backgroundColor = "rgb(98,119,80)";
right_ele.style.display = "flex";
right_ele.style.flexDirection = "column";
right_ele.style.justifyContent = "center";
right_ele.style.alignItems = "center";
right_ele.innerHTML = `<h1 style="width:50%;font-size:54px;color:#ffff;">A Word From Our Customers</h1>
<p style="width:50%;font-size:18px;font-weight:200;color:rgba(255,255,255,0.55);line-height:30px;">
“I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you.”
</p>
<p style="width:50%;font-size:16px;font-weight:200;color:rgba(255,255,255,0.45);line-height:30px;">Joana Hill</p>`;

review.appendChild(right_ele);

review.appendChild(right_ele);

const reserve = document.createElement("div");
reserve.style.width = "100%";
reserve.style.height = "45%";

body.appendChild(reserve);

const h = document.createElement("h1");
h.textContent = "Reserve a Table";
h.style.width = "100%";
h.style.textAlign = "center";
h.style.fontSize = "34px";

reserve.appendChild(h);

const p = document.createElement("p");
p.textContent = "To help us find the best table for you, select the preferred party size, date, and time of your reservation.";
p.style.width = "100%";
p.style.textAlign = "center";
p.style.fontSize = "18px";

reserve.appendChild(p);

const input_sec = document.createElement("div");
input_sec.style.width = "100%";
input_sec.style.display = "flex";
input_sec.style.justifyContent = "center";
input_sec.style.alignItems = "center";
input_sec.style.margin = "60px 0px";

reserve.appendChild(input_sec);

const guest = document.createElement("input");
guest.type = "number";
guest.placeholder = "Number of Guests";
guest.style.width = "280px";
guest.style.height = "40px";
guest.style.outline = "none";
guest.style.border = "1px solid #000";
guest.style.backgroundColor = "#ffff";
guest.style.padding = "0px 12px";

input_sec.appendChild(guest);

const date = document.createElement("input");
date.type = "date";
date.style.width = "280px";
date.style.height = "40px";
date.style.outline = "none";
date.style.border = "1px solid #000";
date.style.backgroundColor = "#ffff";
date.style.padding = "0px 12px";
date.style.margin = "0px 80px";

input_sec.appendChild(date);

const timeDropdown = document.createElement("select");
timeDropdown.style.width = "280px";
timeDropdown.style.height = "40px";
timeDropdown.style.outline = "none";
timeDropdown.style.border = "1px solid #000";
timeDropdown.style.backgroundColor = "#ffff";
timeDropdown.style.padding = "0px 12px";


const timeOptions = ["9:45 PM", "10:00 PM"];

for (const option of timeOptions) {
  const timeOption = document.createElement("option");
  timeOption.value = option;
  timeOption.text = option;

  timeDropdown.appendChild(timeOption);
}

input_sec.appendChild(timeDropdown);

const find = document.createElement("button");
find.textContent = "Find a table";
find.style.position = "absolute";
find.style.left = "50%";
find.style.transform = "translateX(-50%)";
find.style.width = "180px";
find.style.height = "42px";
find.style.backgroundColor = "rgb(98,119,80)";
find.style.color = "#ffff";
find.style.border = "none";
find.style.fontSize = "17px";
find.style.cursor = "pointer";
find.style.borderRadius = "20px";

reserve.appendChild(find);

const footer = document.createElement("footer");
footer.style.width = "100%";
footer.style.height = "85px";
footer.style.backgroundColor = "rgb(34,26,67)";
footer.style.display = "grid";
footer.style.placeItems = "center";
footer.innerHTML = `<ul style="list-style-type:none;color:#ffff;font-size:16px;font-weight:200;">
<li style="margin:0px 14px;float:left;font-size:24px;">Connect :</li>
<li style="margin:0px 14px;float:left;transform:translateY(5px);">123-456-7890</li>
<li style="margin:0px 14px;float:left;transform:translateY(5px);">info@mysite.com</li>
</ul>`;

body.appendChild(footer);

function checkScreen() {
    const screenWidth = window.innerWidth;
    const mobileBreakpoint = 768;

    if(screenWidth < mobileBreakpoint) {
        console.log("mobile view");

        nav.style.height = "70px";
        nav.style.padding = "0px 16px";
        nav.style.justifyContent = "space-between";
        login.style.transform = "translateX(-65px)";
        logo.innerHTML = `<svg preserveAspectRatio="xMidYMid meet" data-bbox="39.16 20.351 121.68 159.297" viewBox="39.16 20.351 121.68 159.297" height="50" width="50" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-label="Homepage"><defs><style>#comp-l199kdeh svg [data-color="1"] {fill: #221A43;}</style></defs>
        <g>
        <path d="M99.999 20.351c-33.547 0-60.839 27.292-60.839 60.839v98.458h121.68V81.19c0-33.547-27.293-60.839-60.841-60.839zm0 1.298c32.833 0 59.544 26.71 59.544 59.541v97.162H40.458V81.19c0-32.831 26.71-59.541 59.541-59.541z" fill="#221A43" data-color="1"></path>
        <path d="M84.886 103.217c3.466 2.53 7.738 4.419 12.701 5.614l.292.089c9.281 2.175 18.334 1.393 21.158 1.059l2.568 5.034c.087.185.245.308.482.369a.758.758 0 0 0 .469-.055.716.716 0 0 0 .366-.418.663.663 0 0 0-.041-.524l-2.547-4.99c.031-.241.342-1.188.671-2.188.795-2.418 2.125-6.464 2.836-10.267 1.232-6.609 1.811-16.231-2.428-24.524-.207-.49-.327-.672-.393-.746-3.484-6.344-9.614-11.739-18.22-16.035-6.213-3.1-11.543-4.505-12.51-4.742a.615.615 0 0 0-.198-.051l-.575-.135-.255.539c-.1.221-2.454 5.491-3.785 12.614-.479 2.567-.633 5.278-.719 7.843-9.068-1.66-13.606.822-13.643.845l-.264.145-.008.028-.095-.016v.296l-.029.232c-.024.151-.053.36-.08.588a23.98 23.98 0 0 0-.154 2.161 30.3 30.3 0 0 0 .713 7.328c1.212 5.399 4.568 13.238 13.688 19.907zm1.129-30.804c.058-.955.322-5.105.675-7.221a61.984 61.984 0 0 1 3.324-12.066l12.235 23.965-16.234-4.678zm18.053 5.11 6.199-15.697c4.161 3.11 7.339 6.617 9.449 10.427L111.202 91.5l-7.134-13.977zm2.143 25.891c-7.749-4.039-13.308-9.002-16.534-14.759l21.141 5.222 7.312 14.322a66.87 66.87 0 0 1-11.919-4.785zm3.759-11.197-21.146-5.22c-1.793-3.811-2.741-8.226-2.821-13.129l17.111 4.929 6.856 13.42zm-3.453 12.942a68.603 68.603 0 0 0 9.021 3.713 68.15 68.15 0 0 1-8.091-.005c-6.204-.377-15.002-1.856-21.691-6.758-8.764-6.412-11.986-13.918-13.146-19.085-1.039-4.613-.665-8.229-.489-9.413 1.005-.455 5.094-1.996 12.142-.732.063.102.16.247.304.463.016 5.32 1.007 10.11 2.947 14.238 0 .208.351.724.397.814 4.236 8.295 12.456 13.696 18.606 16.765zM91.364 52.631a67.02 67.02 0 0 1 11.753 4.736 54.964 54.964 0 0 1 5.963 3.598l-5.87 14.874-11.846-23.208zm20.669 40.493 8.513-19.239c2.786 5.986 3.489 13.286 2.089 21.709a62.277 62.277 0 0 1-3.262 11.907l-7.34-14.377z" fill="#221A43" data-color="1"></path>
        </g>
        </svg>`;
        ul.style.display = "none";
        link.style.marginLeft = "16px";
        home.style.padding = "100px 0px 40px 0px";
        heading.style.fontSize = "34px";
        heading.style.marginBottom = "30px";
        img.style.width = "90%";
        img.style.height = "290px";
        text.style.width = "96%";
        text.style.fontSize = "20px";
        btn.style.width = "120px";
        btn.style.height = "40px";
        btn.style.fontSize = "16px";
        about.style.height = "auto";
        about.style.padding = "20px 0px";
        about.style.flexDirection = "column";
        left.style.width = "92%";
        left.style.height = "50%";
        left.style.textAlign = "center";
        left.innerHTML = `<h1 style="font-size:28px;">Farm-to-Table With a Twist</h1>
        <p style="font-size:16px;font-weight:200;letter-spacing:1.2px;line-height:30px;">I'm a paragraph. Click here to add your own text and edit me. I'm a great place for you to tell a story and let your users know a little more about you.</p>
        <button id="story" style="width: 120px; height: 40px; border-radius: 25px; outline: none; border: 1px solid rgb(34,26,67); background: transparent; color: rgb(34,26,67); font-size: 17px; letter-spacing: 1.2px; cursor: pointer; transition: all 0.3s ease-out;">Our story</button>
        `;
        left.style.marginBottom = "30px";
        right.style.width = "281px";
        right.style.height = "428px";
        right.style.borderRadius = "200px 200px 0px 0px";
        right.style.marginLeft = "0px";
        section.style.height = "auto";
        section.style.padding = "20px 0px";
        content.style.width = "100%";
        content.style.padding = "20px 0px";
        content.style.flexDirection = "column";

        document.querySelectorAll(".div").forEach((div) => {
            div.style.paddingTop = "0px";
            div.style.margin = "0px 0px";
            div.style.height = "auto";
        });

        special.style.flexDirection = "column";
        special.style.height = "auto";
        left_text.style.width = "100%";
        left_text.innerHTML = `<h1 style="font-size:34px;padding:0px 30px;">Kale Special Menu Is On!</h1>
        <p style="font-size:16px;font-weight:200;letter-spacing:1.2px;line-height:30px;width:90%;padding:0px 30px;">I'm a paragraph. Click here to add your own text and edit me. I'm a great place for you to tell a story and let your users know a little more about you.</p>
        <img src="./media/left.webp" style="margin-top:16px;float:right;margin-right:20px;transform:translateX(-24px);height:428px;">`;
        right_text.style.width = "328px";
        right_text.style.height = "428px";
        right_text.style.marginLeft = "0px";
        right_text.style.marginTop = "30px";
        right_text.style.marginBottom = "45px";
        review.style.width = "100%";
        review.style.height = "auto";
        image.style.display = "none";
        right_ele.style.width = "100%";
        right_ele.style.height = "auto";
        right_ele.style.padding = "24px 0px";
        right_ele.innerHTML = `<h1 style="width:70%;font-size:38px;color:#ffff;">A Word From Our Customers</h1>
        <p style="width:70%;font-size:18px;font-weight:200;color:rgba(255,255,255,0.55);line-height:30px;">
        “I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you.”
        </p>
        <p style="width:70%;font-size:16px;font-weight:200;color:rgba(255,255,255,0.45);line-height:30px;">Joana Hill</p>`;
        p.style.textAlign = "center";
        p.style.fontSize = "16px";
        reserve.style.height = "63%";
        reserve.style.padding = "20px 0px";
        input_sec.style.flexDirection = "column";
        input_sec.style.margin = "30px 0px";
        guest.style.width = "85%";
        guest.style.margin = "14px 0px";
        date.style.width = "85%";
        date.style.margin = "14px 0px";
        timeDropdown.style.width = "92%";
        timeDropdown.style.margin = "14px 0px";
        
        order.style.width = "70px";
        order.style.height = "70px";
        order.style.right = "25px";
        order.style.bottom = "25px";
        order.innerHTML = `<svg preserveAspectRatio="xMidYMid meet" data-bbox="23.837 20.132 153.161 158.956" viewBox="23.837 20.132 153.161 158.956" height="30" width="30" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label=""><defs><style>#comp-l1dnljk6 svg [data-color="1"] {fill: #FCF5EE;}</style></defs>
        <g>
        <path d="m176.6 22.2-.2-1.9-1.9-.1c-2.8-.1-68.6-2.7-106.7 36.9-36.1 37.5-33.3 98.3-32.7 107.1l-10.6 11c-.9.9-.9 2.4.1 3.3.8.8 2.2.8 3-.1l10.7-11.1h3.3c15.6 0 69.4-2.6 102.4-36.9C182.1 90.7 176.9 25 176.6 22.2zm-63 60.4-1.6-48c23.7-8.6 47.2-10 57.2-10.1l-55.6 58.1zm-36.2 37.6-4.4-62c10.2-9.9 22.3-16.9 34.7-21.9l1.6 50.7-31.9 33.2zm-8.5-57.7 4.4 62-33.9 35.3c-.4-15.8.8-65.2 29.5-97.3zm7.6 65.1 62.1 1.9c-30.9 29.9-80.1 33-95.9 33.3l33.8-35.2zm66.2-2.4-62.1-1.9 31.9-33.2 50.7-.4c-4.5 12.5-11 24.9-20.5 35.5zm22-39.9-47.9.4 55.7-58c.2 10-.2 33.5-7.8 57.6z" fill="#FFE4CC" data-color="1"></path>
        </g>
        </svg>`;
    } else {
        console.log("desktop/laptop view");
    }
}
checkScreen();
