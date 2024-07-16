var main = function() {
    $('.more-btn').on('click', (event) => {
        $(event.currentTarget).siblings().toggle();
    });
  
    $('.share').on('click', () => {
        $('.share-menu').toggle();
    });
  
    $('.bell').on('click', (event) => {
        $(event.currentTarget).toggle('active');
    })
};
  
$(document).ready(main);