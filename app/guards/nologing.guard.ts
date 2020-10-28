import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class NologingGuard implements CanActivate {

  constructor(private AuthGuardado: AngularFireAuth, private ruta: Router){}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return this.AuthGuardado.authState.pipe(map( auth => {
        console.log(auth);
        if(isNullOrUndefined(auth)){
          
          return true;
        }else{
          this.ruta.navigate(['/inbox']);
          return false;
        }
        //return false;
      }))
  }
  
}
