import { Component, OnInit } from '@angular/core';
import { INews } from '../../interfaces/newsInterfaces';
import { NewsService } from '../../services/news.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-slide-notice',
  templateUrl: './slide-notice.component.html',
  styleUrls: ['./slide-notice.component.css']
})
export class SlideNoticeComponent implements OnInit {

  notices: INews[] = [];
  products: any[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit():void {
    this.loadData();
  }
  
  async loadData () {
    // this setTimeOut is for example 
    setTimeout(async () => {
      await this.newsService.getAllNews();
      this.notices = this.newsService.news;
    },1000);
  }

}
