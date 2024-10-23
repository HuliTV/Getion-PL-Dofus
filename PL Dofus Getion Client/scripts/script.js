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

// Fonction pour diminuer de 1 le nombre de tous les clients
function decreaseAll() {
    const rows = document.querySelectorAll('#clientTableBody tr');
    rows.forEach(row => {
        const numberInput = row.querySelector('input[type="number"]');
        const currentValue = parseInt(numberInput.value, 10);
        if (currentValue > 0) {
            numberInput.value = currentValue - 1;
        }
    });
}

// Créer 8 lignes dans le tableau
for (let i = 0; i < 8; i++) {
    createClientRow();
}