const item = document.querySelector('#item');
const submitBtn = document.querySelector('#submit');
const listItem = document.querySelector('#items');
const filter = document.getElementById('filter');


//Add Event Listener to the submit button
submitBtn.addEventListener('click', addItem);

//event listener to delete
listItem.addEventListener('click', removeItem);

//event listener for search
filter.addEventListener('keyup', filterDown);

//function for event Listener
function addItem(e){
    e.preventDefault();

    //Create a li element
   const newItem =  document.createElement('li');
   newItem.className = 'list-group-item';
  
   
   //create and add delete button to the li element
   const deleteBtn = document.createElement('button');
   deleteBtn.className = 'btn btn-danger btn-sm float-end delete';
   deleteBtn.appendChild(document.createTextNode('X'));

   //appending text and button to the list item
   newItem.appendChild(document.createTextNode(item.value));
   newItem.appendChild(deleteBtn);

   //inserting it into the list

   listItem.appendChild(newItem);

}

//Function to remove items
function removeItem(e){
    if(e.target.className.includes('delete')){
        e.target.parentElement.remove();
    }

}

//Function to Filter Down List Items
function filterDown(e){
   
    let filterText = e.target.value.toLowerCase();
    var items = listItem.querySelectorAll('li');
    console.log(items);
    Array.from(items).forEach((item)=>{
       var itemName = item.firstChild.textContent;
       if(itemName.toLocaleLowerCase().indexOf(filterText) != -1)
       {
            item.style.display='block';

       }
       else{
        item.style.display='none';
       }
    });
}