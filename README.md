# GitHub Actions Demo

A simple repository demonstrating a basic GitHub Actions CI pipeline.

## Workflow

The [CI workflow](.github/workflows/ci.yml) runs on every push and pull request to `main`. It:

1. Checks out the repository
2. Prints environment info (repo, branch, commit)
3. Runs a simple validation step

## View runs

Check the [Actions tab](https://github.com/ank1064/github-actions-demo/actions) to see workflow runs.
