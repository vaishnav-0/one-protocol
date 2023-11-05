/**
 * The OneProtocolProviderPlatformController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/OneProtocolProviderPlatformService');
const confirmPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.confirmPOST);
};

const initPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.initPOST);
};

const searchPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.searchPOST);
};

const selectPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.selectPOST);
};

const statusPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.statusPOST);
};

const trackPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.trackPOST);
};


module.exports = {
  confirmPOST,
  initPOST,
  searchPOST,
  selectPOST,
  statusPOST,
  trackPOST,
};
