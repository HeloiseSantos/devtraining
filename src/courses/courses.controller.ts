import { Controller, Get } from '@nestjs/common';

@Controller('courses') //Cria rota /courses
export class CoursesController {
    @Get('list') // Cria rota /courses/list
    findAll() {
        return 'Listagem de cursos';
    }
}
