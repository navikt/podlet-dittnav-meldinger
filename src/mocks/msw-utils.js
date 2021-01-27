import { rest } from "msw";

export default function get(endpoint, response, statusCode) {
  return rest.get(endpoint, (req, res, ctx) => {
    return res(ctx.status(statusCode), ctx.json(response ? response : {}));
  });
}
