
    // JavaScript to handle "Add +" click and image upload
    const addButton = document.getElementById("myTasks");
    const imageUpload = document.getElementById("imageUpload");
    const preview = document.getElementById("preview");

    // When "Add +" is clicked, trigger the file input
    addButton.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default link behavior
      imageUpload.click(); // Open the file dialog
    });

    // Handle the image upload and preview
    imageUpload.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          // Display the uploaded image
          const img = document.createElement("img");
          img.src = e.target.result;
          img.alt = "Uploaded Receipt";
          img.style.maxWidth = "100%";
          img.style.height = "auto";
          preview.innerHTML = ""; // Clear previous content
          preview.appendChild(img);
        };
        reader.readAsDataURL(file);
      }
    });
 