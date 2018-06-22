import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the TimePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    let parts = value.split(":");
    if (parts[0].length == 1)  parts[0] = "0"+parts[0];
    if (parts[1].length == 1)  parts[1] = "0"+parts[1];
    return parts[0]+":"+parts[1];
  }
}
