import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToolboxService } from './../toolbox.service';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(
    private storage: AngularFireStorage,
    private toolbox: ToolboxService
  ) {}

  uploadPhoto(file: File): Observable<number> {
    const task = this.storage.ref('b').put(file);
    this.toolbox.upload(
      task
        .snapshotChanges()
        .pipe(map((s: any) => (s.bytesTransferred / s.totalBytes) * 100))
    );
    return this.toolbox.progress$;
  }
}
