import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform {

  transform(value: string): string {
    let temp: string ="";
    var i = value.length;
    while (i>0) {
        temp += value.substring(i-1,i);
        i--;
    }
    console.log("----->"+temp);
    return temp;
  }

}
