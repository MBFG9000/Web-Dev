import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../models/Album';
import { Photos } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http:HttpClient) {

  }
/*
  async getAllAlbums():Promise<Album[]> {
    const data = await fetch(this.apiUrl);
    return await data.json() ?? [];
  }
*/
  getAlbums(){
    return this.http.get<Album[]>(this.apiUrl);
  }
  getAlbumByID(id:number) {
    return this.http.get<Album>(this.apiUrl+'/'+id);
  }
  deleteAlbum(id: number):Observable<void>{//actualy it is not will work because we just connected to the fake api
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.apiUrl}/${album.id}`, album);
  }
  getAlbumPhotos(albumId:number):Observable<Photos[]> {
    return this.http.get<Photos[]>(`${this.apiUrl}/${albumId}/photos`)
  }
}
