/*
1.Create an html-page for displaying and editing text. When opening the page,
the text should be displayed with div tag. When clicking Ctrl+E,
textarea appears instead of div and can be edited. When pressing Ctrl+S,
the div with edited text appears instead of textarea.
Don’t forget to turn off default settings for these hotkey combinations.
*/

const body = document.querySelector(".body");
const text = document.querySelector(".text");

const p = document.querySelector(".p");

let textToEdit = null;

//function for editing text
const enterEditMode = (event) => {
  if (event.code === "KeyE" && (event.ctrlKey || event.metaKey)) {
    event.preventDefault();

    if (textToEdit) return;

    text.style.display = "none";
    textToEdit = document.createElement("textarea");

    textToEdit.value = p.textContent;
    body.append(textToEdit);
    textToEdit.focus();

    textToEdit.addEventListener("keydown", saveChanges);
  }
};

//function for saving new text
const saveChanges = (event) => {
  if (event.code === "KeyS" && (event.ctrlKey || event.metaKey)) {
    event.preventDefault();
    p.textContent = textToEdit.value;
    text.style.display = "block";
    textToEdit.remove();
    textToEdit = null;
  }
};

document.addEventListener("keydown", enterEditMode);

/*
2.Create an html-page with a large table. When clicking the column heading,
it is necessary to sort data of that column. Note that numerical values should be sorted as numbers,
not as strings.
*/
const table = document.querySelector(".table");

// const sortFirstColumn = () => {
//   //creating an array from the first row
//   let names = [];
//
//   for (let row of table.rows) {
//     const firstCell = row.cells[0];
//     if (firstCell) {
//       names.push(firstCell.textContent);
//     }
//   }
//   names.shift(); //deleting the first item (table header)
//   names.pop(); // deleting the last item
//
//   names.sort(); //sorts the names alphabetically
//   console.log(names);
//
//   for (let i = 0; i < names.length; i++) {
//     const row = table.rows[i + 1]; // skip header row
//     const cell = row.cells[0]; // first column
//     cell.textContent = names[i]; // update text
//   }
// };

// const firstColumnHeader = table.rows[0].cells[0];
// firstColumnHeader.addEventListener("click", sortFirstColumn);

const headerRow = table.rows[0];

for (let columnIndex = 0; columnIndex < headerRow.cells.length; columnIndex++) {
  const headerCell = headerRow.cells[columnIndex];
  headerCell.addEventListener("dblclick", (event) => {
    const columnData = [];

    for (let rowIndex = 1; rowIndex < table.rows.length - 1; rowIndex++) {
      const cell = table.rows[rowIndex].cells[columnIndex];
      columnData.push(cell.textContent);
    }

    const sortedData = columnData.sort(); //sorts the data in the columns

    for (let rowIndex = 1; rowIndex < table.rows.length - 1; rowIndex++) {
      let cell = table.rows[rowIndex].cells[columnIndex];
      cell.textContent = sortedData[rowIndex];
    }
  });
}

/*
3.Create an html-page with a text block in a frame.
Execute the possibility to change the size of the block when holding the mouse cursor in the bottom right corner and pull it further.
*/

const box = document.querySelector(".box");
const resizeHandle = document.querySelector(".resize-handle");

resizeHandle.addEventListener("mousedown", (event) => {
  event.preventDefault();

  const currentXCoordinateOfTheMouse = event.clientX;
  const currentYCoordinateOfTheMouse = event.clientY;

  const startWidthOfTheBox = box.offsetWidth;
  const startHeightOfTheBox = box.offsetHeight;

  //console.log(currentXCoordinateOfTheMouse, currentYCoordinateOfTheMouse);

  function onMouseMove(event) {
    const howFarTheMouseMovedX = event.clientX - currentXCoordinateOfTheMouse;
    const howFarTheMouseMovedY = event.clientY - currentYCoordinateOfTheMouse;

    box.style.width = startWidthOfTheBox + howFarTheMouseMovedX + "px";
    box.style.height = startHeightOfTheBox + howFarTheMouseMovedY + "px";
  }

  function onMouseUp() {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
});
