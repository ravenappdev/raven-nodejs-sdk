/*
 * Raven API
 * This is OpenAPI defintion for the APIs of Raven.  You can find out more about Raven at [https://ravenapp.dev/](https://ravenapp.dev/).
 *
 * OpenAPI spec version: 1.0.0
 * Contact: api@ravenapp.dev
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.27
 *
 * Do not edit the class manually.
 *
 */

import axios from "axios";
import querystring from "querystring";
import {
  convertToType,
  constructFromObject,
  parseDate,
  deserialize,
  buildUrl,
  normalizeParams,
  isFileParam,
  paramToString,
  isJsonMime,
  jsonPreferredMime,
} from "./utils";
const DEFAULTS = {
  BASE_URL: "https://api.ravenapp.dev".replace(/\/+$/, ""),
};

const ClientConfig = (config) => {
  return {
    basePath: config["basePath"] || DEFAULTS.BASE_URL,
    authentications: {
      ApiKeyAuth: {
        type: "apiKey",
        in: "header",
        name: "Authorization",
        apiKey: config["apiKey"],
        apiKeyPrefix: "AuthKey",
      },
    },
    /**
     * The default HTTP timeout for all API calls.
     * @type {Number}
     * @default 60000 // in ms
     */
    timeout: 60000,
    /**
     * If set to false an additional timestamp parameter is added to all API GET calls to
     * prevent browser caching
     * @type {Boolean}
     * @default true
     */
    cache: true,

    defaultHeaders: {},
  };
};

const applyAuthToRequest = (request, authNames, authentications) => {
  authNames.forEach((authName) => {
    var auth = authentications[authName];
    switch (auth.type) {
      case "basic":
        if (auth.username || auth.password) {
          request.auth = {
            username: auth.username || "",
            password: auth.password || "",
          };
        }

        break;
      case "apiKey":
        if (auth.apiKey) {
          var data = {};
          if (auth.apiKeyPrefix) {
            data[auth.name] = auth.apiKeyPrefix + " " + auth.apiKey;
          } else {
            data[auth.name] = auth.apiKey;
          }

          if (auth["in"] === "header") {
            request.headers = { ...request.header, ...data };
          } else {
            request.params = { ...request.params, ...data };
          }
        }
        break;
      case "oauth2":
        if (auth.accessToken) {
          request.headers = {
            ...request.headers,
            Authorization: "Bearer " + auth.accessToken,
          };
        }
        break;
      default:
        throw new Error("Unknown authentication type: " + auth.type);
    }
  });
};

const callApi = (
  { cache, authentications, defaultHeaders, timeout },
  axiosInstance
) => {
  return (
    path,
    httpMethod,
    pathParams,
    queryParams,
    headerParams,
    formParams,
    bodyParam,
    authNames,
    contentTypes,
    accepts,
    returnType
  ) => {
    var url = buildUrl({ path, pathParams });
    // var request = superagent(httpMethod, url);
    const request = {
      url: url,
      method: httpMethod,
      headers: { ...defaultHeaders, ...normalizeParams(headerParams) },
      params: { ...pathParams },
    };

    // apply authentications
    applyAuthToRequest(request, authNames, authentications);

    // set query parameters
    if (httpMethod.toUpperCase() === "GET" && cache === false) {
      queryParams["_"] = new Date().getTime();
    }

    request.params = { ...request.params, ...normalizeParams(queryParams) };

    // set request timeout
    request.timeout = timeout;

    var contentType = jsonPreferredMime(contentTypes);
    request.headers["Content-Type"] = contentType || "application/json";

    if (contentType === "application/x-www-form-urlencoded") {
      request.data = querystring.stringify(normalizeParams(formParams));
    } else if (contentType == "multipart/form-data") {
      var _formParams = normalizeParams(formParams);
      const data = {};
      for (var key in _formParams) {
        if (_formParams.hasOwnProperty(key)) {
          if (isFileParam(_formParams[key])) {
            // file field
            data[key] = _formParams[key];
          } else {
            data[key] = _formParams[key];
          }
        }
      }
      request.data = data;
    } else if (bodyParam) {
      request.data = bodyParam;
    }

    var accept = jsonPreferredMime(accepts);
    if (accept) {
      request.headers["Accept"] = accept;
    }

    if (returnType === "Blob") {
      request.responseType = "blob";
    } else if (returnType === "String") {
      request.responseType = "string";
    }
    return new Promise((resolve, reject) => {
      axiosInstance
        .request(request)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          var res = error.response;
          if (res && res.data && res.data.error) {
            error.message = res.data.error;
          }

          reject(error);
        });
    });
  };
};

export const Client = (options = {}) => {
  const config = ClientConfig({
    ...options,
  });
  const requestConfig = {
    baseURL: config["basePath"] || DEFAULTS.BASE_URL,
    timeout: config["timeout"],
  };
  const instance = axios.create(requestConfig);
  return {
    paramToString: paramToString,
    buildUrl: buildUrl,
    isJsonMime: isJsonMime,
    jsonPreferredMime: jsonPreferredMime,
    isFileParam: isFileParam,
    normalizeParams: normalizeParams,
    applyAuthToRequest: applyAuthToRequest,
    deserialize: deserialize,
    callApi: callApi(config, instance),
    parseDate: parseDate,
    convertToType: convertToType,
    constructFromObject: constructFromObject,
  };
};
