import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/interfaces/response-login-user.interface';

@Pipe({
  name: 'imageUser'
})
export class ImageUserPipe implements PipeTransform {

  transform(user?:User):string {

    if (!user?.profile_picture) {
      return 'assets/img/no-image.png';
    }
    return '';
  }

}
