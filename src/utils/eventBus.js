/**
 * 事件总线
 * @param {*} Vue
 */
export default function createEventBus(Vue) {
  Vue.prototype.$EventBus = new Vue();
}
