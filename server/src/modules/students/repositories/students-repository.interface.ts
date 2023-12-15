import { ICreateStudentDTO } from '../../../adapters/student/create-student-dto.interface'
import { IStudent } from '../model/Student.interface'

export interface IStudentsRepository {
    create: (data: ICreateStudentDTO) => Promise<void>
    getById: (id: string) => Promise<IStudent | null>
    getByName: (name: string) => Promise<IStudent | null>
    list: () => Promise<IStudent[]>
    update: (data: IStudent) => Promise<void>
    delete: (id: string) => Promise<void>
}
