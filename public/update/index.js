window.addEventListener('DOMContentLoaded', function () {
    document.onsubmit = function (e) {
        e.preventDefault(); // prevent using the default submit behavior

        const url = window.location.search;
        console.log(url);

        const urlParams = new URLSearchParams(url);

        const id = urlParams.get('id');
        //const id = document.querySelector('input[name=id]').value;
        const description = document.querySelector('input[name=description]').value;
        const price = document.querySelector('input[name=price]').value;
        const category_id = document.querySelector('#categoryList').value;
        const happened_at = document.querySelector('input[name=happened_at]').value
        const updated_at = document.querySelector('input[name=happened_at]').value
        const Input = document.querySelectorAll('input, button[type=submit]');

        fetch('/expenses/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                description: description,
                amount: price,
                category_id: category_id,
                happened_at: happened_at,
                updated_at: updated_at
            })
        })
            .then(function (response) {
                if (response.status !== 201) return response.json();
                // Clear inputs
                Input.forEach((input) => {
                    if (input.type !== 'submit') input.value = '';
                });
                alert(`Expense updated!`)
                return;
            })
            .then(function (body) {
                if (!body) return; // If successfully created, body will be empty
                alert(body.error); // else there's an error
                return;
            })
    };
});
