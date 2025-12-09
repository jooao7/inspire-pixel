<script setup>
import Facebook from '@/assets/icons/Facebook.svg';
import Linkedin from '@/assets/icons/Linkedin.svg';
import Instagram from '@/assets/icons/Instagram.svg';
import Twitter from '@/assets/icons/Twitter.svg';

const socialLinks = [
  { name: 'Facebook', src: Facebook, url: 'URL_FACEBOOK' },
  { name: 'Linkedin', src: Linkedin, url: 'URL_LINKEDIN' },
  { name: 'Instagram', src: Instagram, url: 'URL_INSTAGRAM' },
  { name: 'Twitter', src: Twitter, url: 'URL_TWITTER' },
];
</script>

<template>
    <footer class="footer">
        <section class="footer__content">
            <form class="footer__newsletter">
                <h2>Assine nossa newsletter</h2>
                <input type="email" placeholder="Seu e-mail" aria-label="Digite seu e-mail para inscrição">
                <button type="submit">Inscrever-se</button>
            </form>

            <div class="footer__links-container">
                <div class="footer__links-group contact">
                    <h2>Contato</h2>
                    <ul>
                        <li><a href="mailto:contato@inspiralens.com">contato@inspiralens.com</a></li>
                        <li><a href="#">Central de ajuda</a></li>
                        <li><span>Rio de Janeiro - Brasil</span></li>
                    </ul>
                </div>

                <div class="footer__links-group about">
                    <h2>Sobre</h2>
                    <ul>
                        <li><a href="#">Políticas</a></li>
                        <li><a href="#">Políticas de privacidade</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="footer__social-icons">
            <nav aria-label="Redes Sociais">
                <ul>
                    <li v-for="link in socialLinks" :key="link.name">
                        <a :href="link.url" target="_blank" rel="noopener noreferrer" :aria-label="'Acesse o ' + link.name">
                            <img :src="link.src" :alt="link.name + ' Logo'">
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
        
        <section class="footer__copyright">
            <p>&copy; {{ new Date().getFullYear() }} InspireLens. Todos os direitos reservados.</p>
        </section>
    </footer>
</template>

<style scoped lang="scss">
@use "sass:color";
@use "@/assets/styles/_variables.scss" as vars;

.footer {
    display: flex;
    flex-direction: column;
    padding: 2.5rem 1rem;
    font-family: vars.$primary-font;
    

    a, span {
        font-size: 1.6rem;
        cursor: pointer;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
    
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    
    h2 {
        font-size: 1.8rem;
    }

    .footer__content {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding-bottom: 2rem;
    }

    .footer__newsletter {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2.5rem;

        h2 {
            margin-bottom: 1.5rem;
        }

        input {
            width: 100%;
            max-width: 250px;
            border: none;
            border-radius: 5px;
            padding: 10px;
            background-color: #E6E6E63B;
            margin-bottom: 1rem;
        }

        button {
            padding: 8px 10px;
            border-radius: 5px;
            border: none;
            font-weight: bold;
            color: #FFFFFF;
            background-color: vars.$secondary-color;
            transition: background-color 0.3s ease;

            &:hover {
                background-color: color.adjust(vars.$secondary-color, $lightness: -10%);
            }
        }
    }

    .footer__links-container {
        display: flex;
        flex-direction: column;

        .footer__links-group {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-bottom: 2.5rem;
            
            ul {
                gap: 10px;
                display: flex;
                flex-direction: column;
            }
        }
    }


    .footer__social-icons {
        display: none;
    }
    
    .footer__copyright {
        text-align: center;
        padding-top: 1.5rem;
        border-top: 1px solid #E6E6E63B;
    }
}

@media (min-width: 738px) {
    .footer {
        .footer__content {
            flex-direction: row-reverse;
            justify-content: space-between;
            text-align: left;
        }

        .footer__newsletter {
            align-items: flex-start;
            margin-bottom: 0;
        }

        .footer__links-container {
            flex-direction: row;
            gap: 5rem;
        }

        .footer__social-icons {
            display: block;
            padding: 2rem 0 3rem;

            nav ul {
                display: flex;
                justify-content: center;
                gap: 1.5rem;
            }

            img {
                cursor: pointer;
                width: 30px;
                height: 30px;
            }
        }
        
        .footer__copyright {
            border-top: none;
        }
    }
}

@media (min-width: 1024px) {
    .footer {
        .footer__newsletter input {
            max-width: 400px;
        }
    }
}
</style>