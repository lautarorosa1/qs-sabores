<template>
  <section id="about" class="section about">
    <div class="container">
      <h2 class="section-title">Sobre Q's Sabores</h2>
      <div class="about-grid">
        <div class="about-text">
          <h2>Comida Casera con Sabor Único</h2>
          <p>
            En Q's Sabores nos apasiona la cocina tradicional con un toque moderno. 
            Cada plato es preparado con ingredientes frescos y recetas familiares.
          </p>
          <p>
            Desde desayunos energéticos hasta cenas reconfortantes, ofrecemos 
            variedad para todos los gustos y ocasiones especiales.
          </p>
          <div class="features">
            <div class="feature">
              <i class="fas fa-check-circle"></i>
              <span>Ingredientes frescos diarios</span>
            </div>
            <div class="feature">
              <i class="fas fa-check-circle"></i>
              <span>Preparación casera</span>
            </div>
            <div class="feature">
              <i class="fas fa-check-circle"></i>
              <span>Entrega rápida</span>
            </div>
          </div>
        </div>
        <div class="about-image">
          <div class="image-placeholder">
            <i class="fas fa-utensils fa-5x"></i>
            <p>Cocina QS Sabores</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No necesita lógica adicional
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text h2 {
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #ff6b6b, #feca57);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-text p {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.features {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.feature i {
  color: #ff6b6b;
  font-size: 1.2rem;
}

.about-image {
  position: relative;
}

.image-placeholder {
  width: 100%;
  height: 350px;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #666;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.image-placeholder i {
  margin-bottom: 1rem;
  color: #ff6b6b;
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
}
</style>