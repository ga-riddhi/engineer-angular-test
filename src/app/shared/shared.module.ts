import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SearchPipe } from './pipes/search.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { AlgoliaService } from './services/algolia.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  declarations: [
    ModalComponent,
    SearchPipe
  ],
  exports: [
    ModalComponent,
    SearchPipe,
    FormsModule
  ],
  providers: [
    AlgoliaService
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class SharedModule { }
