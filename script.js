window.onload = function(){
    let popUp = document.getElementById('searchBar')

    popUp.onclick = function changeContent() {
        document.getElementById('submit1').style.visibility =  "visible";


    }

    document.addEventListener('click', function handleClickOutsideSearchBar(event) {
        if (!popUp.contains(event.target)) {
            document.getElementById('submit1').style.visibility =  "hidden";
        }
      })
};