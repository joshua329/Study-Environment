/* Introduction to Mouse Events
The jQuery library provides a collection of methods that serve one of two purposes.

To listen for an event — an event (e.g. clicking a button) is something the user does to trigger an action.
To add a visual effect — a visual effect (e.g. a drop-down menu appearing when a user clicks a button) is something that changes the appearance of the web page. Events are often responsible for triggering a visual effect.
In this lesson, you will learn how to link a user event to a visual effect using event handlers.

There are two parts to an event handler: an event listener and a callback function.
- An event listener is a method that listens for a specified event to occur, like a click event.
- A callback function is a function that executes when something triggers the event listener.
*/
$('.example-class').on('click', () => {
    // Execute code here when .example-class is clicked
});


/* Mouse Enter
There is another event triggerwhen a user enters the area that a target element occupies.
*/
$('.example-class').on('mouseenter',  () => {
    // Execute code here when mouse enters .example-class
});


/* Mouse Leave
The mouseleave event listener can detect when a user’s mouse leaves the area that an element occupies.
*/
$('.example-class').on('mouseleave', () => {
    // Execute code here when mouse leaves .example-class
});


/* Chaining Events
we chain a mouse enter event to a mouse leave event. Both of the event handlers target .example-class elements.
*/
$('.example-class').on('mouseenter', () => {
    $('.example-class-one').show();
}).on('mouseleave', () => {
    $('.example-class-one').hide();
});


/* currentTarget
Instead of selecting $('.product-photo') in each callback function, we need to pass event information into the function and call the currentTarget attribute
*/
$('.example-class').on('mouseenter', event => {
    $(event.currentTarget).addClass('photo-active');
});