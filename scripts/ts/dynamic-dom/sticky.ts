export function setupSticky() {
    // TODO: Copy and paste your sticky code in here!!
    var header = document.getElementById("main-menu-container");
    
    //Ensure header exists
    if (!header) {
        console.warn("Header element not found!");
        return;
    }
   
    //get offset
    const sticky = header.offsetTop;
   
    // Add scroll event listener
    window.onscroll = function() {
        if (window.scrollY > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    };
 }