const covid19ImpactEstimator = (data) => {
    return {
        data: {},
        Impact: {
            currentlyInfected: () => {
                return reportedCases * 10;
            },
            infectionsByRequestedTime: () => {
                currentlyInfected * 512;
            }
        },
        severeImpact: {
            currentlyInfected: () => {
                return reportedCases * 50;
            },
            infectionsByRequestedTime: () => {
                currentlyInfected * 512;
            }
        }

    }
}

export default covid19ImpactEstimator;
