import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses') // Rota /courses
export class CoursesController {
    constructor(
        private readonly coursesService: CoursesService // Instância do service através de injeçãoo de dependência
    ) {

    }
    @Get('list') // Rota /courses/list
    findAll() {
        return this.coursesService.findAll();
    }

    @Get(':id') // Define o nome do parâmetro que quero pegar e indicar na rota
    findOne(
        @Param('id') id: string // Indica que haverá um recebimento de parâmetros e o tipo dele
    ) {
        return this.coursesService.findOne(id);
    }

    @Post()
    create(
        @Body() body // Indica corpo que conterá os dados enviados!
    ) {
        return this.coursesService.create(body);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() body
    ) {
        return this.coursesService.update(id, body);
    }

    @Delete(':id')
    remove(
        @Param('id') id: string
    ) {
        return this.coursesService.remove(id);
    }
}
