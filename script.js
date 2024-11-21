// create container
// style container
// create 16 divs 4x4
// style divs
// hover effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
//Add a button on the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed, and a new grid should be generated in the same total space as before (e.g., 960px wide) so that you’ve got a new sketch pad.

let container = document.createElement("div");
container.style.cssText = "width:100%;background-color:red;";
body.appendChild(container);
