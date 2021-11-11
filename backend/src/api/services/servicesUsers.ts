import { insertOne } from '../models/index';
import { User } from './class';


async function insertUser(user: User) {
  try {
    const newUser: any = await insertOne('users', user);
    return newUser;
    
  } catch (error) {
    console.log(error)
    return { message: 'erro ao conectar ao DB' }
  }
}

export { insertUser };
