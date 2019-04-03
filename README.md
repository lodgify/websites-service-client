# Lodgify project boilerplate (JavaScript)
This boilerplate is for quickly building and releasing a project as an NPM package. It comes with the following packages:
 - [Babel](https://babeljs.io/docs/en/)
 - [Eslint](https://eslint.org/docs/user-guide/getting-started) and [@lodgify/eslint-config](https://www.npmjs.com/package/@lodgify/eslint-config)
 - [Semantic release](https://www.npmjs.com/package/semantic-release)
 - [Commitizen](https://www.npmjs.com/package/commitizen)
 - [Jest](https://www.npmjs.com/package/jest)

## Gettings started.
- Download this repository, unzip and rename the folder to that of the project
- Create a git repository
- Edit the `package.json` to fit with your project
 - `name` (note: the `name` should be scoped by @lodgify)
 - `description`
 - `repository`
 - `keywords`
- `$ git remote add origin git@github.com:lodgify/REPOSITORY-NAME`
- `$ npm install`
- You are good to go! 👩‍💻 👨‍💻

## Deployment
### Is the project private or public?
#### It's public
In this case we can use travis-ci to manage the building and releasing of the project.
- Log in to [travis](https://travis-ci.org)
- Add the project to list of repositories
- Navigate to the settings page of that project and add two environment variables
- `NPM_TOKEN` [guide on how to get that token](https://docs.npmjs.com/creating-and-viewing-authentication-tokens)
- `GH_TOKEN` [guide on how to get that token](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line) (note: the scope `repo` is the only one required to be selected)

#### It's private
In this case you'll have to delete the `.travis.yml` and replace it for a `Jenkinsfile`

## Once your project is working as expected
 - Edit `docs/CONTRIBUTING.md` [example](https://github.com/lodgify/lodgify-ui/blob/master/docs/CONTRIBUTING.md).
 - Edit `docs/CONVENTIONS.md` [example](https://github.com/lodgify/lodgify-ui/blob/master/docs/CONVENTIONS.md).
 - Finally replace this Readme with one appropriate to your project and then you are DONE! [example](https://github.com/lodgify/lodgify-ui/blob/master/Readme.md).
