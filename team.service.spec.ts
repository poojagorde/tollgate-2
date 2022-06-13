import { TestBed } from '@angular/core/testing';
import { inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TeamService } from './team.service';
import { Team } from '../models/Team';

const teams: Team[] = [
  {
    teamName: "Boston Celtics",
    player: "Matt Ryan",
  },
  {
    teamName: "New York Knicks",
    player: "Obi Toppin",
  },
  {
    teamName: "Indiana Pacers",
    player: "Gabe York",
  }
];

describe('TeamService', () => {
  let service: TeamService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [TeamService]
  }));

  it('should be created', () => {
    const service: TeamService = TestBed.get(TeamService);
    expect(service).toBeTruthy();
  });

  // testing service for getAllTeams method
  it('getAllTeams() should fetch allTeams',
    inject([HttpTestingController, TeamService],
      (httpMock: HttpTestingController, service: TeamService) => {
        // We call the service
        service.getAllTeams().subscribe(data => {
          expect(data.data.length).toBe(3);
          expect(data.data).toEqual(teams);
        });

        // We set the expectations for the HttpClient mock
        const req = httpMock.expectOne('http://localhost:3000/team');
        expect(req.request.method).toEqual('GET');
        // Then we set the fake data to be returned by the mock
        req.flush({ data: teams });
        // httpMock.verify();
      })
  );

  // testing service for add Inventory method
  it('addPlayer() method should add Inventory',
    inject([HttpTestingController, TeamService],
      (httpMock: HttpTestingController, service: TeamService) => {
        const team: Team = {
          player: 'ABC',
          teamName: 'XYZ',
        };
        // We call the service
        service.addPlayer(team).subscribe(data => {
          expect(data.data).toEqual(team);
        });

        // We set the expectations for the HttpClient mock
        const req = httpMock.expectOne('http://localhost:3000/team');
        expect(req.request.method).toEqual('POST');
        // Then we set the fake data to be returned by the mock
        req.flush({ data: team });
        // httpMock.verify();
      })
  );
  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));
});

