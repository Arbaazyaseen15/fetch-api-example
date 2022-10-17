//Variable declaration
const getText = document.getElementById('get-text');
const getUser = document.getElementById('get-user');
const outputBlock = document.querySelector('.output');
const getJSON = document.querySelector('#get-json');
const formPost = document.getElementById('add-post');
let output = '';


//event listener 
getText.addEventListener('click', printText);
getUser.addEventListener('click', printUser);
getJSON.addEventListener('click', printJSON);
formPost.addEventListener('submit', addPost);



//function for event listerner
function printText(e){
    fetch('sample.txt')
    .then( res => res.text() )
    .then( data => {
        output = '<h3>Sample Text</h3>'
        output += data;
        outputBlock.innerHTML = output
    } )
    .catch(err => console.log(err)) 
}

function printUser(){
    fetch('users.json')
    .then( res => res.json() )
    .then( data => {
        output = '<h2>Users</h2>'
        data.forEach(element => {
            output += `<ul
            ><li>Name : ${element.name} </li>
            <li>Phone: ${element.phone}</li>
            </ul>`;
            
        });
        
        outputBlock.innerHTML = output;
    })
    .catch(err => console.log(err))
}

function printJSON(e){
   fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
        // console.log(json);
        output= '<h2>App Data</h2>'
        json.forEach((obj) => {
            console.log(obj)
            output += `<ul>
            <li><b>Title: </b>${obj.title}</li><br>
            <li><b>Body: </b>${obj.body}</li>
            </ul>`
            outputBlock.innerHTML = output;
        })
    })
}

function addPost(e){
    e.preventDefault();
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;
  
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept' : 'application/json, text/plain */*',
            'Content-type' : 'application/json'

        },
        body: JSON.stringify({title:title, body:body})  
    })
    .then((res) => res.json())
    .then((data) => console.log(data))

}