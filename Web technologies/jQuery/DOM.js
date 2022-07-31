/* Children 
According to the DOM tree, the outermost element is the parent of all elements inside of it. Therefore, the HTML elements inside of the outer element are children. The jQuery .children() method allows us to target these elements.
*/
const $kids = $('#holder').children();
$kids.on('click', event => {
  $(event.currentTarget).css('border', '1px solid black');
});


/* Parent 
The .parent() method targets the parent element of elements
*/
$('.choice').on('click', event => {
    $(event.currentTarget).parent().hide();
});
  

/* Siblings 
In the code above, the .siblings() method targets elements adjacent
*/
$('.choice').on('click', event => {
    $(this).siblings().removeClass('selected');
    $(event.currentTarget).addClass('selected');
});


/* Closest
To select an element close to the current element, we can use jQuery’s .closest() method. The .closest() method will travel up the DOM tree to find a specified selector closest to it. 
*/
$('.example-class-one').closest('.another-class');


/* Next 
Sometimes you don’t want to target all the siblings of an element — you just want to target the next one. That’s where the aptly-named .next() method comes in!

there is also a .prev() method. 
Read more below
https://api.jquery.com/prev/
*/
const $heading = $('.heading');
$heading.on('click', () => {
  $(event.currentTarget).next().toggle();
});


/* find
This method finds and targets singular or multiple elements that are descendants of an element. Unlike the .children() method, it traverses all descendants of the specified element, not just the first level down.
*/
const $items = $('.myList').find('li');