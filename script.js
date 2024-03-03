    /* Funzione per aprire e chiudere il menu */
  function toggleMenu() {
      console.log("Menu toggled");				
      var dropdown = document.getElementById("myDropdown");
      if (dropdown.classList.contains("show")) {
          dropdown.classList.remove("show");
      } else {
          dropdown.classList.add("show");
      }
  }

    /* Chiudi il menu se l'utente fa clic altrove nella pagina */
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
