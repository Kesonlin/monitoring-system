/**
 *
 * @param timeStamp  时间戳
 * 格式化时间
 * @returns
 */

export function transformTime(timeStamp?: number): string {
  const date = timeStamp ? new Date(timeStamp) : new Date();
  const Y = date.getFullYear() + "-";
  const M =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + "-";
  const D = date.getDate() + " ";
  const h = date.getHours() + ":";
  const m = date.getMinutes() + ":";
  const s = date.getSeconds();
  //   console.log(Y + M + D + h + m + s);

  return Y + M + D + h + m + s;
}

export function transformStack(stack: string): string {
  return stack;
}

export function getSelector(paths: Element[]): string {
  //   console.log(paths);

  if (!paths || paths.length <= 0) return "";

  const path = paths[0];

  //   console.dir(path);
  const { localName, id, className, innerHTML } = path;

  return `element:${localName}--id:${id}--classname:${className}--innerText:${innerHTML}`;
}
