const covid19ImpactEstimator = (data) => ({
  data: {},
  Impact: {
    currentlyInfected: () => data.reportedCases * 10,
    infectionsByRequestedTime: () => Impact.currentlyInfected * 512
  },
  severeImpact: {
    currentlyInfected: () => data.reportedCases * 50,
    infectionsByRequestedTime: () => severeImpact.currentlyInfected * 512
  }
});
export default covid19ImpactEstimator;
