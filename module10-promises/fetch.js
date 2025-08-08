async function fetchData(){
    let response=await fetch("https://jsonplaceholder.typicode.com/posts");
    let data=await response.json();
    console.log("Titles of the first 5 posts : ");
    let res= data.slice(0,5).map(record=>record.title);
    console.log(res);
}
fetchData();

