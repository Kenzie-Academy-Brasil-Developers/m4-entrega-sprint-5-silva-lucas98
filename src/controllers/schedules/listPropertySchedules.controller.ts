import { Request, Response } from "express";
import listPropertySchedulesService from "../../services/schedules/listPropetySchedules.service";

const listPropertySchedulesController = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  const schedules = await listPropertySchedulesService(id);

  return res.json({
    schedules
  });
}

export default listPropertySchedulesController;