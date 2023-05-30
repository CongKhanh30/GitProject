let huynh = new HocVien("Huynh", "23", "https://toquoc.mediacdn.vn/280518851207290880/2022/6/15/1596335880585611305437-1655261466374-1655261466482462450955.jpg");
let khanh = new HocVien("Khanh", "28", "https://genk.mediacdn.vn/2018/4/19/photo-0-15241340228381692422166.jpg");
let numbers = [
    huynh,khanh
];
let indexEdit = -1;
function show(){
    let str = '';
    for (let i = 0; i < numbers.length; i++){
        str +=  `<tr>
                    <td>${numbers[i].name}</td>
                    <td>${numbers[i].age}</td>
                    <td><img src="${numbers[i].img}" width="200" height="150"></td>
                    <td><button onclick="showEdit(${i})">Edit</button></td>
                    <td><button onclick="deleteNumber(${i})">Delete</button></td>
                 </tr>`
    }

    let element = document.getElementById( "display");
    element.innerHTML = str;
}

function add(){
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let img = document.getElementById("img").value;

    let newObj = new HocVien(name, age, img);
    if (indexEdit === -1){
        if (!checkName()){
            alert("Trùng tên");
            return;
        }
        numbers.push(newObj);
    }
    else{
    numbers[indexEdit] = newObj;
    indexEdit = -1;
    }

    show();
}

function deleteNumber(index){
    numbers.splice(index, 1);
    show()
}

function showEdit(index){
    indexEdit = index;
    document.getElementById("name").value = numbers[index].name;
    document.getElementById("age").value = numbers[index].age;
    document.getElementById("img").value = numbers[index].img;
}

function checkName(){
    let name = document.getElementById("name").value;
    for (let i = 0; i < numbers.length; i++){
        if(numbers[i].name === name){
            return false;
        }
    }
    return true;
}

show();