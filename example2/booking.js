

/**
 * @type BookingEntry[] BookingEntries
 */
var BookingEntries = [];

class BookingEntry
{

    /**
     * 
     * @param {BookingEntry} json 
     */
    constructor(json)
    {
        Object.assign(this, json);
        this.ID = BookingEntry.Counter++;
    }

    Vorname = "";
    Nachname = "";
    Uhrzeit = "";
    ID = 0;

    static Counter=0;
}

window.onload = function(event)
{
}
/**
 * 
 * @param {BookingEntry} entry 
 */
function AddBooking(entry)
{
    var node = document.getElementById("list");

    var div = document.createElement("div");
    div.classList.add(`e${entry.ID}`);
    div.innerHTML = entry.Vorname;
    node.appendChild(div)
    
    div = document.createElement("div");
    div.classList.add(`e${entry.ID}`);
    div.innerHTML = entry.Nachname;
    node.appendChild(div)
    
    div = document.createElement("div");
    div.classList.add(`e${entry.ID}`);
    div.innerHTML = entry.Uhrzeit;
    node.appendChild(div)

    div = document.createElement("div");
    div.classList.add(`e${entry.ID}`);
    var button = document.createElement("button");
    button.innerHTML = "x";
    button.onclick = (evt) => {
        RemoveButton(entry.ID);
    }

    div.appendChild(button);
    node.appendChild(div)
}


function ClickButton()
{
    var vornameNode = document.getElementById("vorname");
    var nachnameNode = document.getElementById("nachname");
    var uhrzeitNode = document.getElementById("uhrzeit");
    
    var newEntry = //TODO create new Entry


    BookingEntries.push(newEntry);
    AddBooking(newEntry);
}

function RemoveButton(id)
{
    console.log("remove id:",id)

    var nodes = document.getElementsByClassName(`e${id}`);

    /**
     * 
     * TODO call removeNode
     */
}

function RemoveNode(node)
{
    node.remove();
}