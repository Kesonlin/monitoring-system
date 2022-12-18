// import { JSError } from "@error/JsError";
// import { PromiseError } from "@error/PromiseError";
// import ZYError from "@error/ResourceError";
import { ErrorMonitor } from "@error/index";

export default class SDK {
  public Error: ErrorMonitor;
  constructor() {
    this.Error = new ErrorMonitor();
  }
  test() {
    this.Error.test();
  }
}
