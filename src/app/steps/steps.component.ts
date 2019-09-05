import { Component, OnInit, Input } from "@angular/core";
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
  @Input() activePointContentColor = "#FFFFFF";
  @Input() activePointContentBackground = "#1ECB8E";
  @Input() activePoint: StepPoint = null;

  @Input() keyPointColor = "#1ECB8E";
  @Input() keyPointContentColor = "#999999";
  @Input() keyPointContentBackground = "transparent";
  @Input() keyPoints: StepPoint[] = [];

  @Input() extraPointColor = "#F5A623";
  @Input() extraPointContentColor = "#333333";
  @Input() extraPointContentBackground = "#FFFFFF";
  @Input() extraPoints: StepPoint[] = [];

  constructor() {}

  ngOnInit() {}
}
