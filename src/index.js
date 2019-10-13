
const TimeHourOptions  = require("./.internal/TimeHourOptions.json");

const defaultProps = {
    min: null,
    max: null,
    is24: false,
    currentOptions: [],
};
class TimeAutocompleteCore {

    constructor(namedProperties) {
        const config = {
            min: null,
            max: null,
            is24: false,
            ...namedProperties,
        };
        super(config);
        this.currentOptions = [];
    }

    setMin(newValue) {
        this.min = newValue || null;
    }

    setMax(newValue) {
        this.max = newValue|| null;
    }

    setIs24(newValue) {
        this.is24 = !!newValue;
    }

    loadConfig(configChanges) {
        if (!configChanges) {
            /** nothing to change */
            return;
        }
        Object.keys(configChanges).map((configKey) => {
            this[configKey] = configChanges[configKey];
        })

    }

    getOptions(input, config) {
        this.loadConfig(config);
        

    }


}