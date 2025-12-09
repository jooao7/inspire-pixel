<script setup>
import { ref } from "vue";
import { Icon } from '@iconify/vue';
import Logo from '@/assets/images/logo.png';
import MenuIcon from '@/assets/icons/icon-menu-mobile.png';

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
}

const closeMenu = () => {
    isMenuOpen.value = false
}
</script>

<template>
    <header class="header">
        <RouterLink to="/">
            <img :src="Logo" alt="Logo da marca InspireLens" class="logo">
        </RouterLink>

        <nav class="navbar" aria-label="Navegação Principal">
            <div class="navbar__search">
                <Icon icon="material-symbols:search" class="icon" aria-label="Pesquisar" />
            </div>

            <button 
                class="navbar__menu-button" 
                @click="toggleMenu" 
                :aria-expanded="isMenuOpen"
                aria-controls="mobile-nav-content"
            >
                <img :src="MenuIcon" alt="Abrir menu de navegação" class="menu-icon">
            </button>

            <div 
                id="mobile-nav-content"
                class="navbar__nav-content" 
                :class="{ 'navbar__nav-content--open': isMenuOpen }"
            >
                <ul class="nav-list">
                    <li @click="closeMenu">
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li @click="closeMenu">
                        <RouterLink to="/gallery">Galeria</RouterLink>
                    </li>
                    <li @click="closeMenu">
                        <RouterLink to="/favorites">Favoritos</RouterLink>
                    </li>
                </ul>
                
                <div class="navbar__user-profile">
                    <RouterLink to="/profile" @click="closeMenu" aria-label="Acessar Perfil">
                        <Icon icon="material-symbols:person" class="icon user-icon" />
                    </RouterLink>
                </div>
                
                <div class="navbar__close-button-container">
                    <button @click="closeMenu" aria-label="Fechar Menu">
                        <Icon icon="material-symbols:close" class="icon close-icon" />
                    </button>
                </div>
            </div>
        </nav>

        <div v-if="isMenuOpen" @click="closeMenu" class="overlay"></div>
    </header>
</template>

<style scoped lang="scss">
@use "@/assets/styles/_variables.scss" as vars;

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    font-family: vars.$primary-font;
    padding: 0 1rem; 

    .logo {
        width: 57px;
        height: fit-content;
        cursor: pointer;
    }
    
    .navbar {
        display: flex;
        align-items: center;
        gap: 2.5rem;
        
        .icon {
            font-size: 3rem;
            cursor: pointer;
            color: vars.$tertiary-color;
        }

        .menu-icon {
            width: 4rem;
        }
        
        .navbar__menu-button {
            background: none;
            border: none;
            padding: 0;
            cursor: pointer;
        }
        
        .navbar__nav-content {
            position: fixed;
            top: 0;
            right: 0;
            transform: translateX(100%);
            width: 70vw;
            height: 100vh;
            padding: 1.5rem;
            background-color: vars.$primary-color;
            z-index: 999;
            display: flex;
            flex-direction: column;
            justify-content: space-between; 
            align-items: flex-start;
            gap: 2rem;
            opacity: 0;
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease;

            &--open {
                transform: translateX(0);
                opacity: 1;

                .nav-list li {
                    animation: slideIn 0.3s ease forwards;
                    &:nth-child(1) { animation-delay: 0.1s; }
                    &:nth-child(2) { animation-delay: 0.2s; }
                    &:nth-child(3) { animation-delay: 0.3s; }
                }
            }
            
            .nav-list {
                display: flex;
                flex-direction: column;
                gap: 2rem;
                font-size: 2.5rem; 
                list-style: none;
                padding: 0;

                a {
                    color: vars.$tertiary-color;
                    text-decoration: none;
                }
                
                li { opacity: 0; }
            }
            
            .navbar__user-profile {
                margin-top: auto; 
                .user-icon {
                    color: vars.$secondary-color;
                    font-size: 4rem; 
                }
            }
            
            .navbar__close-button-container {
                position: absolute;
                top: 0;
                right: 0;
                margin: 1.5rem;
                
                button {
                    background: none;
                    border: none;
                    padding: 0;
                    cursor: pointer;
                }

                .close-icon {
                    color: vars.$secondary-color;
                    font-size: 4rem;
                    border: 1px solid #e1306b67;
                    border-radius: 5px;
                    padding: 5px;
                }
            }
        }
    }
    
    .overlay {
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(2px);
        z-index: 998;
        position: fixed;
        top: 0;
        left: 0;
        animation: fadeIn 0.3s ease;
    }
}

@keyframes fadeIn { 
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideIn { 
    0% { transform: translateX(100%); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
}


@media (min-width: 768px) {
    .header {
        padding: 0 5%;
        
        .navbar {
            gap: 3rem;
            
            .navbar__menu-button {
                display: none; 
            }
            
            .navbar__search {
                order: 2; 
            }

            .navbar__nav-content {
                
                position: static;
                transform: none;
                opacity: 1;
                width: auto;
                height: auto;
                padding: 0;
                background-color: transparent;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                gap: 4rem;

                .nav-list {
                    flex-direction: row;
                    gap: 3rem; 
                    font-size: 1.8rem;
                    
                    li {
                        opacity: 1; 
                        position: relative;
                        
                        a {
                            transition: color 0.3s ease;
                            &:hover {
                                color: vars.$secondary-color;
                            }
                        }
                        
                        &::before {
                            content: "";
                            position: absolute;
                            bottom: -5px;
                            left: 0;
                            width: 0;
                            height: 2px;
                            background-color: vars.$secondary-color;
                            transition: width 0.3s ease;
                        }
                        
                        &:hover::before {
                            width: 100%;
                        }
                    }
                }
                
                .navbar__user-profile {
                    margin-top: 0;
                    .user-icon {
                        font-size: 3rem;
                        transition: color 0.3s ease;
                        &:hover {
                            color: vars.$secondary-color;
                        }
                    }
                }

                .navbar__close-button-container {
                    display: none;
                }
            }
        }
        
        .overlay {
            display: none;
        }
    }
}
</style>