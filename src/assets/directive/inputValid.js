/*
 * @name: inpurValid
 * @auther: 10536
 * @date:2020/8/8 13:44
 * @description:inpurValid
 * @update:2020/8/8 13:44
*/
export default function (el) {
  const input = el
  input.onkeyup = function (e) {
    if (e.target.value.length === 1) {
      e.target.value = e.target.value.replace(/[^0-9]/g, '')
    } else {
      e.target.value = e.target.value.replace(/[^\d]/g, '')
    }
  }
}
