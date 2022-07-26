import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombrepropio'
})
export class NombrepropioPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return null;
  }

}
