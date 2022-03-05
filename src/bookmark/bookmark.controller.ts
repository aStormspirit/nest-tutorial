import { Controller, Get, Patch, Post, Delete, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { BookmarkService } from './bookmark.service'

@UseGuards(JwtGuard)
@Controller('bookmark')
export class BookmarkController {
    constructor(private BookmarkService){}

    @Get()
    getBookmark() {}

    @Post()
    createBookmark() {}

    @Get()
    getBookmarkById() {}

    @Patch()
    editBookmarkById() {}

    @Delete()
    deleteBookmarkById(){}
}
