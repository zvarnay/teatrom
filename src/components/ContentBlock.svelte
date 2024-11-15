<script lang="ts">
    import { onMount } from "svelte";
    
    export let content;

    let title = "";
    let body = "";
    let image = null as string | null;
    let style = "";
    let floatedImage = false;

    export let background = "";
    export let whiteText = false;
    export let mini = false;
    export let textBoxBackground = "";
    export let hideTitle = false;

    onMount(() => {
        if (content) {
            updateContent(content);
            return;
        }
    });

    function updateContent(contentBlock) {
        console.dir(contentBlock.body);
        
        title = contentBlock.title;

        body = ''

        contentBlock.body.forEach((block) => {
            if (block.nodeType == 'paragraph') {
                body += '<p>';
                block.content.forEach(text => {
                    if (text.marks && text.marks.length) {
                        text.marks.forEach(mark => {
                            if (mark.type == 'bold') {
                                body += `<strong>${text.value}</strong>`;
                            } else if (mark.type == 'italic') {
                                body += `<em>${text.value}</em>`;
                            }
                        });
                    } else {
                        body += text.value;
                    }
                });
            } else if (block.nodeType == 'embedded-asset-block') {
                body += `<img src="${block.image}" />`;
            } else if (block.nodeType == 'unordered-list') {
                body += '<ul>';
                block.content.forEach((listItem) => {
                    body += `<li>${listItem.content[0].content[0].value}</li>`;
                });
                body += '</ul>';
            }
        });
        
        image = image || contentBlock.image?.url;
        background = background || contentBlock.backgroundCss as string;
        whiteText = whiteText || contentBlock.whiteText as boolean;
        floatedImage = contentBlock.floatedImage as boolean || false;
    }

</script>

<section
    style="background: {background}; background-size: cover; background-position: center;"
    class="contentBlock"
    class:mini={mini}
    class:whiteText={whiteText}
>
    <div class="contentWrapper {style}">
        <div class="grid">
            {#if image && !floatedImage}
                <img src={image} alt="" />
            {/if}
            <div style="background: {textBoxBackground}" class:hasTextBox={!!textBoxBackground}>
                {#if title && !hideTitle}
                    <h2>{title}</h2>
                {/if}
                <div class="textContainer">
                    {#if image && floatedImage}
                        <img src={image} alt="" />
                    {/if}
                    {@html body}
                </div>
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
        background-image: linear-gradient(90deg, #f5f1cd, #eda87b);
        background: #d2c570;
        background-size: cover;
        min-height: 90vh;
        
        position: relative;
        z-index: 2;
        
        &.mini {
            padding: 3rem 2rem;
            min-height: 0;
        }
    }

    :global(section.whiteText :is(h2, p)) {
        color: #fff;
    }

    .contentWrapper {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        max-width: 52rem;
        width: 100%;

        &.twoColumn {
            max-width: 64rem;
        }
    }

    .grid {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .hasTextBox {
            padding: 2rem;
        }
    }

    .grid :global(img) {
        width: 100%;
        height: fit-content;
        max-width: 20rem;
        height: intrinsic;
    }

    h2 {
        font-size: var(--font-size-header);
        font-weight: 600;
    }

    :global(.contentBlock ul) {
        padding: 0;
    }

    :global(.contentBlock ul li) {
        margin: 0;
        padding: 4px 0;
        margin-left: 1rem;
        color: #fff;
    }

    section :global(p) {
        margin-top: 1rem;
        font-size: var(--font-size-body);
        line-height: 1.5;
        white-space: pre-wrap;
    }

    .textContainer {
        display: block;
        gap: 0 2rem;

        img {
            order: 1;
            float: right;
            width: 40%;
            max-width: 20rem;
            margin-left: 1rem;
            margin-bottom: 1rem;
        }
    }

    @media (min-width: 500px) {
        section {
            min-height: 90vh;

            .grid {
                flex-direction: row;
            }

            .grid :global(img) {
                width: 40%;
                max-width: none;
                margin-right: 2rem;
            }

            &.mini {
                padding: 6rem 2rem;
            }
        }
    }
</style>
