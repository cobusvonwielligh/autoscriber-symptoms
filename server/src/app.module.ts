import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { CrawlerController } from "./crawler/crawler.controller";
import { NestCrawlerModule } from "nest-crawler";
import { AppService } from "./app.service";
import { CrawlerModule } from "./crawler/crawler.module";
import { CrawlerService } from "./crawler/crawler.service";

@Module({
  imports: [NestCrawlerModule, CrawlerModule],
  controllers: [AppController, CrawlerController],
  providers: [AppService, CrawlerService],
})
export class AppModule {}
