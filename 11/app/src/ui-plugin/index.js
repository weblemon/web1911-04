import Button from "./Button.vue";
import Icon from "./Icon.vue";
import Test from "./Test.vue";


const components = {
    Button,
    Icon,
    Test
}

export default {
    install(Vue) {
        components;
        Object.keys(components).forEach(key => {
            // console.log(key);
            const _thisComponent = components[key];
            // window.console.log(_thisComponent)
            Vue.component(_thisComponent.name, _thisComponent);
        })
    }
}