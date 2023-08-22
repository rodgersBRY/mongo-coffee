<template>
  <div class="home">
    <header>
      <nav-bar />
    </header>

    <main>
      
      <section class="banner-div">
        <div>
          <h1>GREEN COFFE EXPORTS COMPANY</h1>
          <p>
            Top exporters of green Arabica coffee beans from Kenya!
          </p>
        </div>
      </section>

      <section class="about-us">
        <div class="about-text pa-5">
          <h2>ABOUT <span>US</span></h2>
          <p>
            <em
              >We are among the top exporter of green Arabica coffee beans from Kenya to the rest of the globe.
              Our coffee comes from Kenya, and we sell it in bulk to importers in other nations.</em
            >
          </p>
          <p>
            The Middle East, Far East Asian nations, North America, and other places are among our clients.
            The importers of coffee that purchase from us either sell green coffee beans in their home nations as roasters or as distributors.
            Together with coffee from other top coffee-growing nations like Ethiopia, Colombia, and others, Kenyan coffee is among the best and most well-known.
          </p>
        </div>
        <div class="about-img">
          <img
            width="100%"
            :src="require('../assets/about2.jpg')"
            alt="about mongo international"
          />
        </div>
      </section>

      <section class="business-concept">
        <div>
          <h1 class="green--text">BUSINESS CONCEPTS</h1>
          <p>
            Mongo International LTD has developed into a dependable coffee retailer
            and exporter of Kenyan green Arabica coffee by focusing on the accessibility
            and convenience of our consumers. Our company approach has maintained its reputation
            for reliable coffee quality assurance, amicable sales agreements, 
            and on-time shipping fulfillment. Since Mongo International LTD. was established, 
            we have sent tons of green coffee beans from Kenya to numerous nations worldwide.
          </p>
        </div>
      </section>

      <h2 class="text-center mb-10">Why Choose Us</h2>

      <section class="why-us">
        <div class="v-card" v-for="(quality, i) in qualities" :key="i">
          <v-icon size="60" color="green">
            {{quality.icon}}
          </v-icon>
          <h4 class="mt-4">{{quality.title}}</h4>
          <div class="divider" />
          <p>{{ quality.desc }}</p>
        </div>
      </section>
    </main>

    <footer>
      <bottom-footer />
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contents: [
        {
          title: "INTRODUCTION",
          info:
            "We are among the top exporter of green Arabica coffee beans from Kenya to the rest of the globe. Our coffee comes from Kenya, and we sell it in bulk to importers in other nations.",
          img:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.farmafrica.org%2Fimages%2Ftwitter-cards%2Fgrace-arineitwe-social-card.jpg&f=1&nofb=1",
        },
        {
          title: "",
          info:
            "The Middle East, Far East Asian nations, North America, and other places are among our clients. The importers of coffee that purchase from us either sell green coffee beans in their home nations as roasters or as distributors.Together with coffee from other top coffee-growing nations like Ethiopia, Colombia, and others, Kenyan coffee is among the best and most well-known",
          img:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd2ru2mvuh5wx24.cloudfront.net%2Favtivity_bootstrap%2F1204%2Fcoffee_galore__1920x864.jpg&f=1&nofb=1",
        },
        {
          title: "BUSINESS CONCEPTS",
          info:
            " Mongo International LTD has developed into a dependable coffee retailer and exporter of Kenyan green Arabica coffee by focusing on the accessibility and convenience of our consumers. Our company approach has maintained its reputation for reliable coffee quality assurance, amicable sales agreements, and on-time shipping fulfillment. Since Mongo International LTD. was established, we have sent tons of green coffee beans from Kenya to numerous nations worldwide.",
          img:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftheexchange.africa%2Fwp-content%2Fuploads%2F2018%2F05%2FCoffee-Bill-Coffee-farming-in-East-Africa-Uganda-Coffee-industry.jpg&f=1&nofb=1",
        },
      ],

      qualities: [
        { icon: "mdi-gauge-full", title: "Quality of our coffee", desc: "The temperature of Kenya's coffee-growing regions, the volcanic soils, the agricultural practices used, and the selective hand-picking of ripe berries during harvest are just a few of the elements that provide the ideal conditions for the creation of the exceptionally high-quality coffee that we export to the rest of the world." },
        { icon: "mdi-timer-check-outline", title: "Timely Shipping to our Clients", desc: "When it comes to providing service to our clients, we are quite tight and diligent. We strictly adhere to our clients' requests and instructions when sourcing and delivering coffee. We make every effort to ship coffee to our customers on schedule. Additionally, we are able to provide" },
        { icon: "mdi-led-on", title: "We Understand Coffee",desc: "Our staff members have extensive expertise of coffee, particularly Kenyan coffee. This extensive expertise is supported by a great enthusiasm for coffee and decades' worth of combined experience in the industry. on addition, they have all received extensive training on coffee-related subjects." },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
main {
  .banner-div {
    background-image: url("../assets/home-background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    color: var(--faded-white-color);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .about-us {
    display: flex;
    align-items: center;

    h2 > span {
      color: var(--accent-yellow-color);
    }
  }

  .business-concept {
    background-image: url("../assets/business.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .why-us {
    padding: 5px 1rem;
    display: flex;
    margin: 1rem 0 4rem 0;
  }
}

// mobile device
@media screen and (max-width: 1000px) {
  h1 {
    font-size: 30px;
  }
  h2 {
    font-size: 20px;
  }
  .banner-div {
    height: 50vh;
    margin-top: 3rem;
    div {
      width: 90%;
      height: 60%;
      p {
        font-size: 16px;
      }
    }
  }
  .about-us {
    flex-direction: column;
    width: 90%;
    margin: 1rem auto 0 auto;
    .about-text {
      width: 100%;
    }
  }

  .business-concept {
    padding: 2rem 0;
    margin: 3rem 0 5rem 0;
    height: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      width: 90%;
      p {
        font-size: 16px;
      }
    }
  }

  .why-us {
    flex-direction: column;
    align-items: center;
    .v-card {
      width: 95%;
    }
  }
}

// desktop device
@media screen and (min-width: 1000px) {
  h1 {
    font-size: 50px;
  }
  h2 {
    font-size: 40px;
  }
  .banner-div {
    background-attachment: fixed;
    padding: 2rem 0;
    height: 70vh;
    div {
      width: 50%;
      height: 60%;
      p {
        font-size: 30px;
      }
    }
  }
  .about-us {
    width: 70%;
    margin: 10rem auto 0 auto;
    .about-text {
      width: 50%;
    }
    img {
      height: 500px;
    }
  }
  .business-concept {
    padding: 10px 0;
    margin: 10rem 0;
    height: 60vh;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      width: 70%;
      p {
        font-size: 20px;
      }
    }
  }
  .why-us {
    justify-content: space-around;
    align-items: center;
    .v-card {
      text-align: center;
      border: 1px solid grey;
      border-radius: 15px;
      padding: 10px 3rem;
      min-height: 350px;
      width: 350px;
      box-shadow: 3px 3px 5px grey;
      .divider {
        margin: 2rem auto;
        width: 20%;
        height: 2px;
        background-color: green;
      }
    }
  }
}
</style>