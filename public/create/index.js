window.addEventListener('DOMContentLoaded', function () {
    document.onsubmit = function (e) {
        e.preventDefault(); // prevent using the default submit behavior

        const description = document.querySelector('fieldset input[name=description]').value;
        const amount = document.querySelector('fieldset input[name=amount]').value;
        const category_id = document.querySelector('#categoryList').value;
        const happened_at = document.querySelector('input[name=happened_at]').value
        const updated_at = document.querySelector('input[name=happened_at]').value

        const Input = document.querySelectorAll('input, button[type=submit]');
        return fetch('/expenses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                description: description,
                amount: amount,
                category_id: category_id,
                happened_at: happened_at,
                updated_at: updated_at
            }),
        })
            .then(function (response) {
                // If not successful (i.e. there's error)
                if (response.status !== 201) return response.json(); // parse body as JSON string

                // Clear inputs
                Input.forEach((input) => {
                    if (input.type !== 'submit') input.value = '';
                });

                alert(`New expense created!`);
                return; // Success response has no body, hence next .then() will be null
            })
            .then(function (body) {
                if (!body) return; // If successfully created, body will be empty
                alert(body.error); // else there's an error
                return;
            })
    };
});

