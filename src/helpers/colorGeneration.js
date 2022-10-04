//==============Variant 1=============
// export function getRandomHexColor(array) {
//   return array.map(obj => {
//     return {
//       ...obj,
//       color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
//     };
//   });
// }
//==============Variant 2=============
export function getRandomHexColor(array) {
  array.forEach(obj => {
    obj.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  });
  return array;
}
