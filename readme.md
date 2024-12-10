 Setup Instructions:
 Folder for storing the files for this project: Task 1 is created. The directory contains four files with extensions:
 index.html
 styles.css
 script.js
 readme.md
 This code uses Font Awesome for icons, which is being linked from a CDN. Internet access to fetch the icon library is needed.
 Simply right-click the index.html file and select open with preferred browser.
 If you want to adjust the timer, you can modify the JavaScript code inside the <script> tags

 Technology Choices and Rationale:
 HTML:
 It is used to structure the content of the page.
 CSS:
 CSS is used for styling the webpage.
 JavaScript:
 JavaScript is used to provide functionality to the page, including the timer logic.
Font Awesome: 
It gives access to vector-based icons, ensuring high-quality and scalable graphics.
CSS Flexbox: 
It simplifies the layout and ensures responsiveness across devices.
CSS Animations:
It makes the user interface more interactive.

Known Limitations:
Cross-Browser Compatibility:
The project uses CSS Flexbox, CSS Animations, and other modern web technologies that are supported by most browsers but may not be fully compatible with older versions, particularly Internet Explorer and older versions of Safari.
Performance Issue with Multiple Cards:
As the number of draggable cards or animated elements increases, the performance of the page may degrade, especially on lower-end devices or browsers.
Error Handling:
The current code doesn't include any error handling for failure to load.

Future Improvements:
Enhanced Timer Features : Pause, Reset, and Custom Time
Adding Details in the Card
Error Handling

Overview of the working of the html, css and js file:
 Here's how the elements will work. The card in the middle will be draggable up or down using mouse actions. It contains a right panel which has different icons.The  Icon Source I used in this project is Font Awesome.The gradient background from the image was incorporated using a linear gradient in CSS. As we can see in the Front end there is a smooth transition of background color. The card in the center, which appears semi-transparent, was made draggable vertically. The right panel includes list of icons and a timer, as per the design. The blinking icon was animated using CSS keyframes and javascript function updateTimer(). We can drag any card up or down independently by clicking and moving the mouse. To implement vertically draggable cards where the cards "roll" behind each other and the main card remains visible at the front, we can achieve this by managing the z-index and transform properties of the cards. The cards will cycle through positions as we drag them up or down. Each card is given a default position with transform and z-index values to create the appearance of a main card and two adjacent cards above and below. It detects vertical dragging with the mousemove event. If dragged upwards (offsetY < -100), the cards roll up. If dragged downwards (offsetY > 100), the cards roll down. Cards are rearranged in the cards array using shift and push for upward movement, and pop and unshift for downward movement. The updateCardPositions function updates the CSS styles of the cards to reflect their new positions. The transition property in CSS ensures smooth animations when the cards move and change positions.

To prevent the content of the rear cards from interfering with the content of the card in front:
Hide Rear Cards: Use opacity to dim or hide rear cards while ensuring only the front card is fully visible.
Adjust Pointer Events: Set pointer-events: none for rear cards to disable interactions with them.
opacity adjustment to 0.5 was made for the nth-child.
Rear cards have pointer-events: none to disable mouse or keyboard interactions.
Only the front card retains pointer-events: auto.

JavaScript Uses updateCardPositions to compute card positions, scale, z-index, and visibility.
To make only three cards visible at any given time while keeping the others hidden, we can adjust the CSS and JavaScript. Cards outside the visible range will have their opacity set to 0 and pointer-events disabled. This ensures a clean interface where only the active card and its immediate neighbors are visible.
Only three cards (visible-top, visible-center, and visible-bottom) are visible at any time.
Other cards are hidden with opacity: 0. Specifically, we need to ensure that the cards are initially positioned correctly and that the classes (visible-top, visible-center, and visible-bottom) are applied properly when the page loads. The updateCardPositions function ensures that only three cards are visible (top, center, and bottom).
visible-center: Full visibility for the current center card.
visible-top: Partially visible for the top card, moved up slightly.
visible-bottom: Partially visible for the bottom card, moved down slightly.
The cards use smooth transitions (transform, z-index, opacity) to ensure the rolling effect is fluid.

To place the panel containing the timer on the right side of the screen, we can use CSS Flexbox or CSS Grid for layout management. In this code, Flexbox is used for simplicity, ensuring the card area and the timer panel are displayed side by side. The timer panel will be placed on the right side of the screen, while the cards (with the circle and divs) will remain on the left.
To display the cards right at the center of the screen while keeping the timer panel on the right, we can adjust the layout by centering the .cards container using Flexbox within the .container. The timer panel will remain on the right side, and the cards will be centered.
Variables: seconds and minutes are used to keep track of the time.
startTimer() function: This function starts the timer and updates every second using setInterval(). When seconds reaches 60, it resets and increments the minutes.
Timer Display: The timer is updated every second in the timerDisplay div, and it is formatted as mm:ss (e.g., 00:01, 01:10).
window.onload = startTimer;: This ensures that the timer starts automatically as soon as the page is loaded.
setInterval(): This JavaScript function is used to update the timer every 1000 milliseconds (1 second).