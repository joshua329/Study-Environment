$(document).ready(() => {
    $('#text').on('keyup', (event) => {
      $('.preview').html($(event.currentTarget).val());
    });
    $('#font').on('change', () => {
      $('.preview').css('font-family', '24px');
      $('#weight').on('keyup', (event) => {
        let fontSize = $(event.currentTarget).val() + 'px';
        $('.preview').val() = fontSize;
      })
    });
  });