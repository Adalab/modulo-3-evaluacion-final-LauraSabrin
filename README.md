# Create a filter's web App, based on Harry Potter's Characters Exercise:

Deadline: February the 12th.

This time, we need to develop a filter app web for Harry Potter fans, so they can search about different characters from the famous saga and check about Hogwarts houses and current status of those characters.(https://hp-api.onrender.com/).
We will demonstrate our new skills with React Library for Javascript, adapting files, SASS styles, images and dynamic routes to connect the differents elements and components from this project.
We also should be able to publish our web application to Github Pages and make changes if necessary.

To check and try this project you must need a starter Kit like this one --> https://github.com/Adalab//(Adalab-web-starter-kit).You will need, also:
a shell, 
-install node.js (https://nodejs.org/en/download/)
-install sass as well (https://sass-lang.com/install/)
-https://learn.microsoft.com/es-es/windows/wsl/install-
Maybe you will enjoy cloning this repository and making your own changes and improves, so consider  to add some new dependencies to your code editor like react-router-dom , prop-types and adapt your vite.config.js file and package.json file to run properly the project.
More information --> https://reactrouter.com/en/main, https://vitejs.dev/, https://es.react.dev/



At first, we should download results from Harry Potter' s API including a picture of the character, his name and his specie.
 In case the API does not provides us with a picture, we should fix this issue as we pleased.
The returned promise give us more information about he characters but we won'n t need it for the moment; we should save the information inside a variable(type: empty array).
We should be able to show the results of our fetch demand by writing all this new elements on UI.

The home landing starts always with Gryffindor's House characters;
The users will filter by house and name, so they can get more precise results. Depending on their choices, the House color details will be different; as the same way, depending on the current status of the character , they will show different images and opacities.

If we click on a specific card, this one would appear on a new dynamic route, to show itself bigger and adding more information about the selected character.
In case the user press, by accident, enter key before finish his research, the page would not refresh.

The project includes several components to divide the web application parts, including a header, a hompeage (or main page) with the filter system and a details dynamic page.

In case the user chooses a House in the select filter but add a name who does not match with this house selection in the textarea, a new card will appear with an advise message and a gif.









Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
