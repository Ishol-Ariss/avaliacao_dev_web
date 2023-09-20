import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { DonoDTO } from './Dono.dto';

@Injectable()
export class DonoService {
    constructor(private prisma: PrismaService) {}
    async create(data: DonoDTO) {
        const donoExists = await this.prisma.dono.findFirst({
            where: {
                cpf: data.cpf,
            },
        })
        if(donoExists) {
            throw new Error("Dono Ja Existe");
        }
        const dono = await this.prisma.dono.create({
            data
        })

        return dono
    }

    async getByCpf(cpf: string) {
        const dono = await this.prisma.dono.findUnique({
            where: {
                cpf
            }
        });

        return dono;
    }

    async getAll(){
        const dono = await this.prisma.dono.findMany()
        return dono
    }
    

    async deleteByCpf(cpf: string) {
        const dono = await this.prisma.dono.delete({
            where: {
                cpf
            }
        })
        return dono
    }

    async update(cpf: string, data: DonoDTO) {
        const donoExiste = await this.prisma.dono.findUnique({
            where: {
                cpf
            }
        });

        if(!donoExiste) throw new Error("Dono não existe")

        const att = await this.prisma.dono.update({
            data,
            where: {
                cpf
            }
        })
        return att
    }
}
