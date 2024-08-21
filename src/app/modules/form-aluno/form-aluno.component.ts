import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';
import { AlunoService } from '../../services/aluno/aluno.service';
import { ActivatedRoute } from '@angular/router';
import { AlunoProtocol } from '../../shared/interfaces/AlunoProtocol';

interface Id{
  id:string;
}

@Component({
  selector: 'app-form-aluno',
  templateUrl: './form-aluno.component.html',
  styleUrl: './form-aluno.component.scss'
})
export class FormAlunoComponent implements OnInit {

  public aluno: FormGroup;
  public buttonTitle: string = "Cadastrar";
  public templateList: [body:AlunoProtocol|null,id?:string|null] = [null,null];
  public idObject: Id;
  public message: Message = {severity:'success',summary:'Cadastrado!',detail:'Cadastrado com sucesso!'};

  constructor(
    private readonly change: ChangeDetectorRef,
    private readonly formBuilder: FormBuilder,
    private readonly messageService: MessageService,
    private readonly alunoService:AlunoService,
    private readonly router: ActivatedRoute
    ){}

  ngOnInit(): void {
    setTimeout(() => this.change.detectChanges(), 1);
    this.aluno = this.formBuilder.group(
      {
        nome: ["", Validators.required],
        matricula: ["", Validators.required],
        email: ["", [Validators.required,Validators.email]],
        idade: ["", Validators.required]
      }
    );
    this.checkExistId();
  }

  public async checkExistId():Promise<void>{
    this.idObject = await new Promise((resolve) => {
      this.router.params.subscribe((value) => resolve(value));
    }).then((value) => value as Id);
    if(this.idObject.id) this.buttonTitle = "Atualizar";
  }

  public sendForm():void{
    if(!this.aluno.valid) {
      console.log(!this.aluno.valid);
      this.message = {severity:'warn',summary:'Algo deu errado!',detail:'Não foi possível cadastrar o aluno'};
    }else{
      this.idObject.id ?
      this.alunoService.patchOneAluno(this.idObject.id,this.aluno.getRawValue() as AlunoProtocol).subscribe({
        next: (value:any) => {
          console.log(value);
        }

      }) :
      this.alunoService.postAluno(this.aluno.getRawValue() as AlunoProtocol).subscribe({
        next: (value) => {
          console.log(value);
        }
      });
    }
    this.messageService.add(this.message);
  }

}
