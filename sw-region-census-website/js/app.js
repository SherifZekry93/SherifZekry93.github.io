/**
 * app.js
 * 
 * @author O. Kalu
 * @since 2020-04-05
 * 
 */
"use strict";

$(document).ready(function() {
    $("#censusForm").submit(
        function(event) {
            event.preventDefault();
            const fullName = $("#fullName").val();
            const citizenId = $("#citizenId").val();
            const ssn = $("#ssn").val();
            const state = $("#ddlState").val();
            const senior = $("input[name='radioSeniorCitizen']:checked").val();
            let newDataRow = `<tr><td>${citizenId}</td><td>${ssn}</td><td>${fullName}</td><td>${state}</td><td>${senior}</td></tr>`; 
            $("#tbodyCitizensList").append(newDataRow);
            $("#fullName").val("");
            $("#citizenId").val("");
            $("#ssn").val("");
            $("#ddlState").val("");
            $("#radioradioSeniorCitizenYes").prop("checked", false);
            $("#radioradioSeniorCitizenNo").prop("checked", false);
            $("#fullName").focus();
        }
    );
   
 });