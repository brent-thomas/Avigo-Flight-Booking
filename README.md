#Group-4-Flight-Booking-Ecommerce
Group 4's repo for our ecommerce based flights app.

To run locally:
- open the `vite.config.js` file
- remove the underscore ( _ ) from the line `_global:({})` as seen below:
________________________________________________________________________        
|        export default defineConfig({                                  |
|        plugins: [react()],                                            |
|        define: {                                                      |
|            // By default, Vite doesn't include shims for NodeJS/      |
|            // necessary for segment analytics lib to work             |
|    this--> _global:({})                                               |
|        },                                                             |
|        });                                                            |
|_______________________________________________________________________|





To run the website hosted by Amplify:
- open the `vite.config.js` file
- ensure the underscore ( _ ) from the line `_global:({})` is present, as seen below:
________________________________________________________________________        
|        export default defineConfig({                                  |
|        plugins: [react()],                                            |
|        define: {                                                      |
|            // By default, Vite doesn't include shims for NodeJS/      |
|            // necessary for segment analytics lib to work             |
|    this--> _global:({})                                               |
|        },                                                             |
|        });                                                            |
|_______________________________________________________________________|

- Visit the following link: https://main.d1v1k5wkhdm7ar.amplifyapp.com/