let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should =  chai.should();

chai.use(chaiHttp);

describe('/ GET',()=>{
    it('should GET hello', done =>{
        chai.request(server)
        .get('/')
        .end((err,res)=>{
            res.should.have.status(200);
            console.log(res);
            res.text.should.eq('hello');
            done();
        })
    })
})