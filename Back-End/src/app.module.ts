import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogModule } from './blog/blog.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    BlogModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'raja.db.elephantsql.com',
      username: 'olysrlev',
      password: 'U36A0g7EOJaHo_hpKFlMsKwgGthKiLeC',
      database: 'olysrlev',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
