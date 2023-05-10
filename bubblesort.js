function swap(arr, i) {
  let arr1 = arr[i];
  let arr2 = arr[i + 1];

  arr[i] = arr2;
  arr[i + 1] = arr1;
}


function bubbleSort(arr) {

for(var i=0;i<arr.length;i++){
    if(arr[i]>arr[i+1] && arr[i+1] ){swap(arr,i)}
}
for(var i=0;i<arr.length;i++){
    if(arr[i]>arr[i+1] && arr[i+1]){
        return bubbleSort(arr)
    }
}
return arr;
}
