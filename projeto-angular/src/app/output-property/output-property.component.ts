import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  private valor: number;

  constructor() {

    this.valor = 0;
    
  }

  ngOnInit() {
  }

}
