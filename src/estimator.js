const covid19ImpactEstimator = (data) => ({
  data: {},
  Impact: {
    currentlyInfected: () => data.reportedCases * 10
  },
  severeImpact: {
    currentlyInfected: () => data.reportedCases * 50
  }
});
export default covid19ImpactEstimator;
