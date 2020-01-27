new Vue({
    el: '#editor',
    data: {
        input: '# hello'
    },
    computed: {
        compiledMarkdown: function () {
            return marked(this.input)
        }
    },
    methods: {
        update: _.debounce(function (e) {
            this.input = e.target.value
        }, 300)
    }
})

