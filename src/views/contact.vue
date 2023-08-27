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
        <form action="#" method="POST">
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
            <v-icon class="mr-2">mdi-map-marker-outline</v-icon>Location: <em>Fort-ternan, Kericho, Kenya</em>
          </p>
          <p>
            <v-icon class="mr-2">mdi-email-outline</v-icon>
            Email: <em>mongoestates@gmail.com</em>
          </p>
          <p>
            <v-icon class="mr-2">mdi-phone-outline</v-icon>Phone: <em>0722121969/0722454458</em>
          </p>
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
textarea {
  resize: none;
}

.contact-banner {
  background-image: url("../assets/contact.jpg");
  background-size: cover;
  color: var(--accent-yellow-color);
  display: flex;
}

.contact-form {
  .input {
    background: var(--faded-white-color);
    border: 1px solid rgb(220, 225, 220);
    &:focus {
      outline: none;
    }
  }
  button {
    background: var(--accent-yellow-color);
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

  .contact-banner {
    background-attachment: fixed;
    height: 70vh;
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
