const ATTRIBUTE = [
    'marginTop',
    'marginBottom'
]

export default {
    computed: {
        style() {
            let temp = ''

            for(let key in this.value) {
                if (ATTRIBUTE.includes(key) && this.value[key]) {
                    temp += key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase() + ': ' + this.value[key] + '; '
                }
            }

            return temp
        }
    }
}