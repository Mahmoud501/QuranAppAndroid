/**
 * @flow
 */

import axios, {AxiosInstance} from 'axios';
import qs from 'qs';

import {
  getCurrentLocale,
  strings,
} from '../../../Infrastructure/Helper/Utils/i18n';

import UserUtils from '../../../Infrastructure/Helper/Utils/UserUtils';

//PRODUCTION:   https://demounibid.roqay.solutions/
//TEST:   https://unibid.roqay.solutions/
const API = {
  getBaseUrl(): string {
    return 'https://iskan.roqay.solutions/';
  },

  getApiUrl(): string {
    return 'https://iskan.roqay.solutions/api/v1/';
  },
  getHeaders(isUpload?: ?boolean): Object {
    const headers: Object = {
      Accept: 'application/json',
    };

    headers['Content-Type'] = isUpload
      ? 'multipart/form-data; charset=UTF-8'
      : 'application/json; charset=UTF-8';

    headers.language = getCurrentLocale();
    headers.Authorization = UserUtils.getInstance()?.getToken();
    // let testToken = 'Bearer 27|5rysGwa3HmSIC50qzBMs6tHZ3U6e4MXq5E5tFNaW';
    // headers.Authorization = testToken;
    return headers;
  },

  getParams(queryParams: ?Object = {}): Object {
    return queryParams;
  },

  getClient(isUpload?: ?Boolean, cancelTokenSource?: ?Object): AxiosInstance {
    const client = axios.create({
      baseURL: this.getApiUrl(),
      headers: this.getHeaders(isUpload),
      timeout: isUpload ? 0 : 60000,
      cancelToken: cancelTokenSource?.token,
      paramsSerializer: params => {
        return qs.stringify(params, {arrayFormat: 'brackets'});
      },
    });

    client.defaults.timeout = isUpload ? 0 : 60000;

    // Intercept all requests.
    client.interceptors.request.use(
      config => {
        console.info(
          `Sending ${config.method.toUpperCase()} request to ${config.url}`,
          config,
        );

        return config;
      },
      error => {
        console.error('Error sending request', error);
        return Promise.reject(error);
      },
    );

    // Intercept all responses.
    client.interceptors.response.use(
      response => {
        console.info(`Got response from ${response.config.url}`, response);
        return response;
      },
      error => {
        console.error(
          `${error.config ? error.config.url : 'Request'} responded with ${
            error.message
          }`,
          error,
        );

        return Promise.reject(error);
      },
    );

    return client;
  },

  makeRequest(
    reqInit: Object,
    handleResponse: Function,
    handleError: Function,
    isUpload?: ?boolean,
    cancelTokenSource?: ?Object,
  ): void {
    this.getClient(isUpload, cancelTokenSource)
      .request(reqInit)
      .then(response => {
        handleResponse(response.status, response.data);
      })
      .catch(error => {
        if (axios.isCancel(error)) {
          console.info(`Request canceled with message: ${error.message}`);

          if (error.message.toLowerCase().indexOf('timeout') > -1) {
            // Network error.
            handleError(error, true);
          }
        } else if (error.response) {
          // The request was made and the server responded with a status code that falls out of the range of 2xx.
          // Check if error response has no data then handle it as error.
          // Else handle as response.
          if (Object.keys(error.response.data).length === 0) {
            handleError(error, false);
          } else {
            let errorMessage: ?string = null;

            if (error.response.status && error.response.status === 500) {
              errorMessage = strings('server_error');
            } else if (error.response.status && error.response.status === 401) {
              errorMessage = strings('session_expired');
            } else if (
              error.response.data.errors &&
              typeof error.response.data.errors === 'string'
            ) {
              errorMessage = error.response.data.errors;
            } else if (
              !!error.response.data.errors &&
              error.response.data.errors.constructor === Object
            ) {
              errorMessage = '';

              Object.entries(error.response.data.errors).map<Object>(
                ([key, value]) => {
                  console.info(`error.response.data.errors key: ${key}`);

                  if (value && Array.isArray(value) && value.length) {
                    errorMessage = errorMessage?.concat(value.join('\r\n'));
                    errorMessage = errorMessage + '\r\n';
                  }
                  return errorMessage;
                  // return null;
                },
              );
              errorMessage = errorMessage === '' ? null : errorMessage.trim();
            } else if (
              error.response.data.error &&
              typeof error.response.data.error === 'string'
            ) {
              errorMessage = error.response.data.error;
            } else if (
              error.response.data.message &&
              typeof error.response.data.message === 'string'
            ) {
              errorMessage = error.response.data.message;
            }
            console.log(errorMessage);
            handleError({message: errorMessage}, false);
          }
        } else if (
          error.message.toLowerCase().indexOf('network') > -1 ||
          error.message.toLowerCase().indexOf('timeout') > -1
        ) {
          // Network error.
          handleError(error, true);
        } else {
          // Something happened in setting up the request that triggered an Error.
          handleError(error, false);
        }
      });
  },

  makeGetRequest(
    path: string,
    queryParams: Object,
    handleResponse: Function,
    handleError: Function,
    isUpload?: ?boolean = false,
    jwtToken?: ?string = null,
    cancelTokenSource?: ?Object,
  ): void {
    const getData: Object = {
      url: `/${path}`,
      method: 'GET',
      params: this.getParams(queryParams),
    };

    this.makeRequest(
      getData,
      handleResponse,
      handleError,
      isUpload,
      cancelTokenSource,
    );
  },

  makePostRequest(
    path: string,
    queryParams: Object,
    body: Object,
    handleResponse: Function,
    handleError: Function,
    isUpload?: ?boolean = false,
    jwtToken?: ?string = null,
    cancelTokenSource?: ?Object,
  ) {
    const postData = {
      url: `/${path}`,
      method: 'POST',
      data: body,
      params: this.getParams(queryParams),
    };

    this.makeRequest(
      postData,
      handleResponse,
      handleError,
      isUpload,
      cancelTokenSource,
    );
  },

  getCancelToken() {
    return axios.CancelToken.source();
  },
};

export default API;
