import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "typeFilter",
})
export class TypeFilterPipe implements PipeTransform {
  transform(value: any, input: any): any {
    if (input) {
      return value.filter((val) => val.type.includes(input));
    } else {
      return value;
    }
  }
}
