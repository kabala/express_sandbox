import mongoose from "mongoose";

const Team = mongoose.Model('Team');

function list (req, res) {
  Team.find({}, (err, teams) => {
    res.json(teams);
  });
}

function update (req, res) {
  let team = new Team (req.body);
  Team.update(
    {_id: team.id},
    {votes: team.votes},
    function (err, numberAffected, raw) {
      let socketIO = global.socketIO;
      socketIO.sockets.emit('team: updated', team);
      res.json(true);
    });
}

export {list, update};