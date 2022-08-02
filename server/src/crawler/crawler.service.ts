import { Injectable } from "@nestjs/common";
import { NestCrawlerService } from "nest-crawler";

@Injectable()
export class CrawlerService {
  constructor(private readonly crawler: NestCrawlerService) {}

  // scraping the specific page
  public async scrape(): Promise<void> {
    interface IWebData {
      title: string;
      info: string;
      content: string;
    }

    const data: IWebData = await this.crawler.fetch({
        target: "https://www.nhsinform.scot/symptoms-and-self-help/a-to-z/",
        fetch: {
          title: "h1",
          info: {
            selector: "main > div > div > div > div > div > ul > li",
          },
        },
      });
  
      console.log('data:', data);
      console.log('info:', data.info.replaceAll("\\s+","").trim().replace('Back to top', ''))

  }
}
