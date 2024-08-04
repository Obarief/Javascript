// error handling



function cobaPromise(){
    return new Promise((resolve, rejected) => {
        const waktu = 3000;
        if(waktu < 5000){
            setTimeout(() => {
                resolve('selesai')
            }, waktu);
        }else if(waktu > 5000 && waktu < 10000){
            setTimeout(() => {
                rejected('kelamaan!')
            }, waktu);
        }else{
            rejected('gagal')
        }
    });
};
const coba = cobaPromise()
coba
    // .then(() => console.log(result)) // () mengacu langsung pada function cobaPromise()
    .then((result) => console.log(result)) // (result) mengacu pada fungsi .then sebagai callback
    .catch((error) => console.log(error))


// throw new Error pada real project

// // try catch = untuk costumisasi error yang ada


// // button search
// const searchButton = document.querySelector('.search-button')
// searchButton.addEventListener('click', async function(){
//     try{
//     const inputKeyword = document.querySelector('.input-keyword');
//     const movies = await getMovies(inputKeyword.value);
//     updateUI(movies)

//     }catch(err){ // tidak ada yang ditangkap oleh catch kecuali ada kesalahan pada menangkap fetch
//         alert(err)
//     }
// });


// // function get movies
// function getMovies(keyword){
//     return fetch('http://www.omdbapi.com/?apikey=ee6e8b41&s=' + keyword) // error yang ditangkap oleh fetch hanya error yang ada pada URLnya saja
//     .then(response => {
//         if(!response.ok){
//             throw new Error(response.statusText)
//             // throw new Error melempar ke catch di searchButton
            
//         }
//         return response.json()
        
//     })
//     .then(response => {
//         if(response.Response === "False"){
//             throw new Error(response.Error)
//         }
//         return response.Search
//     })
// }

// function updateUI(movies){
//     let cards = '';
//     movies.forEach(m => cards += showCards(m));
//     const movieContainer = document.querySelector('.movie-container');
//     movieContainer.innerHTML = cards;
// }



// // button detail
// document.addEventListener('click', async function(e){
//     try{
//         if(e.target.classList.contains('modal-detail-button')){
//             const imdbid = e.target.dataset.imdbid;
//             const movieDetail = await getMoviesDetail(imdbid);
//             updateUIDetail(movieDetail)
//         }
//     }catch(err){
//         console.log(err)
//     }
// })


// // function get movies details
// function getMoviesDetail(imdbid){
//     return fetch('http://www.omdbapi.com/?apikey=ee6e8b41&i=' + imdbid)
//     .then(response => {
//         if(!response.ok){
//             throw new Error(response.statusText);
//         }
//         return response.json()
//     })
//     .then(m => {
//         if(m.Response === "False"){
//             throw new Error(m.Error)
//         }
//         return m
//     }) 
// }

// function updateUIDetail(m){
//     const movieDetail = showMovieDetail(m);
//     const modalBody = document.querySelector('.modal-body');
//     modalBody.innerHTML = movieDetail;
// }






// // function html
// function showCards(m){
//     return `<div class="col-md-4 my-5">
//                         <div class="card">
//                             <img src="${m.Poster}" class="card-img-top" alt="">
//                             <div class="card-body">
//                             <h5 class="card-title">${m.Title}</h5>
//                             <h6 class="card-subtitle mb-2 text-body-secondary">${m.Year}</h6>
//                             <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
//                             </div>
//                         </div>
//                         </div>`
// };


// function showMovieDetail(m){
//     return `<div class="container-fluid">
//                         <div class="row">
//                         <div class="col-md-3">
//                             <img src="${m.Poster}" class="img-fluid">
//                         </div>
//                         <div class="col-md">
//                             <ul class="list-group">
//                             <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
//                             <li class="list-group-item"><strong>Director : </strong> ${m.Director}</li>
//                             <li class="list-group-item"><strong>Actors : </strong> ${m.Actors}</li>
//                             <li class="list-group-item"><strong>Writer : </strong> ${m.Writer}</li>
//                             <li class="list-group-item"><strong>Plot : </strong> <br> ${m.Plot}</li>
//                             </ul>
//                         </div>
//                         </div>
//                     </div>`
// };


// sinkronus
// - menggunakan try dan catch

// asinkronus
// jika ada waktu tunggu/file terlalu besar
// throw error = throw itu sama seperti return/keluar dari function