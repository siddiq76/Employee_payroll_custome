function getProfileValue(){
    for (var i = 0; i < document.getElementsByName("profile").length; i++){
        if (document.getElementsByName("profile")[i].checked){
            return document.getElementsByName("profile")[i].value;
        }
    } 
}

const dept = () => {
    let dept = [];
    var hrchecked = document.getElementById('hr').checked;
    var saleschecked = document.getElementById('sales').checked;
    var financechecked = document.getElementById('finance').checked;
    var engineerChecked = document.getElementById('engineer').checked;
    var otherschecked = document.getElementById('others').checked;
    // var res = " ";

    
    if(hrchecked == true){
        var hrcheck = document.getElementById('hr').value;
        // res = hrcheck ;
        dept.push(hrcheck);
    }
    if(saleschecked == true){
        var salescheck = document.getElementById('sales').value;
        // res = salescheck ;
        dept.push(salescheck);
    }
    if(financechecked == true){
        var fincheck = document.getElementById('finance').value;
        // res = fincheck ;
        dept.push(fincheck);
    }
    if(engineerChecked == true){
        var engcheck = document.getElementById('engineer').value;
        // res = engcheck ;
        dept.push(engcheck);
    }
    if(otherschecked == true){
        var otherscheck = document.getElementById('others').value;
        // res = otherscheck ;
        dept.push(otherscheck);
    }

    return dept;
}

function addUser(){ 
    console.log("Add User Calling");
    var profile_pic = getProfileValue();
    // var dept = getDepartment();
    var sex= document.getElementsByName("gender")[0].checked? 'Male' : 'Female';   

    let requestData= {
        "profile": profile_pic,
        "name": document.getElementById('name').value,
        "gender": sex,
        "department": dept,
        "salary": document.getElementById('salary').selectedOptions[0].text,
        "startdate": document.getElementById('day').value + document.getElementById('month').value + document.getElementById('year').value,
    };
    $.ajax({
        url: 'http://localhost:3000/employees',
        type: "POST",
        data: requestData,
        dataType: "json",
        success: function (data) {
            console.log(data);
        },
        error: function (error) {
            console.log(`Error ${error}`);
        }
    });
    console.log(requestData);
}
