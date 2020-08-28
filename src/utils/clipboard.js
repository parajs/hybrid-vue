import Clipboard from "clipboard";
import { Notify } from "vant";

function clipboardSuccess() {
  Notify({ type: "success", message: "拷贝成功！" });
}

function clipboardError() {
  Notify({ type: "danger", message: "拷贝失败！" });
}

export default function handleClipboard(text, event) {
  const clipboard = new Clipboard(event.target, {
    text: () => text
  });
  clipboard.on("success", () => {
    clipboardSuccess();
    clipboard.off("error");
    clipboard.off("success");
    clipboard.destroy();
  });
  clipboard.on("error", () => {
    clipboardError();
    clipboard.off("error");
    clipboard.off("success");
    clipboard.destroy();
  });
  clipboard.onClick(event);
}
