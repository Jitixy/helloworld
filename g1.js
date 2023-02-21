var itemCount = 0;
function addItem() {
  var item = document.getElementById("item").value;
  if (item !== "") {
    itemCount++;
    var table = document.getElementById("shoppingList");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = itemCount;
    cell2.innerHTML = item;
    document.getElementById("item").value = "";
  }
}

var input = document.getElementById("item");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    addItem();
  }
});
