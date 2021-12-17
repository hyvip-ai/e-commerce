function defaultController(req,res){
    res.status(200).send({
        api:"Running",
        authir:"Rajat",
        project:"Amazon Clone"
    })
}

export {
    defaultController
}