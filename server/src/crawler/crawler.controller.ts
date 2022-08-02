import { Controller, Get } from "@nestjs/common";
import { CrawlerService } from "./crawler.service";

@Controller()
export class CrawlerController {
  constructor(private readonly appCrawlerService: CrawlerService) {}

  @Get("/scan-text")
  scrape(): Promise<String[]> {
    return this.appCrawlerService.scrape().then((res) => res);
  }
}