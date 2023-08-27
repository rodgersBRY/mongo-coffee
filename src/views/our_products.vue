<template>
    <div id="our-products">
        <header>
            <nav-bar />
        </header>

        <main>
            <section class="banner">
                <div>
                    <h1>Our Products</h1>
                    <p>we take pride in presenting an exceptional range of bulk green coffee offerings</p>
                </div>                
            </section>

            <section class="flavors">
                <div class="card flavor" v-for="(flavor, i) in flavors" :key="i">
                    <h3>{{ flavor.title }}</h3>
                    <p> {{ flavor.details }} </p>
                </div>
            </section>

            <section class="information">
                <div class="excellence">
                    <h2 class="mb-5">Cultivating Excellence: Our Commitment to Quality</h2>
                    <p>At Mongo International LTD, we are committed to curating a selection 
                        that epitomizes excellence. Our bulk green coffee beans are sourced 
                        from the most esteemed coffee-growing regions in the country,
                        where they're nurtured under ideal climatic conditions and expertly harvested.
                        We understand that every step in the coffee production chain influences the final cup,
                        which is why we meticulously oversee the entire process, from cultivation to packaging.</p>
                </div>

                <div class="blend">
                    <h2 class="mb-5">Craft Your Unique Blend</h2>
                    <p>Our diverse assortment of primary and secondary grade coffee beans provides 
                        a canvas for you to craft your own unique blend. Whether you're a roaster, 
                        cafe owner, or simply an individual with a passion for the perfect cup, 
                        our bulk offerings invite you to explore, experiment, and create. 
                        The possibilities are as rich and varied as the flavors within each bean. 
                        As you peruse our collection, envision the tantalizing aroma and exquisite taste that await. 
                        Choose from our range of grades, blend to your heart's content, and embark on a journey that 
                        celebrates the artistry of coffee. Explore our bulk green coffee offerings and elevate your coffee experience today.</p>
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
    name: "our products",

    data() {
        return {
            flavors: [
                {title: "AA Grade", details: "Representing the pinnacle of quality, AA grade coffee beans are large, uniform, and esteemed for their balanced acidity and full-bodied taste."},
                {title: "AB Grade", details: "Known for their versatility, AB grade beans bring together the characteristics of AA and B grades, resulting in a cup that harmoniously balances acidity and body."},
                {title: "C Grade", details: "With a distinctive richness, C grade beans offer a deeper flavor profile, often showcasing chocolatey and nutty undertones that delight the senses."},
                {title: "PB Grade", details: "Peaberry beans, cherished for their singular round shape, concentrate flavors, presenting a cup that's exceptionally bold and vibrant."},
                {title: "T Grade", details: "T grade beans, derived from Tanzania, captivate with their bright acidity, floral notes, and citrusy nuances."},
                {title: "TT Grade", details: "Twin beans from Tanzania exhibit a tangy brightness and a nuanced complexity that takes you on an exciting journey of flavors."},
                {title: "HE Grade", details: "Hailing from the Hawaiian archipelago, HE grade beans bring the essence of the Pacific with their smooth, mild taste and gentle acidity."},
                {title: "E Grade", details: "Ethiopian beans, celebrated for their distinct fruity and wine-like character, offer a sensory adventure that's both exotic and alluring."},
                {title: "UG Grades (UG1, UG2, UG3, UG4, UG5, UG6)", details: "Ugandan beans contribute an earthy richness to the collection, with each grade offering a different facet of this captivating profile."},
            ]
        }
    }
}
</script>

<style scoped lang="scss">
.banner {
    background-image: url('../assets/products.jpg');
    background-size: cover;    
    display: flex;
    align-items: flex-end;
    color: white;
    div {
        margin-bottom: 4rem;
        h1 {
            margin-bottom: 15px;
        }
    }
}

.flavors {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    .flavor {
        background-color: white;
        padding: 1rem 20px;
        border-radius: 10px;
        box-shadow: 3px 3px 5px grey;
        margin: 0 0 3rem 0;
        h3 {
            margin-bottom: 10px;
        }
    }
}

.information {
    background-image: url("../assets/blends.jpg");
    display: flex;
    margin: 0 auto;
}


// mobile screen
@media screen and (max-width: 1000px) {
    .banner {
        height: 40vh;
        padding: 0 1rem;
    }
    .flavors {
        flex-direction: column;
        width: 95%;
        margin-top: 2rem;
        .flavor {
            width: 100%;
        }
    }
    .information {
        background-size: cover;
        flex-direction: column;
        div {
            padding: 25px;
        }
    }
}

// desktop screen
@media screen and (min-width: 1000px) {
    .banner {
        height: 60vh;
        padding-left: 3rem;
    }
    .flavors {
        width: 60%;
        justify-content: space-around;
        position: relative;
        top: -2rem;
        .flavor {
            width: 300px;
        }
    }
    .information {
        background-size: contain;
        background-repeat: repeat;
        justify-content: space-around;
        align-items: center;
        height: 70vh;
        div {
            width: 25%;
            padding: 25px;
        }
    }
}
</style>