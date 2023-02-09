window.addEventListener('DOMContentLoaded', function () {
    document.onsubmit = function (e) {
        e.preventDefault(); // prevent using the default submit behavior

        const name = document.querySelector('fieldset input[name=name]').value;
        const Input = document.querySelectorAll('input, button[type=submit]');

        fetch('/categories/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name
            }),
        })
            .then(function (response) {
                if (response.status !== 201) return response.json();
                // Clear inputs
                Input.forEach((input) => {
                    if (input.type !== 'submit') input.value = '';
                });
                alert(`Category Added!`)
                return;
            })
    };
});
