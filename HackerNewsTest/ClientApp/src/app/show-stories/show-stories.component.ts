import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-stories',
  templateUrl: './show-stories.component.html',
  styleUrls: ['./show-stories.component.css']
})
export class ShowStoriesComponent implements OnInit {

  public showStory: StoryDto[];
  showNews: StoryDto[] = [] ;
  public progres = true;
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
     http.get<StoryDto[]>(baseUrl + 'hackernews' + '/ask-stories').subscribe(result => {
       this.showStory = result;
       this.showStory.forEach(element => {
        http.get<StoryDto>(baseUrl + 'hackernews/' + element).subscribe(results => {
          this.showNews.push({
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
     console.log(this.showNews);
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