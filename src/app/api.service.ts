import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Feed, FeedItem, ApiKey, Publication } from './Types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  private getApiKey = (): Promise<ApiKey> => {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
      }),
    };
    return this.httpClient
      .post<ApiKey>(
        '/api/v1/account/validate',
        'username=decouverte%2B2%40wizbii.com&password=decouverte&client_id=test&grant_type=password',
        httpOptions
      )
      .toPromise();
  };

  private getDashboard = (apiKey: string): Promise<Feed> => {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${apiKey}`,
        'Access-Control-Allow-Origin': '*',
      }),
    };
    return this.httpClient
      .post<Feed>('/api/v2/dashboard/?direction=newest', {}, httpOptions)
      .toPromise();
  };

  public getPublications = async (): Promise<Publication[]> => {
    const apiKey: string = (await this.getApiKey())['access-token'];

    const dashboard: FeedItem[] = (
      await this.getDashboard(apiKey)
    ).feed_items.feed_items.filter(
      (item: FeedItem) => item.type === 'publication'
    );

    const publications: Publication[] = dashboard.map(
      (item: FeedItem) => item.publication
    );
    return publications;
  };

  public getNbRelations = async (): Promise<FeedItem> => {
    const apiKey: string = (await this.getApiKey())['access-token'];

    const relation: FeedItem = (
      await this.getDashboard(apiKey)
    ).feed_items.feed_items.filter(
      (item: FeedItem) => item.type === 'relation-new'
    )[0];

    return relation;
  };
}
