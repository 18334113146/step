import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StepsComponent } from "./steps.component";
import { NzStringTemplateOutletDirective } from "./string_template_outlet";

@NgModule({
  declarations: [StepsComponent, NzStringTemplateOutletDirective],
  imports: [CommonModule],
  exports: [StepsComponent]
})
export class StepsModule {}
