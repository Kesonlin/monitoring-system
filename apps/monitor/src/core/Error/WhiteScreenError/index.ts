import { transformTime } from "@/utils";

interface WhiteScreenErrorType {
  type: "WhiteScreenError";
  timeStamp: string;
}

const rootElements = ["html", "body", "#app", "#root"];

export default class WhiteScreenError {
  public emtyyPoints = 0;
  constructor() {
    this.init();
  }
  init() {
    if (document.readyState === "complete") {
      this.checkPoints();
    } else {
      window.addEventListener("load", this.checkPoints.bind(this));
    }
  }

  checkPoints() {
    const innerWidth = window.innerWidth;
    const innerHeight = window.innerHeight;

    for (let i = 1; i <= 9; i++) {
      const xElm = document.elementFromPoint(
        (innerWidth / 10) * i,
        innerHeight / 2
      );
      const yElm = document.elementFromPoint(
        innerWidth / 10,
        (innerHeight / 10) * i
      );
      console.log(yElm instanceof Element);

      if (this.isRootELements(xElm)) {
        this.emtyyPoints++;
      }

      if (i != 5 && this.isRootELements(yElm)) {
        this.emtyyPoints++;
      }
    }

    console.log("this.emtyyPoints", this.emtyyPoints);

    if (this.emtyyPoints == 17) {
      const info: WhiteScreenErrorType = {
        type: "WhiteScreenError",
        timeStamp: transformTime(),
      };
      this.send();
    }
  }

  isRootELements(elm: Element | null): boolean {
    if (!elm) return true;
    const selector = this.getSelector(elm);
    if (rootElements.indexOf(selector) != -1) {
      return true;
    }
    return false;
  }

  getSelector(elm: Element): string {
    if (elm.id) {
      return "#" + elm.id;
    } else if (elm.className) {
      return (
        "." +
        elm.className
          .split(" ")
          .filter((item) => !!item)
          .join(".")
      );
    } else {
      return elm.nodeName.toLowerCase();
    }
  }

  send() {}
}
