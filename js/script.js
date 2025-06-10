// Copyright (c) 2022 Ms Raffin All rights reserved
// Created by: Kukwac
// Created on: June 2025
// This file contains the JS functions for index.html

"use strict"

/**
* This function displays all numbers from up to the user number */
function numberDisplay() {
    // initalize numbers as an empty string
    let numbers = ""
    let numbers2 = ""
    
    // get the user number
    let userNumMin = parseInt(document.getElementById('minNumber').value)
    let userNumMax = parseInt(document.getElementById('maxNumber').value)
    let counter = userNumMin

    while (counter == userNumMin) {
        // build the string of numbers with a line break each time
        numbers = numbers + counter + "<br>"
        // increment the counter
        counter = counter +1
    }
    while (counter <= userNumMax) {
        // build the string of numbers with a line break each time
        numbers2 = numbers2 + counter + "<br>"
        // increment the counter
        counter = counter +1
    }

    // return the string of numbers back to html
    document.getElementById('min').innerHTML = numbers
    document.getElementById('max').innerHTML = numbers2
}