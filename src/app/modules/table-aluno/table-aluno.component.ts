import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, signal, ViewChild, WritableSignal } from '@angular/core';
import { AlunoProtocol } from '../../shared/interfaces/Aluno/AlunoProtocol';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AlunoService } from '../../services/aluno/aluno.service';
import { ResponseDTO } from '../../shared/interfaces/ResponseDTO/ResponseDTO';
import { LoadingSpinnerComponent } from '../../shared/modules/loading-spinner/loading-spinner.component';
import { FormControl, FormGroup } from '@angular/forms';
import { Dropdown } from 'primeng/dropdown';


@Component({
  selector: 'app-table-aluno',
  templateUrl: './table-aluno.component.html',
  styleUrl: './table-aluno.component.scss'
})
export class TableAlunoComponent implements AfterViewInit {

@ViewChild(LoadingSpinnerComponent) loadingSpinnerComponent:LoadingSpinnerComponent;


public alunos: WritableSignal<Array<AlunoProtocol>> = signal([]);
public loadingBoolean: WritableSignal<boolean> = signal(false);

constructor(
  private readonly change: ChangeDetectorRef,
  private readonly router:Router,
  private readonly confirmationService: ConfirmationService,
  private readonly messageService: MessageService,
  private readonly alunoService: AlunoService,
  private readonly elementRef: ElementRef
){}



ngAfterViewInit(): void {
  this.getAllAlunos();

}

public getAllAlunos():void{
  setTimeout(async () =>{
    this.change.detectChanges()
    await new Promise((resolve) => {
      this.loadingSpinnerComponent.toggleLoading(true);
      this.alunoService.getAllAlunos().subscribe({
        next: (value) => {
          resolve(this.alunos.set((value as unknown as ResponseDTO<Array<AlunoProtocol>>).responseDTO));
          this.loadingSpinnerComponent.toggleLoading(false);
        }
      })
    })
  }
  ,1);
}


public updateAluno(matriculaId:string):void{
  this.router.navigateByUrl(`/form/${matriculaId}`);

}

public deleteAluno(event:Event,matriculaId:string){
  this.confirmationService.confirm({
    target: event.target as EventTarget,
    message: 'Você deseja deletar esse Aluno?',
    header: 'Deletar Aluno.',
    icon: 'pi pi-info-circle',
    acceptButtonStyleClass:"p-button-danger p-button-text",
    rejectButtonStyleClass:"p-button-text p-button-text",
    acceptIcon:"none",
    rejectIcon:"none",

    accept: () => {
        this.alunoService.deleteOneAluno(matriculaId).subscribe({
          next: () => {
            this.getAllAlunos();
            this.messageService.add({ severity: 'success', summary: 'Deletado!', detail: 'Aluno Deletado!' });
        }
      });
    }
});
}

}
