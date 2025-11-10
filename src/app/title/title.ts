import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.html',
  styleUrl: './title.css',
})
export class Title  implements OnInit {

  public title: string = "Bem vindo";

  constructor() {}

  ngOnInit(): void {
    
  }

}
