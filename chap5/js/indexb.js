$("#btnCalculate").click(function (e) {
    e.preventDefault();
    // alert("oke nha");
    var staticName = $("#staticName");
    var staticAddress = $("#staticAddress");

    // check input letters
    if (checkInput(staticName)) {
        staticName.next().text("*Error you only enter letters (don't skip)");
        // return;
        // console.log( staticName.next().text("*Error you only enter letters (don't skip)"));
    } else {
        staticName.next().text("");
    }

    if (checkInput(staticAddress)) {
        staticAddress.next().text("*Error you only enter letters (don't skip)");
        // console.log( staticName.next().text("*Error you only enter letters (don't skip)"));
        // return;
    } else {
        staticAddress.next().text("");
    }
    // end
    // numberEnd not < numberStart
    var staticStart = $("#staticStart");
    var staticEnd = $("#staticEnd");

    // validate number 
    // Start
    if (checkNumber(staticStart)) {
        staticStart.next().text("*Error you only enter Number(don't skip)");
        console.log(staticStart.next().text("*Error you only enter Number && than < 0 (don't skip)"));
    } else {
        staticStart.next().text("");
        console.log(staticStart.next().text(""));
    }
    // end
    // end Number
    if (checkNumber(staticEnd)) {
        staticEnd.next().text("*Error you only enter Number(don't skip)");
        console.log(staticEnd.next().text("*Error you only enter Number && than < 0 (don't skip)"));
    } else {
        staticEnd.next().text("");
        console.log(staticEnd.next().text(""));
    }

    var inputNumber = parseFloat(staticEnd.val()) - parseFloat(staticStart.val());
    if (inputNumber < 0) {
        staticEnd.next().text("*Error must be greater than 0");
    }

    // add to table
    if(checkInput(staticName) === false && checkInput(staticAddress) === false && checkNumber(staticStart) === false && checkNumber(staticEnd)=== false){
        //funtion readformdata vs insertval
        var formData = readFormData(); //c2
        insertVal(formData);
    }
    
    // table add
    //  j
   
    // document.getElementById("addInfoTable").style.display = "block";
    // var table = document.getElementById("addInfoTable").getElementsByTagName("tbody")[0];
    // var table = document.getElementsByTagName("tbody")[0];
    // var row = table.insertRow(table.length);
    // var staticVAT = $("#staticVAT");
    // // let specific_tbody = document.getElementById("addInfoTable");
    // //  // jquery ko thể thực hiện insertRoww, chỉ getlement 
    // // let row = specific_tbody.insertRow(-1);
    // // console.log(row);
    // var tang=1;
    // var tab6 = row.insertCell(0);
    // var tab1 = row.insertCell(1);
    // var tab2 = row.insertCell(2);
    // var tab3 = row.insertCell(3);
    // var tab4 = row.insertCell(4);
    // var tab5 = row.insertCell(5);
    // var tab7 = row.insertCell(6);

    // tab6.innerHTML = tang;
    // tab1.innerHTML = staticName.val();
    // tab2.innerHTML = staticAddress.val();
    // tab3.innerHTML = staticStart.val();
    // tab4.innerHTML = staticEnd.val();
    // tab5.innerHTML = staticVAT.val();
    // tab7.innerHTML = "<a href=\"#\">Edit </a>" +
    //          "<a href=\"#\"> Delete</a>";

    // var formData = readFormData(); //c1 
    // insertVal(readFormData());
    //  var formData = readFormData(); //c2
    //  insertVal(formData);

});

function checkInput(obj) {
    var checkInput = /^[^\d+]*[\d+]{0}[^\d+]*$/;
    if (obj.val().trim().length == 0 || !obj.val().match(checkInput)) {
        obj.attr("class", "form-control is-invalid");
        return true;
    } else {
        obj.attr("class", "form-control is-valid");
        
        return false;
    }

}

function checkNumber(number) {
    var valliNumer = /^[0-9., ]+$/;
    if (number.val() <= 0 || !number.val().match(valliNumer) || number.val().trim().length == 0)  {
        number.attr("class", "form-control is-invalid");
        return true;
    } else {
        number.attr("class", "form-control is-valid");
      
        // console.log(x);
        return false;
    }
}

// 
function readFormData() {
    // set data == object == val()
    
    var formData = {};
    formData["STT"] = 1;
    formData["Name"] = $("#staticName").val();
    formData["Address"] = $("#staticAddress").val();
    formData["Start-up period"] = $("#staticStart").val();
    formData["End-of-item digits"] = $("#staticEnd").val();
    formData["VAT"] = $("#staticVAT").val();
    console.log(formData);

    // đang xử lý STT 1---->>>>
    // var formDataChange = formData.map(function(tangSTT){
    //     return tangSTT[0] +1;   
    // });
    // // console.log(formData);\
    // console.log(formDataChange);
    // return formDataChange;
    return formData;
 
    // console.log(formData);
};
function insertVal(data) {
    var i = 1;
    var table = document.getElementById("addInfoTable").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);

    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = i;
    // i+=i;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data["Name"];
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data["Address"];
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data["Start-up period"]
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = data["End-of-item digits"]
    var cell6 = newRow.insertCell(5);
    cell6.innerHTML = data["VAT"];
    var cell7 = newRow.insertCell(6);
    cell7.innerHTML = "<a href=\"#\">Edit </a>" +
        "<a href=\"#\"> Delete</a>";


}

