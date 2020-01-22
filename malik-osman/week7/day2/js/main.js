$(document).ready(function(){



  $('#go').on('click', function(){

    $('#results').empty().show();

    const searchText = $('#query').val();

    $.getJSON(`https://www.googleapis.com/books/v1/volumes?q=${searchText}`)
      .done(function(data){

        // console.log(data);

        data.items.forEach( function( item ){
        //
          console.log( item.volumeInfo.title );
        //
          const $result = $(`<p>${item.volumeInfo.title}</p>`);

          // 
          // $('#results').hide();
          //       $('#details').html(`
          //         <strong>Title:</stong> ${item.volumeInfo.title} <br>
          //         <strong>Author:</stong> ${item.volumeInfo.authors} <br>
          //         <strong>Description:</stong> ${item.volumeInfo.title}<br>
          //         `).show();
          //     })
          //     .fail(console.warn);

              $('#results').append($result)

    })










    })



  });
