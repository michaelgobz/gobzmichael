// impact case requested by time
const impactInfectionsByRequestedTime = (data) => {
  if (data === 'days') {
    return (Math.trunc(data.timeToElapse / 3));
  } if (data === 'weeks') {
    return (Math.trunc(((data.timeToElapse * 7) / 3)));
  } if (data === 'months') {
    return (Math.trunc(((data.timeToElapse * 30) / 3)));
  }
  return null;
};
// severeImpact cases requeted by time
const severeInfectionsByRequestTime = (data) => {
  if (data === 'days') {
    return (Math.trunc(data.timeToElapse / 3));
  } if (data === 'weeks') {
    return (Math.trunc(((data.timeToElapse * 7) / 3)));
  } if (data === 'months') {
    return (Math.trunc(((data.timeToElapse * 30) / 3)));
  }
  return null;
};
// mother function
const covid19ImpactEstimator = (data) => ({
  data: {
    region: {
      name: 'Africa',
      avgAge: 19.7,
      avgDailyIncomeInUSD: 5,
      avgDailyIncomePopulation: 0.71
    },
    periodType: 'days',
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
  },
  Impact: {
    currentlyInfected: data.reportedCases * 10,
    infectionsByRequestedTime: impactInfectionsByRequestedTime()
  },
  severeImpact: {
    currentlyInfected: data.reportedCases * 50,
    infectionsByRequestedTime: severeInfectionsByRequestTime()
  }
});

export default covid19ImpactEstimator;
