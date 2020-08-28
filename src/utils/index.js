/**
 * @description: 更新stage
 * @param {Object}
 * @return:
 */
export function mutateState(state, payload) {
  if (typeCheck(state) === "Object" && typeCheck(payload) === "Object") {
    for (const key in payload) {
      state[key] = payload[key];
    }
  } else {
    console.error("state payload expected plain Object");
  }
}

/**
 * @description: 类型检查
 * @param {type}
 * @return: {String}
 */

export function typeCheck(param) {
  return Object.prototype.toString.call(param).slice(8, -1);
}
