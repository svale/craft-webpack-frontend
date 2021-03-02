# Craft Webpack Frontend
A collection of frontend packages well suited for a better Craft CMS frontend dev experience.

# Use
Download and unzip the entire repo  to you computer
```
https://github.com/svale/craft-webpack-frontend/archive/main.zip
```

Delete the following files from the download
```
README.md
LICENSE
```

Update descriptions in `package.json` to fit your current project.

Make sure ./node_modules is added to the project root .gitignore file

---

Run
```
$ npm install
$ npm run dev
```
(Or use `yarn` if you prefer)

Webpack assets are set up to serve from `localhost:8080` by default.


## Using Twigpack
You can include your chunked/hashed assets in Craft CMS templates by using [Twigpack](https://nystudio107.com/docs/twigpack/):

```
{{ craft.twigpack.includeCssModule("app.css", true) }}
{{ craft.twigpack.includeJsModule("app.js", true, {"type": "module"}) }}
{{ craft.twigpack.includeJsModule("chunk-vendors.js", true) }}
```
If Twigpack is not installed allready
```
composer require nystudio107/craft-twigpack
```

### Credits
Inspired and informed by https://github.com/mizziness/craft3-webpack5-tailwind2-boilerplate and https://nystudio107.com/blog/an-annotated-webpack-4-config-for-frontend-web-development

### License

This project is open source and available under the [MIT License](https://github.com/git/git-scm.com/blob/master/MIT-LICENSE.txt)
