class UserController {
  index(req, res){
    res.send("index...");
  }
}

module.exports = new UserController();
