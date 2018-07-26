import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisCenterComponent }     from './crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import { CrisisListComponent }       from './crisis-list.component';
import { crisisdetailCponent }     from './detail-crisis.component';
import { AuthGuard }                from '../auth-guard.service';
const CrisisCenterRoutes: Routes = [
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    canActivate: [AuthGuard],
    
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {
            path: ':order',
            canActivateChild: [AuthGuard],
            component: crisisdetailCponent
          },
          {
            path: '',
            component: CrisisCenterHomeComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(CrisisCenterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CrisisCenterRoutingModule { }