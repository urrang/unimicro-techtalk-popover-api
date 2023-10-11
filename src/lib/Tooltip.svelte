<script lang="ts">
    let tooltip: any;

    function onMouseenter() {
        tooltip.showPopover();
    }

    function onMouseleave() {
        tooltip.hidePopover();
    }
</script>

<button
    id="tooltip-toggle"
    popovertarget="tooltip"
    on:mouseenter={onMouseenter}
    on:mouseleave={onMouseleave}
>
    Tooltip
</button>

<div bind:this={tooltip} id="tooltip" popover anchor="tooltip-toggle">Helpful text</div>

<style>
    #tooltip {
        position-fallback: --flip-vertically;
        background: #27364f;
        color: #fff;
        font-size: 14px;
        margin: 4px 0;
        padding: 6px;
        border-radius: 6px;
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
