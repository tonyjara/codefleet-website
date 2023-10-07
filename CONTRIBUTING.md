# Contributing to CodeFleet

We welcome contributions to CodeFleet and thank you for taking the time to contribute! Here are some guidelines to help ensure your contribution is smoothly integrated.

## Code Formatting with Prettier

This project uses [Prettier](https://prettier.io/) to maintain a consistent code style. A GitHub Action is set up to check the formatting of code in Pull Requests (PRs). All contributions must adhere to the code formatting rules specified by Prettier in this repository.

### How to Format Code

Before submitting your PR, ensure your code is formatted according to the project's Prettier configuration:

1. Install Prettier:

   ```bash
   npm install --save-dev prettier
   ```

2. Run Prettier on your code:
   ```bash
   npx prettier --write .
   ```

This will automatically format your code according to the project's Prettier configuration.

### GitHub Action

The GitHub Action will run Prettier's `--check` command on all files in the PR to ensure they are formatted correctly. If the check fails, you will need to run Prettier on your code as described above, commit the changes, and push the branch again.

## Submitting a Pull Request

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and format your code with Prettier.
4. Commit your changes with a descriptive commit message.
5. Push your branch to your fork on GitHub.
6. Open a PR against the main branch of the CodeFleet repository.

Thank you for contributing to CodeFleet!
