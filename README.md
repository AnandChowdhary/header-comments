# 📑 Header Comments Action

GitHub Action to add header comments to all your files

[![Build CI](https://github.com/koj-co/header-comments/workflows/Build%20CI/badge.svg)](https://github.com/koj-co/header-comments/actions?query=workflow%3A%22Build+CI%22)
[![Test CI](https://github.com/koj-co/header-comments/workflows/Test%20CI/badge.svg)](https://github.com/koj-co/header-comments/actions?query=workflow%3A%22Test+CI%22)
[![Release CI](https://github.com/koj-co/header-comments/workflows/Release%20CI/badge.svg)](https://github.com/koj-co/header-comments/actions?query=workflow%3A%22Release+CI%22)
[![Node CI](https://github.com/koj-co/header-comments/workflows/Node%20CI/badge.svg)](https://github.com/koj-co/header-comments/actions?query=workflow%3A%22Node+CI%22)

## ⭐ How it works

First, create a file `.github/FILE_HEADER` where you can write, for example, license text to put in the file header. This Action will automatically add that at the top of each file in your repository.

This Action does not commit or push files, you can use another Action like [stefanzweifel/git-auto-commit-action](https://github.com/stefanzweifel/git-auto-commit-action) to commit the changes, or [peter-evans/create-pull-request](https://github.com/peter-evans/create-pull-request) to create a pull request with the changes:

```yaml
name: Header Comments CI
on:
  push:
    branches:
      - main
jobs:
  test:
    name: Add comments
    runs-on: ubuntu-18.04
    steps:
      - name: Checkout
        uses: actions/checkout@v2.3.4
      - name: Add comments to src/
        uses: koj-co/header-comments
        with:
          directory: src
      - name: Create PR with changes
        uses: peter-evans/create-pull-request@v3
```

### Options

#### `directory` (optional)

Only files in this directory, for example `src`, will get headers.

## 📄 License

- Code: [MIT](./LICENSE) © [Koj](https://koj.co)
- "GitHub" is a trademark of GitHub, Inc.

<p align="center">
  <a href="https://koj.co">
    <img width="44" alt="Koj" src="https://kojcdn.com/v1598284251/website-v2/koj-github-footer_m089ze.svg">
  </a>
</p>
<p align="center">
  <sub>An open source project by <a href="https://koj.co">Koj</a>. <br> <a href="https://koj.co">Furnish your home in style, for as low as CHF175/month →</a></sub>
</p>
