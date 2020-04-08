const covid19ImpactEstimator = (data) => ({
  data: {},
  Impact: {
    currentlyInfected: () => {
      return data.reportedCases * 10;
    },
    infectionsByRequestedTime: () => {
      return Impact.currentlyInfected * 512;
    }
    },
  severeImpact: {
    currentlyInfected: () => {
      return data.reportedCases * 50;
    },
    infectionsByRequestedTime: () => {
      return severeImpact.currentlyInfected * 512;
    }
  }
});
export default covid19ImpactEstimator;
