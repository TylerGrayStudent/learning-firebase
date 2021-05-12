import { Component, OnInit } from '@angular/core';
import { PhotosService } from './../../../../shared/services/photos/photos.service';
import { ToolboxService } from './../../../../shared/services/toolbox.service';

@Component({
  selector: 'app-photo-uploader',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.scss'],
})
export class PhotoUploadComponent implements OnInit {
  constructor(
    private photosService: PhotosService,
    private toolbox: ToolboxService
  ) {}

  ngOnInit(): void {}

  onFileSelect(event: any): void {
    const file = event.target.files[0];
    this.photosService.uploadPhoto(file);
  }
}
