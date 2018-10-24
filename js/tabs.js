// The first part of the code selects all tabs and hides them,
// then it selects the (color) tab and shows it.
// the second part highlights the active tab
// the third part listens for a click outside the tab and closes it


function tabColor(event, color) {

// show tabs code
    var i;
    var tabs = document.getElementsByClassName("tabs");
        for (i = 0; i < tabs.length; i++)
            {
                tabs[i].style.display = "none";
            }
    var div = document.getElementById(color);

              div.style.display = "flex";

// highlight active button code
    var but = document.getElementsByClassName("but");
        for (i = 0; i < tabs.length; i++)
            {
                but[i].classList.remove("active");
            }
              event.currentTarget.classList.add("active");

// close tabs code
    window.addEventListener('mouseup', function(event){
    	    if (event.target != div && event.target.parentNode != div)

            {
              div.style.display = "none";
              for (i = 0; i < tabs.length; i++)
                  {
                      but[i].classList.remove("active");
                  }
            }
    });

}

// This functions highlights in blue the active language

function blueLang(lang) {

  var eng = document.getElementById('eng');
  var ell = document.getElementById('ell');

  eng.classList.remove('cyan');
  ell.classList.remove('cyan');
  lang.classList.add('cyan');

}
