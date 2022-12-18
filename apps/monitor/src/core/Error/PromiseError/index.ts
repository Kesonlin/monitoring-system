import { getSelector, transformTime } from "@/utils";

interface PromiseErrorType {
  type: "PromiseError";
  message: string;
  filename: string;
  stack: string;
  selector: string;
  timeStamp: string;
}

export default class PromiseError {
  public collection: PromiseErrorType[] = [];
  constructor(public parent: ErrorMonitor) {
    this.parent = parent;
    this.init();
  }

  init() {
    window.addEventListener(
      "unhandledrejection",
      (event) => {
        if (event instanceof PromiseRejectionEvent) {
          console.log(event);
          const paths = this.parent.endEvent.path;
          //   console.log(this.parent.endEvent);

          //   console.log(paths.length);

          const { reason } = event;
          this.collection.push({
            type: "PromiseError",
            message:
              reason && typeof reason === "object" ? reason.message : reason,
            filename: "",
            stack: reason?.stack ? reason.stack : "",
            timeStamp: transformTime(),
            selector: getSelector(paths),
          });
        }
      },
      true
    );
  }
}
