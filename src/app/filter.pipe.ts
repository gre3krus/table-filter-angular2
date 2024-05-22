import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByFirstName'
})
export class FilterByFirstNamePipe implements PipeTransform {
  transform(items: any[], searchQuery: string): any[] {
    if (!items || !searchQuery) {
      return items;
    }
    return items.filter(item =>
      item.first_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
}
