import { Component, Input, OnInit, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.scss'
})
export class LoadingSpinnerComponent  implements OnInit{

  public loadingBoolean: WritableSignal<boolean> = signal(false);
  public titleLoading: WritableSignal<string> = signal("Carregando");
  public time: WritableSignal<number> = signal(2000);

  ngOnInit(): void {
    this.loading();
  }

  public loading():void{
    setTimeout(() => {
      if(this.titleLoading() === "Carregando..."){
        this.titleLoading.set("Carregando");
      }else{
        this.titleLoading.update((value) => value + ".");
      }
      this.loading();
    }, 1000);
  }

  public toggleLoading(value:boolean):void{
    value ? this.time.set(1) : this.time.set(600);
    setTimeout(() => {
      this.loadingBoolean.set(value);
    }, this.time())
  }

}
