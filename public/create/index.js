<<<<<<< HEAD
window.addEventListener('DOMContentLoaded', function () {
    document.onsubmit = function (e) {
        e.preventDefault(); // prevent using the default submit behavior

        const description = document.querySelector('fieldset input[name=description]').value;
        const price = document.querySelector('fieldset input[name=price]').value;

        const Input = document.querySelectorAll('input, button[type=submit]');
        return fetch('/expenses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                description: description,
                price: price
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
=======
window.addEventListener('DOMContentLoaded', function () {
    document.onsubmit = function (e) {
        e.preventDefault(); // prevent using the default submit behavior

        const description = document.querySelector('fieldset input[name=description]').value;
        const price = document.querySelector('fieldset input[name=price]').value;

        const Input = document.querySelectorAll('input, button[type=submit]');
        return fetch('/expenses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                description: description,
                price: price
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
>>>>>>> a0af1598e0d8976d52b031720a5693ef0f928062
