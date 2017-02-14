import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class EliteApiService {

  private baseUrl = 'https://elite-schedule-app-i2-caf72.firebaseio.com'
  private currentTorney: any = {};

  constructor(private http: Http) { }

public getTournaments(): Observable<any> {
		return this.http.get(`${this.baseUrl}/tournaments.json`)
			.map((response: Response) => <any>response.json())
			.catch(this.handleError);
	}

public getTournamentsData(tourneyId): Observable<any> {
		return this.http.get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`)
			.map((response: Response) => {
         this.currentTorney = <any>response.json();
         console.log(this.currentTorney);
         return this.currentTorney;

      })
	}

public getCurrentTorney() {
  return this.currentTorney;
}

	private handleError(error: Response) {
		return Observable.throw(error);
	}

}
