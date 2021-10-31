// import { Connection, getRepository } from "typeorm";

// import { BaseRepository } from "./BaseRepository";
// import { IUserRepository } from "../Repository.Interface/IUserRepository";
// import { UserInsertRequest, Users, UserUpdateRequest } from "../../01. Models/User";


// export class UserRepository extends BaseRepository implements IUserRepository {

//   async create(user: UserInsertRequest): Promise<Users> {
//     const createdAt = '2021/10/20';
//     user.createdAt = createdAt;
//     return await getRepository(Users).save(user);
//   }
//   async getAll(): Promise<Users[]> {

//     const a: Users[] = await getRepository(Users).find().then((result) => {
//       return result;
//     }, (error) => {
//       return error;
//     });

//     return a;
//   }
//   async get(id: number): Promise<Users> {
//     return await getRepository(Users).findOne(id) || new Users();
//   }
//   async remove(id: number): Promise<void> {
//     let userToRemove = await getRepository(Users).findOne(id);
//     await getRepository(Users).remove(userToRemove!)
//   }
//   async update(user: UserUpdateRequest): Promise<Users> {
//     return await getRepository(Users).save(user);
//   }

// }
