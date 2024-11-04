function myFunction() {
  var x = document.querySelector(".nav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}

$("body>div").on("click",
()=>{
  $(".responsive").removeClass("responsive");
}
);

$("body>footer").on("click",
()=>{
  $(".responsive").removeClass("responsive");
}
);

document.querySelector(".inputButton").addEventListener("click", () => parseFunction());
document.querySelector(".outputButton").addEventListener("click", () => copyFunction());
document.querySelector(".colorButton").addEventListener("click", () => colorFunction());
document.querySelector(".sizeButton").addEventListener("click", () => sizeFunction());

function parseFunction() {
  let data = document.querySelector(".inputTextArea").value;
  data = JSON.stringify(data);
  data = data.replaceAll("\\t","");
  data = data.replaceAll("\\n","");
  data = data.replace(/\s+/g, ' ');
  data = data.replaceAll("\\","");
  data = data.replaceAll("\"","");
  document.querySelector(".outputTextArea").innerHTML = data;
}

function copyFunction() {
  // Get the text field
  var copyText = document.querySelector(".outputTextArea");

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text to clipboard.");
}

function colorFunction() {
  document.querySelector(".outputTextArea").classList.toggle("whiteText");
}

function sizeFunction() {
  document.querySelector(".outputTextArea").classList.toggle("miniText");
}