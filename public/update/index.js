<<<<<<< HEAD
window.addEventListener('DOMContentLoaded', function () {
    document.onsubmit = function (e) {
        e.preventDefault(); // prevent using the default submit behavior

        const id = document.querySelector('input[name=id]').value;
        const description = document.querySelector('input[name=description]').value;
        const price = document.querySelector('input[name=price]').value;
        const Input = document.querySelectorAll('input, button[type=submit]');

        fetch('/expenses/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                description: description,
                price: price,
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
    };
});
=======
window.addEventListener('DOMContentLoaded', function () {
    document.onsubmit = function (e) {
        e.preventDefault(); // prevent using the default submit behavior

        const id = document.querySelector('input[name=id]').value;
        const description = document.querySelector('input[name=description]').value;
        const price = document.querySelector('input[name=price]').value;
        const Input = document.querySelectorAll('input, button[type=submit]');

        fetch('/expenses/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                description: description,
                price: price,
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
    };
});
>>>>>>> a0af1598e0d8976d52b031720a5693ef0f928062
