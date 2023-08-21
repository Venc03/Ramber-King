import Creator from "./Creator.js";
import Description from "./Description.js";
import Playground from "./Playground.js";

class Menu{
    constructor(){
        const MENU = $(".menu");
        let txt = `<table class="menutable">`;
        txt += `<tr>`;
        txt += `<td class="menutd">`;
        txt += `<button class="button_p">PLAY</button>`;
        txt += `</td>`;
        txt += `</tr>`;
        txt += `<tr>`;
        txt += `<td class="menutd">`;
        txt += `<button class="button_c">CREATOR</button>`;
        txt += `</td>`;
        txt += `</tr>`;
        txt += `<tr>`;
        txt += `<td class="menutd">`;
        txt += `<button class="button_i">DESCRIPTION</button>`;
        txt += `</td>`;
        txt += `</tr>`;
        txt += `</table>`;

        MENU.html(txt);


        $(".button_p").on("click", ()=>{
            window.location.href = "../HTML/index.html";
            new Playground();
        })
        $(".button_c").on("click", ()=>{
            new Creator();
        })
        $(".button_i").on("click", ()=>{
            new Description();
        })
    }

}

export default Menu;