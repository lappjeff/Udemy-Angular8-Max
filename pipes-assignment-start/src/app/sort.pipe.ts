import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort"
})
export class SortPipe implements PipeTransform {
  transform(value: any, sortProperty: string): any {
    if (value.length === 0) {
      return value;
    } else {
      return value.sort((a, b) => {
        if (a[sortProperty] > b[sortProperty]) {
          return 1;
        } else {
          return -1;
        }
      });
    }
  }
}
