<section id="donate">
    <div class="contentWrapper">
        <div class="grid">
            <div class="textContainer">
                <h2>Tedd lehetővé idén is!</h2>
                <p>
                    A TeatRom fesztivál idén is elhozza a színház gazdag és inspiráló világát öt nagyon szegény borsodi település-közösség számára. A te segítséged nélkül ezt nem tudjuk megtenni.
                </p>
            </div>
            <div class="donationOptions">
                <a target="_blank" href="https://donate.stripe.com/fZe03L5Mk1r33M44gi">
                    <article class="gold">
                        <h3>20.000</h3>
                        <button>Támogatom</button>
                    </article>
                </a>
                <a target="_blank" href="https://donate.stripe.com/bIY2bT0s01r3aas28b">
                    <article class="silver">
                        <h3>10.000</h3>
                        <button>Támogatom</button>
                    </article>
                </a>
                <a target="_blank" href="https://donate.stripe.com/5kA5o53Ec7Pr82kaEJ">
                    <article>
                        <h3>5.000</h3>
                        <button>Támogatom</button>
                    </article>
                </a>
                <a target="_blank" href="https://donate.stripe.com/28o4k1b6E1r36Yg5kk">
                    <article class="customAmount">
                        <h3>Egyéni összeg</h3>
                        <button>Támogatom</button>
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
        background-image: url('/images/textures/tx-1.webp');
        background-image: url('/images/donatebg-2.png');
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
            background: var(--color-theme-1);
            color: var(--color-theme-2);
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
                background: var(--color-theme-2);
                color: #fff;
                font-weight: 900;
                cursor: pointer;
                transition: opacity 0.3s;
            }
            
            &:hover button {
                background-color: #f0f;
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
