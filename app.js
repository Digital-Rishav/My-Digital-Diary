// Toggle Dark/Light mode
document.getElementById('toggle-mode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    // Update the button text based on the mode
    if (document.body.classList.contains('dark-mode')) {
        document.getElementById('toggle-mode').textContent = 'Switch to Light Mode';
    } else {
        document.getElementById('toggle-mode').textContent = 'Switch to Dark Mode';
    }
});

document.getElementById('diary-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const entryText = document.getElementById('entry-text').value;
    const entryImage = document.getElementById('entry-image').files[0];

    if (!entryText && !entryImage) {
        alert("Please write something or add an image!");
        return;
    }

    const entry = {
        text: entryText,
        image: entryImage ? URL.createObjectURL(entryImage) : null,
        date: new Date().toLocaleString()
    };

    // Show entry on the page
    displayEntry(entry);

    // Clear the form fields
    document.getElementById('entry-text').value = '';
    document.getElementById('entry-image').value = '';
});

function displayEntry(entry) {
    const entriesDiv = document.getElementById('entries');

    const entryDiv = document.createElement('div');
    entryDiv.classList.add('entry');

    const entryDate = document.createElement('h3');
    entryDate.textContent = entry.date;
    entryDiv.appendChild(entryDate);

    const entryText = document.createElement('p');
    entryText.textContent = entry.text;
    entryDiv.appendChild(entryText);

    if (entry.image) {
        const entryImage = document.createElement('img');
        entryImage.src = entry.image;
        entryImage.alt = "Diary image";
        entryImage.style.maxWidth = "100%";
        entryDiv.appendChild(entryImage);
    }

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Entry';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function () {
        entriesDiv.removeChild(entryDiv); // Remove the entry from the page
    });

    entryDiv.appendChild(deleteButton);

    entriesDiv.appendChild(entryDiv);
}
