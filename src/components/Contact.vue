<template>
<section>
    <div class="form-wrapper">
        <div class="form-header">
            <h3>Contact</h3>
            <p>Fill out this form and I will get back with you as soon as I can</p>            
        </div>
        <form
            action="https://formsubmit.co/me@reaganclayton.com"
            method="POST"
            id="app"
            @submit="validate"
            novalidate="true"
        >
            <input type="hidden" name="_next" value="https://reaganclayton.com/success">
            <input type="hidden" name="_captcha" value="false">
            <p v-if="errors.length" id="warning">
                <b>Something went wrong! Check the error(s) and try again:</b>
                <ul>
                    <i><li v-for="error in errors" :key="error">{{ error }}</li></i>
                </ul>
            </p>
            <p>
                <label for="name">Name</label>
                <input
                    id="name"
                    v-model="name"
                    type="text"
                    name="name"
                >
            </p>
            <p>
                <label for="email">Email</label>
                <input
                    id="email"
                    v-model="email"
                    type="email"
                    name="email"
                >
            </p>                    
            <p>
                <label for="message">What's on your mind?</label>
                <textarea
                    id="message"
                    v-model="message"
                    type="textarea"
                    name="message"
                    rows="6" cols="40"
                />
            </p>
            <p>
                <button
                    type="submit"
                    class="btn"
                >
                    <span><i class="fa fa-envelope"></i></span>Submit
                </button>
            </p>
        </form>
    </div>    
</section>

</template>

<script>
export default {
    name: 'Contact',
    data() {
        return {
            errors: [],
            name: null,
            email: null,
            message: null
        }
    },
    methods: {
        validate: function (e) {
            if(this.name && this.email && this.message) {
                return true;
            }
            this.errors = [];
            if (!this.name) {
                this.errors.push('Please enter your name.')
            }
            if (!this.email) {
                this.errors.push('Please enter your email.')
            } else if (!this.validEmail(this.email)) {
                this.errors.push('Please enter a valid email.')
            }
            if (!this.message) {
                this.errors.push('Please enter a message.')
            }
            e.preventDefault();
        },
        validEmail: email => {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
}
</script>

<style lang="scss" scoped>
section {
    width: 100%;
    height: 100vh;
    background: $gray;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid rgba(26, 26, 26, 0.5);
}
.form-wrapper {
    padding: 5em 2em;
    width: 996px;
    .form-header {
        margin: 2em 0;
        color: #fff;
        h3 {
            color: $blue;
            font-size: 3em;
            font-family: 'Raleway';
        }
        p {
            font-family: 'Roboto';
            font-weight: 300;
            font-size: 1.1em;
            margin-top: .25em;
        }
    }
    form {
        display: flex;
        flex-direction: column;
    }
    #warning {
        li {
            padding-left: 1em;
        }
        b, li {
            margin: 1em 0;
            font-family: 'Roboto';
            color: $warning;
        }        
    }
    label {
        color: #fff;
        font-family: 'Roboto';
        display: block;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        margin-bottom: .5em;
    }
    input, textarea {
        width: 100%;
        font-family: 'Roboto';
        font-size: 1em;
        letter-spacing: 1px;
        padding: 1em;
        color: #fff;
        background-color: $light-gray;
        border: 1px solid rgb(26, 26, 26);
        margin-bottom: 2em;
    }
    textarea:focus, input:focus {
        outline: 2px solid $blue;
    }
    button {
        float: right;
        margin-bottom: 2em;
    }
}
</style>