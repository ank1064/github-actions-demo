# GitHub Actions Demo

A repository demonstrating reusable workflows, custom actions, and a CI pipeline that composes them.

## Structure

```
.github/
├── actions/
│   ├── greet/          # JavaScript action (plugin)
│   ├── print-env/      # Composite action
│   └── validate/       # Composite action
└── workflows/
    ├── ci.yml                  # Main pipeline
    ├── reusable-setup.yml      # Reusable workflow
    └── reusable-validate.yml   # Reusable workflow
```

## Custom Actions

| Action | Type | Description |
|--------|------|-------------|
| `print-env` | Composite | Prints repo, branch, commit, and actor |
| `validate` | Composite | Checks for required files (README, workflows) |
| `greet` | JavaScript (node20) | Returns a greeting message |

## Reusable Workflows

| Workflow | Inputs | Outputs |
|----------|--------|---------|
| `reusable-setup.yml` | `environment` | `repo-name`, `branch`, `environment` |
| `reusable-validate.yml` | `strict` | `status` |

## Main Pipeline (`ci.yml`)

The CI pipeline orchestrates everything:

1. **setup** — calls `reusable-setup.yml` (uses `print-env` action)
2. **validate** — calls `reusable-validate.yml` (uses `validate` action)
3. **greet** — uses the `greet` JavaScript action directly
4. **summary** — prints a summary of all job outputs

## View runs

Check the [Actions tab](https://github.com/ank1064/github-actions-demo/actions) to see workflow runs.
