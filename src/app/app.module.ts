import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDefinitionComponent } from './add-definition/add-definition.component';
import { DefsByLetterComponent } from './defs-by-letter/defs-by-letter.component';
import { HttpClientModule } from '@angular/common/http';
import { DefinitionsService } from './shared/services/definitions.service';
import { SearchDefinitionComponent } from './search-definition/search-definition.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddDefinitionComponent,
    DefsByLetterComponent,
    SearchDefinitionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
  ],
  providers: [DefinitionsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
