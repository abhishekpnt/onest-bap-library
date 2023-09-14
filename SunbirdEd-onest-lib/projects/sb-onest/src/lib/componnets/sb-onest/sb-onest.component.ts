import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SearchService } from '../../service/search/search.service';
import * as _ from 'lodash';
@Component({
  selector: 'lib-sb-onest',
  templateUrl: './sb-onest.component.html',
  styleUrls: ['./sb-onest.component.css']
})
export class SbOnestComponent implements OnInit {
  @ViewChild('searchbar') searchbar!: ElementRef
  searchText = '';
  searchQuery = '';
  baseUrl = '';
  toggleSearch: boolean = false;
  isPlayerInit: boolean = false;
  isContentInit: boolean = true;
  loading: boolean = false;
  selCardData: any;
  searchMessage: any;
  searchContext: any;
  // serachList;
  searchContentList: any[] = []
  constructor(private http: HttpClient, private searchService: SearchService) {

  }

  ngOnInit(): void {
    this.searchMessage = {};
    this.searchContext = {};
  }
  searchBasedQuery() {
    console.log('searchBasedQuery', this.searchQuery)
    this.onBAPSearchCall();
  }
  openSearch() {
    this.toggleSearch = true;
    this.searchbar.nativeElement.focus();
  }
  searchClose() {
    this.searchText = '';
    this.toggleSearch = false;
  }
  onClick($: any, data: any) {
    console.log($, data)

  }
  onBAPSearchCall() {
    this.searchContentList = [];
    this.loading = true;
    this.http.get('http://localhost:3004/bap/search?keyword=' + this.searchQuery).subscribe((res: any) => {
      this.searchContext = res.data.context;
      this.searchMessage = res.data.message;
      let itemsList = res.data.responses[0].message.catalog.providers[0].items;
      console.log('itemsList', itemsList);
      if (itemsList) {
        itemsList.map((contentRes: any) => {
          let mimeType = _.find(contentRes?.tags[0]?.list, (o: any)  => { return o.descriptor.name == "MimeType"; })['value']
          let content = {
            identifier: contentRes?.descriptor?.id,
            title: contentRes?.descriptor?.name,
            subTitle: contentRes?.category_id,
            img: contentRes?.descriptor?.images[0]?.url,
            price: contentRes.price.currency + ' : ' + contentRes.price.value,
            itemId: contentRes?.id,
            artifactUrl: contentRes?.descriptor?.media,
            mimeType
          }
          this.searchContentList.push(content);
        })
        this.loading = false;
      }

    }, (error) => {
      console.log(error);
      this.loading = false;

    }
    );
  }
  onBAPInitCall(cardData: any) {
    let resBody = {
      //sample
      bppUri: 'https://bpp.dsep.samagra.io',
      itemId: cardData.itemId,
      fulfillmentId: this.searchContext.bpp_uri
    }
    this.searchContentList = [];
    this.loading = true;
    this.http.post('http://localhost:3004/bap/init', resBody).subscribe((res: any) => {
      console.log('resData', res.data.responses[0].message.catalog.providers[0].items);
      let itemsList = res.data.responses[0].message.catalog.providers[0].items;
      console.log('itemsList', itemsList);
      if (itemsList) {

        this.loading = false;
      }

    }, (error) => {
      console.log(error);
      this.loading = false;

    }
    );
  }

  openPlayerPage(cardList: any) {
    // this.onBAPInitCall(cardList);
    this.selCardData = cardList;
    console.log(cardList, 'test');
    this.isPlayerInit = true;
    this.isContentInit = false;
  }
  exitPlayerPage() {
    this.isPlayerInit = false;
    this.isContentInit = true;
  }

}


