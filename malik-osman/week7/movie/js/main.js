$(document).ready(function(){

  document.getElementById("searchForm").addEventListener("submit", searchMovies);

  function searchMovies(e) {
    let input = document.getElementById("searchMovie");

    const xhr = new XMLHttpRequest();

    xhr.open("GET", `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${input.value}`, true);

    xhr.onload = function() {
      if (this.status === 200) {
        let movies = document.getElementById("movies");
        let data = JSON.parse(this.responseText);
        data.results.forEach(function(movie) {
          listMovies.innerHTML += `

            <div>
             <p>${movie.title}</p>
            </div>`;
        });
      }

    }

    xhr.send();

    e.preventDefault();
  }






});




















// $('#output').append(`<p><strong>${ data.title}</strong>
//   <br>
//   ${ data.release_date}
//   </p>
//   `)
//
//     console.log(`
//       Title: ${data.title}
//       Year: ${data.release_date}
//       `);



// $('#search').on('click', function(){
//   let searchMovieValue = $('#searchMovie').value;
//
//   const xhr = new XMLHttpRequest();
//
//   xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=${searchMovieValue}`, true);
//
//   xhr.onload = function(){
//     if (this.status === 200)
//           {
//             //return server response as an object with JSON.parse
//             console.log(JSON.parse(this.responseText));
//           }
//
//   xhr.send();
//
//
//
//
//
//
//   };
//
//
//
//
//
//
//
// }
//
//
// )});
