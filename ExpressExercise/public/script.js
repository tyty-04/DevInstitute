fetch('http://localhost:8080', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
.then(response => response.json())
.then(response => console.log(JSON.stringify(response)))