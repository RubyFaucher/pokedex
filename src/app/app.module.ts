import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { PokemonComponent } from "./pokemon/pokemon.component";
import { NameFilterPipe } from "./name-filter.pipe";
import { IdFilterPipe } from "./id-filter.pipe";
import { TypeFilterPipe } from "./type-filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    NameFilterPipe,
    IdFilterPipe,
    TypeFilterPipe,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
