<script lang="ts">
    import { language } from "$lib/contentfulStore";
    import { get } from "svelte/store";

    export let contentBlocks;
    const content = contentBlocks.find((block) => block.sys.id === "5NDeMPdufkmTQA7lUFu9uo");
    const html = content.body.map((block) => block.content[0].value).join('');
    
    const currentLanguage = get(language);
    const supportText = currentLanguage === "hu" ? "Támogatom" : "Donate";
</script>

<section id="donate">
    <div class="contentWrapper">
        <div class="grid">
            <div class="textContainer">
                <h2>{content.title}</h2>
                <p>{@html html}</p>
                <div class="buttonContainer">
                    <a href="https://www.gofundme.com/f/hca62-teatrom-festival">
                        <button id="gofundme">GoFundMe</button>
                    </a>
                </div>
            </div>
            <div class="donationOptions">
                <a target="_blank" href="https://donate.stripe.com/fZe03L5Mk1r33M44gi">
                    <article class="gold">
                        <h3>20.000</h3>
                        <button>{supportText}</button>
                    </article>
                </a>
                <a target="_blank" href="https://donate.stripe.com/bIY2bT0s01r3aas28b">
                    <article class="silver">
                        <h3>10.000</h3>
                        <button>{supportText}</button>
                    </article>
                </a>
                <a target="_blank" href="https://donate.stripe.com/5kA5o53Ec7Pr82kaEJ">
                    <article>
                        <h3>5.000</h3>
                        <button>{supportText}</button>
                    </article>
                </a>
                <a target="_blank" href="https://donate.stripe.com/28o4k1b6E1r36Yg5kk">
                    <article class="customAmount">
                        <h3>{currentLanguage === 'hu' ? 'Egyéni összeg' : 'Custom amount'}</h3>
                        <button>{supportText}</button>
                    </article>
                </a>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    section {
        display: flex;
        align-items: center;
        margin: 0 -1rem;
        padding: 3rem 2rem;
        z-index: 2;
        background-image: linear-gradient(90deg, #f5f1cd, #eda87b);
        background-image: url('/images/textures/tx-13.webp');
        background-position: top right;
        background-size: cover;
    }

    .contentWrapper {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 100%;
        max-width: 52rem;
    }

    .grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .textContainer {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        h2 {
            font-size: var(--font-size-header);
            font-weight: 600;
        }

        p {
            font-size: var(--font-size-body);
            line-height: 1.5;
        }

        .buttonContainer {
            width: 100%;
        }
        
        button {
            width: 100%;
            max-width: 330px;
            padding: 1rem 0.5rem;
            border: none;
            border-radius: 0.5rem;
            // gofundme color
            background: #01bc66;
            font-size: var(--font-size-body);
            color: #fff;
            cursor: pointer;
        }
    }

    .donationOptions {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1rem;

        a {
            text-decoration: none;
        }

        article {;
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 330px;

            padding: 1rem;
            border-radius: 0.5rem;
            background: #000;
            color: #fff;
            box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);

            &.customAmount h3 {
                font-size: 1rem;
            }

            h3 {
                font-size: var(--font-size-small-header);
                font-weight: 900;
            }

            button {
                opacity: 1;
                padding: 0.5rem;
                border: none;
                border-radius: 0.5rem;
                background: #FFED00;
                color: #000;
                font-weight: 900;
                cursor: pointer;
                transition: opacity 0.3s;
            }
            
            &:hover button {
                background-color: #E2007A;
            }
        }
    }

    @media (min-width: 680px) {
        section {
            min-height: 90vh;
        }

        .grid {
            grid-template-columns: 1fr 300px;
        }
    }

</style>
