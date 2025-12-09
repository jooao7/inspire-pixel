<script setup>
import Card from './Card.vue';

defineProps({
    photos: {
        type: Array,
        required: true,
        default: () => []
    }
});
</script>

<template>
    <div class="cards-grid">
        <Card 
            v-for="photo in photos"
            :key="photo.id"
            :img="photo.download_url"
            :aria-label="'Foto por ' + photo.author" 
        />
    </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/_variables.scss" as vars;

.cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); 
    gap: 20px;
    justify-content: center;
    padding: 1rem 0;
    
    @media (min-width: 640px) {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
    
    @media (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr); 
    }
}
</style>