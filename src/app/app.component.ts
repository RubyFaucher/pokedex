import { Component, OnInit } from "@angular/core";
import * as data from "./seed.json";
import { NameFilterPipe } from "./name-filter.pipe";
import { prepareEventListenerParameters } from "@angular/compiler/src/render3/view/template";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "Pokedex";
  pokemonName: String;
  pokemonId: number;
  pokemonType: String;
  types: any[] = [];
  pokemons: any = (data as any).default;
  breakpoint: any;

  constructor() {}

  ngOnInit() {
    this.listTypes();
    this.breakpoint = window.innerWidth <= 500 ? 1 : 2;
  }
  listTypes() {
    this.pokemons.forEach((pokemon) => {
      pokemon.type.forEach((t) => {
        if (!this.types.includes(t)) {
          this.types.push(t);
        }
      });
    });
  }

  onResize(event) {
    this.breakpoint = event.target.innerWidth <= 500 ? 1 : 2;
  }
}
