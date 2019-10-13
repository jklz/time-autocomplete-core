
import TimeAutocompleteCore from './index';
describe('Test of Core', () => {
    test('check no config passed', () => {
        const core = new TimeAutocompleteCore();
        const {min, max, is24} = core.getConfig();
        expect(min).toBeNull();
        expect(max).toBeNull();
        expect(is24).toBeFalsy();
    });

    test('check  config passed', () => {
        const core = new TimeAutocompleteCore({min: "1:00", max: "20:00", is24: true});
        const {min, max, is24} = core.getConfig();
        expect(min).toEqual("1:00");
        expect(max).toEqual("20:00");
        expect(is24).toBeTruthy();
    });



    test('check updating config for min', () => {
        const core = new TimeAutocompleteCore({min: "1:00"});
        const config = core.getConfig();
        expect(config.min).toEqual("1:00");
        core.setMin("2:00");
        const config2 = core.getConfig();
        expect(config2.min).toEqual("2:00");
        /** test when we use load config */
        core.loadConfig({min: "1:30"});
        const config3 = core.getConfig();
        expect(config3.min).toEqual("1:30");
        /** test when we use load config for other settings */
        core.loadConfig({max: "10:30"});
        const config4 = core.getConfig();
        expect(config4.min).toEqual("1:30");

    });

    test('check updating config for max', () => {
        const core = new TimeAutocompleteCore({max: "11:00"});
        const config = core.getConfig();
        expect(config.max).toEqual("11:00");
        core.setMax("12:00");
        const config2 = core.getConfig();
        expect(config2.max).toEqual("12:00");
        /** test when we use load config */
        core.loadConfig({max: "11:30"});
        const config3 = core.getConfig();
        expect(config3.max).toEqual("11:30");
        /** test when we use load config for other settings */
        core.loadConfig({min: "1:30"});
        const config4 = core.getConfig();
        expect(config4.max).toEqual("11:30");
    });
    test('check updating config for is24', () => {
        const core = new TimeAutocompleteCore({is24: true});

        expect(core.getConfig().is24).toBeTruthy();
        core.setIs24(false);
        expect(core.getConfig().is24).toBeFalsy();
        core.setIs24(true);
        expect(core.getConfig().is24).toBeTruthy();
        core.setIs24();
        expect(core.getConfig().is24).toBeFalsy();
        core.setIs24("string");
        expect(core.getConfig().is24).toBeTruthy();
        core.setIs24(0);
        expect(core.getConfig().is24).toBeFalsy();
        /** test when we use load config */
        core.loadConfig({max: "11:30"});
        expect(core.getConfig().is24).toBeFalsy();
        /** test when we use load config for other settings */
        core.loadConfig({is24: false});
        expect(core.getConfig().is24).toBeFalsy();
    });
});