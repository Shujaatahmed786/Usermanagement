let rIndex = 1;

    function populateModal(row) {
      rIndex = row.rowIndex;
      document.getElementById("fname").value = row.cells[0].textContent;
      document.getElementById("lname").value = row.cells[1].textContent;
      document.getElementById("country").value = row.cells[2].textContent;
      document.getElementById("mNumber").value = row.cells[3].textContent;
    }

    function editRow() {
      if (rIndex !== -1) {
        const row = document.getElementById("table").rows[rIndex];
        row.cells[0].textContent = document.getElementById("fname").value;
        row.cells[1].textContent = document.getElementById("lname").value;
        row.cells[2].textContent = document.getElementById("country").value;
        row.cells[3].textContent = document.getElementById("mNumber").value;
        closeModal();
      }
    }

    function confirmDelete(row) {
      console.log("function is working")
      const confirmation = confirm("Are you sure you want to delete this row?");
      if (confirmation) {
        deleteRow(row);
      }
    }

    function deleteRow(row) {
      
        document.getElementById("table").deleteRow(row.rowIndex);
        closeModal();
      
    }

    function openModal() {
      document.getElementById("modal").style.display = "block";
    }

    function closeModal() {
      document.getElementById("modal").style.display = "none";
      rIndex = -1;
    }

    const updateButton = document.getElementById("updateButton");
    const inputFields = document.querySelectorAll(".modal-content input");

    inputFields.forEach(input => {
      input.addEventListener("input", () => {
        const isEmpty = Array.from(inputFields).some(input => input.value.trim() === "");
        updateButton.disabled = isEmpty;
      });
    });


    function addRow() {
  const table = document.getElementById("table").getElementsByTagName("tbody")[0];
  const newRow = table.insertRow(table.rows.length);
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);
  const cell5 = newRow.insertCell(4);

  cell1.innerHTML = "First Name";
  cell2.innerHTML = "Last Name";
  cell3.innerHTML = "Country";
  cell4.innerHTML = "Mobile Number";
  cell5.innerHTML = '<button onclick="openModal(); populateModal(this.parentElement.parentElement)">Edit</button> <button onclick="confirmDelete(this.parentElement.parentElement)">Delete</button>';
}
