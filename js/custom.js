$(document).ready(function(){
   $('.loadMore').loadMoreResults({
  tag: {
    'name': 'li',
    'class': 'post'
  },
  displayedItems: 5,
  showItems: 5,
  button:{
      'class':"btn-load-more",
      'text':"Load More"
  }
});

   $('.loadMore_questions').loadMoreResults({
  tag: {
    'name': 'li',
    'class': 'post'
  },
  displayedItems: 5,
  showItems: 5,
  button:{
      'class':"btn-load-more",
      'text':"Show More"
  }
});

$("select.multi").multipleSelect({filter: false,selectAll: false,placeholder:'Select Category'});

});