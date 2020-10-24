import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    if(!value)return null;
    if(!args)return value;

    args = args.toLowerCase();
    console.log(args)
    return value.filter((val) => {
      let rVal = (val.pName.toLocaleLowerCase().includes(args)) || (val.pDescription.toLocaleLowerCase().includes(args));
      return rVal;
    })
}

}
