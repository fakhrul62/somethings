document.addEventListener('DOMContentLoaded', function() {
    fetch('someStuff/someStuff.json')
        .then(response => response.json())
        .then(folders => {
            const list = document.getElementById('folder-list');
            folders.forEach(folder => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = `someStuff/${folder}`;
                link.textContent = folder;
                listItem.classList = 'bg-white p-5 hover:drop-shadow-md rounded drop-shadow-xl ease-in hover:ease-in'
                link.classList = 'text-black';
                listItem.appendChild(link);
                list.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching folder list:', error);
        });
});
