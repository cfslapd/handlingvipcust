function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ljMGrZvbfu":
        Script1();
        break;
      case "6K7mpVowPrI":
        Script2();
        break;
      case "6SwVdDlvpJs":
        Script3();
        break;
      case "6FA5FURZAbG":
        Script4();
        break;
      case "61mxiIMAutT":
        Script5();
        break;
      case "5ezetD1UgN4":
        Script6();
        break;
  }
}

function Script1()
{
  Array.from(document.querySelectorAll('.acc-textinput')).forEach(el => {
    el.addEventListener('keyup', () => {
        console.log('key up...');
        el.blur();
        el.focus();
    })
});
}

function Script2()
{
  Array.from(document.querySelectorAll('.acc-textinput')).forEach(el => {
    el.addEventListener('keyup', () => {
        console.log('key up...');
        el.blur();
        el.focus();
    })
});
}

function Script3()
{
  var player = GetPlayer();

var surname = player.GetVar("surname");
var name = player.GetVar("name");
var email = player.GetVar("email");
var status = player.GetVar("status");
var score = player.GetVar("score");
var region = player.GetVar("region");
var depot = player.GetVar("depot");
var role = player.GetVar("role");
var company = player.GetVar("company");
var rating = player.GetVar("star_rating");
var idnum = player.GetVar("idnum");

var formData = new FormData();
formData.append("Surname", surname );
formData.append("Name", name );
formData.append("Email", email );
formData.append("Status", status );
formData.append("Score",  score );
formData.append("Region",  region );
formData.append("Depot",  depot );
formData.append("Role",  role );
formData.append("Company",  company );
formData.append("Elearn", "E10 Handling Difficult VIP Customers" );
formData.append("Rating",  rating );
formData.append("ID",  idnum );

var request = new XMLHttpRequest();
request.open("POST", "https://script.google.com/macros/s/AKfycbzxFN-KJvXxyMgOOINzdOOIcfX55EkJslUPFTWZEh55x3wBGpRTSwdOm7N3Eie-OYS-XQ/exec");
request.send(formData);
}

function Script4()
{
  Array.from(document.querySelectorAll('.acc-textinput')).forEach(el => {
    el.addEventListener('keyup', () => {
        console.log('key up...');
        el.blur();
        el.focus();
    })
});
}

function Script5()
{
  Array.from(document.querySelectorAll('.acc-textinput')).forEach(el => {
    el.addEventListener('keyup', () => {
        console.log('key up...');
        el.blur();
        el.focus();
    })
});
}

function Script6()
{
  Array.from(document.querySelectorAll('.acc-textinput')).forEach(el => {
    el.addEventListener('keyup', () => {
        console.log('key up...');
        el.blur();
        el.focus();
    })
});
}

