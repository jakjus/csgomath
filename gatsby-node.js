const fetch = require(`node-fetch`);

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const result = await fetch(`http://host.jakjus.com:3010/api/cases`);
  let jsonData = await result.json();

  jsonData.data.map(async r => {
    createPage({
      path: `/${r.case.name}`,
      component: require.resolve(`./src/templates/details.js`),
      context: { r: r.case }
    });
    if (!r.key) return
    createPage({
      path: `/${r.key.name}`,
      component: require.resolve(`./src/templates/details.js`),
      context: { r: r.key }
    });
  });
};
