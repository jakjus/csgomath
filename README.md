## csgomath frontend
![Banner](csgomathbg.png)

Frontend of web application "CS:GO Math" - interacting with [Counter-Strike: Global Offensive Market](https://steamcommunity.com/market/search?appid=730).

*Complementary backend with logic explanation can be found [here](https://github.com/jakjus/csgomath_engine).*

> Example presentation is available at [csgomath.com](https://csgomath.com)

## Usage
#### Installation
Install the requirements with npm, by using:
```
npm install
```

#### Development mode
The following command starts `gatsby develop` server. It launches site on port `:8000` with separate `Graph(i)QL` instance.
```
npm run start
```

#### Build
Build source code into ready-to-deploy build package.
```
npm run build
```

#### Build and deploy
Build and push to github pages, defined in `package.json`.
```
npm run deploy
```

#### Run tests
There are simple tests in Cypress, made as a baseplate for a further test coverage. Tests cover main page and "how to" page accessibility, by using `axe` library. `axe` audits the page according to the newest WCAG requirements.

Run tests with:
```
npm run test:e2e
```
