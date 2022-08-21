import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Definition } from '../shared/models/def.model';
import { DefinitionsService } from '../shared/services/definitions.service';

@Component({
  selector: 'app-defs-by-letter',
  templateUrl: './defs-by-letter.component.html',
  styleUrls: ['./defs-by-letter.component.sass'],
})
export class DefsByLetterComponent implements OnInit {
  @Input() userCapture: string = '';
  def: any[] = [];
  objDef: Definition[] = [];
  definitions: any;
  finals: any;
  keys: any;
  premieresLettres: any;
  motSaisi: boolean = false;
  templateDefs: any;
  constructor(private definitionsService: DefinitionsService) {}

  ngOnInit(): void {}
  ngOnChanges() {
    this.initDefinitions();
  }
  //
  // <h2>{{ def[0]?.word[0] }}</h2>

  initDefinitions() {
    let obj: any = {};
    let word: string = '';
    let arrByLetter: any[] = [];
    this.definitionsService.getDefinitions().subscribe((dataMock) => {
      for (let [cle, val] of Object.entries(dataMock)) {
        // initialisation de la variable def permettant de récupérer les définitions des mots
        //console.log('VAL', val);
        //console.log('CLE', cle);
        //console.log('VAL WORD', val.word);

        if (
          this.userCapture &&
          this.userCapture.includes(val?.word?.charAt(0))
        ) {
          console.log('word equal', val.word);
          //this.def = arr;
          const obj = {
            word: val.word,
            definition: val.definition,
            nature_word: val.nature_word,
            id: val.id,
            picture: val.picture,
          };
          console.log('OBJ', obj);

          this.objDef?.push(obj);
        }
        console.log('def', this.objDef);
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
