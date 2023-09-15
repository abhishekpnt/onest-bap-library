import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SearchService } from '../../service/search/search.service';
import * as _ from 'lodash';
@Component({
  selector: 'lib-ny-onest',
  templateUrl: './ny-onest.component.html',
  styleUrls: ['./ny-onest.component.css']
})
export class EyOnestComponent implements OnInit {
  @ViewChild('searchbar') searchbar!: ElementRef
  searchText = '';
  searchQuery = '';
  baseUrl = '';
  toggleSearch: boolean = false;
  formInit: boolean = false;
  isContentInit: boolean = true;
  loading: boolean = false;
  selCardData: any;
  searchMessage: any;
  searchContext: any;
  // serachList;
  searchContentList: any[] = []
  response:any;
data={
  "context": {
      "action": "on_search",
      "domain": "onest:financial-support",
      "location": {
          "country": {
              "code": "IND"
          }
      },
      "bpp_id": "pilot.vidyasaarathi.co.in",
      "bpp_uri": "pilot.vidyasaarathi.co.in/path/to/your/api",
      "bap_id": "nammayatri.in",
      "bap_uri": "nammayatri.in/api/url",
      "transaction_id": "whatever txn id namma yatri sent",
      "message_id": "whatever msg id namma yatri sent"
  },
  "message": {
      "catalog": {
          "providers": [
              {
                  "id": "287363847",
                  "descriptor": {
                      "name": "JSW Foundation",
                      "code": "jsw.in",
                      "images": [
                          {
                              "url": "https://media.istockphoto.com/id/1220289026/vector/student-loan-color-icon-credit-to-pay-for-university-education-tuition-fee-college.jpg?s=1024x1024&w=is&k=20&c=j1CMGb4h9nqf9y8X0rRoVO1hFO6N3jE_6omwU3NxKt8=",
                              "size": "sm"
                          }
                      ]
                  },
                  "items": [
                      {
                          "id": "827890",
                          "descriptor": {
                              "name": "Summer Fund for Bsc student April 2022"
                          },
                          "price": {
                              "value": "1000 INR for one year"
                          }
                      }
                  ],
                  "fulfillments": [
                      {
                          "stops": [
                              {
                                  "type": "end",
                                  "time": {
                                      "timestamp": "2023-12-21 00:00:00"
                                  }
                              }
                          ]
                      }
                  ]
              },
              {
                  "id": "287363848",
                  "descriptor": {
                      "name": "Tata Foundation",
                      "code": "tata.in",
                      "images": [
                          {
                              "url": "https://media.istockphoto.com/id/1220289026/vector/student-loan-color-icon-credit-to-pay-for-university-education-tuition-fee-college.jpg?s=1024x1024&w=is&k=20&c=j1CMGb4h9nqf9y8X0rRoVO1hFO6N3jE_6omwU3NxKt8=",
                              "size": "sm"
                          }
                      ]
                  },
                  "items": [
                      {
                          "id": "827890",
                          "descriptor": {
                              "name": "Summer Fund for BA student April 2022"
                          },
                          "price": {
                              "value": "10000 INR for one year"
                          }
                      }
                  ],
                  "fulfillments": [
                      {
                          "stops": [
                              {
                                  "type": "end",
                                  "time": {
                                      "timestamp": "2023-12-21 00:00:00"
                                  }
                              }
                          ]
                      }
                  ]
              },
              {
                  "id": "287363848",
                  "descriptor": {
                      "name": "Jindal Foundation",
                      "code": "jindal.in",
                      "images": [
                          {
                              "url": "https://media.istockphoto.com/id/1220289026/vector/student-loan-color-icon-credit-to-pay-for-university-education-tuition-fee-college.jpg?s=1024x1024&w=is&k=20&c=j1CMGb4h9nqf9y8X0rRoVO1hFO6N3jE_6omwU3NxKt8=",
                              "size": "sm"
                          }
                      ]
                  },
                  "items": [
                      {
                          "id": "827890",
                          "descriptor": {
                              "name": "Metric scholarship"
                          },
                          "price": {
                              "value": "1000 INR per month for one year"
                          }
                      }
                  ],
                  "fulfillments": [
                      {
                          "stops": [
                              {
                                  "type": "end",
                                  "time": {
                                      "timestamp": "2023-12-21 00:00:00"
                                  }
                              }
                          ]
                      }
                  ]
              },
              {
                  "id": "287363841",
                  "descriptor": {
                      "name": "Tesla Foundation",
                      "code": "tesla.in",
                      "images": [
                          {
                              "url": "https://media.istockphoto.com/id/1220289026/vector/student-loan-color-icon-credit-to-pay-for-university-education-tuition-fee-college.jpg?s=1024x1024&w=is&k=20&c=j1CMGb4h9nqf9y8X0rRoVO1hFO6N3jE_6omwU3NxKt8=",
                              "size": "sm"
                          }
                      ]
                  },
                  "items": [
                      {
                          "id": "827890",
                          "descriptor": {
                              "name": "Winter scholarship for engineering students"
                          },
                          "price": {
                              "value": "5000 per year"
                          }
                      }
                  ],
                  "fulfillments": [
                      {
                          "stops": [
                              {
                                  "type": "end",
                                  "time": {
                                      "timestamp": "2023-12-21 00:00:00"
                                  }
                              }
                          ]
                      }
                  ]
              }
          ]
      }
  }
}

  constructor(private http: HttpClient, private searchService: SearchService) {

  }

  ngOnInit(): void {
    // this.searchMessage = {};
    // this.searchContext = {};
    this.searchContentList=this.data.message.catalog.providers
  }
  searchBasedQuery() {
    console.log('searchBasedQuery', this.searchQuery)
    //this.onBAPSearchCall();
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
  // onBAPSearchCall() {
  //   let itemsList;
  //   let providerName ='';
  //   this.searchContentList = [];
  //   this.loading = true;
  //   this.http.get('https://staging.sunbirded.org/onest/bap/search?keyword=' + this.searchQuery).subscribe((res: any) => {
  //     itemsList = res.data.filter((resData:any) => resData?.message?.catalog?.providers[0].id === "sunbird-ed-bpp")
  //     this.searchContext = res?.data?.context;
  //     this.searchMessage = res?.data?.message;
  //     if (itemsList?.length || itemsList !== undefined) {
  //       providerName = itemsList[0]?.message?.catalog?.providers[0]?.id;
  //       itemsList = itemsList[0]?.message?.catalog?.providers[0]?.items;
  //       console.log('provider:' , providerName);
  //       itemsList.map((contentRes: any) => {
  //         let mimeType = _.find(contentRes?.tags[0]?.list, (o: any)  => { return o.descriptor?.name == "mimeType"; })['value']
  //         let content = {
  //           identifier: contentRes?.id,
  //           title: contentRes?.descriptor?.name,
  //           subTitle: contentRes?.descriptor?.sort_desc,
  //           img: contentRes?.descriptor?.images[0]?.url,
  //           price: contentRes.price.currency + ' : ' + contentRes.price.value,
  //           itemId: contentRes?.id,
  //           artifactUrl: contentRes?.descriptor?.media,
  //           mimeType,
  //           provider:providerName,
  //           tag:contentRes?.tags[0]?.list
  //         }
  //         this.searchContentList.push(content);
  //       })
  //       this.loading = false;
  //     }
  //     else {
  //       this.loading = false;
  //    //   this.onestSnackBar.open('No Provider found !!!','Close', {
  //       //   duration: 2000, 
  //       // });
      
  //     }

  //   }, (error) => {
  //     console.log(error);
  //     this.loading = false; 

  //   }
  //   );
  // }
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


