const app = angular.module('CarantineApp', []);

app.controller('CarantineController', function () {

    this.state = "STOPPED";

    this.up = function () { console.log("up"); };
    this.down = function () { console.log("down"); };
    this.left = function () { console.log("left"); };
    this.right = function () { console.log("right"); };
    this.stop = function () { console.log("stop"); };

    // TODO: values to be updated from actual readings.
    this.sensors = [
        {
            pos: "left",
            value: 12.34
        },
        {
            pos: "center",
            value: 56.78
        },
        {
            pos: "right",
            value: 90.12
        }
    ];


});