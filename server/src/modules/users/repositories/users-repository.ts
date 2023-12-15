import { ICreateUserDTO } from '../../../adapters/user/create-user-dto.interface'
import { prisma } from '../../../prisma'
import { IUser } from '../model/User.interface'

import { IUsersRepository } from './users-repository.interface'

class UsersRepository implements IUsersRepository {
    private static INSTANCE: IUsersRepository

    public static getInstance(): IUsersRepository {
        if (!UsersRepository.INSTANCE) {
            UsersRepository.INSTANCE = new UsersRepository()
        }
        return UsersRepository.INSTANCE
    }

    async create({ email, username, password, role }: ICreateUserDTO): Promise<void> {
        try {
            await prisma.user.create({
                data: {
                    email,
                    username,
                    password,
                    role,
                },
            })
        } catch (error) {
            console.error(error)
            throw new Error(JSON.stringify(error, null, 2))
        }
    }

    async getByEmail(email: string): Promise<IUser | null> {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    email,
                },
            })

            return user
        } catch (error) {
            console.error(error)
            throw new Error(JSON.stringify(error, null, 2))
        }
    }
}

export { UsersRepository }