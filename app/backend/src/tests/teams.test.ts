import * as sinon from "sinon";
import * as chai from "chai";
// @ts-ignore
import chaiHttp = require("chai-http");

import { app } from "../app";
import Team from "../database/models/Team.model";
import { mockTeams,mockTeam } from "./mocks/teams.Mock";

chai.use(chaiHttp);

const { expect } = chai;

describe('Test da seção 2: Horários',()=>{
  describe('testa a rota GET /teams',()=> {
    it('retorna todos os times', async ()=>{
    sinon.stub(Team, 'findAll').resolves(mockTeams as Team[])

      const httpResponse = await chai
        .request(app).get('/teams')
      
      expect(httpResponse.body).to.deep.equal(mockTeams)
      expect(httpResponse.status).to.equal(200);
    })

    it('retorna time específico', async ()=>{
      sinon.stub(Team, 'findOne').resolves(mockTeam as Team)

      const httpResponse = await chai
        .request(app).get('/teams/:id').send(mockTeam)
      
      expect(httpResponse.body).to.deep.equal(mockTeam)
      expect(httpResponse.status).to.equal(200);
    })
  })
})