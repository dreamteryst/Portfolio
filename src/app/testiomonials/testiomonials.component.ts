import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testiomonials',
  templateUrl: './testiomonials.component.html',
  styleUrls: ['./testiomonials.component.css']
})
export class TestiomonialsComponent implements OnInit {

  private portfolio_path: string;
  private page: number;
  private totalPage: number;

  constructor() { }

  first() {
    this.page = 1;
  }

  last() {
    this.page = this.totalPage;
  }

  next() {
    if(this.page < this.totalPage) {
      this.page++;
    }
  }

  back() {
    if(this.page > 1) {
      this.page--;
    }
  }

  callBackFn(pdf: any) {
    this.totalPage = pdf.numPages;
  }

  ngOnInit() {
    this.page = 1;
    this.portfolio_path = 'assets/pdf/portfolio.pdf';
  }

}
