import { getSelector, transformTime } from "@/utils";

interface ResourceErrorMagType {
  type: "ResourceType";
  message: string;
  timeStamp: string;
  selector: string;
  filename: string;
  tagName: string;
}

export default class REsourceError {
  public collection: ResourceErrorMagType[] = [];
  constructor(public parent: ErrorMonitor) {
    // this.parent = parent
    this.init();
  }

  init() {
    window.addEventListener(
      "error",
      (event) => {
        if (event instanceof ErrorEvent) return;
        console.log(event);
        const target = event["target"];
        console.dir(target);

        const { timeStamp } = event;
        const { src, href, link } = target;
        const paths = this.parent.endEvent.path;
        console.log(src);
        console.log(link);

        const message = `can not find resource ${src}`;
        this.collection.push({
          type: "ResourceType",
          message,
          tagName: target["localName"],
          timeStamp: transformTime(),
          selector: getSelector(paths),
          filename: src || href || link,
        });
        // console.log(event.message);
      },
      true
    );
  }
}
