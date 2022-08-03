import { Module } from "@nestjs/common";
import { NestCrawlerModule } from "nest-crawler";
import { CrawlerController } from "./crawler.controller";
import { CrawlerService } from "./crawler.service";
@Module({
  imports: [NestCrawlerModule],
  controllers: [CrawlerController],
  providers: [CrawlerService],
})
export class CrawlerModule {}
