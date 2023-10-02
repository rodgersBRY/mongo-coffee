<template>
    <nav class="header">
      <section
        class="logo-div d-flex align-center"
        @click="$router.push('/')"
        style="cursor: pointer;"
      >
        <img
          :src="require('../assets/logo.png')"
          alt="mongo coffee, coffee experts"
        />
      </section>
  
      <section class="nav-links">
        <v-btn icon class="mobile-menu-close" color="white" @click="closeNavMenu"
          ><v-icon>mdi-close</v-icon></v-btn
        >
        <ul>
          <router-link exact-active-class="active" tag="li" to="/">
            Home
          </router-link>
  
          <span>|</span>
          <router-link active-class="active" tag="li" to="/about">
            About Us
          </router-link>

          <span>|</span>
          <router-link active-class="active" tag="li" to="/products">
            Our Products
          </router-link>
  
          <span>|</span>
          <router-link active-class="active" tag="li" to="/contact">
            Contact Us
          </router-link>
        </ul>
      </section>
  
      <section class="mobile-menu-open">
        <v-btn icon small @click="openNavMenu"><v-icon>mdi-menu</v-icon></v-btn>
      </section>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        date: new Date().getFullYear(),
      };
    },
  
    mounted() {
      let prevScrollPos = window.pageYOffset;
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos) {
          document.getElementsByClassName("header")[0].style.top = "0";
        } else {
          document.getElementsByClassName("header")[0].style.top = "-100px";
        }
        prevScrollPos = currentScrollPos;
      };
    },
  
    methods: {
      openNavMenu() {
        let navDiv = document.getElementsByClassName("nav-links")[0];
        navDiv.style.width = "100%";
      },
      closeNavMenu() {
        let navDiv = document.getElementsByClassName("nav-links")[0];
        navDiv.style.width = "0";
      },
    },
  };
  </script>
  
  <style scoped lang="scss">
  .header {
    background: white;
    display: flex;
    color: var(--primary-color);
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 1;
    top: 0;
    width: 100%;
    transition: top 0.5s ease;
    .logo-div {
      img {
        position: relative;
        left: 2%;
      }
    }
    .nav-links ul {
      padding: 0;
      list-style: none;
      span {
        font-weight: bold;
      }
      li {
        display: inline-block;
        margin: 0 10px;
        padding: 10px 1rem;
        font-weight: bold;
        transition: color 1s ease;
        &:hover,
        &.active {
          color: var(--accent-yellow-color);
          cursor: pointer;
        }
      }
    }
  }
  
  @media screen and (min-width: 1000px) {
    .br {
      display: none;
    }
    .header {
      padding: 0 5rem;
      .logo-div {
        height: 80px;
        img {
         width: 100px;
        }
       }
  
      .nav-links {
        .mobile-menu-close {
          display: none;
        }
      }
      .mobile-menu-open {
        display: none;
      }
    }
  }
  
  @media screen and (max-width: 1000px) {
    .header {
      padding: 5px;
      .logo-div {
        img {
          width: 150px;
          height: 50px;
        }
      }
      .nav-links {
        z-index: 1;
        width: 0;
        background: var(--primary-green-color);
        color: white;
        height: 100vh;
        position: absolute;
        overflow: hidden;
        transition: width .6s ease-in-out;
        top: 0;
        left: 0;
        ul {
          margin-top: 4rem;
          li {
            display: block;
            font-size: 20px;
          }
          span {
            display: none;
          }
        }
        .jowam-btn {
          margin-left: 1rem;
        }
        .mobile-menu-close {
          position: absolute;
          right: 4%;
          top: 1%;
        }
      }
    }
  }
  </style>