const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Select all price elements
    const priceElements = document.querySelectorAll('.price');
    
    // Initialize total price
    let totalPrice = 0;

    // Loop through each price element and sum the values
    priceElements.forEach(priceElement => {
        totalPrice += parseFloat(priceElement.textContent); // Convert text to float and add to total
    });

    // Check if a total row already exists and remove it
    const existingTotalRow = document.querySelector('.total-row');
    if (existingTotalRow) {
        existingTotalRow.remove();
    }

    // Create a new row for the total price
    const table = document.querySelector('table');
    const totalRow = document.createElement('tr');
    totalRow.classList.add('total-row'); // Add a class for easy identification
    const totalCell = document.createElement('td');
    
    // Set the total cell content
    totalCell.colSpan = 2; // Make the total cell span both columns
    totalCell.textContent = `Total Price: Rs ${totalPrice}`; // Set the total price text

    // Append the total cell to the total row
    totalRow.appendChild(totalCell);
    
    // Append the total row to the table
    table.appendChild(totalRow);
};

// Add event listener to the button
getSumBtn.addEventListener("click", getSum);