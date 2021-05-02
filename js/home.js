$(document).ready(function(){
    var innerHtml = " ";
    $.ajax({
        url: "http://localhost:3000/employees",
        type: "GET",
        dataType: "json",
        
        success: function(data){
            console.log(data[3]);

            let empArray = data;
            console.log(empArray);
            console.log(empArray[0].name);
            $.each(empArray , function(index,value){
                console.log(`${value.department}`);
                innerHtml += `<tr>
                            <td><img class="profile" src="${value.profile}"></td>
                            <td>${value.name}</td>
                            <td>${value.gender}</td>
                            <td>${value.department}</td>
                            <td>${value.salary}</td>
                            <td>${value.startdate}</td>
                            <td><buttom class="add-buttom delete" onclick="deleteData(${value.id})"><img src="../assets/icons/delete-black-18dp.svg" alt="Delete">
                                </buttom>
                                <a class="add-buttom edit" onclick="updateUser(${value.id})" href="../html/update.html"><img src="../assets/icons/create-black-18dp.svg" alt="Edit">
                                </a></td></td>
                            </tr>`
            });
            $('#display').append(innerHtml)
        } 
    });
});

deleteData = (id) => {
    console.log("method called");
    console.log("emp ids:",id);
    $.ajax({
        type: 'delete',
        url: "http://localhost:3000/employees/" +id,
        contentType: "application/json",

        success: function (data) {
            console.log(data);
        },
        error: function (error) {
            console.log(`Error ${Error}`);
        }
    });
}
updateUser = (obj) => {
    console.log(obj);
    localStorage.setItem('empID', obj);
}