import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';
import { AlunoService } from '../../services/aluno/aluno.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoProtocol } from '../../shared/interfaces/Aluno/AlunoProtocol';
import { AlunoProtocolPatch } from '../../shared/interfaces/Aluno/AlunoPatchProtocol';

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
  public idObject = {} as Id;
  public message: Message = {severity:'success',summary:'Cadastrado!',detail:'Cadastrado com sucesso!'};
  public getAlunoPatch: AlunoProtocol;
  public alunoPatcher: AlunoProtocolPatch;

  constructor(
    private readonly change: ChangeDetectorRef,
    private readonly formBuilder: FormBuilder,
    private readonly messageService: MessageService,
    private readonly alunoService:AlunoService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
    ){}

  ngOnInit(): void {
    setTimeout(() => this.change.detectChanges(), 1);
    this.setFormGroup();
    this.checkExistId();
  }

  public setFormGroup():void{
    this.aluno = this.formBuilder.group(
      {
        nome: ["", Validators.required],
        matricula: ["", [Validators.required]],
        email: ["", [Validators.required,Validators.email]],
        idade: ["", Validators.required]
      }
    );
  }

  public async checkExistId():Promise<void>{
    this.idObject.id = await new Promise((resolve) => {this.activatedRoute.params.subscribe((value) => resolve((value as Id).id))});
    if(!this.idObject.id) return;
    this.getAlunoPatch = await new Promise((resolve) => this.alunoService.getOneAluno(this.idObject.id).subscribe({next: (value) =>  resolve(value.responseDTO)}));
    console.log(this.getAlunoPatch);
    this.aluno.patchValue(this.getAlunoPatch);
    this.buttonTitle = "Atualizar";
    this.aluno.get("matricula")?.disable();
  }

  public sendForm():void{
    this.idObject.id ? this.sendToPatchMethod() : this.sendToPostMethod();
    setTimeout(() => this.router.navigateByUrl("/table"), 500)
  }

  public changeMessage(message:Message):void{
    this.message = message;
  }

  public emitMessage():void{
    this.messageService.add(this.message);
  }


  public async sendToPatchMethod():Promise<void>{
    this.alunoPatcher = this.aluno.getRawValue();
    this.checkIfAgeIsEqualZero();
    this.checkIfFormValuesIsValid();
    this.callPatchMethod();
    this.changeMessage({severity:'success',summary:'Atualizado!',detail:'Atualizado com sucesso!'});
    this.emitMessage();
  }

  public checkIfFormValuesIsValid():void{
    let keyAndValues: Array<String> = Object.keys(this.alunoPatcher);
    keyAndValues.forEach((key:String) => {
      if(!this.alunoPatcher[key as keyof AlunoProtocolPatch]) this.alunoPatcher[key as keyof AlunoProtocolPatch] = undefined;
    });
  }

  public checkIfAgeIsEqualZero():void{
    if(Number(this.alunoPatcher.idade) === 0) this.alunoPatcher.idade = this.getAlunoPatch.idade;
  }

  public sendToPostMethod():void{

    !this.aluno.valid
    ? this.changeMessage({severity:'error',summary:'Algo deu errado!',detail:'Não foi possível cadastrar o aluno'})
    : this.callPostMethod();

    this.emitMessage();
  }

  public async callPostMethod():Promise<void>{
    await new Promise((resolve) => this.alunoService.postAluno(this.aluno.getRawValue()).subscribe({next: () => resolve('')}));
  }

  public async callPatchMethod():Promise<void>{
    await new Promise((resolve) => this.alunoService.patchOneAluno(this.idObject.id,this.alunoPatcher).subscribe({next: () => resolve('')}));
  }

}
