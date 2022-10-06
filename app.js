function search() {
    let input = document.getElementById('search-field').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('search');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            if (input == "") {
                x[i].style.display = "";
            } 
            else {
                x[i].style.display = "";
            }
        }
    }
}

function Excel(FileExtension, FileName){
    var table = document.getElementById("myTable");
    var workbook = XLSX.utils.table_to_book(table, { sheet: "sheet1" });
    return XLSX.writeFile(workbook, FileName+"."+FileExtension || "Excel." + (FileExtension || "xlsx"))
}

function TablePrint() {
    var table =  document.getElementById("tableone").innerHTML;
    var backup = document.body.innerHTML;
    document.body.innerHTML = table;
    window.print();
    document.body.innerHTML = backup;
}

function forpDF(){
    thisContainer = document.getElementById("tableone")
    html2pdf().from(thisContainer).save();
}

document.getElementById("submit").addEventListener("click", submit);

function submit(){
    var id = document.getElementById("id").value;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var age = document.getElementById("id").value;
    var email = document.getElementById("email").value;
    if( id == "" || fname == "" || lname == "" || age == "" || email == "" ){
        alert("Please Make Sure That All Input Fields Must Be Fill")
    }
    else{
        var table = document.getElementById("myTable");
        var tr = table.insertRow(-1);
        col1 = tr.insertCell(0);
        col2 = tr.insertCell(1);
        col3 = tr.insertCell(2);
        col4 = tr.insertCell(3);
        col5 = tr.insertCell(4);

        col1.innerText = id;
        col2.innerText = fname;
        col3.innerText = lname;
        col4.innerText = age;
        col5.innerText = email;

        col1.setAttribute("class", "th")
    
    }
}
function CopyToClipBoard(){
    var range = document.createRange();
    range.selectNode(document.getElementById("tableone"));
    window.getSelection().removeAllRanges(); 
    window.getSelection().addRange(range); 
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    document.getElementById('check_div').style.display="block"
    document.getElementById('check_div').addEventListener("click",function () {
    document.getElementById('check_div').style.display="none"

    })
}
