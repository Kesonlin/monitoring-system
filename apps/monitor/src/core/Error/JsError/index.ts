import { getSelector, transformStack, transformTime } from "@/utils";

interface JSErrorMsgType {
  type: "JSError";
  message: string;
  filename: string;
  timeStamp: string;
  stack: string;
  selector: string;
}

export default class JSError {
  collection: JSErrorMsgType[] = [];
  constructor(public parent: ErrorMonitor) {
    // console.log(parent);

    this.parent = parent;
    this.init();
  }

  init() {
    window.addEventListener("error", (event) => {
      if (event instanceof ErrorEvent) {
        // console.log(event);
        // console.log(this.parent.endEvent);

        const { message, filename, timeStamp, error } = event;
        this.collection.push({
          type: "JSError",
          message,
          filename,
          timeStamp: transformTime(),
          stack: error.stack ? transformStack(error.stack) : error,
          selector: getSelector(this.parent.endEvent.path),
        });
      }
    });
  }
}
