const loadpost = () => {
    
    const url = 'https://jsonplaceholder.typicode.com/posts'; 
    fetch(url)
        .then(res => res.json())
        .then((data) => {
            showndisplay(data);
        })
        
}


const showndisplay = (post)=>{
    const getEl= document.getElementById("card-container");
    getEl.innerHTML="";
     post.forEach((postEl)=> {
        const poster = document.createElement("div");
        poster.innerHTML = `
         <div class="cared">
            ${postEl.title}
            ${postEl.body}
        </div>
       
     `
     getEl.append(poster)
    });
    
}
