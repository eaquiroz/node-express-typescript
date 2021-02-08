import supertest from 'supertest';
import { app } from '../src/app';

describe('test app routes', () => {
  const requestData = { data: "JOHN0000MICHAEL0009994567" };
  it('v1 parse should return 200 & valid response', async done => {
    supertest(app)
      .post(`/api/v1/parse`)
      .send(requestData)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body).toMatchObject({ 'statusCode': 200, data: { firstName: 'JOHN0000', lastName: 'MICHAEL000', clientId: '9994567' } })
        done()
      })
  })
  it('v2 parse should return 200 & valid response', async done => {
    supertest(app)
      .post(`/api/v2/parse`)
      .send(requestData)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body).toMatchObject({ 'statusCode': 200, data: { firstName: 'JOHN', lastName: 'MICHAEL', clientId: '999-4567' } })
        done()
      })
  })
});

