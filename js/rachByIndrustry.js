const loadData = async(searchText, dataLimit) =>{
    const url = `https://forbes400.onrender.com/api/forbes400/industries/${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayTableList(data, dataLimit);
}

function setPersonNameInList(idName, data){
    const list = document.getElementById(idName);
    list.innerHTML = data;
    return list;
}

function displayTableList(data, dataLimit){
    // console.log(data[2]);



    const reachByIndrustry = document.getElementById('rech-by-indrustry');

    reachByIndrustry.textContent = '';

    const showAll =  document.getElementById('btn-show-all');
    if(dataLimit && data.length > 15){ 
      data = data.slice(0, 15);
      showAll.classList.remove('d-none');

    }
    else{
      showAll.classList.add('d-none');
    }

    data.forEach(dataElement => {
        // console.log(dataElement);
        const indrustryContent = document.createElement('div');
        indrustryContent.classList.add('col');

        indrustryContent.innerHTML = `
        <div class="card h-100 bg-body-secondary">
                  <div class="text-center my-2" ><h4 style="font-family: 'Inknut Antiqua', serif;">${dataElement.personName}</h4></div>
                  <div class="d-flex  align-items-center py-3 px-2">
                    <div class="col-4 d-flex flex-column">
          
                      <img src="${dataElement.squareImage}" class="card-img-top " alt="...">
                      <small class=><strong>Source: </strong>${dataElement.source}</small>
                    </div>
                 
                  <div class="card-body col-8 d-flex flex-column py-3">
                   
                  <small><strong>Rank: ${dataElement.rank} </strong></small>
                    <small><strong>Citizenship: ${dataElement.countryOfCitizenship}</strong></small>
                    <small><strong>City: ${dataElement.city}</strong></small>
                    <small><strong>Tota Shares: ${dataElement.finalWorth} </strong></small>
                    <small><strong>Share Price: ${dataElement.privateAssetsWorth}</strong></small>
                
                  </div>
                  </div>
              </div>    
        `;

        reachByIndrustry.appendChild(indrustryContent);
        toggleLoger(false);
    });


}


document.getElementById('btn-back-arrow').addEventListener('click', function(){
    window.location.href = 'index.html';
})

document.getElementById('btn-show-all').addEventListener('click', function(){
  toggleLoger(true);
  loadData('technology');
})


const toggleLoger = isLoading => {
  const loaderSection = document.getElementById('loader');

  if(isLoading){
      loaderSection.classList.remove('d-none');
  }
  else{
      loaderSection.classList.add('d-none');
  }
}

toggleLoger(true)
loadData('technology', 15);
