const path = require('path');

const config = {
  ROOT_DIR: __dirname,
  URL_PORT: 8083,
  URL_PATH: 'http://localhost',
  BASE_VERSION: '',
  CONTROLLER_DIRECTORY: path.join(__dirname, 'controllers'),
  PROJECT_DIR: __dirname,
  MONGOURI: 'mongodb+srv://careone:careone123$@cluster0.6ngocmp.mongodb.net',
  bap_url: 'localhost:8001',
  bpp_url: 'http://127.0.0.1:8082',
  bg_url: 'http://127.0.0.1:8080',
  bpp_id: 12345,
  bap_keys:{
    98765: "public.pem"
  }

};
config.OPENAPI_YAML = path.join(config.ROOT_DIR, 'api', 'openapi.yaml');
config.FULL_PATH = `${config.URL_PATH}:${config.URL_PORT}/${config.BASE_VERSION}`;
config.FILE_UPLOAD_PATH = path.join(config.PROJECT_DIR, 'uploaded_files');

module.exports = config;
