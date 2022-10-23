import { animate, style, transition, trigger } from "@angular/animations";

export interface INavbarData {
  routeLink: string;
  icon?: string;
  label?: string;
  expanded?: boolean;
  items?: INavbarData[];
  labelS?: string;
  orderSqe?: string;
  otherItem2?: string;
  otherItem3?: string;
}

export const fadeInOut = trigger("fadeInOut", [
  transition(":enter", [
    style({ opacity: 0 }),
    animate("350ms", style({ opacity: 1 })),
  ]),
  transition(":leave", [
    style({ opacity: 1 }),
    animate("350ms", style({ opacity: 0 })),
  ]),
]);
