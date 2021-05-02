<template>
    <footer>
        <div class="contact-info">
            <ul>
                <li>
                    <i class="fa fa-map-marker-alt"></i>
                    <p>Fruita, Colorado</p>
                </li>
                <li>
                    <i class="fa fa-phone-alt"></i>
                    <p>(970) 644-7874</p>
                </li>
                <li>
                    <i class="fa fa-envelope"></i>
                    <p>reaganclayton1995@gmail.com</p>
                </li>
            </ul>
        </div>
        <div class="footer-info">
            <img src="@/assets/Portfolio Website.png" alt="">
            <div class="social-btns">
                <i @click="newWindow('https://github.com/reaganclayton')" class="fab fa-github"></i>
                <i @click="newWindow('https://linkedin.com/in/reaganclayton')" class="fab fa-linkedin-in"></i>
                <i @click="newWindow('https://codepen.io/novamedia')" class="fab fa-codepen"></i>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    methods: {
        newWindow: link => {
            window.open(link);
        }
    }
}
</script>

<style lang="scss" scoped>
i {
    color: #fff;
    text-align: center;
    height: 50px;
    width: 50px;
    background: $gray;
    padding: .75em;
    margin: .5em;
    font-size: 1.25em;
    border-radius: 50%;
}
footer {
    width: 100%;
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid $border;
    li {
        color: #fff;
        display: flex;
        flex-direction: row;
        align-items: center;
        p {
            letter-spacing: .5px;
            
            font-family: 'Roboto';
        }
    }
    .footer-info {
        margin: 0 0 0 12em;
        img {
            max-width: 300px;
            margin-bottom: 1em;
        }
        .social-btns {
            display: flex;
            justify-content: space-around;
            i {
                cursor: pointer;
                transition: .3s;
            }
            i:hover {
                color: rgba($color: #ffffff, $alpha: .5)
            }
        }
    }
}

@media (max-width: 996px) {
    footer {
        flex-direction: column;
        .contact-info {
            margin: 2em 0 .15em;
        }
        .footer-info {
            margin: 2em 0;
        }
    }
}
</style>