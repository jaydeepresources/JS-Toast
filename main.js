
function showToast() {
    document.getElementById("toast").style.display = "block";
    // setTimeout(() => {
    // document.getElementById("toast").style.display = "none";        
    // }, 2000);

    setTimeout(function () {
        document.getElementById("toast").style.display = "none";
    }, 200);

}