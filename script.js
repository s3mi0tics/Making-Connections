
var flipped=false;

function changeName(){
    var name1 = document.querySelector("#name1")
    if(flipped){
        name1.innerHTML="Colby Kauk"
    }
    else{
        name1.innerHTML="Bunsen Burner"
    }
 flipped = !flipped;
}

function addConnection(id){
    removeConnection(id);
    var connections=document.querySelector("#connections");
    var count= parseInt(connections.innerText);
    connections.innerText = count+1

}

function removeConnection(id){
    var element=document.querySelector("#"+id)
    element.remove()
    var requests=document.querySelector("#requests");
    var count= parseInt(requests.innerText);

    requests.innerText= count-1
}

