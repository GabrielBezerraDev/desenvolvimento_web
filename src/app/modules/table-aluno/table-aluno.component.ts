import { AfterViewInit, ChangeDetectorRef, Component, OnInit, signal, WritableSignal } from '@angular/core';
import { AlunoProtocol } from '../../shared/interfaces/Aluno/AlunoProtocol';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AlunoService } from '../../services/aluno/aluno.service';
import { ResponseDTO } from '../../shared/interfaces/ResponseDTO/ResponseDTO';

@Component({
  selector: 'app-table-aluno',
  templateUrl: './table-aluno.component.html',
  styleUrl: './table-aluno.component.scss'
})
export class TableAlunoComponent implements AfterViewInit {

public alunos: WritableSignal<Array<AlunoProtocol>> = signal([]);

constructor(
  private readonly change: ChangeDetectorRef,
  private readonly router:Router,
  private readonly confirmationService: ConfirmationService,
  private readonly messageService: MessageService,
  private readonly alunoService: AlunoService
){}



ngAfterViewInit(): void {
  setTimeout(() =>{
    this.change.detectChanges()
    this.alunoService.getAllAlunos().subscribe({
      next: (value) => {
        this.alunos.set((value as unknown as ResponseDTO<Array<AlunoProtocol>>).responseDTO);
        console.log(this.alunos());
      }
    });
  }
  ,1);
}
public teste():void{
  this.router.navigateByUrl("/form");
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
        this.messageService.add({ severity: 'success', summary: 'Deletado!', detail: 'Aluno Deletado!' });
        this.alunoService.deleteOneAluno(matriculaId).subscribe();
    }
});
}

}
