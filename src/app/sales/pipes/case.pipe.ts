import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'case',
})
export class CasePipe implements PipeTransform {
  transform(value: string, upper: boolean = true): string {
    return (upper) ? value.toUpperCase() : value.toLowerCase();
  }
}
