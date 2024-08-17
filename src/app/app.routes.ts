import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"",
        redirectTo: "table",
        pathMatch: "full"
    },
    {
        path: "home",
        loadChildren: () => import("./modules/home/home.module").then((m) => m.HomeModule),
        pathMatch: "prefix"
    },
    {
        path: "table",
        loadChildren: () => import("./modules/table-aluno/table-aluno.module").then((m) => m.TableAlunoModule),
        pathMatch: "prefix" 
    }
];
