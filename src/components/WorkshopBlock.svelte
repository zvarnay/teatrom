<script lang="ts">

</script>

<section>
    <div class="contentWrapper">
        <div class="grid">
            <article>
                <h2>Színházi workshop</h2>
                <div class="imgContainer">
                    <img src="/images/teatrom-78.jpg" alt="">
                </div>
                <p>Nagyon hálásak vagyunk azért, hogy miközben a frankfurti színház bejárja velünk a hat állomásból álló turnéját, időt szakít arra, hogy minden helyszínen művészeti műhelyeket is ajánljon a település gyerekeinek és az érdeklődőknek. Ezek akrobatika, gólyaláb, zsonglőr játék, hangszeres és színházi gyakorlatok. Előre izgalommal várjuk a workshopokat, amelyeket a társulat tagjai a helyi iskolákban adnak majd(, és a CEUs hallgatókat is, akik önkéntesen, szakmai gyakorlatként csatlakoznak a feladatokhoz.)</p>
            </article>
            <article>
                <h2>Művészeti workshop</h2>
                <div class="imgContainer">
                    <img src="/images/kislany-fest.jpg" alt="">
                    <img src="/images/monzart-logo.png" alt="" class="logo">
                </div>
                <p>A Manzart Rajziskola fiatal oktatói, legnépszerűbb programjukat, a képregény rajzolást hozzák el a gyerekeknek. Segítenek a legmenőbb, kedvenc karakterek életre keltésében, sokféle művészeti technikát mutatnak meg. Az elkészült műveket a résztvevők emlékül hazavihetnek.</p>
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
        padding: 3rem 2rem;
        background: #fff5b2;
        
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
                font-weight: 600;
            }

            .imgContainer {
                width: 100%;
                aspect-ratio: 16/9;
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 1rem 0;
                gap: 1rem;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }


                .logo {
                    position: absolute;
                    top: 6px;
                    left: 6px;
                    min-width: 25%;
                    width: 100px;
                    height: auto;
                    margin: 0;
                }
            }

            p {
                margin-bottom: 1rem;
                font-size: var(--font-size-body);
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
