let name;
const formData = new FormData();

fetch('/MODUL_1/service.php', {
    method: 'GET'
})
    .then(json => json.json())
    .then((data) => {
        const tBody = document.querySelector('tbody');

        tBody.innerHTML = '';

        data.forEach(item => {
            const row = document.createElement('tr');

            // Create and fill table cells
            const nameCell = document.createElement('td');
            nameCell.classList.add('px-4', 'py-2', 'text-center')
            nameCell.textContent = item.name;
            row.appendChild(nameCell);
            
            const wordCountCell = document.createElement('td');
            wordCountCell.classList.add('px-4', 'py-2', 'text-center')
            wordCountCell.textContent = item.words_count;
            row.appendChild(wordCountCell);
            
            const letterCountCell = document.createElement('td');
            letterCountCell.classList.add('px-4', 'py-2', 'text-center')
            letterCountCell.textContent = item.characters_count;
            row.appendChild(letterCountCell);
            
            const reversedNameCell = document.createElement('td');
            reversedNameCell.classList.add('px-4', 'py-2', 'text-center')
            reversedNameCell.textContent = item.reverse_name;
            row.appendChild(reversedNameCell);
            
            const vowelCell = document.createElement('td');
            vowelCell.classList.add('px-4', 'py-2', 'text-center')
            vowelCell.textContent = item.vocal_count;
            row.appendChild(vowelCell);
            
            const consonantCell = document.createElement('td');
            consonantCell.classList.add('px-4', 'py-2', 'text-center')
            consonantCell.textContent = item.non_vocal_count;
            row.appendChild(consonantCell);
            
            // Append the row to the tbody
            tBody.appendChild(row);
        })
    })

const handleChange = () => {
    name = document.getElementById('name').value;
    formData.append('name', name);
    console.log(name);
}
const handleSubmit = async (e) => {
    // e.preventDefault();
    const response = await fetch('/MODUL_1/service.php', {
        method: 'POST',
        body: formData
    });
    const data = await response.json();
    console.log(data);

    const tBody = document.querySelector('tbody');

    tBody.innerHTML = '';

    data.forEach(item => {
        const row = document.createElement('tr');

        // Create and fill table cells
        const nameCell = document.createElement('td');
        nameCell.classList.add('px-4', 'py-2', 'text-center')
        nameCell.textContent = item.name;
        row.appendChild(nameCell);
        
        const wordCountCell = document.createElement('td');
        wordCountCell.classList.add('px-4', 'py-2', 'text-center')
        wordCountCell.textContent = item.words_count;
        row.appendChild(wordCountCell);
        
        const letterCountCell = document.createElement('td');
        letterCountCell.classList.add('px-4', 'py-2', 'text-center')
        letterCountCell.textContent = item.characters_count;
        row.appendChild(letterCountCell);
        
        const reversedNameCell = document.createElement('td');
        reversedNameCell.classList.add('px-4', 'py-2', 'text-center')
        reversedNameCell.textContent = item.reverse_name;
        row.appendChild(reversedNameCell);
        
        const vowelCell = document.createElement('td');
        vowelCell.classList.add('px-4', 'py-2', 'text-center')
        vowelCell.textContent = item.vocal_count;
        row.appendChild(vowelCell);
        
        const consonantCell = document.createElement('td');
        consonantCell.classList.add('px-4', 'py-2', 'text-center')
        consonantCell.textContent = item.non_vocal_count;
        row.appendChild(consonantCell);
        
        // Append the row to the tbody
        tBody.appendChild(row);
    });
}