import { Component, OnInit, Input, TemplateRef } from "@angular/core";
import { StepPoint } from "./steps.interface";

@Component({
  selector: "p-steps",
  templateUrl: "./steps.component.html",
  styleUrls: ["./steps.component.less"]
})
export class StepsComponent implements OnInit {
  @Input() activeBackground = "#1ECB8E";
  @Input() activeWidth = "0%";
  @Input() inactiveBackground = "#EAF0F0";
  @Input() backgroundImage = "url(/assets/total-links/background.png)";

  @Input() activePointColor = "#1ECB8E";
  @Input() activePointContentColor = "white";
  @Input() activePointContentBackground = "#1ECB8E";

  @Input() activePoint: StepPoint = {
    index: "",
    title: "",
    description: ""
  };

  @Input() keyPoints: StepPoint[] = [];
  @Input() extraPoints: StepPoint[] = [];

  constructor() {}

  ngOnInit() {}

  mouseover() {
    console.log(111);
  }
}
