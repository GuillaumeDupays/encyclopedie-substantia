import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-definition',
  templateUrl: './search-definition.component.html',
  styleUrls: ['./search-definition.component.sass'],
})
export class SearchDefinitionComponent implements OnInit {
  userCapture: string = '';
  constructor() {}

  ngOnInit(): void {}
}
