const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */

/* Looping through images */

// const newImage = document.createElement('img');
// newImage.setAttribute('src', xxx);
// newImage.setAttribute('alt', xxx);
// thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
const imgSrc = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];
const imgAlt = ["1の画像", "2の画像", "3の画像", "4の画像", "5の画像"];
for (let i = 0; i <= imgSrc.length -1; i++) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", `./images/${imgSrc[i]}`);
  newImage.setAttribute("alt", imgAlt[i]);
  thumbBar.appendChild(newImage);
}

thumbBar.addEventListener("click", (e) => {
  displayedImage.src = e.target.src
})

btn.addEventListener("click", (e) => {
  if (e.target.className === "dark") {
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    btn.innerText = "Lighten";
    btn.className = "light"
  } else {
    overlay.style.backgroundColor = "rgba(0, 0, 0,0)";
    btn.innerText = "Darken";
    btn.className = "dark";
  }
})
