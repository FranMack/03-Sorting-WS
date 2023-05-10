function split(array) {
  let arr1;
  let arr2;

  arr1 = array.slice(0, Math.floor(array.length / 2));
  arr2 = array.slice(Math.floor(array.length / 2));

  return [arr1, arr2];
}

function merge(array1, array2) {
  let arrOrdenado = [];

  while (array1.length && array2.length) {
    if (array1[0] <= array2[0]) {
      arrOrdenado.push(array1.shift());
    } else {
      arrOrdenado.push(array2.shift());
    }
  }

  while (array1.length) {
    arrOrdenado.push(array1.shift());
  }
  while (array2.length) {
    arrOrdenado.push(array2.shift());
  }

  return arrOrdenado;
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let firstSplit = split(array);

  let arr1 = firstSplit[0];
  let arr2 = firstSplit[1];

  let arreglo = [arr1, arr2];

  console.log(arreglo);

  let variable1 = mergeSort(arr1);
  let variable2 = mergeSort(arr2);

  return merge(variable1, variable2);
}
