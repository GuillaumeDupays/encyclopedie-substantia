import { Component, OnInit } from '@angular/core';
import { Definition } from '../shared/models/def.model';
import { DefinitionsService } from '../shared/services/definitions.service';

@Component({
  selector: 'app-defs-by-letter',
  templateUrl: './defs-by-letter.component.html',
  styleUrls: ['./defs-by-letter.component.sass'],
})
export class DefsByLetterComponent implements OnInit {
  def: any;
  definitions: any;
  premieresLettres: any;
  constructor(private definitionsService: DefinitionsService) {
    this.initDefinitions();
  }

  ngOnInit(): void {}

  initDefinitions() {
    this.definitionsService.getDefinitions().subscribe((dataMock) => {
      dataMock;
      for (let [cle, valeur] of Object.entries(dataMock)) {
        // initialisation de la variable def permettant de récupérer les définitions des mots
        this.def = valeur;
      }
    });
    // tableau d'objet trié par ordre alphabétique
    this.def.sort(this.sortArray);
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
}
