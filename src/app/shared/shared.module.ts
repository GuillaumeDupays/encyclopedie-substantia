import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorWordDirective } from './directives/color-word.directive';
import { FirstLetterPipe } from './pipes/first-letter.pipe';

@NgModule({
  declarations: [ColorWordDirective, FirstLetterPipe],
  imports: [CommonModule],
  exports: [ColorWordDirective, FirstLetterPipe],
})
export class SharedModule {}
