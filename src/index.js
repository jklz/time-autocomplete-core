
const TimeHourOptions  = require("./.internal/TimeHourOptions.json");

export default class  TimeAutocompleteCore {

    /**
     *
     * @param {Integer} min
     * @param {Integer} max
     * @param {Boolean} is24
     */
    constructor(config) {
        const {min, max, is24} = config || {};
        /** @var Object configuration for object */
        this.config = {
            min: min || null,
            max: max || null,
            is24: !!is24,
        };
        this.currentOptions = [];
    }

    /**
     * update config for min time
     * @param {String} newValue
     */
    setMin(newValue) {
        this.config.min = newValue || null;
    }

    /**
     * update config for max time
     * @param {String} newValue
     */
    setMax(newValue) {
        this.config.max = newValue|| null;
    }

    /**
     * update config for if 24 hour format supported
     * @param {Boolean} newValue
     */
    setIs24(newValue) {
        this.config.is24 = !!newValue;
    }

    /**
     * update config for all properties passed
     * @param {Object} configChanges
     */
    loadConfig(configChanges) {
        if (!configChanges) {
            /** nothing to change */
            return;
        }
        Object.keys(configChanges).map((configKey) => {
            this.config[configKey] = configChanges[configKey];
        });
    }

    /**
     * return current config
     * @returns {Object}
     */
    getConfig() {
        return {
            ...this.config
        };
    }

    /**
     * get time options for display
     * @param String input - current user input time
     * @param Object config - any changes to current config
     */
    getOptions(input, config) {
        this.loadConfig(config);

    }

}