$(document).ready(function() {
    function updateTime() {
        var d = new Date();
        $("#todayLabel").text(
            d.toUTCString()
        )
        setInterval(updateTime, 1000);
    }
    const allPatients = [];
    const Patient = {
        patientId: "",
        firstName: "",
        exampleInputMiddleName: "",
        exampleInputLastName: "",
        exampleUserDateOfBirth: "",
        exampleUserDepartment: "",
        outPatient: ""
    }
    updateTime();
    $("#exampleCheck2").change(function() {
        $("#tableInfoBody").empty();
        for (let i = 0; i < allPatients.length; i++) {
            const newPatient = allPatients[i];
            if (this.checked) {

                if (newPatient.outPatient == "Yes") {
                    updateGrid(newPatient)
                }
            } else {
                updateGrid(newPatient);
            }

        }
    });

    function updateGrid(patientObject) {
        let newRow = `<tr><td>${patientObject.patientId}</td><td>${patientObject.firstName}</td><td>${patientObject.exampleInputMiddleName}</td><td>${patientObject.exampleInputLastName}</td><td>${patientObject.exampleUserDateOfBirth}</td><td>${patientObject.exampleUserDepartment}</td><td>${patientObject.outPatient}</td></tr>`;
        $("#tableInfoBody").append(newRow);
    }

    $("#userInfoForm").on('submit', function(event) {
            event.preventDefault();
            const newPatient = Object.create(Patient);
            newPatient.patientId = $("#exaampleInputPatientID").val();
            newPatient.firstName = $("#exampleInputFirstName").val();
            newPatient.exampleInputMiddleName = $("#exampleInputMiddleName").val();
            newPatient.exampleInputLastName = $("#exampleInputLastName").val();
            newPatient.exampleUserDateOfBirth = $("#exampleUserDateOfBirth").val();
            newPatient.exampleUserDepartment = $("#exampleUserDepartment").val();
            newPatient.outPatient = $("input[name='seniorCitizenRadio']:checked").val();
            allPatients.push(newPatient);
            updateGrid(newPatient);
            $("#exaampleInputPatientID").val("");
            $("#exampleInputFirstName").val("");
            $("#exampleInputMiddleName").val("");
            $("#exampleInputLastName").val("");
            $("#exampleUserDateOfBirth").val("");
            $("#exampleUserDepartment").val("");
            $("#radioradioSeniorCitizenYes").prop("checked", false);
            $("#radioradioSeniorCitizenNo").prop("checked", false);
        })
        // $("#tableInfoBody").on('click', 'tr', function() {
        //     console.log(this.children)
        //     $("#exampleInputID").val(
        //         this.children[0].innerText
        //     )
        //     $("#exampleInputSocialSecurityNumber").val(
        //         this.children[1].innerText
        //     )
        //     $("#exaampleInputName").val(
        //         this.children[2].innerText
        //     )
        //     $("#exampleUserState").val(
        //         this.children[3].innerText
        //     )
        //     if (this.children[4].innerText == "Yes") {
        //         $("#radioradioSeniorCitizenYes").prop("checked", true);
        //         $("#radioradioSeniorCitizenNo").prop("checked", false);
        //     } else {
        //         $("#radioradioSeniorCitizenYes").prop("checked", false);
        //         $("#radioradioSeniorCitizenNo").prop("checked", true);
        //     }
        // })

})