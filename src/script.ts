function scrollMenu() {
    const header = document.querySelector("header") as HTMLElement;

    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        header.style.backgroundColor = "rgba(57, 55, 55, 0.5)";
        header.style.color = "#fff";
    } else {
        header.style.backgroundColor = "transparent";
        header.style.color = "#000";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    window.onscroll = () => { scrollMenu() };
})

const btn_henrique = document.querySelector("#btn-henrique") as HTMLLIElement;
const btn_fernando = document.querySelector("#btn-fernando") as HTMLLIElement;
const btn_bianca = document.querySelector("#btn-bianca") as HTMLLIElement;
const btn_joao = document.querySelector("#btn-joao") as HTMLLIElement;
const btn_vitor = document.querySelector("#btn-vitor") as HTMLLIElement;

const content_name = document.querySelector("#member-name") as HTMLElement;
const content_office = document.querySelector("#member-office span") as HTMLElement;

const buttons = document.getElementsByClassName("button") as HTMLCollectionOf<HTMLElement>;
let activeButton : HTMLElement | null = null;

const member_card = document.querySelector("#member-card") as HTMLElement;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(event: Event) {
        if (activeButton) {
            activeButton.classList.remove("active");
        }

        (event.target as HTMLElement).classList.add("active");
        activeButton = event.target as HTMLElement;
    });
}   

btn_henrique.addEventListener("click", () => {
    member_card.style.visibility = "visible";
    content_name.innerText = "Henrique";
    content_office.innerText = "Gerente de Projeto e Desenvolvedor Backend";
})

btn_fernando.addEventListener("click", () => {
    btn_henrique.classList.remove("active");
    member_card.style.visibility = "visible";
    content_name.innerText = "Fernando";
    content_office.innerText = "Desenvolvedor Fullstack";
})

btn_bianca.addEventListener("click", () => {
    btn_henrique.classList.remove("active");
    member_card.style.visibility = "visible";
    content_name.innerText = "Bianca";
    content_office.innerText = "Designer e Desenvolvedora Fronted";
})

btn_joao.addEventListener("click", () => {
    btn_henrique.classList.remove("active");
    member_card.style.visibility = "visible";
    content_name.innerText = "João Pedro";
    content_office.innerText = "Desenvolvedor Frontend";
})

btn_vitor.addEventListener("click", () => {
    btn_henrique.classList.remove("active");
    member_card.style.visibility = "visible";
    content_name.innerText = "Vitor";
    content_office.innerText = "Desenvolvedor Frontend";
})
