

const random_btn = document.querySelector("#btn-Ran");
const output = document.querySelector(".output");

random_btn.addEventListener("click", () => {
    const renGunNum = Math.floor(Math.random() * 100) + 1;
    output.innerHTML = renGunNum;
    output.style.display = "flex";
})
