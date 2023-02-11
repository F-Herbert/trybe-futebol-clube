import * as sinon from "sinon";
import * as chai from "chai";
// @ts-ignore
import chaiHttp = require("chai-http");

import { app } from "../app";
import User from "../database/models/User.model";
import * as jwt from 'jsonwebtoken';
import { validUser,
  userWithoutEmail,
  userWithoutPassword 
} from "./mocks/userMock";

chai.use(chaiHttp);

const { expect } = chai;

describe("Test da seção 1: Usuários e login", () => {
  
  describe("POST / quanto a requisição é feita com sucesso", () => {
    it("deve retornar um status 200", async () => {
      sinon.stub(User, "findOne").resolves(validUser as User);
      sinon.stub(jwt, "sign").resolves("token");

      const httpResponse = await chai.request(app).post("/login").send({
        email: "admin@admin.com",
        password: "secret_admin",
      });

      expect(httpResponse.status).to.be.equal(200);
      expect(httpResponse.body).to.have.property("token");

      sinon.restore();
    });
  });
  describe("POST / quando a requisição falhar, deve retornar um status 401", () => {
    it('quando falta email', async ()=> {

      const httpResponse = await chai
        .request(app)
        .post("/login")
        .send(userWithoutEmail);

      expect(httpResponse.body).to.deep.equal(  { "message": "All fields must be filled" })
      expect(httpResponse.status).to.equal(400)
    })
    it('quando falta password', async ()=> {

      const httpResponse = await chai
        .request(app)
        .post("/login")
        .send(userWithoutPassword);

      expect(httpResponse.body).to.deep.equal(  { "message": "All fields must be filled" })
      expect(httpResponse.status).to.equal(400)
    })
  });
});
