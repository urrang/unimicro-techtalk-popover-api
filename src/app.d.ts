// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface Platform {}
    }

    declare namespace svelteHTML {
        interface HTMLAttributes<T> {
            popovertarget?: any;
            popover?: any;
            popovertargetaction?: any;
            anchor?: any;
        }
    }
}

export {};
