<script lang="ts">
    import { onMount } from "svelte";
    
    interface TextMark {
        type: string;
    }
    
    interface TextContent {
        nodeType: string;
        value: string;
        marks?: TextMark[];
        data?: any;
    }
    
    interface HyperlinkContent {
        nodeType: string;
        data: {
            uri: string;
        };
        content: TextContent[];
    }
    
    interface ContentBlock {
        nodeType: string;
        content: (TextContent | HyperlinkContent)[];
        image?: string;
    }
    
    interface ListItem {
        content: ContentBlock[];
    }
    
    interface UnorderedListBlock {
        nodeType: string;
        content: ListItem[];
    }
    
    interface EmbeddedAssetBlock {
        nodeType: string;
        image: string;
    }
    
    interface ContentBlockData {
        title: string;
        body: (ContentBlock | UnorderedListBlock | EmbeddedAssetBlock)[];
        image?: {
            url: string;
        };
        backgroundCss?: string;
        whiteText?: boolean;
        floatedImage?: boolean;
    }
    
    export let content: ContentBlockData;

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

    function updateContent(contentBlock: ContentBlockData) {
        console.dir(contentBlock.body);
        
        title = contentBlock.title;

        body = ''

        contentBlock.body.forEach((block: ContentBlock | UnorderedListBlock | EmbeddedAssetBlock) => {
            if (block.nodeType == 'paragraph') {
                body += '<p>';
                (block as ContentBlock).content.forEach((contentItem) => {
                    if (contentItem.nodeType === 'text') {
                        const textItem = contentItem as TextContent;
                        let textContent = textItem.value;
                        
                        // Apply formatting marks
                        if (textItem.marks && textItem.marks.length) {
                            textItem.marks.forEach((mark: TextMark) => {
                                if (mark.type == 'bold') {
                                    textContent = `<strong>${textContent}</strong>`;
                                } else if (mark.type == 'italic') {
                                    textContent = `<em>${textContent}</em>`;
                                }
                            });
                        }
                        
                        body += textContent;
                    } else if (contentItem.nodeType === 'hyperlink') {
                        const linkItem = contentItem as HyperlinkContent;
                        const linkUrl = linkItem.data.uri;
                        let linkText = '';
                        
                        // Process the content inside the hyperlink
                        linkItem.content.forEach((textContent: TextContent) => {
                            if (textContent.nodeType === 'text') {
                                let text = textContent.value;
                                
                                // Apply formatting marks to link text
                                if (textContent.marks && textContent.marks.length) {
                                    textContent.marks.forEach((mark: TextMark) => {
                                        if (mark.type == 'bold') {
                                            text = `<strong>${text}</strong>`;
                                        } else if (mark.type == 'italic') {
                                            text = `<em>${text}</em>`;
                                        }
                                    });
                                }
                                
                                linkText += text;
                            }
                        });
                        
                        body += `<a href="${linkUrl}" target="_blank" rel="noopener noreferrer">${linkText}</a>`;
                    }
                });
            } else if (block.nodeType == 'embedded-asset-block') {
                body += `<img src="${(block as EmbeddedAssetBlock).image}" />`;
            } else if (block.nodeType == 'unordered-list') {
                body += '<ul>';
                (block as UnorderedListBlock).content.forEach((listItem: ListItem) => {
                    let listItemText = '';
                    listItem.content[0].content.forEach((contentItem) => {
                        if (contentItem.nodeType === 'text') {
                            listItemText += (contentItem as TextContent).value;
                        } else if (contentItem.nodeType === 'hyperlink') {
                            const linkItem = contentItem as HyperlinkContent;
                            let linkText = '';
                            linkItem.content.forEach((textContent: TextContent) => {
                                if (textContent.nodeType === 'text') {
                                    linkText += textContent.value;
                                }
                            });
                            listItemText += `<a href="${linkItem.data.uri}" target="_blank" rel="noopener noreferrer">${linkText}</a>`;
                        }
                    });
                    body += `<li>${listItemText}</li>`;
                });
                body += '</ul>';
            }
        });
        
        image = image || contentBlock.image?.url || null;
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

    :global(.contentBlock a) {
        color: #0066cc;
        text-decoration: underline;
    }

    :global(section.whiteText a) {
        color: #87ceeb;
        
        &:hover {
            color: #b0e0e6;
        }
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
