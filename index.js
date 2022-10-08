const editorContent = document.getElementById("editor");
const previewContent = document.getElementById("compiled-markdown");

function changePreview() {
  let editorText = editorContent.value;
  let previewText = marked.parse(editorText, { sanitize: true });

  previewContent.innerHTML = previewText;
}
var counter = 0;
editorContent.addEventListener("input", changePreview);
$(".preview").on("click", function () {
  $("#editor").toggle();
  if (counter === 0) {
    $("#editor-container").addClass("ribbon-container");
    $(".preview i").attr("class", "fa-solid fa-eye fa-lg");
    counter = 1;
  } else {
    $("#editor-container").removeClass("ribbon-container");
    $(".preview i").attr("class", "fa-solid fa-eye-slash fa-lg");
    counter = 0;
  }
});

function myFunction() {
  var copyText = document.getElementById("editor");

  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  alert("text Copied");
}
