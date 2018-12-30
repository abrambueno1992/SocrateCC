## Mars Rover

This is a project that sets a Grid, initial positioning of two rovers, and the commands for the two rovers. The commands are executed for Rover 1 first, and when the queu of commands are all completed, Rover 2 commands start to be executed. The display of the grid and rovers are optional. The display shows both rovers positioning and direction, along with the proper color to differentiate between Rover 1 and Rover 2. This project uses Redux to keep state from well organized, and without mutations. Because this program uses Redux, it's very flexible, and new features can be easily added. Currently, it's setup to execute up to 2 sets of commands, Rover 1 is set 1, and Rover 2 is set 2. If desired, another Rover can be added, which will execute set 3. The next component that takes commands doesn't have to be a Rover, it can be anything that will take input for commands to be executed.

### `Components`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `Redux Actions`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `Redux State`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Controller Component State

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### `Rover Component States`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
