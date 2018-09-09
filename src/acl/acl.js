import * as components from './components'

const VueACL = {
    install: function(Vue){
        Object.keys(components).map(component => {
            Vue.component(component, components[component])
        })
    },
    version: 0.1
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueACL)
}

export default VueACL