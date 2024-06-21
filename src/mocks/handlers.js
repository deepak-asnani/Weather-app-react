import { rest } from "msw";
import { AUTH_BASE_URL, REGISTER_USER_API } from "../constants";

export const handlers = [
  rest.get(`${AUTH_BASE_URL}${REGISTER_USER_API}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 4,
        token: "QpwL5tke4Pnpja7X4",
      })
    );
  }),
];
