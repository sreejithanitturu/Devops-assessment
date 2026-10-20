# Git Branching Workflow

## Objective
To understand Git branches and a basic collaborative development workflow.

## Important Git Commands

| Command | Purpose |
|---|---|
| `git status` | Shows the current state of the working tree |
| `git branch` | Lists branches |
| `git switch -c branch-name` | Creates and switches to a new branch |
| `git add .` | Stages changes |
| `git commit -m "message"` | Saves staged changes in a commit |
| `git push -u origin branch-name` | Pushes a branch to GitHub |
| `git pull` | Fetches and integrates remote changes |

## Common Branch Types

- `main`: Stable code intended for release.
- `develop`: Integration branch used in some workflows.
- `feature/*`: New functionality.
- `release/*`: Preparation for a release.
- `hotfix/*`: Urgent fixes to production code.

Not every project uses all these branches.

## Pull Request Workflow

1. Create a feature branch.
2. Make and commit changes.
3. Push the branch to GitHub.
4. Open a pull request.
5. Review and merge the changes.

## Result
Documented a basic Git branching and pull request workflow.
