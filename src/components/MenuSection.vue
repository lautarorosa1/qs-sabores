<template>
  <section id="menu" class="section">
    <div class="container">
      <h2 class="section-title">Nuestro Menú</h2>
      <div class="menu-grid">
        <div 
          v-for="(item, index) in menuItems" 
          :key="item.title"
          class="menu-item"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="menu-icon">
            <i :class="item.icon"></i>
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const menuItems = [
  {
    title: 'Platos del Día',
    description: 'Especialidades diarias siempre frescas y llenas de sabor.',
    icon: 'fas fa-utensils'
  },
  {
    title: 'Comida Rápida',
    description: 'Hamburguesas, hot dogs y más. Perfectas para el día a día.',
    icon: 'fas fa-hamburger'
  },
  {
    title: 'Desayunos',
    description: 'Empieza tu día con energía. Desayunos completos.',
    icon: 'fas fa-coffee'
  },
  {
    title: 'Postres',
    description: 'Dulces tentaciones para cerrar con broche de oro.',
    icon: 'fas fa-birthday-cake'
  },
  {
    title: 'Especialidades',
    description: 'Prueba nuestras recetas secretas únicas.',
    icon: 'fas fa-drumstick-bite'
  },
  {
    title: 'Menús Familiares',
    description: 'Porciones generosas para compartir en familia.',
    icon: 'fas fa-users'
  }
]
</script>