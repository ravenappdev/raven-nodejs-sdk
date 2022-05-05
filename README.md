# Raven Api

RavenApi - JavaScript client for raven_api
This is OpenAPI defintion for the APIs of Raven. You can find out more about Raven at [https://ravenapp.dev/](https://ravenapp.dev/).
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install raven_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your raven_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('raven_api')` in javascript files from the directory you ran the last
command above from.

#### git

#

If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/raven_api
then install it via:

```shell
    npm install YOUR_USERNAME/raven_api --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming _main.js_ is your entry file, that's to say your javascript file where you actually
use this library):

```shell
browserify main.js > bundle.js
```

Then include _bundle.js_ in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false,
      },
    },
  ];
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var RavenApi = require("raven_api");

var defaultClient = RavenApi.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];
ApiKeyAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix['Authorization'] = "Token"

var api = new RavenApi.EventApi();

var appId = "appId_example"; // {String} app id of raven app

var event = new RavenApi.SendEventBulk(); // {SendEventBulk} the body for the event that has to be triggered

var callback = function (error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: " + data);
  }
};
api.sendBulkEvent(appId, event, callback);
```

## Documentation for API Endpoints

All URIs are relative to *https://api.ravenapp.dev*

| Class               | Method                                              | HTTP request                                | Description                                          |
| ------------------- | --------------------------------------------------- | ------------------------------------------- | ---------------------------------------------------- |
| _RavenApi.EventApi_ | [**sendBulkEvent**](docs/EventApi.md#sendBulkEvent) | **POST** /v1/apps/{app_id}/events/bulk_send | sends the event in bulk to all the clients specified |
| _RavenApi.EventApi_ | [**sendEvent**](docs/EventApi.md#sendEvent)         | **POST** /v1/apps/{app_id}/events/send      | sends the event to the client specified              |

## Documentation for Models

- [RavenApi.Attachments](docs/Attachments.md)
- [RavenApi.Data](docs/Data.md)
- [RavenApi.EmailOverride](docs/EmailOverride.md)
- [RavenApi.EmailRecipient](docs/EmailRecipient.md)
- [RavenApi.ErrorResponse](docs/ErrorResponse.md)
- [RavenApi.EventOverride](docs/EventOverride.md)
- [RavenApi.Param](docs/Param.md)
- [RavenApi.ProviderOverride](docs/ProviderOverride.md)
- [RavenApi.PushOverride](docs/PushOverride.md)
- [RavenApi.Response](docs/Response.md)
- [RavenApi.SendEvent](docs/SendEvent.md)
- [RavenApi.SendEventBulk](docs/SendEventBulk.md)
- [RavenApi.SlackOverride](docs/SlackOverride.md)
- [RavenApi.SlackProfile](docs/SlackProfile.md)
- [RavenApi.SmsOverride](docs/SmsOverride.md)
- [RavenApi.SuccessResponse](docs/SuccessResponse.md)
- [RavenApi.User](docs/User.md)
- [RavenApi.VoiceOverride](docs/VoiceOverride.md)
- [RavenApi.WebhookOverride](docs/WebhookOverride.md)
- [RavenApi.WhatsappOverride](docs/WhatsappOverride.md)

## Documentation for Authorization

### ApiKeyAuth

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header
