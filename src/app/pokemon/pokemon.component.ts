import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-pokemon",
  templateUrl: "./pokemon.component.html",
  styleUrls: ["./pokemon.component.css"],
})
export class PokemonComponent implements OnInit {
  _pokemon: any;
  constructor() {}

  ngOnInit(): void {}

  @Input()
  set pokemon(value: any) {
    this._pokemon = value;
  }
}
