const fetch = require('isomorphic-fetch');
function getComments(req,res,next){
    const commentUrl = process.env.COMMENT_URL;

    fetch(`${commentUrl}${req.params.id}`)
    .then(fetchRes =>{
        return fetchRes.json()
    }).then(resJson=>{
    res.locals.comments = resJson;
    next() ;
}).catch(err=>{
    console.log(err);
    next();
});
}

module.exports = {
    getComments
};