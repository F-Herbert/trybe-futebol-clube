import * as sinon from "sinon";
import * as chai from "chai";
// @ts-ignore
import chaiHttp = require("chai-http");

import { app } from "../app";
import User from "../database/models/User.model";
import * as jwt from 'jsonwebtoken';

chai.use(chaiHttp);

const { expect } = chai;

const userMock = {
  id: 1,
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
  // password: secret_admin
};

describe("test de cobertura 5% dos arquivos back-end mínimo 7 linhas cobertas", () => {
  describe("POST / quanto a requisição é feita com sucesso", async () => {
    it("deve retornar um status 200", async () => {
      sinon.stub(User, "findOne").resolves(userMock as User);
      sinon.stub(jwt, "sign").resolves("token");

      const httpResponse = await chai.request(app).post("/login").send({
        email: "admin@admin.com",
        password: "secret_admin",
      });

      expect(httpResponse.status).to.be.equal(200);
      expect(httpResponse.body).to.have.property("token");
    });
  });
  // describe("POST / quando a requisição falha", () => {
  //   it('deve retornar um status 401', async ()=> {

  //     sinon.stub(User, "findOne").resolves(null);

  //     const httpResponse = await chai
  //       .request(app)
  //       .post("/login")
  //       .send(USERMOCHA);

  //     expect(httpResponse.body).to.deep.equal(  { "message": "All fields must be filled" })
  //     expect(httpResponse.status).to.equal(401)
  //   })
  // });
});
