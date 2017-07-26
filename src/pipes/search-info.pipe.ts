import { PipeTransform, Pipe } from '@angular/core';

/*users: Array<any> = [
    { name: '1', id: 1 },
    { name: '2', id: 2 },
    { name: '3', id: 3 },
    { name: '4', id: 4 },
    { name: '5', id: 5 },
    { name: '6', id: 6 }
];*/

@Pipe({ name: 'filterUser' })
export class FilterUserPipe implements PipeTransform {


    transform(lists:Array<any>,args: any): any[] {
        var searchCtrl = (data: any) => {
           
            var all = false;
            if (typeof data === 'object') {
                for (var z in data) {
                    if (all = searchCtrl(data[z])) {
                        break;
                    };
                };
            } else {
                if (typeof data === 'number') {
                    all = data === args;
                } else {
                    all = data.toString().match(new RegExp(args, 'i'));
                };
            };
            return all;
        };
        return lists.filter(searchCtrl);

    };

    // transform(allUsers: Array<any>, ...args: any[]): any {
    //     return allUsers.filter(user => user.id > 3);
    // }

};