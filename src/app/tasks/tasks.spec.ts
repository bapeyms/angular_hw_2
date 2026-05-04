import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('Tasks', () => {
  let component: TasksServ;
  let fixture: ComponentFixture<TasksServ>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksServ],
    }).compileComponents();

    fixture = TestBed.createComponent(TasksServ);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
