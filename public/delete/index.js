window.addEventListener('DOMContentLoaded', function () {
    document.onsubmit = function (e) {
        e.preventDefault(); // prevent using the default submit behavior

        const id = document.querySelector('#id').value;
        const Input = document.querySelectorAll('input, button[type=submit]');

        fetch('/expenses/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(function (response) {
                if (response.status !== 201) return response.json();
                // Clear inputs
                Input.forEach((input) => {
                    if (input.type !== 'submit') input.value = '';
                });
                alert(`Expense deleted!`)
                return;
            })
    };
});
