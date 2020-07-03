import { Component, OnInit, Input } from '@angular/core';
import { Publication } from '../Types';
@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss'],
})
export class PublicationComponent implements OnInit {
  @Input() publication: Publication;

  showmore: boolean;

  constructor() {
    this.showmore = false;
  }

  ngOnInit(): void {}

  showMore = (): void => {
    this.showmore = !this.showmore;
  };
}
