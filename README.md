# Exploring the HTML Popover API and CSS anchor positioning

Not production ready, browser support is limited.

CSS anchor positioning requires "Experimental web platform features" enabled in chrome://flags.

### Links
https://developer.chrome.com/blog/introducing-popover-api/

https://developer.chrome.com/blog/tether-elements-to-each-other-with-css-anchor-positioning/

https://caniuse.com/?search=popover


### Highlights

-   Accessibility built in
-   Backdrop that closes the popover on click
-   Closes on escape
-   Focus is managed for us, including returning focus when popover closes
-   Popovers are added to the "top layer", meaning nothing will overlap it
-   CSS anchor positioning allows us to tether elements to each other. It also supports fallback positions.
