import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'FilterByName'
})
export class FilterByNamePipe implements PipeTransform {
    transform(items: any[] , searchFields: any): any [] {
        if (!items) {
            return [];
        }
        if (!searchFields) {
            return items;
        }

        return items.filter(data => {
            const FULL_NAME = data.firstName + ' ' + data.lastName;
            return FULL_NAME.toLowerCase().includes(searchFields.name.toLowerCase()) &&
            data.country.toLowerCase().includes(searchFields.country.toLowerCase()) ;
        });
    }
}
