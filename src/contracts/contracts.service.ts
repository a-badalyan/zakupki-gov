import { Injectable } from '@nestjs/common';
// import { CreateContractDto } from './dto/create-contract.dto';
import { Repository } from 'typeorm';
import { Contract } from '@app/database/entities';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ContractsService {
  constructor(
    @InjectRepository(Contract)
    private contractRepository: Repository<Contract>,
  ) {}

  // create(createContractDto: CreateContractDto) {
  //   return 'This action adds a new contract';
  // }

  async findAll(): Promise<Array<Contract>> {
    return this.contractRepository.find();
  }

  async findOne(regNum: string): Promise<Contract | null> {
    return this.contractRepository.findOneBy({ regNum });
  }

  async remove(regNum: string): Promise<void> {
    await this.contractRepository.delete({ regNum });
  }
}
