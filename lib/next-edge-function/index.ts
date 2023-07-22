import { CloudFrontRequestEvent, CloudFrontRequestResult, Handler } from "aws-lambda";

const handler: Handler<CloudFrontRequestEvent, CloudFrontRequestResult> = async (event, context, callback) => {
  const request = event.Records[0].cf.request;
  if (request.uri === '/item/1') {
    return {
      status: '301',
      headers: {
        location: [{
          key: 'Location',
          value: '/item/1.html',
        }],
      },
    };
  }

  callback(null, request);

  return;
};

exports.handler = handler;
