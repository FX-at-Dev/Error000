document.addEventListener("DOMContentLoaded", () => {
    const assignmentBox = document.querySelector(".assignment-box");
    const fileInput = document.getElementById("assignment-file");

    // Add dragover event
    assignmentBox.addEventListener("dragover", (event) => {
        event.preventDefault();
        assignmentBox.classList.add("dragover");
    });

    // Add dragleave event
    assignmentBox.addEventListener("dragleave", () => {
        assignmentBox.classList.remove("dragover");
    });

    // Add drop event
    assignmentBox.addEventListener("drop", (event) => {
        event.preventDefault();
        assignmentBox.classList.remove("dragover");

        if (event.dataTransfer.files.length) {
            const file = event.dataTransfer.files[0];
            fileInput.files = event.dataTransfer.files;
            displayFileName(file);
        }
    });

    // Add click event for manual file selection
    assignmentBox.addEventListener("click", () => {
        fileInput.click();
    });

    // Handle file input change
    fileInput.addEventListener("change", () => {
        if (fileInput.files.length) {
            const file = fileInput.files[0];
            displayFileName(file);
        }
    });

    // Display file name
    function displayFileName(file) {
        const label = assignmentBox.querySelector("label");
        label.textContent = `Selected File: ${file.name}`;
    }
});
