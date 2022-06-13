import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Team } from '../models/Team';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  constructor(private http: HttpClient) {}


  addPlayer(team: Team): Observable<any> {
    return this.http.post(
      environment.API,
      {
        player: team.player,
        teamName: team.teamName
      },
      httpOptions
    );
  }

  getAllTeams(): Observable<any> {
    return this.http.get(environment.API);
  }
}
