## Pickle Rick Finder🌌👽

Proyecto para la evaluación final de React.
La evaluación consiste en desarrollar una página web con un listado de personajes de la serie de Rick y Morty, en la que podremos filtrar por el nombre del personaje.

![Gif Home Page](https://media.giphy.com/media/LSo2I2jqzPXUcgeYAD/giphy.gif)

#### Funcionalidades Iniciales ✔️
- Pintar los primeros 20 personajes que nos devuelve la [API de Rick y Morty ](https://rickandmortyapi.com/) con una imagen, el nombre y el tipo de especie del personaje.
- Filtrado de personajes por su nombre, guardando ese filtrado en el localStorage.
- Al hacer click en cualquier card de un personaje, pintar por pantalla información individual utilizando React Router.
- Mostrar error si al filtrar el personaje no existe.
- Utilizar Grid para pintar los personajes.
- Web completamente Responsive.
- Checkbox de ordenación de los personajes por orden alfabético.
- Icono en cada tarjeta de personaje indicando si está muerto.

![Principal page](https://github.com/Adalab/modulo-3-evaluacion-final-SandraLarrosa/blob/master/src/images/README/principal.png)
![Card Individual](https://github.com/Adalab/modulo-3-evaluacion-final-SandraLarrosa/blob/master/src/images/README/individual.png)
![Filter](https://github.com/Adalab/modulo-3-evaluacion-final-SandraLarrosa/blob/master/src/images/README/filter.png)


#### Funcionalidades Extras 🌟
 - Home con un Pickle Rick animado que cada 6 segundos se actualiza con un texto nuevo. Para hacerlo se ha utilizado un setInterval que hace llamadas a la [API R&M IPSUM](http://loremricksum.com/documentation/).
![Pickle Rick](https://github.com/Adalab/modulo-3-evaluacion-final-SandraLarrosa/blob/master/src/images/README/pickleRick.png)
 - Filtrado de personajes por su estatus.
 - Añadido mecanismo de paginación, tanto en la página principal como en las página individual del detalle del personaje, para poder mostrar todos los personajes proporcionados por el API y no solo los 20 primeros.
![Paginacion](https://github.com/Adalab/modulo-3-evaluacion-final-SandraLarrosa/blob/master/src/images/README/paginacion.png)

 - Componente que hace llamadas a la [API GIPHY](https://developers.giphy.com/docs/api#quick-start-guide) para mostrar gifs aleatorios de Rick y Morty.
![Add Gif](https://github.com/Adalab/modulo-3-evaluacion-final-SandraLarrosa/blob/master/src/images/README/addgif.png)
![Gifs Page](https://github.com/Adalab/modulo-3-evaluacion-final-SandraLarrosa/blob/master/src/images/README/gifspage.png)
  - Añadido un loading antes de cargar la información de las API.
 

  #### Tecnologías utilizadas 💻
- HTML 5
- CSS3 || SASS
- JavaScript
- React || React Router
- API's:
		- [API de Rick y Morty ](https://rickandmortyapi.com/)
		- [API R&M IPSUM](http://loremricksum.com/documentation/)
		- [API GIPHY](https://developers.giphy.com/docs/api#quick-start-guide)

#### Descarga o clona el repositorio. ⚙️
Necesitarás instalar Node.js para trabajar con este repositorio.

```bash

$ git clone https://github.com/SandraLarrosa/Simpsons-Quote.git

```

Instala las dependencias locales:

```bash

$ npm install

```

Arranca el proyecto:

```bash

$ npm start

```


#### *Autora*

Proyecto realizado por Alexandra López Larrosa