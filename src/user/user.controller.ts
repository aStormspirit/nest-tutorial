import { Controller, Get, Patch, UseGuards, Body } from '@nestjs/common';
import {JwtGuard} from '../auth/guard'
import { GetUser } from '../auth/decorator'
import {User} from '@prisma/client'
import { EditUserDto } from './dto/edit-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}
    @UseGuards(JwtGuard)
    @Get('me')
    getMe(@GetUser() user: User){
        return user;
    }

    @UseGuards(JwtGuard)
    @Patch()
    editUser(@GetUser('id') user: User, @Body() dto: EditUserDto,){
        console.log(user)
        return this.userService.editUser(user.id, dto);
    }
}
