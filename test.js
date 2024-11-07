document.addEventListener("DOMContentLoaded", () => {
    const addContactButton = document.getElementById("addContact");
    const contactList = document.getElementById("contactList");

    addContactButton.addEventListener("click", () => {
        const nameField = document.getElementById("contactName");
        const numberField = document.getElementById("contactNumber");

        const name = nameField.value.trim();
        const phone = numberField.value.trim();

       
        const listItem = document.createElement("li");

        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.value = name;
        nameInput.disabled = true;

        const phoneInput = document.createElement("input");
        phoneInput.type = "text";
        phoneInput.value = phone;
        phoneInput.disabled = true;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        let isEditing = false;

        editButton.addEventListener("click", () => {
            isEditing = !isEditing;
            nameInput.disabled = !isEditing;
            phoneInput.disabled = !isEditing;
            editButton.textContent = isEditing ? "Save" : "Edit";
        });

        deleteButton.addEventListener("click", () => {
            contactList.removeChild(listItem);
        });

        listItem.appendChild(nameInput);
        listItem.appendChild(phoneInput);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        contactList.appendChild(listItem);

        nameField.value = "";
        numberField.value = "";
    });
});
