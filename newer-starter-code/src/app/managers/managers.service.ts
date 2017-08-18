import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ManagersService {

	allManagers = [];

	baseUrl = 'http://localhost:3000';

	getAllManagers() {
		return this.http.get(`${this.baseUrl}/api/managers`);
	}

  constructor(private http: Http) { }

}