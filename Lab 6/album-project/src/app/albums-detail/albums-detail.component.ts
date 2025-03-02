import { Component, inject, OnInit } from '@angular/core';
import { Album } from '../../models/Album';
import { AlbumsService } from '../albums.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-albums-detail',
  imports: [FormsModule, CommonModule],
  templateUrl: './albums-detail.component.html',
  styleUrl: './albums-detail.component.css'
})

export class AlbumsDetailComponent implements OnInit{
  Albumservice:AlbumsService = inject(AlbumsService);
  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);

  Album!:Album;
  editedTitle:string = '';
  
  constructor(){
    
  }
  
  ngOnInit(): void {
    const AlbumID = Number(this.route.snapshot.params['id']);
    
    this.Albumservice.getAlbumByID(AlbumID).subscribe({
      next:data => {
        this.Album = data;
      },
      error:(err) => {
        console.error('Album  downloading not finished:', err)
      }
    })
  }

  saveAlbum() {
    const updatedAlbum = { ...this.Album, title: this.editedTitle };

    this.Albumservice.updateAlbum(updatedAlbum).subscribe({
      next: () => {
        this.Album.title = this.editedTitle; // Обновляем данные
        alert('Альбом успешно обновлён!');
      },
      error: (err) => {
        console.error('Ошибка при обновлении альбома:', err);
      }
    });
  }

  returnToAlbums() {
    this.router.navigate(['/albums']);
  }

  goToPhotos() {
    this.router.navigate([`/albums/${this.Album.id}/photos`]);
  }

}
