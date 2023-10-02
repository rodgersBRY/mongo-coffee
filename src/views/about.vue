<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<template>
  <div id="about">
    <header>
      <nav-bar />
    </header>

    <main>
      <section class="about-banner">
        <div>
          <h1><span class="span-about">ABOUT</span> US</h1>
          <p>Coffee is the best medicine</p>
        </div>
      </section>

      <section class="about">
        <div class="about-text">
          <h2>About Our Team And Our Work Ethic</h2>
          <p>
            We have staff members who have a thorough understanding of coffee, particularly Kenyan coffee. This extensive expertise is supported by a great enthusiasm for coffee and decades' worth of combined experience in the industry.
          </p>
          <p>
            Mongo International LTD is committed to managing
            health, safety and environmental (HS&E) matters involved in the
            process as an integral part of our business. It is the company
            policy to assure the HS&E integrity of our processes and facilities
            at all times and all places.
          </p>
        </div>
        <div class="about-img">
          <img
            :src="require('../assets/team.jpg')"
            alt="mongo values"
          />
        </div>
      </section>

      <section class="values">
        <v-card
          dark
          flat
          color="transparent"
          class="pa-3"
          v-for="(val, index) in values"
          :key="index"
        >
          <v-card-title>
            <v-icon large class="mr-5">{{ val.icon }}</v-icon>
            {{ val.tab }}
          </v-card-title>
          <v-card-text>{{ val.content }}</v-card-text>
        </v-card>
      </section>

      <div class="quality-policy">
        <h2>Quality Policy & Objectives</h2>
        <div class="divider"></div>
        <p>The ICO Council Resolution 420 (May 2004), which suggests voluntary aims for the minimum quality export requirements on daily activities, is continually adopted by Mongo International Ltd. The goal is to limit the export of inferior beans, which will tighten supply chains and lead to higher pricing.
        </p>
        <p>We are in the midst of implementing a quality management system in our manufacturing process that transforms coffee tree fruit into exportable green bean in order to show customers and concerned regulatory organizations the consistent quality of our products. Through continuous system improvement, we can increase customer satisfaction. Because the producer cannot control too many factors during the cultivation of green coffee, such as weather, diseases, and pests, the ISO system starts when the cherry is picked and ends when the container is delivered to the ship's side.
        </p>
      </div>

      <section class="uniqueness">
        <div class="info-div">
          <h2 class="title">Uniqueness of Kenyan Coffee</h2>
          <div class="details" v-for="(prop, i) in properties" :key="i">
            <h3>{{ prop.title }}</h3>
            <p>{{ prop.details }}</p>
          </div>
        </div>
        <div class="image">
          <img width="100%" src="@/assets/business.jpg" alt="unique kenyan coffee">
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
      tab: null,
      values: [
        {
          icon: "mdi-barley",
          tab: "MISSION",
          content:
            "By providing cutting-edge inclusive technologies for coffee farming, milling, and bean evaluation, Mongo International Ltd is dedicated to transforming the social and economic well-being of coffee farmers. This will ensure the production of coffee of the highest quality, which will increase their income.",
        },
        {
          icon: "mdi-camera-document",
          tab: "VISION",
          content:
            "To revive coffee cultivation in Kenya and the region as a viable business enterprise, export significant quantities of coffee from the region and beyond to global markets, and maintain quality.",
        },
        {
          icon: "mdi-car-brake-retarder",
          tab: "GOALS & OBJECTIVE",
          content:
            "Under the direction of our directors, who have decades of experience in the business, we are committed to being the best coffee dealers and merchants in the area and beyond, to promote distinctive coffees to the entire consumer world, to consistently offer our clients the highest-quality, most reasonably-priced coffee, and to guarantee quality to our clients. One of our primary objectives is to support the majority of small-scale farmers by marketing their coffee and providing them with a reliable source of income.",
        },
      ],
      properties: [
        { title: "Weather", details: "In Kenya's coffee-growing regions, temperatures of no higher than 190 Celsius (350F) and evenly spaced rainfall are the ideal climatic conditions for producing high-quality coffee." },
        { title: "Coffee Harvesting", details: "In Kenya, handpicking is the preferred method of coffee harvesting. By doing so, the possibility of blending ripe and unripe berries is eliminated, guaranteeing a product of consistent quality." },
        {title: "Quality Control", details: "The Coffee Directorate of Kenya must receive samples from Kenyan coffee growers for analysis. The sale of coffee is restricted to authorized growers."}
      ]
    };
  },
};
</script>

<style scoped lang="scss">
.about-banner {
  background-image: url("../assets/home-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  color: var(--faded-white-color);
  display: flex;
  .span-about {
    color: var(--accent-yellow-color);
  }
}

.about {
  display: flex;
}

.values {
  display: flex;
  background: var(--primary-color);
}

.quality-policy {
  text-align: center;
  margin: 4rem auto;
  background-color: var(--faded-white-color);
  padding: 2rem;
  border-radius: 10px;
  .divider {
    width: 10%;
    margin: 2rem auto;
    height: 2px;
    background-color: var(--accent-yellow-color);
  }
}

.uniqueness {
  display: flex;
  background-color: var(--faded-white-color);
}

// desktop screen
@media screen and (min-width: 1000px) {
  h1 {
    font-size: 50px;
  }
  .about-banner {
    background-attachment: fixed;
    height: 50vh;
    padding: 0 0 3rem 3rem;
    justify-content: flex-start;
    align-items: flex-end;
  }
  .about {
    justify-content: space-around;
    width: 70%;
    margin: 5rem auto;
    .about-text {
      width: 40%;
    }
    .about-img {
      width: 50%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .values {
    padding: 1rem 5rem;
    justify-content: space-around;
    .v-card {
      width: 400px;
    }
  }

  .quality-policy {
    width: 70%;
    h2 {
      margin-bottom: 1rem;
    }
  }

  .uniqueness {
    .info-div {
      flex: 3;
      padding: 2rem 3rem;
      .details {
        margin-left: 3rem;
        width: 80%;
        h3 {
          margin-bottom: 1rem;
        }
      }
    }
    .image {
      flex: 3;
    }
  }
}

// mobile screen
@media screen and (max-width: 1000px) {
  h1 {
    font-size: 40px;
  }
  .about-banner {
    background-attachment: fixed;
    height: 40vh;
    padding: 0 0 0 1rem;
    justify-content: flex-start;
    align-items: flex-end;
  }
  .about {
    flex-direction: column;
    padding: 1rem;
    margin: 2rem 0;
    .about-img {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .values {
    flex-direction: column;
  }

  .quality-policy {
    width: 95%;
  }
  .uniqueness {
    flex-direction: column;
    .info-div {
      flex: 3;
      padding: 2rem 1rem;
      .details {
        h3 {
          margin-bottom: 1rem;
        }
      }
    }
    .image {
      flex: 3;
    }
  }
}
</style>
