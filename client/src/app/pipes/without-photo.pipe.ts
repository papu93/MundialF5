import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'withoutPhoto'
})
export class WithoutPhotoPipe implements PipeTransform {

  transform(value: String, args?: any): String {
    const noImage = 'assets/img/no-photo.png';

    if ( !value ) {
      return noImage;
    }

    return (value.length > 0) ? value : noImage;
  }

}
