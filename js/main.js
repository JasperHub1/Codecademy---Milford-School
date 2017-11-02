
$(document).ready(() => {
  $('.glyphicon-star').on('click', event => {
    $(event.currentTarget).toggleClass('active');
  })
  $('.glyphicon-remove').on('click', event => {
    $(event.currentTarget).parent().remove();
  })


  // use event.preventDefault to disable type="submit" auto refreshing page which will delete any added contents
  // or change type=submit to button
  // issue of above two method is the placeholder will not be refreshed to default, so added $('#toDo').val("");

  $('#addBtn').on('click', event => {
  	event.preventDefault()
  	// var text = document.getElementById('toDo').value;
  	var text = $('#toDo').val();
  	var html = '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
  	if (text !== "") {
  		$(".list").append(html);
  		$('#toDo').val("");
  	}
  });


})
