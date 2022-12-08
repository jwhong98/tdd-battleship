function ship(length) {
  this.timesHit = 0;
  this.sunk = false;
  const hit = () => {
    this.timesHit += 1;
  };
  //   const isSunk = () => {

  //   }

  return { length, timesHit, sunk, hit };
}

module.exports = ship;
