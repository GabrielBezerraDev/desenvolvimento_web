import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { rootDOM } from '../../shared/utils/HTML-utils';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrl: './aside-menu.component.scss'
})
export class AsideMenuComponent implements OnInit {

  items: Array<MenuItem> | undefined;

  constructor(private readonly elementRef: ElementRef, private readonly router:Router, private readonly changeDetector: ChangeDetectorRef){}

  public pixels: number = 250;

  ngOnInit(): void {
    setTimeout(() => this.changeDetector.detectChanges(), 1)
      this.items = [
        {
            label: 'Alunos',
            items: [
                {
                    label: 'Novo aluno',
                    icon: 'pi pi-plus',
                    command: () => {
                      this.router.navigateByUrl("/form")
                    }
                },
                {
                    label: 'Pesquisar aluno',
                    icon: 'pi pi-search',
                    command: () => {
                      this.router.navigateByUrl("/table");
                    }
                }
            ]
        }
    ];
  }

  public toggleAsideMenu(pixels:number):void{
    let sidebar: HTMLElement = this.elementRef.nativeElement.querySelector("aside");
    let icon: HTMLElement = this.elementRef.nativeElement.querySelector(".icon-menu");
    this.pixels = (() => pixels === 0 ? 250 : 0)();
    rootDOM().style.setProperty("--aside-menu-width",`${this.pixels}px`);
    icon.classList.toggle("flip-x");

    sidebar.classList.toggle("sidebar-close");
  }
}


