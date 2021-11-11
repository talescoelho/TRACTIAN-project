import { insertUser } from '../services/servicesUsers';
import { User } from '../services/class';
import { Request, Response } from "express";
import { ObjectId } from "mongodb";

async function insertOneUser(req: Request, res: Response) {
  try {
    const newUser = req.body as User;
    const result = await insertUser(newUser);
    return res.status(200).json({ newUser: result });
  } catch (error) {
    console.log(error)
    return res.status(400).json({ message: 'erro ao conectar ao DB' });
  }
}

export { insertOneUser };
