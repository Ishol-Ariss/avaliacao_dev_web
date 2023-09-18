import { Controller } from '@nestjs/common';
import { DonoService } from './dono.service';

@Controller('dono')
export class DonoController {
  constructor(private readonly donoService: DonoService) {}
}
