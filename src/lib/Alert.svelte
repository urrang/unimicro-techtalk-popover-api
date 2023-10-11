<script lang="ts">
    import CloseIcon from '$lib/CloseIcon.svelte';
</script>

<button id="alert-toggle" popovertarget="alert">Alert</button>

<div id="alert" popover>
    <div class="flex align-center justify-between">
        Hello world

        <button
            popovertarget="alert"
            popovertargetaction="hide"
            aria-label="Close alert"
            class="icon"
        >
            <CloseIcon />
        </button>
    </div>
</div>

<style>
    #alert {
        margin: 1rem auto;

        width: 20rem;
        padding: 1rem 0.75rem 1rem 1rem;
        background: #f3f8ff;
        border: 1px solid #4280d6;
        border-radius: 6px;
    }
</style>
