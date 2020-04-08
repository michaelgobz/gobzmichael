const covid19ImpactEstimator = (data) => ({
  data: {
      region: {
        name: "Africa",
        avgAge: 19.7,
        avgDailyIncomeInUSD: 5,
        avgDailyIncomePopulation: 0.71
      },
    periodType: "days",
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
    },
  Impact: {
    currentlyInfected: data.reportedCases * 10,
      infectionsByRequestedTime: () => {
        return Impact.currentlyInfected * 512;
      }
  },
  severeImpact: {
      currentlyInfected: data.reportedCases * 50,
      infectionsByRequestedTime: () => {
          return severeImpact.currentlyInfected * 512;
      }

  }
});
export default covid19ImpactEstimator;
