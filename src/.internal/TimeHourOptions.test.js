const TimeHourOptions  = require("./TimeHourOptions.json");

describe('test of TimeHourOptions', () => {

    test("Have correct number of TimeHourOption", () => {
        expect(TimeHourOptions.length).toEqual(24);
    });

    test("All options have correct properties", () => {
        TimeHourOptions.map((TimeHourOption) => {
            expect(Object.keys(TimeHourOption).length).toEqual(4);
            expect(TimeHourOption).toHaveProperty('label');
            expect(TimeHourOption).toHaveProperty('meridian');
            expect(TimeHourOption).toHaveProperty('value12');
            expect(TimeHourOption).toHaveProperty('value24');
        });
    });

    test("all options have correct values", () => {
        TimeHourOptions.map((TimeHourOption, index) => {
            let indexToHour = index || 12;
            let indexToLabel = (indexToHour > 12 ? indexToHour - 12 : indexToHour) + "";
            expect(TimeHourOption.label).toEqual(indexToLabel);
            
            let indexTovalue12 = indexToHour;
            if(indexTovalue12 > 12){
                indexTovalue12 -= 12;
            }
            indexTovalue12 = (indexTovalue12 < 10 ? "0" + indexTovalue12 : indexTovalue12) + "";
            expect(TimeHourOption.value12).toEqual(indexTovalue12);

            const indexTovalue24 = (index < 10 ? "0" + index : "" + index );
            expect(TimeHourOption.value24).toEqual(indexTovalue24);
        });
    });

});