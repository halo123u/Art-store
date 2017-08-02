const fetch = require('isomorphic-fetch');
function getComments(req,res,next){
    console.log(`hello this is me trying to get the comments`);
    console.log(req.params.id);
fetch(`http://localhost:3000/search/comments/${req.params.id}`)
.then(fetchRes =>{
    // console.log(fetchRes);
    return fetchRes.json()
}).then(resJson=>{
    console.log(resJson);
    console.log('this is the title');
    console.log(resJson[0].title);

    res.locals.comments = resJson;
    console.log(res.locals.comments);
    next() ;
}).catch(err=>{
    console.log(err);
    next();
});
}

module.exports = {
    getComments
};