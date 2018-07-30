const handlerError = require('../handlers');
const ArticleRoutes = require('./ArticleRoutes');
const BranchRoutes = require('./BranchRoutes');


const routeConfig = (app) => {
  app.use(`${process.env.URL_PREFIX}`, ArticleRoutes);
  app.use(`${process.env.URL_PREFIX}`, BranchRoutes);

  app.use(handlerError);

  app.use((req, res) => {
    res.status(404).json({
      error: 404,
      description: 'Not found',
      url: req.originalUrl,
    });
  });
};

module.exports = routeConfig;
