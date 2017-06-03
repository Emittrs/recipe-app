import { Injectable } from '@angular/core';

declare let toastr: any;

@Injectable()
export class ToastrService{
  success(title:string){
    toastr.success(title);
  }

  error(title:string){
    toastr.error(title)
  }
}
