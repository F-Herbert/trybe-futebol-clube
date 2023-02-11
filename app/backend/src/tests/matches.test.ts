import * as sinon from "sinon";
import * as chai from "chai";
// @ts-ignore
import chaiHttp = require("chai-http");

import { app } from "../app";
import { matchesMock } from './mocks/matches.Mock'
import Matche from "../database/models/Match.model";

chai.use(chaiHttp);

const { expect } = chai;

describe("Test da seção 3:Partidas", () => {
  describe("test da rota GET /matches", () => {
    it("retorna uma lista de partidas", async () => {
      sinon.stub(Matche, 'findAll').resolves(matchesMock as Matche[])
      const httpResponse = await chai
      .request(app)
      .get('/matches')

      expect(httpResponse.body).to.deep.equal(matchesMock);
      expect(httpResponse.status).to.equal(200);
    });
  });
});
