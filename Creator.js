import Menu from "./Menu.js";

class Creator{
    constructor(){
        const MENU = $(".menu");
        let txt = `<div class="cred"><h1 class="creh">CREATOR</h1>`;
        txt += `<a class="crea">My name is Végi Dániel Márk. Im a student at Számalk Szalézi vocational high school. Im part of the class in programming and coding. This game was made by me alone for a project.</a>`;
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

export default Creator;