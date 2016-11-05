import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'newline',
    pure: false
})
export class NewlinePipe implements PipeTransform {
  transform(value: string, args: string[]): any {
        return value.replace(/(?:\r\n|\r|\n)/g, '<br />');
    }
}