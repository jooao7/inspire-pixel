<script setup>
import Photographer from '@/assets/images/photographer.png'
</script>

<template>
    <section class="hero">
        <div class="hero__image">
            <img :src="Photographer" alt="Imagem de uma fotógrafa profissional em ação">
        </div>

        <div class="hero__content">
            <h1>
                Onde a paisagem vira <span class="hero__highlight">inspiração</span>.
            </h1>
            <p>
                Explore paisagens, cores e luzes que inspiram novas histórias através da fotografia.
            </p>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use "@/assets/styles/_variables.scss" as vars;

.hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    width: 100%;
    text-align: center;
    font-family: vars.$primary-font;
    color: vars.$tertiary-color;

    .hero__image {
        img {
            padding: 2rem;
            max-width: 100%;
            height: auto;
        }
    }

    .hero__content {
        max-width: 100%;

        h1 {
            font-size: clamp(3rem, 10vw, 3.5rem);
            line-height: 1.2;
            margin-bottom: 0.5rem;
        }
        
        .hero__highlight { 
            color: vars.$secondary-color;
            font-size: clamp(3.5rem, 12vw, 4.5rem);
            font-weight: bold;
        }

        p {
            font-size: clamp(1.4rem, 4vw, 1.6rem);
            line-height: 1.5;
            margin: 1rem auto 0;
        }
    }
}

// ==========================================================
//                     Media Queries
// ==========================================================

@media (min-width: 768px) {
    .hero {
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        gap: 3rem;
        text-align: left;
        padding: 4rem 0;

        .hero__image {
            flex: 0 0 auto;
            width: 40%;

            img {
                padding: 0;
            }
        }

        .hero__content {
            flex: 1;
            width: 60%;
            max-width: 600px;

            h1 {
                font-size: clamp(2.5rem, 5vw, 4rem);
                line-height: 1.1;
            }

            .hero__highlight {
                font-size: 1.5em;
            }

            p {
                font-size: clamp(1.2rem, 2vw, 1.6rem);
                margin: 1.5rem 0 0;
            }
        }
    }
}

@media (min-width: 1024px) {
    .hero {
        gap: 4rem;

        .hero__content {
            max-width: 700px;
            
            h1 {
                font-size: clamp(3rem, 4vw, 5rem);
            }

            .hero__highlight {
                font-size: 1.5em;
            }

            p {
                font-size: clamp(1.4rem, 1.8vw, 1.8rem);
                margin-top: 2rem;
            }
        }
    }
}
</style>