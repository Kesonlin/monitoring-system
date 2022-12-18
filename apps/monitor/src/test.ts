import SDK from "./index";

const sdk = new SDK();

// const body = document.querySelector("body");
// const jsBtn = document.querySelector(".js-error");
// const zyBtn = document.querySelector(".zy-error");
const test = document.querySelector(".test");

test?.addEventListener("click", () => {
  sdk.test();
});
