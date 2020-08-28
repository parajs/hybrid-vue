import Vue from "vue";
import Clipboard from "clipboard";

function clipboardSuccess() {
  Vue.prototype.$toast.success("拷贝成功！");
}

function clipboardError() {
  Vue.prototype.$toast.success("拷贝失败！");
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
