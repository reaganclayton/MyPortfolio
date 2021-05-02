<template>
    <section class="showcase">
        <div class="container">
            <div class="showcase-content">
                <h1><span>Hello,</span> my name is Reagan</h1>
                <div class="intro-text">
                    <p>
                        I am a <span>Software Developer</span> currently based in Fruita, Colorado
                    </p>
                    <p>
                        Let's get in touch and create something <span>unique</span> together
                    </p>
                </div>
            </div>
            <div class="showcase-btns">
                <button @click="scroll()" class="btn" id="portfolio-btn">
                    <span><i class="fa fa-eye"></i></span>
                    View Portfolio
                </button>
                <a href="resume.pdf">
                    <button class="btn" id="resume-btn">
                        <span><i class="fa fa-file"></i></span>
                        View Resume
                    </button>
                </a>
            </div>            
        </div>
    </section>
</template>

<script>
export default {
    name: "Header",
    methods: {
        scroll: () => {
            const portfolio = document.querySelector('.portfolio-item');
            portfolio.scrollIntoView();
        }
    }
}
</script>

<style lang="scss">
.showcase {
    color: #fff;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    background-color: $gray;
    border-bottom: 1px solid $border;

    &-content {

        h1 {
            font-family: 'Roboto', sans-serif;
            text-transform: uppercase;
            font-weight: 300;
            font-size: 2.5em;

            span { font-weight: 500; }
        }

        p {
            font-family: 'Raleway', sans-serif;
            font-weight: 400;
            line-height: 24px;
            font-size: 1.15em;

            span { font-weight: 500; }
        }

        p:nth-child(1) {
            padding-bottom: 2px;
        }

        .intro-text { padding: 25px 0 75px; }
    }

    &-btns {
        .btn {
            width: 100%;
            margin-bottom: 20px;
        }
    }
}


// Media Queries
@media(min-width: 480px) {
    .showcase {
        &-content {
            p { font-size: 1.25em; }
        }

        &-btns {
            margin: 0 auto;
            max-width: 250px;
        }
    }
}
@media(min-width: 600px) {
    .showcase {
        &-content {
            h1 { font-size: 3em; }

            p { font-size: 1.35em; }

            p:nth-child(1) { padding-bottom: 10px; }

            .intro-text { padding: 35px 0 100px; }
        }

        &-btns {
            display: flex;
            flex-direction: row;
            max-width: 400px;

            button:nth-child(1) { margin-right: 30px; }
        }
    }
}

@media(min-width: 768px) {
    .showcase {
        &-content {
            h1 {
                font-size: 3.5em;
                white-space: nowrap;
            }

            p { font-size: 1.45em; }

            .intro-text { padding: 25px 0 125px; }
        }

        &-btns {
            button:nth-child(1) { margin-right: 45px; }
        }
    }
}

@media(min-width: 996px) {
    .showcase {
        &-content {
            h1 { font-size: 4em; }

            p:nth-child(1) { padding-bottom: 15px; }
        }
    }
}

@media(min-width: 1200px) {
    .showcase {
        &-content {
            h1 { font-size: 4.5em; }

            p { font-size: 1.65em; }
        }
    }
}
</style>