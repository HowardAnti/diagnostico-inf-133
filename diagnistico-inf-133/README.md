# Prueba de Diagnóstico
## Programación Web III

### Antes de Empezar:

1. Asegúrate de tener instalado Git en tu computadora. Si no lo tienes, puedes descargarlo [aquí](https://git-scm.com/downloads).

2. Asegúrate de tener una cuenta de GitHub. Si no la tienes, puedes crearla [aquí](https://github.com).

3. Asegúrate de tener instalado Node.js en tu computadora. Si no lo tienes, puedes descargarlo [aquí](https://nodejs.org/es/download/).

4. Asegúrate de tener instalado Visual Studio Code en tu computadora. Si no lo tienes, puedes descargarlo [aquí](https://code.visualstudio.com/download).

5. En tu computadora crea un proyecto llamado `diagnistico-inf-133` con **React**, puedes usar `create-react-app`, `Vite`, `Next.js` o cualquier otro framework de tu preferencia.

6. Reemplaza el contenido del archivo `README.md` de tu proyecto con el contenido de este archivo.

7. Crea un repositorio en GitHub con el nombre `diagnostico-inf-133` y sube tu proyecto a este repositorio.

8. Vincula tu repositorio con el repositorio de este proyecto, puedes hacerlo ejecutando los siguientes comandos en tu terminal:

```bash
git remote add origin <REMOTE_URL>
```
8. Asegúrate de que tu repositorio sea público.

9. Completa tus datos personales:

| Nombres        |      Apellidos |      CI |
|----------------|----------------|----------------|
|  `<Nombres> `  | `<Apellidos> ` | `<Carnet de identidad> ` |
### Contexto:

Estás postulando para un puesto de desarrollador **Front-end** en una empresa que trabaja con clientes internacionales. Para poner a prueba tus habilidades te han pedido construir una aplicación web que permita visualizar un catalogo de **Pokemons**. Para esto te han proporcionado la documentación de la API de Pokemon para obtener los datos que debe consumir tu aplicación y te han proporcionado el **diseño de UI/UX del componente para ver cada Pokemon** [Figma](https://cutt.ly/YwL1XB9s) que debe cumplir tu aplicación.


#### Documentación de la API de Pokemon:
`GET https://pokeapi.co/api/v2/pokemon/{id o nombre de pokemon}`

##### Pokemon (Tipo)

|Nombre|Descripción|Tipo|
|------|-----------|----|
|id|El identificador del Pokemon|Entero|
|name|El nombre del Pokemon|Cadena|
|height|La altura del Pokemon en decímetros (dm)|Entero|
|weight|El peso del Pokemon en hectogramos (hg)|Entero|
|abilities|Lista de habilidades potenciales que el Pokemon puede tener|Lista PokemonAbility|
|sprites|Conjunto de imágenes usadas para representar al Pokemon|PokemonSprites|
|stats|Una lista de estadísticas base para este Pokemon|Lista PokemonStat|
|types|Una lista detallando a qué tipo de Pokemon pertenece|Lista  PokemonType|

##### PokemonAbility (Tipo)
|Nombre|Descripción|Tipo|
|------|-----------|----|
|ability|La habilidad que puede tener el Pokemon|NamedAPIResource (Ability)|

##### PokemonType (Tipo)
|Nombre|Descripción|Tipo|
|------|-----------|----|
|slot|El orden en el que se listan los tipos del Pokemon|Entero|
|type|El tipo que tiene el Pokemon|NamedAPIResource (Type)|

##### PokemonStat (Tipo)
|Nombre|Descripción|Tipo|
|------|-----------|----|
|stat|Las estadísticas que el Pokemon tiene|NamedAPIResource (Stat)|
|base_stat|El valor base de la estadística|Entero|

##### PokemonSprites (Tipo)
|Nombre|Descripción|Tipo|
|------|-----------|----|
|front_default|La imagen por defecto del Pokemon vista desde el frente en Batalla|Cadena|
|front_shiny|La imagen shiny del Pokemon vista desde el frente en Batalla|Cadena|
|back_default|La imagen por defecto del Pokemon vista desde detrás en Batalla|Cadena|
|back_shiny|La imagen shiny del Pokemon vista desde detrás en Batalla|Cadena|

##### NamedAPIResource (Tipo)
|Nombre|Descripción|Tipo|
|------|-----------|----|
|name|El nombre del recurso puede ser una habilidad, una forma, un nombre de un juego, una estadística base, etc.|Cadena|


### Tareas:
1. Debes construir los componentes necesarios con **React** para cumplir con el diseño mínimo de UI/UX presentado en [Figma ](https://cutt.ly/YwL1XB9s)

![Diseño Pokedex](https://live.staticflickr.com/65535/53488146658_c14ae2d79c_z.jpg)

2. En el catálogo debes presentar los primeros 6 **Pokemons** con ids múltiplos de 5 (5, 10, 15, 20, 25, 30) en un layout de 3 x 3, es decir, 3 filas y 3 columnas.

#### IMPORTANTE: 
* Para construir los componentes debes utilizar: React, JSX, TSX, eventos, estados, grid, flexbox, clases, etc. **Sin estilos CSS tu solución solo será considerada código sin sentido**. No se permite el uso de tablas.

* La paleta de colores, textos, imágenes, iconos tienen que ser iguales al diseño presentado en Figma


### Entrega:
Una vez tengas la app en debes realizar un commit con todos tus cambios a **tu repositorio de GitHub** del examen y adjuntar el enlace del mismo en la tarea asignada en [ClassRoom](https://classroom.google.com/c/NjUxNTg3NjM4NDU0?cjc=o67fbws).
