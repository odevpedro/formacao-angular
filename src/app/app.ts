import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from "./title/title";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Title],
  template: '1 <router-outlet></router-outlet>'
})
export class App implements OnInit{

  constructor(){ }
    ngOnInit(): void {
      
      setTimeout(()=> {
        console.log(1);
      }, 5000)
     }
  
}
