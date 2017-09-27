import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items, arg): any {
    if (arg && arg.length > 0) {
      return items.filter(item => {
        const argNum = Number(arg);
        return item.creator.toUpperCase().includes(arg.toUpperCase()) ||
        item.question.toUpperCase().includes(arg.toUpperCase())
      });
    } else {
      return items;
    }
  }

}
