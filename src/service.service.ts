
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ServiceService {
	constructor(private http: HttpClient) {}

	// Example method
	getData(url: string): Observable<any> {
		return this.http.get(url);
	}
}
