import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { SearchPipe } from 'src/app/pipe/search.pipe';
import { RouterTestingModule } from '@angular/router/testing';import { Team } from '../models/Team';
import { TeamService } from '../services/team.service';

import { RegistrationFormComponent } from './registration-form.component';

const team: Team[] = [
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

describe('RegistrationFormComponent', () => {
  let component: RegistrationFormComponent;
  let fixture: ComponentFixture<RegistrationFormComponent>;
  let service: TeamService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule, FormsModule, ReactiveFormsModule, RouterTestingModule
      ],
      declarations: [ RegistrationFormComponent, SearchPipe ],
      providers: [RegistrationFormComponent]
    })
    .compileComponents();
    service = TestBed.inject(TeamService);
    spyOn(service, 'getAllTeams').and.returnValue(of(team));
    spyOn(service, 'addPlayer').and.returnValue(of(team));
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(RegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onSubmit() should exists', () => {
    expect(component.onSubmit).toBeTruthy();
  });
  it('ngOnInit() should exists', () => {
    expect(component.ngOnInit).toBeTruthy();
  });

  
  it('postNewPlayer() should call service to add a new player ', () => {
    component.teams = team;
    component.teamFormGroup.value.player = 'Matt Ryan';
    component.teamFormGroup.value.teamName = 'Boston Celtics';

    component.postNewPlayer();
    expect(service.addPlayer).toHaveBeenCalled();
    expect(component.message).toEqual('Player added');
  });


  it('postNewPlayer() should call service to add a new player ', () => {
    component.teams = team;
    component.teamFormGroup.value.player = 'Matt Ryan';
    component.teamFormGroup.value.teamName = 'Boston Celtics';

    component.postNewPlayer();
    expect(service.addPlayer).toHaveBeenCalled();
    expect(component.teamFormGroup.value.player).toEqual(null);
  });


  it('postNewPlayer() should call service to add a new player ', () => {
    component.teams = team;
    component.teamFormGroup.value.player = 'Matt Ryan';
    component.teamFormGroup.value.teamName = 'Boston Celtics';

    component.postNewPlayer();
    expect(service.addPlayer).toHaveBeenCalled();
    expect(component.teamFormGroup.value.teamName).toEqual(null);
  });
});