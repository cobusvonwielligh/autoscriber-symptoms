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

        //TODO: static string manipulation (bad practice -> needs improvement)
        //Note: replaceAll() only available in es2021 compiler
        let s = data.info.replaceAll('Back to top', ''); 
        let a = [];
      
        s = s.replaceAll(/[^a-z]/gi, '');
        a = s.split(/(?=[A-Z])/);
        console.log('info formatted:', a)
    
      return a;
    
    //  replaceAll(/[^0-9a-z]/gi, '')

  }
}
