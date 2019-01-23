'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const faker = require('faker');
const mongoose = require('mongoose');

// this makes the expect syntax available throughout
// this module
const expect = chai.expect;

//should these be single . ?
const {Beers} = require('../beers/models');
const {app, runServer, closeServer} = require('../server');
const {TEST_DATABASE_URL} = require('../config');

chai.use(chaiHttp);

describe('Beers API Resource', function () {
    before(function() {
        return runServer(TEST_DATABASE_URL);
    });

    after(function() {
        return closeServer();
    });
})

describe ('GET endpoint', function (){
    //get request should return all existing beers 
    it ('should return all existing beers', function() {
        let res;
        return chai.request (app)
            .get('/beers')
            .then (function (_res) {
                res = _res;
                expect(res).to.have.status(200);
                expect(res.body.beers).to.have.length.of.at.least(1);
                // return Beers.count();
             })
            .then(function(count) {
                expect(res.body.beers).to.have.length.of(count);
             })
             .catch(err => {
                 console.log(err, null, 4);
             });
            });
});


