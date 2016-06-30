import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export default class FormatDatePipe implements PipeTransform {
  transform(value: Date, type: string): number {
    let year = value.getFullYear()
      , month = ('0' + (value.getMonth() + 1)).slice(-2)
      , day = ('0' + value.getDate()).slice(-2)
      , hours = ('0' + value.getHours()).slice(-2)
      , minutes = ('0' + value.getMinutes()).slice(-2);

    switch (type) {
      case 'full': return `${ year }-${ month }-${ day } ${ hours }:${ minutes }`;
      case 'date': return `${ year }-${ month }-${ day }`;
      case 'time': return `${ hours }:${ minutes }`;
    }

    return value;
  }
}
