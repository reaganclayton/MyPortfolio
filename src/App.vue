<template>
  <div id="app">
    <Nav />
    <Header />
    <Portfolio />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Nav from './components/Nav'
import Header from './components/Header';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default {
  name: "App",
  components: {
    Nav,
    Header,
    Portfolio,
    Contact,
    Footer
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}

body {
  background-color: $light-gray;
}

body, html {
  height: 100%;
  scroll-behavior: smooth;
}

.container {
  padding: 0 30px;
}

.btn {
  white-space: nowrap;
  cursor: pointer;
  font-size: .9em;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0);
  border: 2px solid #fff;
  color: #fff;
  letter-spacing: 1px;
  padding: 10px;
  transition: .6s;
}

.btn:hover {
  background-color: #fff;
  color: $gray;
  font-weight: 700;
}

span { color: $blue; }

i { padding-right: 5px }

@media(min-width: 600px) {
  .container { margin: 0 60px; }
}

@media(min-width: 768px) {
  .container { margin: 0 75px; }
}

@media(min-width: 996px) {
  .container { margin: 0 90px; }
}

@media(min-width: 1200px) {
  .container { margin: 0 105px; }
}
.reverse {
  flex-direction: row-reverse;
  background-color: $gray;
  border-top: 1px solid $border;
  border-bottom: 1px solid $border;
  .portfolio-item-info {
    background-color: $light-gray;
    // border: 1px solid $border;
    li { 
      background-color: $gray;
    }
  }
}
// Undo .reverse for responsive
@media(max-width: 996px) {
  .reverse {
    flex-direction: column;
  }
}
</style>
