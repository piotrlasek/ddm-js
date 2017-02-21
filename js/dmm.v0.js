/**
 * Created by Piotr Lasek on 16.02.2017.
 */


/**
 * Data Matrix Manager class
 */
function DMM(url) {

    this.url = url;

    /**
     *
     * @param callback
     */
    this.getData = function(boundingBox, callback) {
        console.log("getData");
        var restURL = this.getURL() + boundingBox.getParameters();
        console.log("Getting data from " + restURL);

        $.getJSON(restURL, function (data) {
            console.log("Data fetched: " + data);
            callback(data);
        });
    }

    /**
     *
     * @returns {string}
     */
    this.getURL = function() {
        return this.url;
    }
}


/**
 * Axis class
 */
function Axis() {



}


/**
 * Bounding Box class
 *
 * @param min
 * @param max
 * @constructor
 */
function BoundingBox(min, max) {

    /**
     *
     * @param stratumNumber
     */
    this.setStratum = function(stratumNumber) {
        this.stratumNumber = stratumNumber;
    }

    /**
     *
     * @param min
     */
    this.setMin = function(min) {
        this.min = min;
    }

    /**
     *
     * @param max
     */
    this.setMax = function(max) {
        this.max = max;
    }

    /**
     *
     * @returns {*}
     */
    this.getMin = function() {
        return this.min;
    }

    /**
     *
     * @returns {*}
     */
    this.getMax = function() {
        return this.max;
    }

    /**
     *
     * @returns {string}
     */
    this.getParameters = function() {
        return "strata.json";
    }
}


