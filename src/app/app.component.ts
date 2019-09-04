import { Component, OnInit, AfterViewInit } from "@angular/core";
import { StepPoint } from "./steps/steps.interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent implements OnInit, AfterViewInit {
  activePoint: StepPoint = {
    index: "0%",
    title: "全链路剩余时效：2天"
  };

  keyPoints: StepPoint[] = [
    {
      index: "0%",
      title: "开单时间",
      description: "2019/08/02 12:00"
    },
    {
      index: "20%",
      title: "枢纽发车时间",
      description: "2019/08/02 12:00"
    },
    {
      index: "70%",
      title: "干线到达时间",
      description: "2019/08/02 12:00"
    },
    {
      index: "90%",
      title: "签收时间",
      description: "2019/08/02 12:00"
    }
  ];

  extraPoints: StepPoint[] = [
    {
      index: "0%",
      title: "开单时间",
      description: "2019/08/02 12:00"
    },
    {
      index: "30%",
      title: "枢纽发车时间",
      extraTitle: "（已超14小时） ",
      description: "2019/08/02 12:00"
    },
    {
      index: "60%",
      title: "干线到达时间",
      description: "2019/08/02 12:00"
    }
  ];

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.activePoint.index = "75%";
    }, 200);
  }

  ngAfterViewInit() {}
}
