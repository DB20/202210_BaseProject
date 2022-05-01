import { Component, OnInit } from '@angular/core';
import { CafeService } from '../cafe.service';
import { Cafe } from '../cafe';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {
  tipo:String ="Café de Origen";
  tipo2:String ="Cafe Colombia";
  tipos: Array<String> =[];
  cafes: Array<Cafe> = [];
  largo:number = 0;
  constructor( private cafeService: CafeService) { }

  getCafes(){
    this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;
    });
  }



  gettipos(){
    const largo = this.cafes.filter((obj) => obj.tipo === this.tipo).length;
    // const largo = .filter((obj) => obj.id === id).length;

    // for (let i = 0; i<this.cafes.length; i++) {
    //   this.largo = this.cafes.length;
    //   // var currentNumber = numbers[i];
    //   // if (currentNumber > 10) {
    //   // greaterTen.push(currentNumber)
    //   // }
    //   }
  }

  ngOnInit() {
    this.getCafes();
    // const largo = this.cafes.filter((obj) => obj.tipo === this.tipo).length;
    this.gettipos();
  }
}

