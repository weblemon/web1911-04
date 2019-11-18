Vue.component("ISwitch", {
    props: {
        data: Boolean 
    },
    methods: {
        change() {
            // this.on = !this.on
            this.$emit("change")
        }
    },
    template: `
    <div 
        :class="['switch', {
            'switch-on': data
        }]"
        @click="change"
    >
        <div class="switch-btn"></div>
    </div>
    `
})