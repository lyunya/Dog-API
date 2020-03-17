function dogPicNum(){ 
    $("#submit").click(function(event){
    event.preventDefault();
    var str = $("#quantity").val();
    //console.log(str);
    return getDogImages(str);
});
};

function getDogImages(input) {
    fetch(`https://dog.ceo/api/breeds/image/random/${input}` )
      .then(response => response.json())
      .then(responseJson => 
        displayResults(responseJson.message)
        )
      .catch(error => alert('Something went wrong. Try again later.'));
  }
  
  function displayResults(responseJson) {
    $('.results').removeClass('hidden');
    $('.image-container').empty();
    console.log(responseJson);
    const result = responseJson.map(item => {
        //$('.results').replaceWith(
            return `<img src="${item}" class="results-img">`
    //)
})
$('.image-container').append(result);
  }

dogPicNum();