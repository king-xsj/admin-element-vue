/**
 * @description: 数据类型判断方法
 */

export function getType(val: unknown) {
	let type = typeof val;
	if (type !== "object") { // 先进行typeof判断，如果是基本数据类型，直接返回
		return type;
	}
	// 如果typeof判断结果是object的，在进行如下判断
	return Object.prototype.toString.call(val).replace(/^[object (\S+)]$/, "$1");
}
