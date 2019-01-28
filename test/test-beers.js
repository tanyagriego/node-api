'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
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
        return chai.request(app)
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
                //  console.log(err, null, 4);
             });
            });
});

describe('POST endpoint', function() {

    const newBeer = {
        beer_type: "IPA",
        display_name: "NWPA",
        brewer_name: "Deschutes Brewery",
        on_draft: true     
    };

    it ('should add a new beer', function () {
        return chai.request(app)
        .post('/beers')
        .send(newBeer)
        .then(function(res) {
            expect(res).to.be.json;
            expect(res).to.have.status(201);
            expect(res.body).to.include.keys(
               'beer_type', 'display_name', 'brewer_name', 'on_draft');
            expect(res.body.id).to.not.be.null;
            // expect(res.body.beer_type).to.equal(newBeer.beer_type);
        })
        .catch(err => {
            console.log("error found in POST endpoint")
        });

    });
});

describe ('PUT endpoint', function() {

    it('should return an updated beer', function () {
        const updatedBeerData = {
            beer_type: "Blone Ale",
            display_name: "Meteor Shower",
            brewer_name: "Ghostfish",
            on_draft: false
        }
    });
        return Beers
        .findOne()
        .then(beer => {
            updatedBeerData.id = beer.id;
        
        return chai.request(app)
        .put('/beers/')
        .send(updatedBeerData)
        })
        .then (res => {
            res.should.have.status(204);
            return Beers.findById(updatedBeerData.id);
        })
        .catch(err => {
            console.log("error found in PUT endpoint")
        });
    });

describe ('DELETE endpoint', function() {
    it('should delete a beer by id', function (){
    let beer;
});

    return Beers
    .findOne()
    .then(_beer => {
        beer = _beer;
        return chai.request(app).delete(`/beers/${beer.id}`);
    })
    .then(res => {
        res.should.have.status(204);
        return Beers.findById(beer.id);
    })
    .then(_beer => {
        should.not.exist(_beer);
    })
    .catch(err => {
        //  console.log(err, null, 4);
     });
});