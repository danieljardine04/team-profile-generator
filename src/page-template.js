function generateMarkdown(data, type){
  console.log(data.getRole());

  // switch(data.getRole()){
  //   case ''
  // }

  const card = `
  <div class="card">
    <div>
      <h2>${data.name}</h2>
      <h3>${data.getRole()}<h3>
    </div>
    <div>
      <ul>
        <li> ID: ${data.id}</li>
        <li> Email: ${data.email}</li>
        


  </div>`

  return card;
}