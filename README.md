# Exploring the HTML Popover API and CSS anchor positioning

Not production ready, browser support is limited.

https://caniuse.com/?search=popover

CSS anchor positioning requires "Experimental web platform features" enabled in chrome://flags.

**Highlights**

-   Accessibility built in
-   Clickable backdrop built in
-   Closes on escape
-   Focus is managed for us, including returning focus when popover closes
-   Popovers are added to the "top layer", meaning nothing will overlap it
-   CSS anchor positioning allows us to tether popovers to their toggle. It also supports fallback positions.
