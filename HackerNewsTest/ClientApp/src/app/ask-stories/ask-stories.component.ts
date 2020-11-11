import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ask-stories',
  templateUrl: './ask-stories.component.html',
  styleUrls: ['./ask-stories.component.css']
})
export class AskStoriesComponent implements OnInit {

  public askStory: StoryDto[];
  askNews: StoryDto[] = [] ;
  public progres = true;
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
     http.get<StoryDto[]>(baseUrl + 'hackernews' + '/ask-stories').subscribe(result => {
       this.askStory = result;
       this.askStory.forEach(element => {
        http.get<StoryDto>(baseUrl + 'hackernews/' + element).subscribe(results => {
          this.askNews.push({
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
     console.log(this.askNews);
  }

  ngOnInit() {
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