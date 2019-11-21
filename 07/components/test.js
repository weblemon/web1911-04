Vue.component("Test", {
    template: `
    <div :class="[prefix+'test']">
        {{prefix}}
        <slot />
    </div>
    `
})