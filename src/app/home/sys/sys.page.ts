import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonTabButton,
  IonIcon,
  IonTabs,
  IonTabBar,
  IonLabel,
  IonRouterOutlet,
} from "@ionic/angular/standalone";

@Component({
  selector: "app-sys",
  templateUrl: "./sys.page.html",
  styleUrls: ["./sys.page.scss"],
  standalone: true,
  imports: [
    IonRouterOutlet,
    IonLabel,
    IonTabBar,
    IonTabs,
    IonIcon,
    IonTabButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class SysPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
