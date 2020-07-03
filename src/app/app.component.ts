import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Publication } from './Types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  publications: Publication[];
  //relations: FeedItem;
  loading: boolean;

  constructor(private apiService: ApiService) {
    this.publications = [];
    this.loading = true;
  }
  async ngOnInit(): Promise<void> {
    this.publications = await this.apiService.getPublications();
    //this.relations = await this.apiService.getNbRelations();
    this.loading = false;
  }
}
