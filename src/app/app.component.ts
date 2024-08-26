import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { AsideMenuComponent } from './modules/aside-menu/aside-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { AsideMenuModule } from './modules/aside-menu/aside-menu.module';


interface teste{
  label: string,
  icon: string
}

interface MenuItem{
  label: string,
  items: Array<teste>

}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuModule, AsideMenuModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent{
  title = 'desenvolvimento_web';

  public static getDocumentHTML():Document{
    return document;
  }
}
