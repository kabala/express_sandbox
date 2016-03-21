export function (app) {
  const teams = import('../controllers/team.js');
  app.get('/teams', teams.list);
  app.put('teams/:id', teams.update);
}