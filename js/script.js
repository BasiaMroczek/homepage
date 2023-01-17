{
    const welcome = () => console.log("Good to see you!");

    const changeBackground = () => {
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".js-themeName");

        body.classList.toggle("body--dark");
        themeName.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";
    }
    const init = () => {
        const button = document.querySelector(".js-button");

        welcome();

        button.addEventListener("click", changeBackground);
    }
    init();
}