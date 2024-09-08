<section id="donate">
    <div class="contentWrapper">
        <div class="grid">
            <div class="textContainer">
                <h2>Tedd lehetővé idén is!</h2>
                <p>
                    Nagyon rászorulunk haj-jaj. Légyszíves ha már a kormány nem
                    legalább akiben van, egy kis jó érzés adjon egy kis pénzt.
                    Kérüjük szépen. Lorem ipsum dolor sit amet, consequir empir
                    unga.
                </p>
            </div>
            <div class="donationOptions">
                <article class="gold">
                    <h3>50.000</h3>
                    <button>Támogatom</button>
                </article>
                <article class="silver">
                    <h3>20.000</h3>
                    <button>Támogatom</button>
                </article>
                <article>
                    <h3>10.000</h3>
                    <button>Támogatom</button>
                </article>
                <article class="customAmount">
                    <h3>Saját összeg</h3>
                    <button>Támogatom</button>
                </article>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    section {
        min-height: 90vh;
        display: flex;
        align-items: center;
        margin: 0 -1rem;
        padding: 3rem 1rem;
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
        grid-template-columns: 1fr 300px;
        gap: 2rem;
    }

    .textContainer {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        h2 {
            font-size: 2rem;
            font-weight: 600;
        }

        p {
            font-size: 1.25rem;
            line-height: 1.5;
        }
    }

    .donationOptions {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        article {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            border-radius: 0.5rem;
            background: var(--color-theme-1);
            color: var(--color-theme-2);
            box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);

            &.customAmount h3 {
                font-size: 1rem;
            }

            h3 {
                font-size: 1.5rem;
                font-weight: 900;
            }

            button {
                opacity: 1;
                padding: 0.5rem 1rem;
                border: none;
                border-radius: 0.5rem;
                background: var(--color-theme-2);
                color: #fff;
                font-size: 1rem;
                font-weight: 900;
                cursor: pointer;
                transition: opacity 0.3s;
                
            }
            
            &:hover button {
                background-color: #f0f;
            }
        }
    }

</style>
