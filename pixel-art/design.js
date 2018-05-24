$(document).ready(function() {
  // DOM variables
  const pixelCanvas = $("#pixelCanvas");
  const sizePicker = $("#sizePicker");
  const colorPicker = $("#colorPicker");
  const heightInput = $("#inputHeight");
  const widthInput = $("#inputWidth");
  const dummy = $("#dummy");

  //other variables
  let color = colorPicker.val();
  let height = heightInput.val();
  let width = widthInput.val();


 /**
* @description Creates a table
* @param {int} height - Height of the table
* @param {int} width  - width of the table
*/
  function makeGrid(height, width) {
    for (let h = 0; h < height; h++) {
      pixelCanvas.append("<tr></tr>");
      for (let w = 0; w < width; w++) {
        $("tr:last").append("<td></td>");
      }
    }
  }

  /**
  * @description When size is submitted by the user, call makeGrid()
  */
  sizePicker.submit(function(event) {
    // prevent default
    event.preventDefault();
    // reset canvas
    pixelCanvas.children().remove();
    // update height and width
    height = heightInput.val();
    width = widthInput.val();
    // call makeGrid()
    makeGrid(height, width);
  });

   /**
  * @description sets selected color
  */
  colorPicker.change(function(event) {
   color=colorPicker.val();
   $(".color").css("color",color);
  });

   /**
  * @description updated color of selected square
  */
  pixelCanvas.on("click", "td", function() {
    dummy.css("color", color);
    if ($(this).css("background-color") == dummy.css("color")) {
      $(this).css("background-color", "");
    } else {
      $(this).css("background-color", color);
    }
  });
});