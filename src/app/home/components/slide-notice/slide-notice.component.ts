import { Component, OnInit } from '@angular/core';
import { INews } from '../../interfaces/newsInterfaces';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-slide-notice',
  templateUrl: './slide-notice.component.html',
  styleUrls: ['./slide-notice.component.css']
})
export class SlideNoticeComponent implements OnInit {

  notices: INews[] = [];

  constructor(private newsSerivice: NewsService) { }

  ngOnInit(): void {
    if (this.newsSerivice.news.length != 0) {
      console.log('data ==> ',this.newsSerivice.news);
      this.notices = this.newsSerivice.news
    }

    // console.log(this.newsSerivice.news);
  }

  nextSlide () {

  }

  previouslySlide () {
    
  }

}
