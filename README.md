# proyectofinalweb
Aplicación web interactiva y adaptable desarrollada para evaluar el impacto microeconómico derivado de desvíos y variaciones en la longitud de las rutas viales en entornos de crisis social o logística. Este proyecto representa la evaluación final práctica de la asignatura **Programación Web I**.

---

## 👨‍💻 Datos del Proyecto y Autoría

* **Desarrollador:** Ignacio
* **Nivel Académico:** Primer Semestre
* **Asignatura:** Programación Web I
* **Escenario Evaluado:** Escenario C (Simulador de costo de transporte)
* **Moneda de Cálculo:** Bolivianos (Bs)

---

## 🛠️ Tecnologías y Metodologías Aplicadas

Para la construcción de este sistema se han empleado tecnologías base de desarrollo frontend, garantizando un rendimiento óptimo sin depender de librerías externas o frameworks pesados:

1. **HTML5 Semántico:** Estructuración del documento utilizando etiquetas de sección (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) para mejorar la accesibilidad y el SEO. Navegación por anclajes internos.
2. **CSS3 Modular (CSS Grid):** Maquetación responsiva `Mobile-First` construida íntegramente con **CSS Grid Layout** (excluyendo el uso de Flexbox por requerimiento técnico). Implementación de variables `:root` para gestionar dos esquemas de color radicales según el dispositivo (Turquesa para móviles, Azul Marino para escritorio).
3. **Vanilla JavaScript (ES6+):** Lógica matemática y manipulación dinámica del DOM (`document.getElementById`). Incorporación de validaciones de integridad de datos y renderizado condicional de clases CSS (`.modo-normal`, `.modo-alerta`, `.modo-critico`) según el impacto financiero calculado.

---
## 📂 Estructura de Directorios

El código fuente está organizado siguiendo las buenas prácticas de separación de responsabilidades:

```text
proyecto-web-crisis/
│
├── index.html                 # Estructura principal de la aplicación web
├── README.md                  # Documentación técnica del repositorio (este archivo)
│
├── css/
│   └── estilos.css            # Reglas de diseño, Media Queries y CSS Grid
│
├── js/
│   └── script.js              # Algoritmos de cálculo matemático y control del DOM
│
└── img/
    ├── transporte-contexto.jpg # Imagen ilustrativa para la sección Contexto
    └── simulador-icono.jpg     # Imagen/Icono para la sección Resultados
```
🇧🇴 Contexto Social y Realidad Nacional
Esta página web no es solo un ejercicio académico, sino un reflejo directo de la compleja coyuntura social que atraviesa Bolivia en la actualidad. Particularmente en la ciudad de La Paz, el libre tránsito se ha convertido en un desafío diario debido a la constante presencia de marchas, cierres de vías y bloqueos estratégicos que paralizan las rutas urbanas e interdepartamentales.

Es fundamental comprender que el encarecimiento del transporte no es el único problema, sino un síntoma visible de una crisis mayor. Estos bloqueos desencadenan un efecto dominó que afecta el abastecimiento irregular de carburantes, incrementa el costo de los alimentos básicos de la canasta familiar y debilita progresivamente el poder adquisitivo de toda la población. Este simulador busca visibilizar, a través de las matemáticas y la tecnología, cómo estas disrupciones impactan directamente en la economía de los hogares bolivianos...

