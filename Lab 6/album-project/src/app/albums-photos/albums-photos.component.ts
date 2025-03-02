import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Photos } from '../../models/photo';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-albums-photos',
  imports: [CommonModule],
  templateUrl: './albums-photos.component.html',
  styleUrl: './albums-photos.component.css'
})
export class AlbumsPhotosComponent implements OnInit{
  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  service: AlbumsService = inject(AlbumsService);

  photos!:Photos[];
  albumId!:number;

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.params['id']);

    this.service.getAlbumPhotos(this.albumId).subscribe({
      next:(data) => {
        this.photos = data;
      },
      error: (err) => {
        console.error('Image loading error', err);
      }
    }); 
  }

  returnToAlbum(){
    this.router.navigate([`/albums/${this.albumId}`])
  }

}
