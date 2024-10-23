// Fonction pour ajouter des lignes au tableau
function createClientRow() {
    const tbody = document.getElementById('clientTableBody');
    const row = document.createElement('tr');

    const clientNameCell = document.createElement('td');
    const clientInput = document.createElement('input');
    clientInput.type = 'text';
    clientNameCell.appendChild(clientInput);

    const numberCell = document.createElement('td');
    const numberInput = document.createElement('input');
    numberInput.type = 'number';
    numberInput.value = 0; // Valeur par défaut
    numberCell.appendChild(numberInput);

    row.appendChild(clientNameCell);
    row.appendChild(numberCell);
    tbody.appendChild(row);
}

// Créer 8 lignes dans le tableau
for (let i = 0; i < 8; i++) {
    createClientRow();
}