const main = require('../main/main');

describe('taxi fee', function () {
    var input;
    beforeEach(function () {
        input = { mileage: 10, time: 4 };
    })

    it('should print correct money', function () {
        spyOn(console, 'log');
        main(input);
        var money = 15;
        expect(console.log).toHaveBeenCalledWith(money);
    })
});
