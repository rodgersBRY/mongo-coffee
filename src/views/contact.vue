<template>
  <div id="contact">
    <header>
      <nav-bar />
    </header>

    <main>
      <section class="contact-banner">
        <div>
          <h1>Drop Us A Note</h1>
        </div>
      </section>

      <div class="contacts-row">
         <section class="contact-form">
        <form action="https://formspree.io/f/mdovnojj" method="POST">
 <div>
          <input
            type="text"
            name="Name"
            v-model="name"
            class="input"
            placeholder="Your Name"
          />
          <input
            type="text"
            name="Email"
            v-model="email"
            class="input"
            placeholder="Email Address"
          />
          <input
            type="text"
            name="Subject"
            v-model="subject"
            class="input"
            placeholder="Subject"
          />
        </div>
        <div>
          <textarea
            name="Message"
            v-model="message"
            cols="60"
            rows="7"
            class="input"
            placeholder="Your Message"
          >
          </textarea>
          <button type="submit" class="send-btn">Submit Feedback</button>
        </div>

        </form>
       
          </section>

        <section class="location">
          <h2>Stop By For A Visit</h2>
          <p>
            <v-icon class="mr-2">mdi-map-marker-outline</v-icon>Pension Towers,
            4th Floor. Loita Street
          </p>
          <p>
            <v-icon class="mr-2">mdi-email-outline</v-icon>
            Emails
          <ul style="list-style:none">
            <li class="ml-3"><em>trading@jowamcoffee.com</em> </li>
            <li class="ml-3"><em>kelvin.bundi@jowamcoffee.com</em> </li>
          </ul>
          </p>
          <p>
            <v-icon class="mr-2">mdi-phone-outline</v-icon>Phone: 254728919092, 254722762945
          </p>

          <div class="social-media">
            <v-btn text large href="https://www.instagram.com/jowamcoffee/" color="orange darken-2" style="text-transform: lowercase;">
              <v-icon class="mr-3">mdi-instagram</v-icon> jowamcoffee
            </v-btn>
          </div>
        </section>

        <section class="japanese">
          <v-card flat width="350px">
            <v-card-title class="title">会社概要</v-card-title>
            <v-card-text>
             <p>代表: Josphat Mwirigi Mburugu</p>
             <p>役職: Director</p>
              <p>会社: Jowam Coffee Traders Co.Ltd</p>
              <p>TEL: +254722762945</p>
              <p>Mail: trading@jowamcoffee.com</p>
              <p>Mail: quality@jowamcoffee.com</p>
              <p>住所: 00200 Nairobi P.O Box 58513-00200 Nairobi Kenya Kenya</p>
            </v-card-text>
          </v-card>
          <v-card  flat width="350px">
            <v-card-title class="title">海外事業部日本・中国アジア担当</v-card-title>
            <v-card-text>
              <p>Alex Nduati アレックスドゥアティ（日本語可</p>
              <p>TEL: +254722659595</p>
              <p>Mail: alex.nduati@jowamcoffee.com</p>
              <p>小川鉄男</p>
              <p>080-3138-8110</p>
              <p>Mail: contact@jowamcoffee.co.jp</p>
            </v-card-text>
          </v-card>
        </section>
      </div>     
    </main>

    <footer>
      <bottom-footer />
    </footer>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  data() {
    return {
      name: '',
      email:'',
      subject: '',
      message: '',
    };
  },

};
</script>

<style scoped lang="scss">

.japanese .title  {
  color: #e09f55;
}

textarea {
  resize: none;
}
.contact-banner {
  background-image: url("../assets/about2.webp");
  background-size: cover;
  color: white;
  display: flex;
}

.contact-form {
  .input {
    background: rgb(236, 236, 236);
    border: 1px solid rgb(220, 225, 220);
    &:focus {
      outline: none;
    }
  }
  button {
    background: rgb(131, 154, 131);
    color: white;
    padding: 15px;
    width: 100%;
  }
}

.location {
  padding: 10px;
  h2 {
    margin-bottom: 1rem;
  }
}

// mobile device
@media screen and (max-width: 1000px) {
  h1 {
    font-size: 35px;
  }

  .contact-banner {
    height: 50vh;
    align-items: flex-end;
    padding-left: 10px;
    div {
      text-align: center;
      height: 25%;
    }
  }

  .contact-form,
  .location {
    width: 100%;
    margin: 3rem auto;
  }

  .contact-form {
    div {
      margin: 0 1rem;
    }
    .input {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
    }
  }

  .location {
    h2 {
      text-align: center;
    }
  }

}

// desktop device
@media screen and (min-width: 1000px) {
  h1 {
    font-size: 50px;
  }

  .japanese {
    width: 60%;
    margin: 1rem auto 3rem auto;
    display: flex;
    justify-content: space-around;
  }

  .contact-banner {
    background-attachment: fixed;
    height: 60vh;
    padding-left: 2rem;
    justify-content: center;
    align-items: flex-end;
    div {
      text-align: center;
      height: 50%;
    }
  }

  .contact-form,
  .location {
    width: 40%;
    margin: 3rem auto;
  }

  .contact-form {
    display: flex;
    div {
      margin: 0 1rem;
    }
    .input {
      width: 100%;
      margin: 10px 0;
      padding: 10px;
    }
  }
}
</style>
