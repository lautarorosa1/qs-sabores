<template>
  <section id="contact" class="section animate-on-scroll">
    <div class="container">
      <h2 class="section-title">Contáctanos</h2>
      <div class="contact-grid">
        <div class="contact-item">
          <div class="contact-icon">
            <i class="fab fa-whatsapp"></i>
          </div>
          <h3>WhatsApp</h3>
          <p>Envíanos tu pedido</p>
          <a href="https://wa.me/5493564307133" class="contact-link">
            <strong>3564-307133</strong>
          </a>
        </div>
        <div class="contact-item">
          <div class="contact-icon">
            <i class="fab fa-instagram"></i>
          </div>
          <h3>Instagram</h3>
          <p>Síguenos para ofertas</p>
          <a href="https://www.instagram.com/qssabores/" target="_blank" class="contact-link">
            @qssabores
          </a>
        </div>
        <div class="contact-item">
          <div class="contact-icon">
            <i class="fas fa-clock"></i>
          </div>
          <h3>Horarios</h3>
          <p>Estamos abiertos</p>
          <div class="schedule">
            <div>Lun-Vie: 9:30hs - 13:30hs</div>
            <div>Vie-Sáb-Dom: 19hs - 23hs</div>
          </div>
        </div>
        <div class="contact-item">
          <div class="contact-icon">
            <i class="fas fa-map-marker-alt"></i>
          </div>
          <h3>Zona de Entrega</h3>
          <p>Consultar por envíos</p>
          <div class="delivery">
            <div>📍 Independencia N. 3552</div>
            <div>🚚 Entrega a Domicilio</div>
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
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.contact-item {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 15px 35px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
}

.contact-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0,0,0,0.15);
}

.contact-icon {
  margin-bottom: 1.5rem;
}

.contact-icon i {
  font-size: 3rem;
  background: linear-gradient(45deg, #ff6b6b, #feca57);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contact-item h3 {
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.contact-item p {
  color: #666;
  margin-bottom: 1rem;
}

.contact-link {
  color: #ff6b6b;
  text-decoration: none;
  font-size: 1.1rem;
}

.contact-link:hover {
  text-decoration: underline;
}

.schedule, .delivery {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>