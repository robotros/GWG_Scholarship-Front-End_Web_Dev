$(document).ready(function() {
  // DOM variables
  const pixelCanvas = $("#pixelCanvas");
  const sizePicker = $("#sizePicker");
  const colorPicker = $("#colorPicker");
  const height = $("#inputHeight");
  const width = $("#inputWidth");
  const dummy = $("#dummy");
  let color = colorPicker.val();

  // Create h by w grid
  function makeGrid() {
    for (let h = 0; h < height.val(); h++) {
      pixelCanvas.append("<tr></tr>");
      for (let w = 0; w < width.val(); w++) {
        $("tr:last").append("<td></td>");
      }
    }
  }

  // When size is submitted by the user, call makeGrid()
  sizePicker.submit(function(event) {
    event.preventDefault();
    pixelCanvas.children().remove();
    makeGrid();
  });

  // set color
  colorPicker.change(function(event) {
   color=colorPicker.val();
   $(".color").css("color",color);
  });


  // change color
  pixelCanvas.on("click", "td", function() {
    dummy.css("color", color);
    if ($(this).css("background-color") == dummy.css("color")) {
      $(this).css("background-color", "");
    } else {
      $(this).css("background-color", color);
    }
  });
});