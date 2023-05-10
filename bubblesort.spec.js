describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it("Ordena un arreglo desordenado",function(){
        let arr=[4,3,1,2,5];
        bubbleSort(arr);
        expect(arr).toEqual([1,2,3,4,5])
    });
    it("Deja como esta un arreglo que estuviese ordenado",function(){
        let arr=[1,2,3,4,5];
        bubbleSort(arr);
        expect(arr).toEqual([1,2,3,4,5])
    });
    
  });
  

  describe("probando spies",function(){
    it("llama a swap hasta que el arreglo este ordenado",function(){
        spyOn(window,"swap").and.callThrough();
        bubbleSort([2,1,3,4,5]);
        expect(window.swap.calls.count()).toEqual(1);
    })

  })



describe("Function swap",function(){
    it("Toma un arreglo y un indece y swapea el elemento el indice con el siguiente",function(){
        let arr=[1,2,3,4];
        swap(arr,1);
        expect(arr).toEqual([1,3,2,4])
    })
})