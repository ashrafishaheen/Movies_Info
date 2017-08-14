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
axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=cedb5e5c/?s='+searchText)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  //console.log(searchText);
}
