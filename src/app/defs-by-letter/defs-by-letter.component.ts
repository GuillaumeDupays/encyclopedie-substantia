import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Definition } from '../shared/models/def.model';
import { DefinitionsService } from '../shared/services/definitions.service';

@Component({
  selector: 'app-defs-by-letter',
  templateUrl: './defs-by-letter.component.html',
  styleUrls: ['./defs-by-letter.component.sass'],
})
export class DefsByLetterComponent implements OnInit {
  def: any[] = [];
  definitions: any;
  finals: any;
  keys: any;
  premieresLettres: any;
  motSaisi: boolean = false;
  templateDefs: any;
  constructor(private definitionsService: DefinitionsService) {
    this.initDefinitions();
  }

  ngOnInit(): void {}

  initDefinitions() {
    let arr = [];
    let arrByLetter: any[] = [];
    this.definitionsService.getDefinitions().subscribe((dataMock) => {
      dataMock;
      console.log('dataMock', dataMock);

      for (let [cle, val] of Object.entries(dataMock)) {
        // initialisation de la variable def permettant de récupérer les définitions des mots
        val?.word?.charAt(0).match('A') ? this.def.push(val) : false;
        console.log('this.defOBJ', this.def);
      }
    });
    // tableau d'objet trié par ordre alphabétique
    this.def.sort(this.sortArray);
  }

  loopGroups() {}

  groupByLetter(tabObj: any, prop: string) {
    return tabObj.reduce(
      (acc: { [x: string]: any[] }, obj: { [x: string]: any }) => {
        const cle = obj[prop].charAt(0);
        if (!acc[cle]) {
          acc[cle] = [];
        }
        acc[cle].push(obj);
        return acc;
      },
      []
    );
  }

  groupAlphabetic(tab: any) {
    return tab.reduce((r: any, e: any) => {
      let group = e.word[0];
      if (!r[group]) {
        r[group] = { group, list: [e] };
      } else {
        r[group].list.push(e);
      }
      return r;
    }, []);
  }

  userCapture(userCapture: string) {
    if (userCapture) {
      this.motSaisi = true;
    }
  }

  // methode pour trier un tableau par ordre alphabétique
  sortArray(a: Definition, b: Definition) {
    if (a.word < b.word) {
      return -1;
    }
    if (a.word > b.word) {
      return 1;
    }
    return 0;
  }

  firstChar(char: string) {
    char.charAt(0);
  }
}
