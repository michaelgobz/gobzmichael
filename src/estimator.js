const covid19ImpactEstimator = (data) => {
    return {
        data: {},
        Impact: {
            currentlyInfected: () => {
                return data.reportedCases * 10;
            },
            infectionsByRequestedTime: () => {
                return this.currentlyInfected * 512;
            }
        },
        severeImpact: {
            currentlyInfected: () => {
                return data.reportedCases * 50;
            },
            infectionsByRequestedTime: () => {
                return  this.currentlyInfected * 512;
            }
        }

    }
}

export default covid19ImpactEstimator;
