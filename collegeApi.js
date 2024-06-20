let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
   
  let input = document.querySelector("input").value;
  let collarr = await GetColleges(input);
  show(collarr);
});

function show(collarr) {
  let list = document.querySelector("ul");
  list.innerText = " ";
  for (col of collarr) {
    console.log(col.name);

    let li = document.createElement("li");
    li.innerText = col.name;
    list.appendChild(li);
  }
}

async function GetColleges(input) {
  try {
    let res = await fetch(url + input);
    let response = await res.json();
    return response;
  } catch (e) {
    console.log("ERROR:", e);
  }
}
