import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';

@Controller('courses') // Rota /courses
export class CoursesController {
    @Get('list') // Rota /courses/list
    findAll(
        @Res() response
    ) {
        return response.status(200).send('Listagem de cursos');
    }

    @Get(':id') // Define o nome do parâmetro que quero pegar e indicar na rota
    findOne(
        @Param('id') id: string // Indica que haverá um recebimento de parâmetros e o tipo dele
    ) {
        return `Curso #${id}`; // Parâmetro definido no método Get
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT) // Força o método para retornar 204 ao invés de 201 na requisição
    create(
        @Body() body // Indica corpo que conterá os dados enviados!
    ) {
        return body;
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() body
    ) {
        return `Atualização do curso #${id}`;
    }

    @Delete(':id')
    remove(
        @Param('id') id: string
    ) {
        return `Exclusão do curso #${id}`;
    }
}
