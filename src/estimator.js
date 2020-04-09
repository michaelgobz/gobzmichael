const covid19ImpactEstimator = (data) => {
  const impact = {};
  const severeImpact = {};
  const bedForPostiveCases = (0.35 * data.totalHospitalBeds);
  // normailse
  if (data.periodType === 'weeks') {
    data.timeToElapse *= 7;
  } else if (data.periodType === 'months') {
    data.timeToElapse *= 30;
  }
  const days = data.timeToElapse;
  // common factor
  const factor = Math.trunc(days / 3);
  // currently_infected
  impact.currentlyInfected = data.reportedCases * 10;
  severeImpact.currentlyInfected = data.reportedCases * 50;
  // requestedByTime
  impact.infectionsByRequestedTime = impact.currentlyInfected * (2 ** factor);
  severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * (2 ** factor);
  // challenge_2
  impact.severeCasesByRequestedTime = 0.15 * impact.infectionsByRequestedTime;
  severeImpact.severeCasesByRequestedTime = 0.15 * severeImpact.infectionsByRequestedTime;
  const impactCases = impact.severeCasesByRequestedTime;
  const severeCases = severeImpact.severeCasesByRequestedTime;
  impact.hospitalBedsByRequestedTime = Math.ceil(bedForPostiveCases - impactCases);
  severeImpact.hospitalBedsByRequestedTime = Math.ceil(bedForPostiveCases - severeCases);

  // return
  return {
    data,
    impact,
    severeImpact
  };
};

export default covid19ImpactEstimator;
