<script lang="ts">
    let isExpanded = false;

    /*
        TODO:

        - Clickable backdrop to close popover
        - Close popover when Escape is pressed
        - Focus popover when it becomes visible
        - Return focus to the element that opened the popover when it closes
        - Add library for positioning, e.g FloatingUI
        - Add library for portals to avoid other fixed content clipping the popover
    */
</script>

<div class="container">
    <button
        aria-haspopup="dialog"
        aria-controls="popover-menu"
        aria-expanded={isExpanded}
        on:click={() => (isExpanded = !isExpanded)}
    >
        Toggle menu
    </button>

    {#if isExpanded}
        <div id="popover-menu" role="dialog" class="popover-menu">
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
    {/if}
</div>

<style>
    .container {
        position: relative;
    }

    #popover-menu {
        position: absolute;
        top: 2.5rem;
        left: 0;
        z-index: 1;
    }
</style>
