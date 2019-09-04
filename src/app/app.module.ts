import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { StepsModule } from "./steps/steps.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StepsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
