<script lang="ts">
    import '../styles/styles.css';

    let anchorDemo = false;
</script>

<main class:anchor-demo={anchorDemo}>
    <div class="toolbar flex align-center">
        <a href="/">HTML Popover API</a>
        <a href="/the-old-way">Old solution (JS)</a>

        <button class="tertiary" on:click={() => (anchorDemo = !anchorDemo)}>
            Toggle positioning demo
        </button>
    </div>

    <slot />
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
    }

    .toolbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 1rem;
        gap: 2rem;
    }

    a {
        color: #2253dd;
        text-decoration: none;
        font-size: 14px;
    }

    .toolbar button {
        margin-left: auto;
    }

    .anchor-demo {
        min-height: 200vh;
        margin-top: 100vh;
    }
</style>
