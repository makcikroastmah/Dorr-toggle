
let doorIsOpen = true;

function toggledoor(){
    const door = document.getElementById('door');
    

    if (doorIsOpen) {
        door.src = 'closedoor.png';
        doorIsOpen = false;
    } 
    else {
        door.src = 'opendoor.png';
        doorIsOpen = true;
    }

}