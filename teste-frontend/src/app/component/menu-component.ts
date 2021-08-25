import { Component } from "@angular/core";

@Component({
    selector: 'menu-component',
    template: `
     <div class="header-container">
        <div class="header-content">
        <div class="header-left">
        <img class="menu-icon" src="./assets/menu-icon.svg"   alt="image">
        <img class="logo-header" src="./assets/logo-header.svg" alt="image">
     </div>
     
     <div class="header-right">
        <img src="./assets/map-left.svg" alt="image">
        <nav>
        <a href="/html/">NOSSAS LOJAS</a> 
        </nav>
        <img class="barra" src="./assets/barra.svg" alt="image">
        <img src="./assets/login-icon.svg" alt="image">
        <nav>
        <a href="/html/">FERNANDO</a> 
        <img src="./assets/expand-more.svg" alt="image">
        </nav>

     </div>
     </div>
     </div>
          
    
    `
})

export class MenuComponent {

}

