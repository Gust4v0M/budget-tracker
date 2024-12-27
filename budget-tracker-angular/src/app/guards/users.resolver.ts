import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { ServicesService } from '../services/services.service';
import { inject } from '@angular/core';
import { of } from 'rxjs';
import { Users } from '../models/users';

export const usersResolver: ResolveFn<Users> = (route:  ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

  const userService: ServicesService = inject(ServicesService);


  if(route.params && route.params['id']){
    return userService.list()
  }

  return of({_id: '', name:'', balance:0, userTransactionId:[]});
};
