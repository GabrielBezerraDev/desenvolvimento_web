import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAlunoComponent } from './table-aluno.component';

describe('TableAlunoComponent', () => {
  let component: TableAlunoComponent;
  let fixture: ComponentFixture<TableAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableAlunoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
