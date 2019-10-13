
import _ from 'lodash';
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
        /** get min and max as {hour, min} */
        let min = null;
        if(this.config.min && this.config.min.length){
            min = {
                hour: "00",
                min: "00",
            };
        }
        let max = null;
        if(this.config.max && this.config.max.length) {
            max = {
                hour: "23",
                min: "59",
            };
        }

        /** trim and remove space from input */
        input = (input || "").toLowerCase().trim();
        /** build possible search options from input */
        const inputSearchMain = /^([0-2]?[0-9]{1})[\s:;]?([0-5][0-9]?)\s?(a|am|p|pm)?$/.exec(input);
        const inputSearchSub = /^([0-2]?[0-9]{1})[\s:;]?([0-5][0-9])\s?(a|am|p|pm)?$/.exec(input) || [];

        /** @var array */
        let results = [];

        /**
         * @var Array availableHours
         */
        let availableHours = TimeHourOptions;

        /** if min and max are set, we will filter available to fit */
        if (!!min || !!max) {
            /**
             * @var Object option
             */
           availableHours = availableHours.filter((option) => {
               if (!!min && min.hour > option.value24) {
                   return false
               }
           })
        }
    }

}