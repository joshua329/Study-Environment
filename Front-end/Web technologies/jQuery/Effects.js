/* .hide()
The first tool you will add to your jQuery effects tool belt is the .hide() method. When you hide an element, your browser will render the HTML as if the hidden element does not exist. It will disappear from the page and the space that it was taking up will disappear as well. 
*/
$('.hide-arrow').on('click', () => {
    $('.shoe-information').hide();
});


/* .show()
Now that we’ve learned how to hide elements on our page, we want to know how to make them reappear. Luckily, the .show() method does the opposite of .hide(). If an element on your page is hidden, .show() will make it appear.
*/
$('.show-arrow').on('click', () => {
    $('.shoe-information-2').show();
});


/* .toggle()
 It is common for web pages to have one button that will either hide or show elements depending on their current state. We can achieve this by using the .toggle() method
*/
$('.toggle-button').on('click', () => {
    $('.shoe-information-3').toggle();
});


/* Fading 
he .fadeIn() method is called on an HTML element. Instead of instantly showing the element, .fadeIn() and .fadeOut() make the element appear or disappear over a given period of time. You can think of this as an animation. The transition between being visible and invisible happens over a duration of time.
*/
$('div').fadeOut(1000);
$('div').fadeIn(1000);


/* .fadeToggle()
This method is similar to .toggle(). If you call .fadeToggle() on an element that is invisible, it will fade in. And if the element is already visible, then .fadeToggle() will make it fade out.

Read more in the documentation
https://api.jquery.com/fadetoggle/
*/
$('div').fadeToggle('fast');


/* Sliding
using sliding effects, an element on your web page will slide up or down into place instead of appearing or disappearing. Just like with the other effects, sliding can be applied to any element on your page whether it be an image, a video, or text.

Sliding methods are animations; they happen over a period of time. As a result, sliding methods have an optional parameter to determine how long the animation will take.
*/
$('.up-button').on('click', () => {
    $('.slide-image').slideUp(100);
});
  
$('.down-button').on('click', () => {
    $('.slide-image').slideDown('slow');
});
  
$('.slide-toggle-button').on('click', () => {
    $('.slide-image').slideToggle();
});  