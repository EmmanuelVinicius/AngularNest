import { BlogModule } from './../../Front-End/src/app/blog/blog.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    BlogModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
