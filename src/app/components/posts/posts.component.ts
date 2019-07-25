import { Observable, timer } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalComponent } from '../../shared/components/modal/modal.component';
import { AlgoliaService } from '../../shared/services/algolia.service';
import { Algolia } from '../../shared/model/algolia.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
  searchText = '';
  rows: Algolia;
  interval: Observable<number> = timer(0, 1000 * 10);

  constructor(
    private algoliaService: AlgoliaService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.interval.subscribe(data => {
      this.getPosts();
    });
  }

  getPosts() {
    this.algoliaService.getPosts().subscribe(response => {
      this.rows = { ...response };
      this.rows.hits.reverse();
    }, (err) => {
      alert('Unable to get data');
    });
  }

  openModel(row) {
    const modalRef = this.modalService.open(ModalComponent, { size: 'lg' });
    modalRef.componentInstance.data = row;
  }
}
