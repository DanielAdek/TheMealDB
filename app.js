import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import jsend from 'jsend';
import dotenv from 'dotenv';
import Routes from './routes';
import RouteHandler from './routes/helpers';

dotenv.config();

/**
 * @class Server
 */
class Server {
  /**
   * @constructor Server
   */
  constructor() {
    const APPLICATION = this;

    APPLICATION.app = express();

    APPLICATION.config();

    APPLICATION.start();

    APPLICATION.WelcomeRoute();

    APPLICATION.routes();

    APPLICATION.handleError();
  }

  /**
   * @method config
   * @memberof Server
	 * @returns {*} void
	 * @desc SET UP APPLICATION CONFIGURATION
   */
  config() {
    const { app: APPLICATION } = this;

    // APP USE CORS
    APPLICATION.use(cors());

    APPLICATION.set('json spaces', 4);

    // TRUST REVERSE PROXY
    APPLICATION.set('trust proxy', true);

    // USE BODYPASER TO PARSE JSON
    APPLICATION.use(bodyParser.json());
    APPLICATION.use(bodyParser.urlencoded({ extended: true }));

    // SET APPLICATION PORT
    APPLICATION.set('port', parseInt(process.env.PORT, 10));

    // USE JSEND MIDDLEWARE
    APPLICATION.use(jsend.middleware);
  }

  /**
   * @method start
   * @memberof Server
   * @desc START UP EXPRESS APPLICATION
   * @returns {*} void
   */
  start() {
    const APPLICATION = this;

    const message = '  App is running at http://localhost:%d in %s mode';

    APPLICATION.app.listen(APPLICATION.app.get('port'), () => {
      console.info(
        message,
        APPLICATION.app.get('port'),
        APPLICATION.app.get('env')
      );
      console.info('  Press CTRL-C to stop\n');
    });
  }

  /**
   * @method routes
   * @memberof Server
   * @desc APPLICATION  ROUTES
   * @returns {*} void
   */
  routes() {
    const APPLICATION = this;
    APPLICATION.app.use('/api/v1', Routes.router);
    APPLICATION.app.all('/*', RouteHandler.routeNotFound);
  }

  /**
   * @method routes
   * @memberof Server
   * @desc APPLICATION  ROUTES
   * @returns {*} void
   */
  handleError() {
    const APPLICATION = this;
    return APPLICATION.app.use((req, res) => {
      if (!res.headersSent) return res.status(500).jsend.fail({ statusCode: 500, message: 'No response header sent' });
    });
  }

  /**
   * @method routes
   * @memberof Server
   * @desc APPLICATION  ROUTES
   * @returns {*} void
   */
  WelcomeRoute() {
    const APPLICATION = this;
    APPLICATION.app.get('/', (req, res) => res
      .status(200)
      .jsend.success({ success: true, statusCode: 200, message: 'Welcome To TheMealDB' }));
  }
}

export default new Server();
