import { db } from '../models';
var Manager = db.models.Manager;

function index(req, res) {
	Manager.findAll().then(function(managers) {
		res.json(managers);
	});
}

const managersController = <any>{};
managersController.index = index;

export {managersController};