import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface ApiImage {
  _id: string;
  name: string;
  createdAt: Date;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiImagenService {

  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getImages() {
    return this.http.get<ApiImage[]>(`${this.url}/image`);
  }

  uploadImageFile(file: File) {
    const ext = file.name.split('.').pop();
    const formData = new FormData();
    formData.append('file', file, `myimage.${ext}`);
    formData.append('name', file.name);
    return this.http.post(`${this.url}/image`, formData);
  }

  deleteImage(id) {
    return this.http.delete(`${this.url}/image/${id}`);
  }
}
