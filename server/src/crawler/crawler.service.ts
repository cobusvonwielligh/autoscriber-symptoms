import { Injectable } from "@nestjs/common";
import { NestCrawlerService } from "nest-crawler";

@Injectable()
export class CrawlerService {
  constructor(private readonly crawler: NestCrawlerService) {}

  // scraping the specific page
  public async scrape(): Promise<String[]> {
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
      })

        let s = data.info.replaceAll('Back to top', '');
        let a = [];
        a = s.replace('Allergies', '').trim().split(/(?=[A-Z])/);
        a.push('Allergies');
        console.log('info formatted:', a)
    
      return a;
    
    //  replaceAll(/[^0-9a-z]/gi, '')

  }
}
