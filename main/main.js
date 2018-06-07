module.exports = function main(input) {
    var Payment = 0;
    var mileageCost = mileageCostCalculate(input);
    var timeCost = timeCostCalculate(input);
    Payment = Math.ceil(mileageCost + timeCost);

    function mileageCostCalculate(input) {
        var mileageCost = 0;
        if (input.mileage <= 2) {
            mileageCost = 6;
        }
        if (2 < input.mileage <= 8) {
            mileageCost = Number(6 + (input.mileage - 2) * 0.);
        }
        if (input.mileage > 8) {
            mileageCost = Number(6 + (8 - 2) * 0.8 + (input.mileage - 8) * 0.8 * 1.5);
        }
        return mileageCost;
    }

    function timeCostCalculate(input) {
        var timeCost = 0;
        timeCost = Number(input.time * 0.25);
        return timeCost;
    }

    console.log(Payment);
    return Payment;
};