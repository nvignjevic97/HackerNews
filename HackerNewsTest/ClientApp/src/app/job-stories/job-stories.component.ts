import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-stories',
  templateUrl: './job-stories.component.html',
  styleUrls: ['./job-stories.component.css']
})
export class JobStoriesComponent implements OnInit {

  public jobStory: StoryDto[];
  jobNews: StoryDto[] = [] ;
  public progres = true;
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
     http.get<StoryDto[]>(baseUrl + 'hackernews' + '/job-stories').subscribe(result => {
       this.jobStory = result;
       this.jobStory.forEach(element => {
        http.get<StoryDto>(baseUrl + 'hackernews/' + element).subscribe(results => {
          this.jobNews.push({
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
     console.log(this.jobNews);
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