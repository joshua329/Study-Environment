/* .css()
jQuery provides a method called .css(). This method accepts an argument for a CSS property name, and a corresponding CSS value.
*/
$('.example-class').css('color', '#FFFFFF');

$('.example-class').css({
    color: '#FFFFFF',
    backgroundColor: '#000000',
    fontSize: '20px'
})


/* .animate() 
The jQuery .animate() method enhances the visual possibilities by making CSS value changes over a period of time.

- the first paramater is the CSS properties
- the second is time it takes in milli-seconds -- default (400), or 'fast', 'slow' strings
*/
$('.example-class').animate({
    height: '100px',
    width: '100px',
    borderWidth: '10px'
}, 500);


/* .addClass() */
$('.example-class').addClass('active');


/* .removeClass() */
$('.example-class').removeClass('active');


/* toggleClass() 
Similar to other effects methods, you can use a toggle method instead of chaining the .addClass() and .removeClass() methods together.
The .toggleClass() method adds a class if an element does not already have it, and removes it if an element does already have it.
*/
$('.example-class').toggleClass('active');
