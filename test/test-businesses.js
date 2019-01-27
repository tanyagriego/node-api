'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
// this makes the expect syntax available throughout
// this module
const expect = chai.expect;

//should these be single . ?
const {Businesses} = require('../businesses/models');
const {app, runServer, closeServer} = require('../server');
const {TEST_DATABASE_URL} = require('../config');

chai.use(chaiHttp);

describe('Businesses API Resource', function () {
    before(function() {
        return runServer(TEST_DATABASE_URL);
    });

    after(function() {
        return closeServer();
    });
})

describe ('GET endpoint', function (){
    //get request should return all existing businesses 
    it ('should return all existing businesses', function() {
        let res;
        return chai.request(app)
            .get('/businesses')
            .then (function (_res) {
                res = _res;
                expect(res).to.have.status(200);
                expect(res.body.businesses).to.have.length.of.at.least(1);
                // return businesses.count();
             })
            .then(function(count) {
                expect(res.body.businesses).to.have.length.of(count);
             })
             .catch(err => {
                //  console.log(err, null, 4);
             });
            });
});

describe('POST endpoint', function() {

    const newBusiness = {
        business_name: "Deschutes Brewery",
        business_webiste: "www.deschutesbrewery.com",
        hours_open: "10am",
        hours_close: "11pm"     
    };

    it ('should add a new business', function () {
        return chai.request(app)
        .post('/businesses')
        .send(newBusiness)
        .then(function(res) {
            expect(res).to.be.json;
            expect(res).to.have.status(201);
            expect(res.body).to.include.keys(
               'business_name', 'business_webiste', 'hours_open', 'hours_close');
            expect(res.body.id).to.not.be.null;
            // expect(res.body.business_name).to.equal(newBusiness.business_name);
        })
        .catch(err => {
            console.log("error found in POST endpoint")
        });

    });
});
