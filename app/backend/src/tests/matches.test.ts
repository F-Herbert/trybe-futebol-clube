import * as sinon from "sinon";
import * as chai from "chai";
// @ts-ignore
import chaiHttp = require("chai-http");

import { app } from "../app";
import {
  allMatchesInProgress,
  matchesMock,
  allMatchesFinish,
  saveMatch,
  mockToken,
} from "./mocks/matches.Mock";
import Matche from "../database/models/Match.model";
import { query } from "express";

chai.use(chaiHttp);

const { expect } = chai;

afterEach(sinon.restore);

describe("Test da seção 3:Partidas", () => {
  describe("test da rota GET /matches", () => {
    it("retorna uma lista de partidas", async () => {
      sinon.stub(Matche, "findAll").resolves(matchesMock as Matche[]);
      const httpResponse = await chai.request(app).get("/matches");

      expect(httpResponse.body).to.deep.equal(matchesMock);
      expect(httpResponse.status).to.equal(200);
    });
    it("retorna uma lista de partidas com filtro true", async () => {
      sinon
        .stub(Matche, "findAll")
        .resolves(allMatchesInProgress as unknown as Matche[]);
      const httpResponse = await chai
        .request(app)
        .get("/matches")
        .query({ inProgress: true });

      allMatchesInProgress.map((team) => {
        expect(team.inProgress).to.equal(1);
        expect(httpResponse.status).to.equal(200);
      });
    });
    it("retorna uma lista de partidas com filtro false", async () => {
      sinon
        .stub(Matche, "findAll")
        .resolves(allMatchesFinish as unknown as Matche[]);
      const httpResponse = await chai
        .request(app)
        .get("/matches")
        .query({ inProgress: false });

      allMatchesFinish.map((team) => {
        expect(team.in_progress).to.equal(0);
        expect(httpResponse.status).to.equal(200);
      });
    });
    describe("Test da rota POST /matches", () => {
      it("verifica se é possível salvar uma partida com status inProgress: true", async () => {
        sinon.stub(Matche, "create").resolves(saveMatch as unknown as Matche);
        const httpResponse = await chai
          .request(app)
          .post("/matches")
          .set("authorization", mockToken.replace(/'/g, ""))
          .send(saveMatch);

        expect(app.request).to.have.header;
        expect(httpResponse.status).to.equal(201);
      });
    });
  });
});
