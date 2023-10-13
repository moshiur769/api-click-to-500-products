function addallpost(){
    const url ="https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then(res => res.json())
    .then(data => displayapi(data))
}

function displayapi(item){
    const getapidata = document.getElementById('getallpost');
    item.map(post=>{
        const div = document.createElement('div');
        div.className='card bg-base-100 gap-2 shadow-xl';
        div.innerHTML =`
            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
             <div class="card-body">
                    <h2 class="card-title">${post.title}</h2>
                    <p>${post.body}</p>
             </div>
      </div>
      
      `;
      getapidata.appendChild(div);
    })
}