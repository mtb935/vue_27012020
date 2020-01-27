new Vue({
    el: '#app',
    data: {
        errors: [],
        email: null,
        password: null

    },
    computed: {

    },
    methods: {
        checkForm: function(e) {
            console.log('tata')
            fetch('http://localhost/register.php', {})
                .then(res => res.json())
                .then(data => {
                    this.errors.message = data.email
                    this.errors.message = data.password
                    console.log(data)
                })


            e.preventDefault();
        }


    }

})

