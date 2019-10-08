<template>
  <div id='container'>
    <nav>
      <router-link to='/'>Home</router-link>
      <router-link to='/about'>About</router-link>
      <router-link to='/contact'>Contact</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style lang="scss">
  /** #605D53 - #f9f6f2 - #eaceb4 - #e79e85 - #bb5a5a  */
  @import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');
  $bgColor: #605d53;
  $fontColor: #f9f6f2;
  $linkColor: #e79e85;
  $linkHover: #eaceb4;
  $headings:  #bb5a5a;

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Oswald', sans-serif;
    background: $bgColor;
  }
  h1{
    text-align: center;
    color: $headings;
  }

  #container {
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 1fr 3fr 50px;
    grid-template-areas:
    "logo welcome topNav"
    "sideBar mainContent oCont"
    "lFooter mFooter rFooter";
    gap: 3px;
  }

  .welcome {
    grid-column-start: 2;
    grid-row-start: 1;
  }

  nav {
    grid-area: topNav;
    text-align: center;
    margin-top: 10px;

    a {
      text-decoration: none;
      color: $linkColor;
      padding: 2px;
    }

    a:first-child {
      margin-right: 5px;
    }
    a:last-child{
      margin-left: 5px;
    }

    a:hover{
      color: $linkHover;
    }

    a.router-link-exact-active{
      background: $headings;
      color: $bgColor;
    }

  }
</style>

