<script lang="ts">

</script>

<section>
    <div class="contentWrapper">
        <h1>Workshopok</h1>
        <div class="grid">
            <article>
                <h2>Színházi workshop</h2>
                <img src="/images/teatrom-28.jpg" alt="">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quia reiciendis aspernatur sequi facere non ad eius atque distinctio eum ducimus ea, sed, nobis perspiciatis minus unde! Saepe, corrupti vero.</p>
            </article>
            <article>
                <h2>Művészeti workshop</h2>
                <img src="/images/teatrom-10.jpg" alt="">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolor quaerat error exercitationem maxime debitis earum quos, asperiores ullam odit! Quas perspiciatis ex eius tempore? Nobis, consequatur? Eos, suscipit fugiat?</p>
            </article>
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
        background-image: linear-gradient(90deg, #f5f1cd, #eda87b);
        background-size: cover;
        
        position: relative;
        z-index: 2;
    }

    .contentWrapper {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        max-width: 68rem;
        width: 100%;

        h1 {
            width: 100%;
            margin-top: -3rem;
            margin-bottom: 3rem;
            text-align: center;

            font-weight: 500;
            color: var(--color-theme-2);
            padding-top: 6px;
            padding-bottom: 6px;
            border-top: 2px solid var(--color-theme-2);
            border-bottom: 2px solid var(--color-theme-2);
        }
    }

    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;

        article {
            position: relative;

            h2 {
                font-size: 1.5rem;
                font-weight: 600;
            }

            img {
                width: 100%;
                aspect-ratio: 16/9;
                object-fit: cover;
                margin: 1rem 0;
            }

            p {
                margin-bottom: 1rem;
                font-size: 1.25rem;
                line-height: 1.5;

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }

    @media (max-width: 768px) {
        .grid {
            grid-template-columns: 1fr;
        }
    }
</style>
