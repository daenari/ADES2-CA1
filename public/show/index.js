/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function showExpense() {

    fetch('/expenses/all',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(function (response) {
            return response.json();
        }).then((data) => {
            expense = data;
            var table = "";
            if (data != null && data != "") {
                for (i = 0; i < data.length; i++) {
                    var item = data[i];

                    table += ` 
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.description}</td>
                        <td>${item.amount}</td>
                        <td>${item.category_id}</td>
                        <td>${item.happened_at}</td>
                        <td>${item.created_at}</td>
                        <td>${item.updated_at}</td>
                        <td><a href='/update/?id=${item.id}'>Edit</a></td>
                        <td><button type="button" class="btn btn-default" onclick="deleteExpense(${item.id})">Delete</button></td>
                    </tr>`

                }
                document.getElementById("expenseList").innerHTML += table
            }


        })
        .catch((err) => {
            console.log(err)
        })
}

showExpense();

function deleteExpense(id) {
    var text = confirm("Are you sure you want to delete?")

    if (text == true) {
        fetch('/expenses/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(function (response) {
                if (response.status !== 201) return response.json();
                alert(`Expense deleted!`)
                return;
            })
    } else {
        //do nothing
    }
}


function searchItem() {
    var input = document.getElementById('search');
    var filter = input.value.toUpperCase();
    var table = document.getElementById('expenseList')
    var tr = table.getElementsByTagName('tr');

    for (i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName('td')[1];

        if (td) {
            var txt = td.textContent || td.innerText;
            if (txt.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

}

function showCategory() {
    fetch('/categories', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(function (response) {
        return response.json()
    }).then(data => {
        category = data;
        var option = "";
        if (data != null && data != "") {
            for (i = 0; i < data.length; i++) {
                var item = data[i];
                option += ` 
                <option value="${item.id}">${item.name}</option>
            `

            }
            document.getElementById("categoryList").innerHTML += option
        }
    })
        .catch(function (error) {
            console.log(error)
        })
}
showCategory();

