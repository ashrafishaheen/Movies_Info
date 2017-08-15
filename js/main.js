$(document).ready( function() {
$('#searchForm').on('submit',function(e){
  var searchText = $('#searchText').val();
  getMovies(searchText);
  e.preventDefault();
});

});
function getMovies(searchText){


/*axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=cedb5e5c'+searchText)
.then (function(response) {
  console.log(response);
})
.catch (function(err) {
  console.log(err);
}); */

// Make a request for a user with a given ID


axios.get('https://api.themoviedb.org/3/movie/550?api_key=d67ad8b8ff97775c9ec20d39eb1df389')
  .then(function (response) {
    console.log(response);
    var movies = response.data.genres;
    var output = '';
    $.each(genres,(index, genres) => {
      output += `<div class="col-md-3">
      <div class="well text-center">
      <img src="${genres.poster_path}">
      <h5>${genres.title}</h5>
      <a onclick="movieSelected('${genres.imdb_id}')"class="btn btn-primary" href="#">Movies Details</a>
      </div>
      </div>

      `;
    });


    $('#movie').html(output);
  })
  .catch(function (error) {
    console.log(error);
  });

  //console.log(searchText);
}
