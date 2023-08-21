import Menu from "./Menu.js";

class Info{
    constructor(){
        const MENU = $(".menu");
        let txt = `<div class="descd"><h1 class="desch">Ramber king</h1>`;
        txt += `<a class="desca">This game is meant to simulate you racing another car while learning how to cound and such.</a>`;
        txt += `<aside><button class="button_m">MENU</button></aside></div>`

        MENU.html(txt);

        $(".button_p").remove();
        $(".button_c").remove();
        $(".button_i").remove();

        $(".button_m").on("click", ()=>{
            new Menu();
        })

    }
}

export default Info;