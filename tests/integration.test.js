const request = require("requisition");
const app = require('../src/app');
let server;

describe("web app", () => {
  beforeAll(async () => {
    server = app.listen('5000');
  });

  it("returns a response", async () => {
    const res = await request(`http://0.0.0.0:5000`);
    const body = await res.json();
    const { status, headers } = res;
    expect({ status, body, headers }).toMatchSnapshot();
  });

  afterAll(() => {
    server.close();
  });
});
