const vueLoading = new(function() {
    this.loadings = []
    this.lastLoadingId = 0
        //this.spinner = document.getElementById('vue-loading')
        //document.getElementById('vue-loading').style.visibility = 'hidden'
    this.defaultShowSpinner = function() {
        document.getElementById('vue-loading').style.visibility = 'visible'
    }
    this.show = function() {
        let id = ++this.lastLoadingId
        this.loadings.push(id)
        if (this.showSpinner !== undefined) {
            this.showSpinner()
        } else {
            this.defaultShowSpinner()
        }
        return id
    }

    this.defaultHideSpinner = function() {
        document.getElementById('vue-loading').style.visibility = 'hidden'
    }
    this.hide = function(id) {
        if (id) {
            let index = this.loadings.indexOf(id)
            if (index > -1) {
                this.loadings.splice(index, 1)
                if (this.loadings.length == 0) {
                    if (this.hideSpinner !== undefined) {
                        this.hideSpinner()
                    } else {
                        this.defaultHideSpinner()
                    }
                }
            }
        }
    }
})()
const VueLoadingPlugin = {
    install(Vue, options) {
        Vue.prototype.$loading = vueLoading
        Vue.loading = vueLoading
    }
}

export default VueLoadingPlugin;