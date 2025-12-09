<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

defineProps({
    img: {
        type: String,
        required: true
    },
});

const isFavorite = ref(false);

const toggleFavorite = () => {
    isFavorite.value = !isFavorite.value;
}
</script>

<template>
    <article class="card"> 
        <button 
            @click="toggleFavorite" 
            class="card__favorite-button"
            :aria-pressed="isFavorite"
            aria-label="Adicionar ou remover dos favoritos"
        >
            <Icon 
                icon="material-symbols:favorite" 
                class="card__favorite-icon" 
                :class="{ 'card__favorite-icon--active': isFavorite }"
            />
        </button>
        <img class="card__image" :src="img" alt="Fotografia artística da galeria"> 
    </article>
</template>

<style scoped lang="scss">
@use "@/assets/styles/_variables.scss" as vars;

.card {
    position: relative;
    width: 100%;
    padding-bottom: 169.5%; 
    overflow: hidden;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: filter 0.3s ease;

    &:hover {
        filter: brightness(0.95);
    }
    
    .card__favorite-button {
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        padding: 5px;
        cursor: pointer;
        z-index: 2;
        background-color: rgba(255, 255, 255, 0.3); 
        border-radius: 50%;
        line-height: 0;
    }

    .card__favorite-icon {
        font-size: 30px;
        color: vars.$primary-color;
        transition: color 0.3s ease;
        
        &--active {
            color: #ff0000;
        }
    }
    
    .card__image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover; 
    }
}
</style>