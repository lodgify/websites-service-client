### Contributing

#### Commiting

Our git commits follow a strict format so they can be analysed by [semantic-release](https://github.com/semantic-release/semantic-release). We use [commitizen](https://github.com/commitizen/cz-cli) to control [the format](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines). Use 

`$ npm run commit` instead of `$ git commit`.

#### Pull requests

- Open a PR into the [master branch](https://github.com/lodgify/REPOSITORY-NAME/tree/master).
- The PR Opener adds contributors as Reviewers *and* Assignees.
- Each Reviewer completes a review. Reviewer removes themself as Assignee.
- If action is required, Reviewer adds Opener as Assignee.
- If no action is required and all checks pass, any Reviewer or Opener merges the PR.

A PR cannot be merged if:
- It breaks [Wheaton's Law](http://www.wheatonslaw.com/)
- It doesn't follow project [code conventions](https://github.com/lodgify/REPOSITORY-NAME/blob/master/docs/CONVENTIONS.md)
- Any of the following commands fail when run by Travis
  - `npm run lint`
  - `npm run test`
  - `npm run build`
- It does not have at least one approval from a contributor

Avoid wasting time in PRs by creating this pre-commit git hook...

```sh
# .git/hooks/pre-commit
npm run pre-commit
```

### Deployment

When a commit is merged into master branch, Travis does the following tasks

- Builds a fresh React Styleguidist styleguide
- Publishes the package to the NPM registry
