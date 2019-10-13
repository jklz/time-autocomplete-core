
import TimeAutocompleteCore from './index';
describe('Test of Core', () => {
    test('check update config', () => {
        const core = new TimeAutocompleteCore();
        const {min, max, is24} = core.getConfig();
        expect(min).toBeNull();
        expect(max).toBeNull();
        expect(is24).toBeFalsy();
    })
});