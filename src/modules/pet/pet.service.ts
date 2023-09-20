import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { PetDto } from './pet.dto';

@Injectable()
export class PetService {
    constructor(private prisma: PrismaService) {}
    async create(data: PetDto) {
        const petExists = await this.prisma.pet.findFirst({
            where: {
                id_dono: data.id_dono,
                nome: data.nome
            }
        })
        if(petExists) {
            throw new Error("Pet Ja Existe");
        }
        const pet = await this.prisma.pet.create({
            data
        })

        return pet
    }

    async getById(id: string) {
        const pet = await this.prisma.pet.findUnique({
            where: {
                id
            }
        });

        return pet;
    }

    async getAll(){
        const pet = await this.prisma.pet.findMany()
        return pet
    }
    

    async deleteById(id: string) {
        const pet = await this.prisma.pet.delete({
            where: {
                id
            }
        })
        return pet
    }

    async update(id: string, data: PetDto) {
        const petExiste = await this.prisma.pet.findUnique({
            where: {
                id
            }
        });

        if(!petExiste) throw new Error("Pet não existe")

        const att = await this.prisma.pet.update({
            data,
            where: {
                id
            }
        })
        return att
    }
}
