import { Controller, Get, Param } from '@nestjs/common';

@Controller('courses') //Cria rota /courses
export class CoursesController {
    @Get('list') // Cria rota /courses/list
    findAll() {
        return 'Listagem de cursos';
    }

    @Get(':id') // Define o nome do parâmetro que quero pegar e indicar na rota
    findOne(
        @Param('id') id: string // Indica que haverá um recebimento de parâmetros e o tipo dele
    ) {
        return `Curso #${id}`; // Parâmetro definido no método Get
    }
}
