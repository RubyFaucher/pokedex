import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "nameFilter",
})
export class NameFilterPipe implements PipeTransform {
  transform(value: any, input: any): any {
    if (input) {
      return value.filter((val) =>
        val.name.toLowerCase().includes(input.toLowerCase())
      );
    } else {
      return value;
    }
  }
}
