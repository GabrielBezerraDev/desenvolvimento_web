import { AppComponent } from "../../app.component";

export let rootDOM = () =>  (AppComponent.getDocumentHTML()).querySelector(':root') as HTMLElement;

