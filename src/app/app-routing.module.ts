import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TemplateComponent } from "./pages/template/template.component";
import { ReactiveComponent } from "./pages/reactive/reactive.component";

const routes: Routes = [
  { path: "template", component: TemplateComponent },
  { path: "reactivos", component: ReactiveComponent },
  { path: "**", pathMatch: "full", redirectTo: "reactivos" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
