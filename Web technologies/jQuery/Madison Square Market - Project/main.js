$(document).ready(() => {
    const $cart = $('#cart');
    $cart.on('click', () => {
      $cart.show();
    })
  
    const $account = $('#account');
    $account.on('click', () => {
      $account.show();
    })
  
    const $help = $('#help');
    $help.on('click', () => {
      $help.show();
    })
  
  
    $('.dropdown-menu').on('mouseleave', () => {
      $('.dropdown-menu').hide();
    })
})