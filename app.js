document.addEventListener("DOMContentLoaded", () => {
    function updateDate() {
        const currentDate = new Date();

        /*format of date*/
        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
        const year = currentDate.getFullYear();

        const formattedDate = `${day}-${month}-${year}`;

        document.getElementById("currentDate").textContent = formattedDate;
    }

    updateDate();

    /*set it up an to check for a date change every minute*/
    setInterval(function() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();

        /*Check if the time is midnight (00:00)*/
        if (hours === 0 && minutes === 0) {
            updateDate();
        }
    }, 60000);  /* Check every 60 seconds*/
});