import numberOnly from './numberOnly'

const directives = {
    numberOnly,
}

export default {
    install (Vue) {
        Object.keys(directives).forEach((key) => {
            Vue.directive(key, directives[key])
        })
    }
}
