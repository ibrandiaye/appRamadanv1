import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home2',
    pathMatch: 'full'
  },
  {
    path: 'net-work-page',
    loadChildren: () => import('./pages/net-work-page/net-work-page.module').then( m => m.NetWorkPagePageModule)
  },
  {
    path: 'home2',
    loadChildren: () => import('./pages/home2/home2.module').then( m => m.Home2PageModule)
  },
  {
    path: 'nafila',
    loadChildren: () => import('./pages/nafila/nafila.module').then( m => m.NafilaPageModule)
  },
  {
    path: 'position',
    loadChildren: () => import('./pages/position/position.module').then( m => m.PositionPageModule)
  },
  {
    path: 'priere',
    loadChildren: () => import('./pages/priere/priere.module').then( m => m.PrierePageModule)
  },
  {
    path: 'doua',
    loadChildren: () => import('./pages/doua/doua.module').then( m => m.DouaPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'adhan',
    loadChildren: () => import('./pages/adhan/adhan.module').then( m => m.AdhanPageModule)
  },
  {
    path: 'qibla',
    loadChildren: () => import('./pages/qibla/qibla.module').then( m => m.QiblaPageModule)
  },
  {
    path: 'guid',
    loadChildren: () => import('./pages/guid/guid.module').then( m => m.GuidPageModule)
  },
  {
    path: 'ablutions',
    loadChildren: () => import('./pages/ablutions/ablutions.module').then( m => m.AblutionsPageModule)
  },
  {
    path: 'etapepriere',
    loadChildren: () => import('./pages/etapepriere/etapepriere.module').then( m => m.EtapeprierePageModule)
  },
  {
    path: 'priere-journe',
    loadChildren: () => import('./pages/priere-journe/priere-journe.module').then( m => m.PriereJournePageModule)
  },  {
    path: 'vetement',
    loadChildren: () => import('./pages/vetement/vetement.module').then( m => m.VetementPageModule)
  },
  {
    path: 'calendrier',
    loadChildren: () => import('./pages/calendrier/calendrier.module').then( m => m.CalendrierPageModule)
  },
  {
    path: 'don',
    loadChildren: () => import('./pages/don/don.module').then( m => m.DonPageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then( m => m.SupportPageModule)
  },
  {
    path: 'cj',
    loadChildren: () => import('./pages/cj/cj.module').then( m => m.CjPageModule)
  },
  {
    path: 'pc',
    loadChildren: () => import('./pages/pc/pc.module').then( m => m.PcPageModule)
  },







  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
