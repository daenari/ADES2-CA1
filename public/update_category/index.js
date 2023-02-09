window.addEventListener('DOMContentLoaded', function () {
    document.onsubmit = function (e) {
        e.preventDefault(); // prevent using the default submit behavior

        const url = window.location.search;
        console.log(url);

        const urlParams = new URLSearchParams(url);

        const id = urlParams.get('id');
        //const id = document.querySelector('input[name=id]').value;
        const name = document.querySelector('input[name=name]').value;
        const Input = document.querySelectorAll('input, button[type=submit]');

        fetch('/categories/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
            })
        })
            .then(function (response) {
                if (response.status !== 201) return response.json();
                // Clear inputs
                Input.forEach((input) => {
                    if (input.type !== 'submit') input.value = '';
                });
                alert(`Category updated!`)
                return;
            })
            .then(function (body) {
                if (!body) return; // If successfully created, body will be empty
                alert(body.error); // else there's an error
                return;
            })
    };
});
