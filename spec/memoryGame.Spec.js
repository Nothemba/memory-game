describe("game onload", function(){
  it ("should load all the cards", function(){
    expect(cards).toBeDefined();
});
  it ("should unlock the board after loading the game", function(){
      expect(lockBoard).toBe(false);
  });
  it ("should unlock the board if the cards are not shuffled", function(){
   
    expect(lockBoard).toBe(false);
  });
  
  it ("cards should not have been fliped", function(){
    expect(hasFlippedCard).toBe(false);
})
});
  // it ("should have front card", function(){
  //     expect(frontCard).toBeDefined();
  // });
  describe("unflipCards", function(){
    it ("should lock board if the card is already flipped", function(){
      expect(lockBoard).toBe(false);
  })
  
});
 
describe("resetGameBoard", function(){
  it ("should have all the cards unflipped", function(){
      expect(lockBoard,hasFlippedCard).toBe(false);
  });
  it ("should have the board unset", function(){
  [hasFlippedCard, lockBoard] = [false, false];
      expect(lockBoard).toBe(false);
  });
  it ("should have back card undefined", function(){
      expect(secondCard).toBe(undefined);
  });
  it ("frontCard should be undefined", function(){
      expect(firstCard).toBe(undefined);
  });
})
describe("shuffleCards", function(){
  it ("should be able to shuffle cards", function(){
      expect(cards).toBeDefined();
  });

});


