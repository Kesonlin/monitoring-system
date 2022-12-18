import JSError from "./JsError";
import PromiseError from "./PromiseError";
import REsourceError from "./ResourceError";

export class ErrorMonitor {
  JsError: JSError;
  ResourceError: REsourceError;
  PromiseError: PromiseError;
  endEvent: Event | null = null;
  constructor() {
    this.getEndEvent();
    this.JsError = new JSError(this);
    this.PromiseError = new PromiseError(this);
    this.ResourceError = new REsourceError(this);
  }

  getEndEvent() {
    const eventArr = ["click", "touchstart", "mousedown", "keydown", "input"];
    eventArr.forEach((eventType) => {
      document.addEventListener(eventType, (event) => {
        this.endEvent = event;
      });
    });
  }

  test() {
    console.log(this.JsError);
    console.log(this.PromiseError);
    console.log(this.ResourceError);
  }
}
