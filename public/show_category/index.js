function showCategory() {

    fetch('/categories',
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
                        <td>${item.name}</td>
                        <td><a href='/update_category/?id=${item.id}'>Edit</a></td>
                        <td><button type="button" class="btn btn-default" onclick="deleteCategory(${item.id})">Delete</button></td>
                    </tr>`

                }
                document.getElementById("categoryList").innerHTML += table
            }


        })
        .catch((err) => {
            console.log(err)
        })
};

showCategory();

function deleteCategory(id) {
    fetch('/categories/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(function (response) {
            let text = 'Are you sure you want to delete?'
            if (confirm(text) == true) {
                // if (response.status !== 201) return response.json();
                alert('Expense deleted!')
                response.json();
            } else {
                return;
            }
        })
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

