Vue.component("Card", {
    template: `
    <div :class="[prefix+'card']">
    {{prefix}}
        <slot />
    </div>
    `
})