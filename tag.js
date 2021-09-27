


const ul= document.querySelector("ul"),
input = ul.querySelector("input"),
countNumber =  document.querySelector(".details span");

let tags = [];
let maxTag = 10;
countTag();

function countTag(){
    input.focus();
    countNumber.innerText = maxTag - tags.length;   //substracting max value with tag length.

}

function createTag(){
    ul.querySelectorAll("li").forEach(li => li.remove());  //removing li tags before adding so there will be no duplicate tags.
    tags.slice().reverse().forEach(tag =>{
        let liTag = `<li>${tag} <i class="fas fa-times" onclick="remove(this, '${tag}')"></i></li>`;
        ul.insertAdjacentHTML("afterbegin", liTag);                     //inserting or adding inside ul tag in li vlaues
    });
    countTag();
}

function remove(element, tag){
    let index = tags.indexOf(tag);      //getting removing tag index.
    tags = [...tags.slice(0, index), ...tags.slice(index+1)];   //removing or selected tag from an array tags;
    // console.log(tags);
    element.parentElement.remove();
    countTag();
}


function addTag(e){
    if(e.key == "Enter"){
        let tag = e.target.value.replace(/\s+/g, ' ');    //removing unwanted spaces from user tag
        if(tag.length > 1 && !tags.includes(tag)){         //if tag length is greater than 1 and tag isn't exist already.
                if(tags.length < 10){
                    tag.split(',').forEach(tag => {         //spliting each tag from comma,
                        tags.push(tag);                     //adding each tag inside an array
                        createTag();
                    });
                }
        }
        e.target.value = "";
    }
}

input.addEventListener("keyup", addTag);

const removeBtn = document.querySelector("button");
    removeBtn.addEventListener("click", () =>{
        tags.length = 0;                                // making array empty;
        ul.querySelectorAll("li").forEach(li => li.remove());
        countTag();
    })