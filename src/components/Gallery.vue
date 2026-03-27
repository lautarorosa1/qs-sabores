<template>
  <section id="gallery" class="section">
    <div class="container">
      <h2 class="section-title">Galería de Sabores</h2>
      <div class="gallery-grid">
        <div 
          v-for="(item, index) in galleryItems" 
          :key="item.title"
          class="gallery-item"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="gallery-content">
            <i :class="item.icon"></i>
            <span>{{ item.title }}</span>
          </div>
        </div>
      </div>
      <div class="gallery-cta">
        <a href="https://www.instagram.com/qssabores/" target="_blank" class="cta-button">
          Ver Más en Instagram <i class="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const galleryItems = [
  { title: '🍔 Hamburguesas', icon: 'fas fa-hamburger' },
  { title: '🌮 Lomitos', icon: 'fas fa-utensils' },
  { title: '🍕 Pizzas Caseras', icon: 'fas fa-pizza-slice' },
  { title: '🥟 Empanadas', icon: 'fas fa-drumstick-bite' },
  { title: '🍰 Postres Deliciosos', icon: 'fas fa-birthday-cake' },
  { title: '🥗 Viandas - Mediodia', icon: 'fas fa-seedling' },
]
</script>

<style scoped>
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.gallery-item {
  height: 220px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  color: white;
  font-weight: 600;
}

.gallery-item:nth-child(1) { background: linear-gradient(45deg, #ff6b6b, #ff8e8e); }
.gallery-item:nth-child(2) { background: linear-gradient(45deg, #feca57, #ffd43b); }
.gallery-item:nth-child(3) { background: linear-gradient(45deg, #9c88ff, #b8a9ff); }
.gallery-item:nth-child(4) { background: linear-gradient(45deg, #48cae4, #74c0fc); }
.gallery-item:nth-child(5) { background: linear-gradient(45deg, #ff6b9d, #ff8fc4); }
.gallery-item:nth-child(6) { background: linear-gradient(45deg, #06d6a0, #51cf66); }
.gallery-item:nth-child(7) { background: linear-gradient(45deg, #ff9f43, #ffbd69); }
.gallery-item:nth-child(8) { background: linear-gradient(45deg, #8338ec, #a855f7); }

.gallery-item:hover {
  transform: scale(1.05) translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

.gallery-content {
  text-align: center;
}

.gallery-content i {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  display: block;
}

.gallery-cta {
  text-align: center;
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}
</style>