import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SearchService } from '../../service/search/search.service';
import * as _ from 'lodash';
@Component({
  selector: 'lib-ey-onest',
  templateUrl: './ey-onest.component.html',
  styleUrls: ['./ey-onest.component.css']
})
export class SbOnestComponent implements OnInit {
  @ViewChild('searchbar') searchbar!: ElementRef
  searchText = '';
  searchQuery = '';
  baseUrl = '';
  toggleSearch: boolean = false;
  formInit: boolean = true;
  isContentInit: boolean = false;
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
  // onBAPSearchCall() {
  //   this.searchContentList = [];
  //   this.loading = true;
  //   this.http.get('http://localhost:3004/bap/search?keyword=' + this.searchQuery).subscribe((res: any) => {
  //     this.searchContext = res.data.context;
  //     this.searchMessage = res.data.message;
  //     let itemsList = res.data.responses[0].message.catalog.providers[0].items;
  //     console.log('itemsList', itemsList);
  //     if (itemsList) {
  //       itemsList.map((contentRes: any) => {
  //         let mimeType = _.find(contentRes?.tags[0]?.list, (o: any)  => { return o.descriptor.name == "MimeType"; })['value']
  //         let content = {
  //           identifier: contentRes?.descriptor?.id,
  //           title: contentRes?.descriptor?.name,
  //           subTitle: contentRes?.category_id,
  //           img: contentRes?.descriptor?.images[0]?.url,
  //           price: contentRes.price.currency + ' : ' + contentRes.price.value,
  //           itemId: contentRes?.id,
  //           artifactUrl: contentRes?.descriptor?.media,
  //           mimeType
  //         }
  //         this.searchContentList.push(content);
  //       })
  //       this.loading = false;
  //     }

  //   }, (error) => {
  //     console.log(error);
  //     this.loading = false;

  //   }
  //   );
  // }
  onBAPSearchCall() {
    let itemsList;
    let providerName ='';
    this.searchContentList = [];
    this.loading = true;
    this.http.get('https://staging.sunbirded.org/onest/bap/search?keyword=' + this.searchQuery).subscribe((res: any) => {
      itemsList = res.data.filter((resData:any) => resData?.message?.catalog?.providers[0].id === "sunbird-ed-bpp")
      this.searchContext = res?.data?.context;
      this.searchMessage = res?.data?.message;
      if (itemsList?.length || itemsList !== undefined) {
        providerName = itemsList[0]?.message?.catalog?.providers[0]?.id;
        itemsList = itemsList[0]?.message?.catalog?.providers[0]?.items;
        console.log('provider:' , providerName);
        itemsList.map((contentRes: any) => {
          let mimeType = _.find(contentRes?.tags[0]?.list, (o: any)  => { return o.descriptor?.name == "mimeType"; })['value']
          let content = {
            identifier: contentRes?.id,
            title: contentRes?.descriptor?.name,
            subTitle: contentRes?.descriptor?.sort_desc,
            img: contentRes?.descriptor?.images[0]?.url,
            price: contentRes.price.currency + ' : ' + contentRes.price.value,
            itemId: contentRes?.id,
            artifactUrl: contentRes?.descriptor?.media,
            mimeType,
            provider:providerName,
            tag:contentRes?.tags[0]?.list
          }
          this.searchContentList.push(content);
        })
        this.loading = false;
      }
      else {
        this.loading = false;
     //   this.onestSnackBar.open('No Provider found !!!','Close', {
        //   duration: 2000, 
        // });
      
      }

    }, (error) => {
      console.log(error);
      this.loading = false; 

    }
    );
  }
  // onBAPInitCall(cardData: any) {
  //   let resBody = {
  //     //sample
  //     bppUri: 'https://bpp.dsep.samagra.io',
  //     itemId: cardData.itemId,
  //     fulfillmentId: this.searchContext.bpp_uri
  //   }
  //   this.searchContentList = [];
  //   this.loading = true;
  //   this.http.post('http://localhost:3004/bap/init', resBody).subscribe((res: any) => {
  //     console.log('resData', res.data.responses[0].message.catalog.providers[0].items);
  //     let itemsList = res.data.responses[0].message.catalog.providers[0].items;
  //     console.log('itemsList', itemsList);
  //     if (itemsList) {

  //       this.loading = false;
  //     }

  //   }, (error) => {
  //     console.log(error);
  //     this.loading = false;

  //   }
  //   );
  // }

  openForm(cardList: any) {
    // this.onBAPInitCall(cardList);
    this.selCardData = cardList;
    console.log(cardList, 'test');
     this.formInit = true;
    this.isContentInit = false;
  }
  exitFormPage() {
     this.formInit = false;
    this.isContentInit = true;
  }

}


