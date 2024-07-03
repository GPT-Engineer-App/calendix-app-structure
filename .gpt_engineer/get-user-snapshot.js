import { toPng } from "html-to-image";

export const loadGetUserSnapshotEventListener = () => {
  window.addEventListener("blur", () => {
    toPng(document.body).then((url) => {
      window.top.postMessage({ type: "USER_SNAPSHOT", snapshot: url }, "https://planit-iota.vercel.app");
      window.top.postMessage({ type: "USER_SNAPSHOT", snapshot: url }, "https://run.gptengineer.app");
    });
  });
};
