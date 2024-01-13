const loadData = async() =>{
    const url = `https://forbes400.onrender.com/api/forbes400/getAllBillionaires`;
    const res = await fetch(url);
    const data = await res.json();
    displayTableList(data);
}

function setPersonNameInList(idName, data){
    const list = document.getElementById(idName);
    list.innerHTML = data;
    return list;
}

function clickEyeIcon(clickId, data){
    document.getElementById(clickId).addEventListener('click', function(){
            console.log('Clicked');
            console.log(data);
            const modalTitle = document.getElementById('ModalLabelTitle');
            modalTitle.innerHTML = data.personName;
            const modalBody = document.getElementById('modal-body');
            modalBody.innerHTML = `
            <div>
            <div class="text-center">
               <small class="fs-6">${data.abouts ? data.abouts[0]: data.bios[2]}</small>
            </div>
            <div class="d-flex justify-content-between align-items-center column-gap-2">
                <div class=""><img src='${data.squareImage}' class="w-100 img-fluid py-4 d-block" alt="">
                <small><span class="fw-bold fs-6">Source</span> ${data.source}</small>
                </div>
                <div class="">
                <h3 class="fs-4 py-2 fw-bold text-decoration-underline text-center"> Genarel Information </h3>
                <p>${data.bios[0]}</p> <p> ${data.bios[1]}</p>
                <small class="d-block"><span class="fw-bold fs-6">Rank:</span> ${data.rank}</small>
                <small class="d-block"><span class="fw-bold fs-6">Birthday:</span> ${data.birthDate}</small>
                <small class="d-block"><span class="fw-bold">Gender:</span> ${data.gender}</small>
                </div>
            </div>
           </div>
            `;
            


    });

}
function displayTableList(data){
    console.log(data);

    setPersonNameInList('list-1', data[2].personName);
    setPersonNameInList('list-2', data[11].personName);
    setPersonNameInList('list-3', data[2494].personName);
    setPersonNameInList('city-1', data[2].countryOfCitizenship);
    setPersonNameInList('city-2', data[11].countryOfCitizenship);
    setPersonNameInList('city-3', data[2494].countryOfCitizenship);
    setPersonNameInList('rank-list-1', data[2].rank);
    setPersonNameInList('rank-list-2', data[11].rank);
    setPersonNameInList('rank-list-3', data[2494].rank);


    clickEyeIcon('click-list-1', data[2]);
    clickEyeIcon('click-list-2', data[11]);
    clickEyeIcon('click-list-3', data[2494]);

   
}

document.getElementById('btn-rech-by-indrustry').addEventListener('click', function(){
    window.location.href = 'rech-by-indrustry.html';
})
document.getElementById('show-all-billiniers-btn').addEventListener('click', function(){
    window.location.href = 'show-all-billinier.html';
})



document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;
    window.location.href = 'show-all-billinier.html';
    // loadData(searchValue);

  

})



loadData();