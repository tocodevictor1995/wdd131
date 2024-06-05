
    document.addEventListener("DOMContentLoaded", function() {
      
        function formatDateTime(date) {
            let day = String(date.getDate()).padStart(2, '0');
            let month = String(date.getMonth() + 1).padStart(2, '0'); 
            let year = date.getFullYear();
            let hours = String(date.getHours()).padStart(2, '0');
            let minutes = String(date.getMinutes()).padStart(2, '0');
            let seconds = String(date.getSeconds()).padStart(2, '0');
            return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
        }

        
        let lastModified = new Date(document.lastModified);
        document.getElementById("last-modified").textContent = formatDateTime(lastModified);
    });
