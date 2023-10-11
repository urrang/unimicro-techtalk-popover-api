<button id="menu-toggle" popovertarget="popover-menu">Popover menu</button>

<div id="popover-menu" popover anchor="menu-toggle" class="popover-menu">
    <label>
        <span>Name</span>
        <input type="text" autofocus />
    </label>

    <label>
        <span>Address</span>
        <input type="text" />
    </label>

    <label>
        <span>Phone</span>
        <input type="tel" />
    </label>
</div>

<style>
    /* #popover-menu::backdrop {
        background: rgba(0, 0, 0, 0.1);
    } */

    #popover-menu {
        position-fallback: --flip-vertically;
    }

    @position-fallback --flip-vertically {
        @try {
            top: anchor(bottom);
            left: anchor(left);
        }
        @try {
            bottom: anchor(top);
            left: anchor(left);
        }
    }
</style>
