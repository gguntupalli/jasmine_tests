describe("Player", function() {
  var player;
  var song;

  beforeEach(function() {
    player = new Player();
    song = new Song();
  });

  it("should be able to play a Song", function() {
    this.fail(Error('implement me!'));
  });

  describe("when song has been paused", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function() {
      this.fail(Error('implement me!'));
    });

    it("should be possible to resume", function() {
      this.fail(Error('implement me!'));
    });
  });

  // demonstrates use of spies to intercept and test method calls
  it("tells the current song if the user has made it a favorite", function() {
    this.fail(Error('implement me!'));
  });

  //demonstrates use of expected exceptions
  describe("#resume", function() {
    this.fail(Error('implement me!'));
  });
});
