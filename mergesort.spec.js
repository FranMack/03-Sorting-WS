describe("split array function",function(){
    it("divide un arreglo en dos",function(){
        expect(split([1,2,3,4])).toEqual([[1,2],[3,4]])
    });
    it("es capas de dividir en dos partes un arreglo con un numero impar de elementos",function(){
      expect(split([1,2,3,4,5])).toEqual([[1,2],[3,4,5]])
  })
})

describe('Merge', function(){
  it('es capaz de combinar dos Arreglos ordenados en uno solo ordenado', function(){
    // testeá el algoritmo
    let arr1=[1,3,5,7];
    let arr2=[2,4,6,8];

    expect(merge(arr1,arr2)).toEqual([1,2,3,4,5,6,7,8])
  });
});

describe("mergeSort",function(){
  it("ordena un arreglo desordenado",function(){
   
    expect(mergeSort([4,3,1,5,6,7,8,2])).toEqual([1,2,3,4,5,6,7,8])
    expect(mergeSort([8,7,6,5,4,3,2,1])).toEqual([1,2,3,4,5,6,7,8])
    expect(mergeSort([3,2,1,4,5,6,8,7])).toEqual([1,2,3,4,5,6,7,8])
  });
  it("Deja como esta un arreglo que estuviese ordenado ",function(){
    let arrOrdenado=[1,2,3,4,5,6,7,8];
    expect(mergeSort(arrOrdenado)).toEqual([1,2,3,4,5,6,7,8])
  })
})


