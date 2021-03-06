/*
 * push：向数组末尾追加
 * pop：删除数组末尾一项
 * shift：删除数组起始一项
 * unshift：向数组起始位置追加内容
 * splice(n,m)：从索引n开始删除m个
 * splice(n,m,x)：从索引n开始删除m个,用x替换删除的部分
 * splice(n,0,x)：把x插入到n之前
 * ===>原有数组都改变
 *
 * slice(n,m)：从索引n开始找到索引为m处(不包括m)，不写m就是找到末尾，slice(0)数组克隆
 * concat：数组拼接
 * join：把数组按照指定的分隔符变为字符串
 * toString：把数组转换为字符串
 * indexOf/lastIndexOf：返回当前项第一次或者最后一次出现位置的索引，如果没有这一项返回-1
 * ======>
 *
 * sort(function(a,b){
 *    return a-b;升序
 *    return b-a;降序
 * })
 * reverse：把数组中的每一项倒过来排列
 */

/*
 * 基于对象键值对的方式实现去重
 */
var ary = [1, 2, 2, 2, 1, 2, 3, 2, 3, 2, 1];
var obj = {};
for (var i = 0; i < ary.length; i++) {
    var item = ary[i];
    //=>每一次存储之前需要判断，现有对象中是否已经包含ITEM这一项了（对象中没有某个属性名，属性值是undefined）
    if (obj[item] !== undefined) {
        //=>把索引i这一项干掉
        ary.splice(i, 1);
        //=>数组塌陷问题
        i--;
    } else {
        obj[item] = item;
    }
}
console.log(ary);

/*依次遍历数组中的每一项，把当前项作为对象中的属性名和属性值存储进去
i=0 1 {1:1}
i=1 2 {1:1,2:2}
i=2 2 每一次存储之前，首先验证一下，现有对象中是否已经包含要存储的这一项了，如果已经包含：数组之前已经存过一次了，那么当前这次要存储的值就是重复的，此时不在存储，直接在数组中把当前项干掉
    [1, 2, (2,) 2, 1, 2, 3, 2, 3, 2, 1]
    我们在数组中把当前项移除掉的时候，后面每一项的索引都要-1（向前进一位），此时如果我们i++了，会跳过一项（数组塌陷问题）
i=2 2 把当前项删除
    [1, 2, (2,) (2,) 1, 2, 3, 2, 3, 2, 1]
i=2 1
    ...
  每当删除数组中某一项之后，i就不要在累加了，还是维持现有的值，由于后面数组塌陷了，现有索引对应的就是之前的下一项内容*/











