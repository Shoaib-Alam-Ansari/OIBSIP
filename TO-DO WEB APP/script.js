let saveBtn = document.getElementById("btn");
let result = document.getElementById("result");
let descInput = document.getElementById("desc-input");
let titleInput = document.getElementById("title-input");
let deleteBtn = document.getElementById("delete-btn");
let myBox = document.getElementById("box");
let arr = [];

let objStr = localStorage.getItem("data");
if(objStr != ''){
    arr = JSON.parse(objStr);   
}

displayData()

saveBtn.addEventListener("click", () => {
    if(titleInput.value == ""){
        alert("Please enter title");
    }else if(descInput.value == ""){
        alert("Please enter description");
    }else{
        let titleInpData = titleInput.value;
        let descInpData = descInput.value;
        arr.push({"title": titleInpData ,  "description" : descInpData})
         saveData (arr);
         titleInput.value = "";
         descInput.value = "";
    }

    displayData()

})

function saveData (arr){
    let str = JSON.stringify(arr)
    localStorage.setItem("data", str);

}


function displayData(){
    let result = '';

    arr.forEach((element,id) => {
        result += `
        <div class="content-box">
        <span id="title-output">${element.title}</span>
        <span id="desc-output">${element.description}</span>
        <span class="delete" id="delete=btn" onclick=deleteData(${id})>X</span>
      </div> 
        `
    })

    myBox.innerHTML = result;
}

function deleteData(id){
arr.splice(id,1);
saveData(arr);
displayData()

}



