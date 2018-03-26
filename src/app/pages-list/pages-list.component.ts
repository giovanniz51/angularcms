import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'pages-list',
  templateUrl: './pages-list.component.html',
  styleUrls: ['./pages-list.component.css']
})
export class PagesListComponent implements OnInit {
  
  pages: {};

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    //this.pagesObservable = this.getPages('/pages');
    this.getPages('/pages')
      .subscribe(
        (pages) => { this.pages = pages; }
      );
  }
  
  getPages(listPages): Observable<any[]> {
    return this.db.list(listPages).valueChanges();
  }

}
