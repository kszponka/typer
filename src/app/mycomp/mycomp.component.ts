import { Component, OnInit } from '@angular/core';
import typy from '../typy.json';
import { User1 } from './klasy';
import { Game } from '../klasy2';
import { element } from 'protractor';

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css'],
})
export class MycompComponent implements OnInit {
  // User: User1 = typy;
  game: Game = typy;
  listaCegiel: Cegla[] = [];

  cegla: Cegla = {};
  myarray: number[] = [];
  mecze: Mecz[] = [];

  wynik:Map<string, Cegla[]> = new Map;


  unikalnaListaSetow: Mecz[] = [];

  constructor() {}



  ngOnInit(): void {
    let set = new Set<string>();
    let listaUnikalnychSetow = [];
    let zmienna = new Map();

    Object.keys(typy).forEach((klucz, index) => {
      if(index > 0){
 
        zmienna[klucz] = this.prepareMecz(klucz);


      }


    });

    this.wynik = zmienna;

    console.log(zmienna)

    

    // //////////////////
    // this.game['Turcja_-_Wochy'].forEach((element) => {
    //   set.add(element);
    // });
    // // let dupa1: Array<string>;

    // let dupa = Array.from(set).sort();

    // // console.log(dupa)

    // dupa.forEach((elementSet) => {
    //   this.myarray = [];
    //   // console.log("leci po secie")

    //   this.game['Turcja_-_Wochy'].forEach((element, index) => {
    //     // console.log("leci po wynikach")

    //     if (elementSet == element) {
    //       // console.log("pushh"+ elementSet + element)
    //       this.myarray.push(index);
    //     }
    //   });
    //   this.cegla[elementSet] = this.myarray;
    // }); ///////////////////////////////////

    // console.log(this.cegla);

    //Add values

    // console.log(set)
  }

  private prepareMecz(meczName: string) {
    this.listaCegiel = []
    let set = new Set<string>();
    let array = [];
    var cegielka = new Cegla();
    let ostatniegowno= [];
    this.game[meczName].forEach((element) => {
      set.add(element);
    });

    let dupa = Array.from(set).sort();
    

    dupa.forEach((elementSet) => {
      array = [];
      var cegielka = new Cegla();

      this.game[meczName].forEach((element, index) => {
        if (elementSet == element) {
          array.push(index);
        }
      });
      // var cegielka = new Cegla();
      this.cegla[elementSet] = array;
      cegielka[elementSet] = array;


      // console.log(cegielka)
      this.listaCegiel.push(cegielka);
      
    });
    return this.listaCegiel;
  }
}

export class Cegla {
  [key: string]: number[];
}

export class Mecz {
  name: string;
  mapa = new Map(); // 1:0 [tomek, romek, atomek],
}
