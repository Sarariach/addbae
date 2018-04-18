import {JsonController, Get, Param, Put, Post, Body, HttpCode, NotFoundError} from 'routing-controllers'
import Add from './entity'

@JsonController()
export default class AddController {

@Get('/adds/:id')
getAdd(
    @Param('id') id: number
) {
  return Add.findOneById(id)
}
@Get('/adds')
async allAdds() {
  const adds = await Add.find()
  return { adds }
}
@Put('/adds/:id')
async updateAdd(
    @Param('id') id: number,
    @Body() update: Partial<Add>
) {
    const add = await Add.findOneById(id)
    if (!add) throw new NotFoundError('Cannot find add')
        return Add.merge(add, update).save()
    }

@Post('/adds')
@HttpCode(201)
createPage(
    @Body() add: Add
){
    return add.save()
}
    
}
