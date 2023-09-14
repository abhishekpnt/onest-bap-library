import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SearchService } from '../../service/search/search.service';
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
  serachContentList: { title: string, subTitle: string, img: string, description: string }[] = []
  constructor(private http: HttpClient, private searchService: SearchService) {

  }

  ngOnInit(): void {
    this.searchMessage = {};
    this.searchContext = {};
    // this.serachContentList = [
    //   {
    //     title: 'Math1',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math2',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!!"
    //   },
    //   {
    //     title: 'Math3',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math1',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math2',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   }
    //   ,
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   }
    //   ,
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   }
    //   ,
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   },
    //   {
    //     title: 'Math',
    //     subTitle: 'Algerbra',
    //     img: "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/nce22_sc29/accountancy01-01%20(4).jpg",
    //     description: "Make a difference in your career and India’s digital growth!"
    //   }
    // ]
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
    this.serachContentList = [];
    this.loading = true;
    this.http.get('http://localhost:3004/bap/search?keyword=' + this.searchQuery).subscribe((res: any) => {
      this.searchContext = res.data.context;
      this.searchMessage = res.data.message;
      let itemsList = res.data.message.catalog.providers[0].items;
      console.log('itemsList', itemsList);
      if (itemsList) {
        itemsList.map((contentRes: any) => {
          let content = {
            title: contentRes?.descriptor?.name,
            subTitle: contentRes?.category_id,
            img: contentRes?.descriptor?.images[0]?.url,
            description: contentRes.price.currency + ' : ' + contentRes.price.value,
            itemId: contentRes?.id
          }
          this.serachContentList.push(content);
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
    this.serachContentList = [];
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
    this.onBAPInitCall(cardList);
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


