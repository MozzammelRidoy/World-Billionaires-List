const loadData = async(searchText, dataLimit) =>{
    const url = `https://forbes400.onrender.com/api/forbes400/${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayTableList(data, dataLimit);
}

function displayTableList(data, dataLimit){
    // console.log(data);
  
    const reachByIndrustry = document.getElementById('all-billinier');
    reachByIndrustry.textContent = '';

    // Display 15 Person
    const showAll =  document.getElementById('btn-show-all');
    if(dataLimit && data.length > 15){
        data = data.slice(0, 15);
        showAll.classList.remove('d-none');

    }
    else{
        showAll.classList.add('d-none');
    }
    

    

    // no phone found 
    const notFoundMassg = document.getElementById('no-found-massage');
    if(data.length === 0){
        // console.log('Length Zero');
        notFoundMassg.classList.remove('d-none');

    }
    else{
        notFoundMassg.classList.add('d-none');
    }

   

    data.forEach(dataElement => {
        // console.log(dataElement);
        const indrustryContent = document.createElement('div');
        indrustryContent.classList.add('col');

        indrustryContent.innerHTML = `
        <div class="card h-100 bg-body-secondary">
                  <div class="text-center my-2" ><h4 style="font-family: 'Inknut Antiqua', serif;">${dataElement.personName}</h4></div>
                  <div class="d-flex flex-column   py-1 px-2">
                    <div class=" d-flex flex-column">
          
                      <img src="${dataElement.squareImage ? dataElement.squareImage : 'Image Not Found'}" class="card-img-top " alt="...">
                      <small class=><strong>Source: </strong>${dataElement.source}</small>
                    </div>
                 
                  <div class="card-body  d-flex flex-column py-1">
                   
                    <small><strong>Rank: </strong>${dataElement.rank} </small>
                    <small><strong>Citizenship: </strong>${dataElement.countryOfCitizenship}</small>
                    <small><strong>City: </strong>${dataElement.city}</small>
                    <small><strong>Tota Shares: </strong>${dataElement.finalWorth} B</small>
                    <small><strong>Share Price: </strong>${dataElement.privateAssetsWorth} B</small>
                
                  </div>
                  </div>
              </div>    
        `;

        reachByIndrustry.appendChild(indrustryContent);
        toggleLoger(false)
    });


}

const processData = (dataLimit) => {
    toggleLoger(true);
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value ;
    
    // console.log(searchValue);
    loadData(searchValue, dataLimit);
    searchValue = '';
}

document.getElementById('btn-search').addEventListener('click', function(){
  processData(15);
})

document.getElementById('search-field').addEventListener('keydown', function(e){
    // console.log(e.key);
    if(e.key === 'Enter'){
        processData(15);
    }
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


// show all 
document.getElementById('btn-show-all').addEventListener('click', function(){
    processData();
})


document.getElementById('btn-rech-by-indrustry').addEventListener('click', function(){
    window.location.href = 'rech-by-indrustry.html';
})


toggleLoger(true)
loadData('getAllBillionaires', 15);
