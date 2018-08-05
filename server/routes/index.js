const handlerError = require('../handlers');
const ArticleRoutes = require('./ArticleRoutes');
const BranchRoutes = require('./BranchRoutes');
const InstructorRoutes = require('./InstructorRoutes');
const AboutUsRoutes = require('./AboutUsRoutes');


const routeConfig = (app) => {
  app.use(`${process.env.URL_PREFIX}`, ArticleRoutes);
  app.use(`${process.env.URL_PREFIX}`, BranchRoutes);
  app.use(`${process.env.URL_PREFIX}`, InstructorRoutes);
  app.use(`${process.env.URL_PREFIX}`, AboutUsRoutes);

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
