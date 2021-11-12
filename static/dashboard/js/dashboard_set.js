lc = 0;

function fadepopup(duration=7000)
{
    var popup = document.getElementById("popupmsg");
    popup.style.opacity = "1";
    setTimeout(() => {
        popup.style.opacity = "0";
    }, duration);
}

function success(message, duration=7000)
{
    var popup = document.getElementById("popupmsg");
    $("#msgcontent").text(message)
    popup.style.background = "var(--popups)";
    fadepopup(duration);
}

function error(message, duration=7000)
{
    var popup = document.getElementById("popupmsg");
    $("#msgcontent").text(message)
    popup.style.background = "var(--popupe)";
    fadepopup(duration);
}

function changeColor(element, color)
{
    if(color == "red")
    {
        element.style.borderBottom = "1px solid var(--error)";
    }
    else
    {
        element.style.borderBottom = "1px solid #f4f4f4";
    }
}

function checkFields()
{
    //console.log(lc + " " + Date.now())
    /*if(lc >= (Date.now() - 5000))
    {
        return error("Воу, воу, палехче! Вы сохраняете изменения слишком быстро!");
    }*/
    lc = Date.now();
    prefixField = document.getElementById("prefix");
    scoreField = document.getElementById("antinukescore");
    if (prefixField.value.replace(/\s/g, "") == "")
    {
        shake(prefixField)
        error("Не все поля заполнены.");
        return changeColor(prefixField, "red");
    }
    if (scoreField.value == "")
    {
        shake(scoreField)
        error("Не все поля заполнены.");
        return changeColor(scoreField, "red");
    }
    changeColor(scoreField, "white");
    changeColor(prefixField, "white");
    return true;
}

function shake(element)
{
    element.style.transform = "translate(5px, 0)"
    setTimeout(() => {element.style.transform = "translate(0px, 0)"}, 75)
    setTimeout(() => {element.style.transform = "translate(-5px, 0)"}, 150)
    setTimeout(() => {element.style.transform = "translate(0px, 0)"}, 225)
}

function openTab(tabName)
{
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      $(tabcontent[i]).fadeOut();
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    setTimeout(() => {$("#" + tabName).css("display", "flex").hide().fadeIn();}, 500);

    $(".tablinks").each(function(){ $(this).removeClass("active") });
    $("#Button" + tabName).addClass("active");
}

function showSave()
{
    $("#save").fadeIn();
}