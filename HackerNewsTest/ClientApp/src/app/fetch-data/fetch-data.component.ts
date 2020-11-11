import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public story: StoryDto[];
  public progres = true;
  news: StoryDto[] = [] ;
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
     http.get<StoryDto[]>(baseUrl + 'hackernews').subscribe(result => {
       this.story = result;
       this.story.forEach(element => {
        http.get<StoryDto>(baseUrl + 'hackernews/' + element).subscribe(results => {
          this.news.push({
            by: results.by,
            descendants: results.descendants,
            id: results.id,
            kids: results.kids,
            score: results.score,
            time: results.time,
            title: results.title,
            type: results.type,
            url: results.url
          });
          this.progres = false;
        }, error => console.error(error));
       });
     }, error => console.error(error));
     console.log(this.news);
  }

}

interface StoryDto {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: LinkStyle;
}