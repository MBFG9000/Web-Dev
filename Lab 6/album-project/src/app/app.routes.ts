import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumsDetailComponent } from './albums-detail/albums-detail.component';
import { AlbumsPhotosComponent } from './albums-photos/albums-photos.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    {
        path:'home',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path:'about',
        component: AboutComponent,
        title: 'About'
    },
    {
        path:'albums',
        component: AlbumsComponent,
        title: 'Albums'
    },
    {
        path: 'albums/:id',
        component: AlbumsDetailComponent,
    },
    {
        path: 'albums/:id/photos',
        component: AlbumsPhotosComponent
    }
];
