
	function insert_Row() {
  const table = document.getElementById('sampleTable');

  // Create a new row at the top (index 0)
  const newRow = table.insertRow(1); 

  // Insert cells in the new row
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);

  // Assign values to the cells
  cell1.innerHTML = "New Cell1";
  cell2.innerHTML = "New Cell2";
}

  
  

