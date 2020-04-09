const covid19ImpactEstimator = (data) => {
  const impact = {};
  const severeImpact = {};
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
  // return
  return {
    data,
    impact,
    severeImpact
  };
};

export default covid19ImpactEstimator;
