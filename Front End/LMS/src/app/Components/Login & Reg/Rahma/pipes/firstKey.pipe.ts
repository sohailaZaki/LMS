import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstKey',
  standalone: false
})
export class FirstKeyPipe implements PipeTransform {
//return the name of error can make in the paasword faild ..
  transform(value: any ): string | null {
    const keys =Object.keys(value);
    if(keys && keys.length>0){
       return keys[0];
    }
    return null;
  }

}
