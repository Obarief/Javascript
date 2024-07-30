// fetch

// sebuah method pada API javascript untuk mengambil resource dari jaringan, dan mengembalikan promise yang selesai (fulfilled) ketika ada response yang tersedia, dalam kasus ini sebuah api true maka fulfilled ketika false maka rejected, ketika datanya banyak/jaringannya lemot maka pending 

// fetch(resource(URL) atau (object request), init (opsional bentuknya object (header, body, method)))

// hasil dari fetch = property(status 200 dll)


// tanpa ajax (vanilla javascript)
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function(){
    const inputKeyword = document.querySelector('.input-keyword');
    fetch('http://www.omdbapi.com/?apikey=ee6e8b41&s=' + inputKeyword.value) // karena mengembalikan fungsi promise maka harus ada ketika keadaan fulfilled atau rejected menggunakan .then dan .catch

    .then(response => response.json()) // untuk mengganti data respone dari promise ke json
    .then(response => {
        const movies = response.Search;
        let cards = '';
        movies.forEach(m => cards += showCards(m))// untuk mengganti data json ke object
        
        const movieContainer = document.querySelector('.movie-container');
        movieContainer.innerHTML = cards;

        // ketika detail di klick (diletakkan di dalam fetch tombol search karena ini akan dieksekusi bila tombol search sudah di klik dan halaman html memunculkan tombol detailnnya)
        const modalDetailButton = document.querySelectorAll('.modal-detail-button');
        modalDetailButton.forEach(btn => { // nodelist dari button diperulangi menjadi single 
            btn.addEventListener('click', function(){
                const imdbid = this.dataset.imdbid;
                fetch('http://www.omdbapi.com/?apikey=ee6e8b41&i=' + imdbid)
                .then(response => response.json())
                .then(m => {
                    const movieDetail = showMovieDetail(m);
                    const modalBody = document.querySelector('.modal-body');

                    modalBody.innerHTML = movieDetail;
                })
            })
        })
    }) 
});



function showCards(m){
    return `<div class="col-md-4 my-5">
                        <div class="card">
                            <img src="${m.Poster}" class="card-img-top" alt="">
                            <div class="card-body">
                            <h5 class="card-title">${m.Title}</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">${m.Year}</h6>
                            <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                            </div>
                        </div>
                        </div>`
};


function showMovieDetail(m){
    return `<div class="container-fluid">
                        <div class="row">
                        <div class="col-md-3">
                            <img src="${m.Poster}" class="img-fluid">
                        </div>
                        <div class="col-md">
                            <ul class="list-group">
                            <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                            <li class="list-group-item"><strong>Director : </strong> ${m.Director}</li>
                            <li class="list-group-item"><strong>Actors : </strong> ${m.Actors}</li>
                            <li class="list-group-item"><strong>Writer : </strong> ${m.Writer}</li>
                            <li class="list-group-item"><strong>Plot : </strong> <br> ${m.Plot}</li>
                            </ul>
                        </div>
                        </div>
                    </div>`
};


// HTML

// <!doctype html>
// <html lang="en">
//   <head>
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//     <title>Callback Project_Movie Database</title>
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
//   </head>
//   <body>

//     <div class="container">
//       <div class="row mt-5">
//         <div class="col">
//           <h1>Movie Database</h1>
//         </div>
//       </div>

//       <div class="row">
//         <div class="col-md-8">
//           <div class="input-group mb-3">
//             <input type="text" class="form-control input-keyword" placeholder="Search Movie">
//             <button class="btn btn-primary search-button" type="button" id="button-addon2">Search</button>
//           </div>
//         </div>
//       </div>
//       <div class="row movie-container">
        
//       </div>
//     </div>


//     <!-- awal modal -->
//       <div class="modal fade" id="movieDetailModal" tabindex="-1" aria-labelledby="movieDetailModalLabel" aria-hidden="true">
//         <div class="modal-dialog modal-dialog-centered modal-lg">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h1 class="modal-title fs-5" id="movieDetailModalLabel">Modal title</h1>
//               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div class="modal-body">
//               <div class="container-fluid">
//                 <div class="row">
//                   <div class="col-md-3">
//                     <img src="" class="img-fluid">
//                   </div>
//                   <div class="col-md">
//                     <ul class="list-group">
//                       <li class="list-group-item"><h4>Avengers (2016)</h4></li>
//                       <li class="list-group-item"><strong>Director : </strong> Oktavari Budi</li>
//                       <li class="list-group-item"><strong>Actors : </strong> Yasin, Jay</li>
//                       <li class="list-group-item"><strong>Writer : </strong> Albait</li>
//                       <li class="list-group-item"><strong>Plot : </strong> <br> test</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div class="modal-footer">
//               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     <!-- akhir modal -->


















//     <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
//     <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
//     <script src="advanced.js"></script>
//   </body>
// </html>