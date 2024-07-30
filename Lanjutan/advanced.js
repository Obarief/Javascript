// fetch

// sebuah method pada API javascript untuk mengambil resource dari jaringan, dan mengembalikan promise yang selesai (fulfilled) ketika ada response yang tersedia, dalam kasus ini sebuah api true maka fulfilled ketika false maka rejected, ketika datanya banyak/jaringannya lemot maka pending 

// fetch(resource(URL) atau (object request), init (opsional bentuknya object (header, body, method)))

// hasil dari fetch = property(status 200 dll)

// $('.search-button').on('click', function() {

//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=ee6e8b41&s=' + $('.input-keyword').val(),
//         success: result => {
//             const movies = result.Search // .Search adalah array yang didalamnya ada beberapa object (untuk mengakses objectnya menggunakan .Search dari si API tersebut yaitu berupa array of object)
//             let cards = '';
//             movies.forEach(m => {
//                 cards += showCards(m);
//             });
//             $('.movie-container').html(cards)
    
//             // tombol detail click
//             $('.modal-detail-button').on('click', function() {
//                 $.ajax({
//                     url: 'http://www.omdbapi.com/?apikey=ee6e8b41&i=' + $(this).data('imdbid'),
//                     success: m => {
//                     const movieDetail = showMovieDetail(m);
//                     $('.modal-body').html(movieDetail);    
//                     },
//                     error: (e) => {
//                         console.log(e.responseText);
//                     },
//                 });
//             })
//         },
//         error: (e) => {
//             console.log(e.responseText)
//         }
//     });
// })

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

        // ketika detail di klick
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