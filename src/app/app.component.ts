import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { StepPoint } from "./steps/steps.interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent implements OnInit, AfterViewInit {
  activeWidth = "0%";

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
      index: "60%",
      title: "枢纽发车时间",
      subTitle: "（已超14小时）",
      description: "2019/08/02 12:00"
    },
    {
      index: "62%",
      title: "干线到达时间",
      description: "2019/08/02 12:00"
    }
    // {
    //   index: "92%",
    //   title: "全链路超时：10小时",
    //   description: "签收时间：2019/08/08 10:00",
    //   contentBackground: "red",
    //   contentColor: "white"
    // }
  ];

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.activeWidth = "92%";
      this.activePoint.index = "92%";
    }, 200);
  }

  ngAfterViewInit() {}
}
