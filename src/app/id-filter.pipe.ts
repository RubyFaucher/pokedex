import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "idFilter",
})
export class IdFilterPipe implements PipeTransform {
  transform(value: any, input: any): any {
    if (input) {
      return value.filter((val) => val.id == input);
    } else {
      return value;
    }
  }
}
