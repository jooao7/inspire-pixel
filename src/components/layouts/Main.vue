<script setup>
import { ref, onMounted } from 'vue';
import CardsGrid from '../ui/CardsGrid.vue';
import { fetchPhotos } from '@/services/photos'; // Usar alias @/

const photos = ref([]);
const errorMessage = ref(null);
const isLoading = ref(true); // Novo estado de carregamento

const loadPhotos = async () => {
    isLoading.value = true;
    errorMessage.value = null;
    try {
        photos.value = await fetchPhotos();
    } catch (error) {
        // Logar o erro completo para debug, mas mostrar uma mensagem amigável
        console.error("Falha ao buscar fotos:", error); 
        errorMessage.value = 'Não foi possível carregar as imagens.';
    } finally {
        isLoading.value = false;
    }
};

onMounted(() => {
    loadPhotos();
});
</script>

<template>
    <section class="main-content">
        <h2 class="main-content__title">Inspire-se</h2>

        <div v-if="isLoading" class="loading-state">
            <p>Carregando inspirações...</p>
            </div>

        <div v-else-if="errorMessage" class="error-box">
            <h2 class="error-box__title">{{ errorMessage }}</h2>
            <p>Verifique sua conexão ou tente novamente mais tarde.</p>
            <button @click="loadPhotos" class="error-box__retry-button">Tentar Novamente</button>
        </div>
        
        <div v-else-if="photos.length === 0" class="empty-state">
            <p>Nenhuma imagem encontrada. 😢</p>
        </div>

        <CardsGrid v-else :photos="photos" />
    </section>
</template>

<style scoped lang="scss">
@use "@/assets/styles/_variables.scss" as vars;

.main-content {
    padding: 2rem 1rem;
    
    .main-content__title {
        font-size: 3rem;
        font-weight: 400;
        margin-bottom: 25px;
        font-family: vars.$primary-font;
        color: vars.$tertiary-color;
    }
    
    .loading-state, .error-box, .empty-state {
        text-align: center;
        padding: 40px 0;
        
        .error-box__title {
            color: red;
            font-size: 2.5rem;
            margin-bottom: 10px;
        }

        .error-box__retry-button {
            padding: 10px 20px;
            background-color: vars.$secondary-color;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 15px;
            transition: opacity 0.3s;
            &:hover {
                opacity: 0.9;
            }
        }
    }
}
</style>