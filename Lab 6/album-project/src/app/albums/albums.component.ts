import { Component, inject, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Album } from '../../models/Album';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-albums',
  imports: [CommonModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  albums: Album[] = [];
  service:AlbumsService = inject(AlbumsService);
  router: Router = inject(Router); 

  constructor() {}

  ngOnInit() {  //lifecycle hook 
    this.service.getAlbums().subscribe({
      next: (albums: any[]) => {
        this.albums = albums;
      },
      error: (err) => {
        console.error('Ошибка при загрузке альбомов:', err);
      }
    });
  }

  viewAlbum(id: number) {
    this.router.navigate(['/albums', id]);
    console.log(id);
  }

  deleteAlbum(id: number, event: Event) {
    event.stopPropagation(); // Предотвращаем вызов `viewAlbum()`
  
    this.service.deleteAlbum(id).subscribe({
      next: () => {
        this.albums = this.albums.filter(album => album.id !== id);
        console.log(`Альбом с id=${id} удалён`);
      },
      error: (err) => {
        console.error(`Ошибка при удалении альбома с id=${id}:`, err);
      }
    });
  }
}

