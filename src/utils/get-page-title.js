const title = process.env.VUE_APP_TITLE || "museui-vue-template";

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`;
  }
  return `${title}`;
}
