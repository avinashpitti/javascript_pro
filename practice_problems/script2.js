let employees=
[{"eid":1,"ename":"Esther","salary":1606},
{"eid":2,"ename":"Shell","salary":9625},
{"eid":3,"ename":"Baxy","salary":1491},
{"eid":4,"ename":"Aurea","salary":8879},
{"eid":5,"ename":"Moss","salary":6645},
{"eid":6,"ename":"Leda","salary":7657},
{"eid":7,"ename":"Ancell","salary":7577},
{"eid":8,"ename":"Kahlil","salary":2601},
{"eid":9,"ename":"Adda","salary":8315},
{"eid":10,"ename":"Natty","salary":9836},
{"eid":11,"ename":"Tedd","salary":1030},
{"eid":12,"ename":"Isis","salary":8807},
{"eid":13,"ename":"Eran","salary":5273},
{"eid":14,"ename":"Patricia","salary":4765},
{"eid":15,"ename":"Terence","salary":2477},
{"eid":16,"ename":"Lenka","salary":6853},
{"eid":17,"ename":"Raeann","salary":8975},
{"eid":18,"ename":"Urban","salary":8929},
{"eid":19,"ename":"Adore","salary":9297}]

function displayEmpData() {
    let rows = "";
    employees.map((emp) => {
        rows += `<tr>
                    <td>${emp.eid}</td>
                    <td>${emp.ename}</td>
                    <td>${emp.salary}</td>
                 </tr>`;
    });
    // document.getElementsByTagName('tbody')[0].innerHTML = rows;
    document.getElementById('first').innerHTML=rows;
}

