document.addEventListener("DOMContentLoaded", function () {
  // const toggleButton = document.getElementById("toggleButton");
  // const targetElement = document.getElementById("targetElement");

  // toggleButton.addEventListener("click", function () {
  //   targetElement.classList.toggle("hidden");
  //   if (targetElement.classList.contains("hidden")) {
  //     toggleButton.innerText = "表示する"
  //   } else {
  //     toggleButton.innerText = "非表示にする";
  //   }
  // });

  const toggleButton = document.getElementById("toggleButton");
  const moreText = document.getElementById("moreText");

  toggleButton.addEventListener("click", function () {
    moreText.classList.toggle("hidden");
    if (moreText.classList.contains("hidden")) {
      toggleButton.innerText = "続きを読む";
    } else {
      toggleButton.innerText = "閉じる";
    }
  });

  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const currentlyOpen = document.querySelector(
        ".accordion-content:not([style='display: none;'])"
      );
      if (currentlyOpen && currentlyOpen !== this.nextElementSibling) {
        currentlyOpen.style.display = "none";
      }

      const content = this.nextElementSibling;
      content.style.display =
        content.style.display === "block" ? "none" : "block";
    });
  });

});
