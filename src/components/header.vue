<template>
  <header class="header">
    <nav class="nav container">
      <!-- LOGO -->
      <a href="#hero" class="logo-link">
        <img src="/Logo/android-chrome-512x512.png" alt="QS Sabores" class="logo-img">
        <span class="logo-text">Q's Sabores</span>
      </a>

      <!-- BOTÓN HAMBURGUESA -->
      <button class="menu-toggle" @click="toggleMenu">
        <i class="fas fa-bars"></i>
      </button>

      <!-- LINKS -->
      <ul class="nav-links" :class="{ active: isOpen }">
        <li v-for="link in navLinks" :key="link.name">
          <a :href="link.href" @click="closeMenu">{{ link.name }}</a>
        </li>
      </ul>

      <!-- INSTAGRAM -->
      <a 
        href="https://www.instagram.com/qssabores/" 
        target="_blank" 
        class="instagram-btn"
      >
        <i class="fab fa-instagram"></i> Instagram
      </a>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

const navLinks = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Sobre Nosotros', href: '#about' },
  { name: 'Menú', href: '#menu' },
  { name: 'Galería', href: '#gallery' },
  { name: 'Contacto', href: '#contact' }
]
</script>

<style scoped>
.logo-img {
  width: 2.2em;
  height: 2.2em;
  border-radius: 50%;
  margin-right: 0.8em;
  vertical-align: middle;
  box-shadow: 0 3px 12px rgba(0,0,0,0.2);
  transition: transform 0.3s;
}

.logo-link {
  display: flex;
  align-items: center;
  gap: 0.5em;
  text-decoration: none;
  color: white;
}

.logo-link:hover .logo-img {
  transform: scale(1.1);
}

.logo-text {
  font-size: 1.6rem;
  font-weight: 700;
}

.menu-toggle {
  display: none;
  font-size: 1.6rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

/* MOBILE */
@media (max-width: 768px) {

  .menu-toggle {
    display: block;
  }

  .nav {
    position: relative;
  }

  .nav-links {
    position: absolute;
    top: 70px;
    right: 0;
    width: 100%;
    background: linear-gradient(135deg, #ff6b6b, #feca57);
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem 0;
    display: none;
  }

  .nav-links.active {
    display: flex;
  }

  .instagram-btn {
    display: none;
  }

  .logo-text {
    font-size: 1.3rem;
  }
}
</style>