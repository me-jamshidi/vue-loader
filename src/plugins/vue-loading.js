const vueLoading = new(function() {
    this.loadings = []
    this.lastLoadingId = 0
        //this.spinner = document.getElementById('vue-loading')
        //document.getElementById('vue-loading').style.visibility = 'hidden'

    this.show = function() {
        let id = ++this.lastLoadingId
        this.loadings.push(id)
        document.getElementById('vue-loading').style.visibility = 'visible'
        return id
    }
    this.hide = function(id) {
        if (id) {
            let index = this.loadings.indexOf(id)
            if (index > -1) {
                this.loadings.splice(index, 1)
                if (this.loadings.length == 0) {
                    document.getElementById('vue-loading').style.visibility = 'hidden'
                }
            }
        }
    }
})()
const VueLoadingPlugin = {
    install(Vue, options) {
        Vue.prototype.$loading = vueLoading
    }
}

export default VueLoadingPlugin;