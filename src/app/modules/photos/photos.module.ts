import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { PhotoUploadComponent } from './components/photo-upload/photo-upload.component';
import { PhotosComponent } from './pages/photos-page/photos.component';
import { PhotosRoutingModule } from './photos-routing.module';

@NgModule({
  declarations: [PhotosComponent, PhotoUploadComponent],
  imports: [CommonModule, PhotosRoutingModule, SharedModule],
  exports: [],
})
export class PhotosModule {}
