# Storytelling Orquesta Panorama

Descripción breve
-----------------

Proyecto de visualización interactiva y storytelling realizado como parte del curso "Visualización de datos" (RTVE). Este repositorio contiene una pequeña web estática que presenta una historia visual a partir de los datos proporcionados en el curso. El objetivo es comunicar conclusiones claras y visualmente atractivas combinando gráficos, texto y recursos multimedia.

Contenido principal
------------------

- `index.html` — Página principal del proyecto (entrada).
- `config.js` — Configuración y parámetros de la visualización.
- `heatmaps.js` — Capas geojson por años para representar heatmaps.
- `assets/` — Imágenes, datos y otros recursos estáticos usados en la narrativa.
- `LICENSE` — Licencia del proyecto.

Cómo ejecutar localmente
------------------------

Este es un proyecto estático. Para probarlo localmente tienes varias opciones:

1) Abrir `index.html` directamente en el navegador

	 - Simple y rápido, pero algunas APIs (fetch) pueden bloquearse por políticas CORS si el navegador exige servidor.

2) Levantar un servidor HTTP simple (recomendado)

- Con Python 3 (desde la carpeta del proyecto):

	```powershell
	python -m http.server 8000
	```

	Luego abre http://localhost:8000

- Con Node (http-server):

	```powershell
	npx http-server . -p 8000
	```

Uso
---

- Abre la URL local en tu navegador.
- Navega por la historia usando la interfaz; las instrucciones y los controles están en la propia página.

Datos y su procedencia
----------------------

Los datos de las actuaciones de la Orquesta Panorama proceden de la web Orquestas de Galicia.

Licencia
--------

Este repositorio incluye un archivo `LICENSE`. Revisa ese archivo para los términos exactos. Si deseas cambiar la licencia, actualiza ambos archivos (`LICENSE` y este README).

Créditos
--------

- Autor: Diego Muiño
- Curso: Visualización de datos (RTVE)
- Recursos y bibliotecas: Mapbox y Flourish.

Despliegue
---------

Puedes desplegar esta página fácilmente en GitHub Pages. Sube el repositorio a GitHub y en la configuración del repositorio activa GitHub Pages desde la rama `main` o `gh-pages`.

Buenas prácticas y notas
-----------------------

- Asegúrate de optimizar imágenes para web.
- Documenta cambios importantes en el `README.md` o en un `CHANGELOG.md`.
