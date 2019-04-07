/**
 * @class RouteHandler
 */
class RouteHandler {
  /**
   * @method routeHandler
   * @memberof Server
   * @desc HANDLES ROUTES NOT FOUND
   * @param {object} req The request object
   * @param {object} res The response object
   * @returns {*} void
   */
  static routeNotFound(req, res) {
    return res.status(404).jsend.fail({ status: 404, message: 'Route not found!' });
  }
}

export default RouteHandler;
