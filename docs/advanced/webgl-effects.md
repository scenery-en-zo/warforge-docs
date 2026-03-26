---
id: advanced-advanced-advanced-webgl-effects
title: WebGL Effects
sidebar_label: 'WebGL Effects'
---

# WebGL Effects

The Warforge theme uses Three.js for immersive WebGL effects in the hero section, including floating dice, ember particles, and atmospheric elements.

## Overview

The WebGL effects system consists of:

- **Three.js Library** — Loaded from `assets/three.module.min.js`
- **Hero Scene** — Main 3D scene in hero section
- **Particle System** — Floating dice and ember effects
- **Post-processing** — Bloom and glow effects
- **Responsive Canvas** — Adapts to screen size

## Scene Architecture

```javascript
// assets/hero-webgl.js
import * as THREE from './three.module.min.js';

class HeroWebGL {
  constructor(container) {
    this.container = container;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.particles = [];
    this.animationId = null;
    
    this.init();
    this.animate();
  }
  
  init() {
    // Create scene
    this.scene = new THREE.Scene();
    
    // Create camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.container.clientWidth / this.container.clientHeight,
      0.1,
      1000
    );
    this.camera.position.z = 50;
    
    // Create renderer
    this.renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    this.renderer.setSize(
      this.container.clientWidth,
      this.container.clientHeight
    );
    this.container.appendChild(this.renderer.domElement);
    
    // Add lights
    this.addLights();
    
    // Add particles
    this.addParticles();
    
    // Handle resize
    window.addEventListener('resize', () => this.onResize());
  }
  
  addLights() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xF97316, 1, 100);
    pointLight.position.set(10, 10, 10);
    this.scene.add(pointLight);
  }
  
  addParticles() {
    const particleCount = 50;
    const geometry = new THREE.OctahedronGeometry(1, 0);
    const material = new THREE.MeshPhongMaterial({
      color: 0xF97316,
      transparent: true,
      opacity: 0.8
    });
    
    for (let i = 0; i < particleCount; i++) {
      const particle = new THREE.Mesh(geometry, material);
      
      // Random position
      particle.position.x = (Math.random() - 0.5) * 100;
      particle.position.y = (Math.random() - 0.5) * 100;
      particle.position.z = (Math.random() - 0.5) * 50;
      
      // Random rotation
      particle.rotation.x = Math.random() * Math.PI;
      particle.rotation.y = Math.random() * Math.PI;
      
      // Random velocity
      particle.userData = {
        velocityX: (Math.random() - 0.5) * 0.1,
        velocityY: (Math.random() - 0.5) * 0.1,
        rotationSpeed: (Math.random() - 0.5) * 0.02
      };
      
      this.particles.push(particle);
      this.scene.add(particle);
    }
  }
  
  animate() {
    this.animationId = requestAnimationFrame(() => this.animate());
    
    // Update particles
    this.particles.forEach(particle => {
      particle.position.x += particle.userData.velocityX;
      particle.position.y += particle.userData.velocityY;
      particle.rotation.x += particle.userData.rotationSpeed;
      particle.rotation.y += particle.userData.rotationSpeed;
      
      // Wrap around edges
      if (particle.position.x > 50) particle.position.x = -50;
      if (particle.position.x < -50) particle.position.x = 50;
      if (particle.position.y > 50) particle.position.y = -50;
      if (particle.position.y < -50) particle.position.y = 50;
    });
    
    this.renderer.render(this.scene, this.camera);
  }
  
  onResize() {
    if (!this.camera || !this.renderer) return;
    
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }
  
  destroy() {
    cancelAnimationFrame(this.animationId);
    this.container.removeChild(this.renderer.domElement);
    this.renderer.dispose();
  }
}

export { HeroWebGL };
```

## Implementation in Theme

### Section File

```liquid
{% comment %} sections/hero.liquid {% endcomment %}
<div class="hero">
  {% if section.settings.enable_3d_effects %}
    <div id="hero-webgl-canvas" class="hero__webgl-canvas"></div>
  {% endif %}
  
  <div class="hero__content">
    <h1>{{ section.settings.headline }}</h1>
    <p>{{ section.settings.description }}</p>
    <a href="{{ section.settings.button_url }}" class="button">
      {{ section.settings.button_label }}
    </a>
  </div>
</div>

{% if section.settings.enable_3d_effects %}
  <script type="module">
    import { HeroWebGL } from '{{ 'hero-webgl.js' | asset_url }}';
    
    document.addEventListener('DOMContentLoaded', () => {
      const container = document.getElementById('hero-webgl-canvas');
      if (container) {
        new HeroWebGL(container);
      }
    });
  </script>
{% endif %}

{% schema %}
{
  "name": "Hero with WebGL",
  "settings": [
    {
      "type": "text",
      "id": "headline",
      "label": "Headline",
      "default": "Premium Tabletop Gaming Supplies"
    },
    {
      "type": "textarea",
      "id": "description",
      "label": "Description"
    },
    {
      "type": "checkbox",
      "id": "enable_3d_effects",
      "label": "Enable 3D Effects",
      "default": true
    }
  ]
}
{% endschema %}
```

### CSS Styling

```css
.hero {
  position: relative;
  min-height: 600px;
  overflow: hidden;
}

.hero__webgl-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero__content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  padding: 120px 24px;
  text-align: center;
}

.hero__content h1 {
  font-family: var(--font-heading);
  font-size: 48px;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.hero__content p {
  font-size: 18px;
  color: var(--text-secondary);
  margin-bottom: 32px;
}
```

## Performance Optimization

### Lazy Loading

```javascript
// Load WebGL only when visible
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      import('./hero-webgl.js').then(module => {
        new module.HeroWebGL(entry.target);
      });
      observer.unobserve(entry.target);
    }
  });
});

observer.observe(document.getElementById('hero-webgl-canvas'));
```

### Mobile Considerations

```javascript
// Disable on mobile or low-end devices
const isMobile = window.innerWidth < 768;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!isMobile && !prefersReducedMotion) {
  // Initialize WebGL
}
```

## Customization Options

### Particle Types

- **Octahedron** — Dice-like shapes (default)
- **Sphere** — Smooth orbs
- **Box** — Cube particles
- **Custom** — Import 3D models

### Color Schemes

```javascript
// Ember effect (orange/red)
color: 0xF97316

// Ice effect (blue/white)
color: 0x3B82F6

// Nature effect (green)
color: 0x22C55E

// Magic effect (purple)
color: 0x8B5CF6
```

## Related Documentation

- [Hero Section](../hero) — Hero configuration
- [Performance](./advanced-performance) — Optimizing WebGL performance
- [Liquid Filters](./advanced-liquid-filters) — Theme customization
