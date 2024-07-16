/* Adding jQuery
To include jQuery, we use a <script> tag as follows:
*/
<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous">
</script>


/* .ready() 
The jQuery .ready() method waits until the HTML page’s DOM is ready to manipulate. You should wrap all JavaScript behavior inside of the .ready() method. This will make sure the web page is rendered in the browser before any jQuery code executes.
*/
$(document).ready(() => {

});


/* Targeting by Class */
$('.product-photo').show();

/* Targeting by id */
$('#someId').hide();


/* jQuery Objects
You’ve probably noticed the $ symbol before anything we target. The $ symbol is an alias for the jQuery function. The $ symbol and jQuery are interchangeable.
*/
const $jQueryObject = $('.someClass');


/* Event Handlers
Now that we’ve got jQuery up and running, let’s give it a little gas! The jQuery .on() method adds event handlers to jQuery objects. The method takes two parameters: a string declaring the event to listen for (the handler) and a callback function to fire when the event is detected.
*/
$('#login').on('click', () => {
    $loginForm.show();
})