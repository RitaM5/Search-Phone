const searchButton = () => {
    const searchText = document.getElementById('input-value');
    const input = searchText.value;
    const phoneDetails = document.getElementById('display-details');
    phoneDetails.textContent = '';
    const errorText = document.getElementById('error');
    const url = `https://openapi.programming-hero.com/api/phones?search=${input}`
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.status == false) {
                errorText.innerText = 'No device found !';
                searchText.value = '';
            }
            else {
                displayShowsPhone(data.data);
                searchText.value = '';
                errorText.innerText = "";
            }
        });
}
//for phones gallery
const displayShowsPhone = phones => {
    const phoneDetails = document.getElementById('display-details');
    phoneDetails.textContent = '';
    const mainphones = phones.slice(0, 20);
    for (const phone of mainphones) {
        //console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col-md');
        div.innerHTML = `  
     <div class="card bg-light Larger shadow border-0 h-50 text-center">
          <img src="${phone.image}" class="card-img-top pt-2 w-50 mx-auto" alt="">
        <div class="card-body">
          <p class="card-text"><span class="fw-bold">Name :</span> ${phone.phone_name}</p>
          <p class="card-text"><span class="fw-bold">brand :</span> ${phone.brand}</p>
         <button onclick ="showDetails('${phone.slug}')" class="bg-secondary border-0 px-3 py-1 text-white p-1 rounded">Details</button>
        </div>
     </div>
        `;
        phoneDetails.appendChild(div);
    }
}

