const covid19ImpactEstimator = (data) => {
  const impact = {};
  const severeImpact = {};
  const bedForPostiveCases = (0.35 * data.totalHospitalBeds);
  const avgY = data.region.avgDailyIncomeInUSD;
  const populationOfIncome = data.region.avgDailyIncomePopulation;
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
    // challenge_3
    const impactICU = Math.trunc(0.05 * impact.infectionsByRequestedTime);
    const severeICU = Math.trunc(0.05 * severeImpact.infectionsByRequestedTime);
    const impactVentilators = Math.trunc(0.02 * impact.infectionsByRequestedTime);
    const severeVentilators = Math.trunc(0.02 * severeImpact.infectionsByRequestedTime);
  impact.casesForICUByRequestedTime = impactICU;
  severeImpact.casesForICUByRequestedTime = severeICU;
  impact.casesForVentilatorsByRequestedTime = impactVentilators;
  severeImpact.casesForVentilatorsByRequestedTime = severeVentilators;
  // dollarsInFlight computing
  const impactReq = impact.infectionsByRequestedTime;
  const severeReq = severeImpact.infectionsByRequestedTime;
  impact.dollarsInFlight = impactReq * populationOfIncome * avgY * days;
  severeImpact.dollarsInFlight = severeReq * populationOfIncome * avgY * days;
  // return
  return {
    data,
    impact,
    severeImpact
  };
};

export default covid19ImpactEstimator;
