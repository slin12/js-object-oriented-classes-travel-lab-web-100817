class Driver {
  constructor(name, startDay) {
    this.name = name;
    this.startDate = new Date(startDay);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear() - 1;
  }
}

class Route {
  constructor(beginningLocation, endLocation) {
    this.beginningLocation = beginningLocation;
    this.endLocation = endLocation;
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    const northSouthBlocks = Math.abs(this.beginningLocation.vertical - this.endLocation.vertical)
    const eastWestBlocks = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endLocation.horizontal));
    return northSouthBlocks + eastWestBlocks;
  }

  estimatedTime(peak) {
    if (peak === true) {
      return this.blocksTravelled() / 2;
    }
    else {
      return this.blocksTravelled() / 3;
    }
  }
}
