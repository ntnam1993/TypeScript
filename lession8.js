"use strict";
var calculateSalary = function () {
    return 1000000;
};
var calculateSalaryArrow = function (bonus, tax) { return 2000000 + bonus - tax; };
console.log(calculateSalary());
console.log(calculateSalaryArrow(100000, 90000));
