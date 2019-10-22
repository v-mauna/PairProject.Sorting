

describe('Bubble Sort', function(){
    beforeAll(function () {
        spyOn( swapNums, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
      });
      it('calls the swap function', function () {
        swapNums.bubbleSort([3,5,2,9,25,1,65,88,0]);
        expect(swapNums.swap.calls.count()).toEqual(15);
      });
    it('handles an empty array', function(){
      expect( swapNums.bubbleSort([]) ).toEqual( [] );
    });
it('sorts an array', function(){
      expect( swapNums.bubbleSort([7,13,5,9,6,4,35,28,98])). toEqual([4,5,6,7,9,13,28,35,98])
    })
    it('can handle multiple arrays.', function(){
      expect( swapNums.bubbleSort([5,10],[3,1,9],[1,0,6])).toEqual([5,10],[1,3,9],[0,1,6])
  })
});