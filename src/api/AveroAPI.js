import axios from 'axios';

const API = 'https://check-api.herokuapp.com/';
const AUTH_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQwNWI5Yzk2LTExYmMtNDlmMS1hNjNkLThkMDI3Yjg5ZjY4ZCIsIm5hbWUiOiJBbmR5IEZpcnRoIn0.JarZK8umjpV1xGyOBvfj6xl9vilnFXrbqRGqsxRIh4M';

class AveroAPI {
  static getAllTables = () =>
    axios
      .get( `${ API }tables`, {
        headers: {
          Authorization: AUTH_TOKEN,
        },
      } )
      .then( response => response.data, error => error.response.status );

  static createNewCheck = tableId =>
    axios
      .post(
        `${ API }checks`,
        { tableId },
        {
          headers: {
            Authorization: AUTH_TOKEN,
          },
        },
      )
      .then( response => response.data, error => error.response.status );

  static getChecks = () =>
    axios
      .get( `${ API }checks`, {
        headers: {
          Authorization: AUTH_TOKEN,
        },
      } )
      .then( response => response.data, error => error.response.status );

  static getCheck = checkId =>
    axios
      .get( `${ API }checks/${ checkId }`, {
        headers: {
          Authorization: AUTH_TOKEN,
        },
      } )
      .then( response => response.data, error => error.response.status );

  static getMenu = () =>
    axios
      .get( `${ API }items`, {
        headers: {
          Authorization: AUTH_TOKEN,
        },
      } )
      .then( response => response.data, error => error.response.status );
  // .catch( error => error );

  static addCheckItem = ( check, itemId ) =>
    axios
      .put(
        `${ API }checks/${ check.id }/addItem`,
        { itemId },
        {
          headers: {
            Authorization: AUTH_TOKEN,
          },
        },
      )
      .then( response => response.data, error => error.response.status );

  static voidCheckItem = ( check, orderedItemId ) =>
    axios
      .put(
        `${ API }checks/${ check.id }/voidItem`,
        { orderedItemId },
        {
          headers: {
            Authorization: AUTH_TOKEN,
          },
        },
      )
      .then( response => response.data, error => error.response.status );

  static closeCheck = check =>
    axios
      .put(
        `${ API }checks/${ check.id }/close`,
        {},
        {
          headers: {
            Authorization: AUTH_TOKEN,
          },
        },
      )
      .then( response => response.data, error => error.response.status );
}

export default AveroAPI;
