const API_URL = "https://script.google.com/macros/s/AKfycbyegN2i1-Us9mBPkRcYpKEuRCUjR2sS5ojRUbZKAi1mleNGaEwyEBupDUwVWGWnBeKl0Q/exec"; // Replace with your script URL

async function loadFiles() {
  const res = await fetch(API_URL);
  const data = await res.json();
  const list = document.getElementById("fileList");

  if (!data.length) {
    list.innerHTML = "<p>No files found.</p>";
    return;
  }

  data.forEach(file => {
    if (file.isFolder) return;

    const item = document.createElement("div");
    item.className = "file-item";
    item.innerHTML = `
          <div onclick="window.location.href='${file.url}'">📄<p>${file.name}</p></div>
        `;
    list.appendChild(item);
  });
}

loadFiles();