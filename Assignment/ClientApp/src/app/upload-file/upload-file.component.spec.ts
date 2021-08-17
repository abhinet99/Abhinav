import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileComponent } from './upload-file.component';

describe('UploadFileComponent', () => {
  let component: UploadFileComponent;
  let fixture: ComponentFixture<UploadFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'dnd'`, () => {
    const fixture = TestBed.createComponent(UploadFileComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('dnd');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(UploadFileComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('dnd app is running!');
  });
});
