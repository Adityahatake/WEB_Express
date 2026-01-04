/**
 * DOM (Document Object Model) in JavaScript - Complete Guide
 *
 * The DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.
 * The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.
 *
 * This file covers:
 * 1. What is the DOM?
 * 2. Accessing DOM Elements
 * 3. Manipulating Elements (Content, Attributes, Styles)
 * 4. Creating and Removing Elements
 * 5. Event Handling
 * 6. Traversing the DOM
 * 7. Useful DOM Properties and Methods
 * 8. Best Practices
 */

// 1. What is the DOM?
// The DOM is a tree-like structure where each HTML element is a node.
// Example HTML:
// <html>
//   <body>
//     <h1>Hello</h1>
//     <p>Paragraph</p>
//   </body>
// </html>

// 2. Accessing DOM Elements

// By ID
const heading = document.getElementById('main-heading');

// By Class Name (returns HTMLCollection)
const items = document.getElementsByClassName('item');

// By Tag Name (returns HTMLCollection)
const paragraphs = document.getElementsByTagName('p');

// By CSS Selector (returns first match)
const firstItem = document.querySelector('.item');

// By CSS Selector (returns all matches as NodeList)
const allItems = document.querySelectorAll('.item');

// 3. Manipulating Elements

// Changing Text Content
heading.textContent = 'New Heading';

// Changing HTML Content
heading.innerHTML = '<span style="color: red;">New Heading</span>';

// Changing Attributes
heading.setAttribute('title', 'This is a heading');
const title = heading.getAttribute('title');

// Changing Styles
heading.style.color = 'blue';
heading.style.fontSize = '2rem';

// Adding/Removing Classes
heading.classList.add('highlight');
heading.classList.remove('highlight');
heading.classList.toggle('active');

// 4. Creating and Removing Elements

// Create a new element
const newDiv = document.createElement('div');
newDiv.textContent = 'I am a new div!';

// Append to body or another element
document.body.appendChild(newDiv);

// Insert before another element
const referenceNode = document.getElementById('reference');
document.body.insertBefore(newDiv, referenceNode);

// Remove an element
document.body.removeChild(newDiv);

// Modern way (remove itself)
newDiv.remove();

// 5. Event Handling

// Add event listener
heading.addEventListener('click', function() {
    alert('Heading clicked!');
});

// Remove event listener
function handleClick() {
    alert('Clicked!');
}
heading.addEventListener('click', handleClick);
heading.removeEventListener('click', handleClick);

// Event object
heading.addEventListener('mouseover', function(event) {
    console.log('Mouse over at:', event.clientX, event.clientY);
});

// 6. Traversing the DOM

// Parent node
const parent = heading.parentNode;

// Child nodes (includes text nodes)
const children = parent.childNodes;

// Element children (only elements)
const elementChildren = parent.children;

// First/Last child
const firstChild = parent.firstChild;
const lastChild = parent.lastChild;

// Sibling nodes
const next = heading.nextSibling;
const prev = heading.previousSibling;


// Element siblings
const nextElem = heading.nextElementSibling;
const prevElem = heading.previousElementSibling;

// 7. Useful DOM Properties and Methods

// document.body, document.head, document.documentElement
// document.title, document.URL, document.domain

// Get or set input values
const input = document.querySelector('input');
input.value = 'New value';


// Focus, blur, select
input.focus();
input.blur();
input.select();

// Scroll
window.scrollTo(0, 100);

// 8. Best Practices

// - Always wait for DOM to load before manipulating
document.addEventListener('DOMContentLoaded', function() {
    // Safe to access/manipulate DOM here
});

// - Use event delegation for dynamic elements
document.body.addEventListener('click', function(e) {
    if (e.target.matches('.dynamic-button')) {
        alert('Dynamic button clicked!');
    }
});

// - Minimize direct DOM manipulation for performance

/**
 * Example: Putting it all together
 */
document.addEventListener('DOMContentLoaded', function() {
    // Create a new button
    const btn = document.createElement('button');
    btn.textContent = 'Click Me!';
    btn.className = 'dynamic-button';
    document.body.appendChild(btn);

    // Add event listener
    btn.addEventListener('click', function() {
        btn.textContent = 'Clicked!';
        btn.style.backgroundColor = 'green';
    });
});

/**
 * Summary:
 * - The DOM lets you access and manipulate HTML elements using JavaScript.
 * - You can select, create, modify, and remove elements.
 * - You can handle user events (click, input, etc.).
 * - You can traverse the DOM tree to navigate between elements.
 * - Always wait for the DOM to load before manipulating it.
 *
 * For more, see: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
 */