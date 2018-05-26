import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

 
  @ViewChild('closeBtn') closeBtn: ElementRef;
    public firebase;
    public penddings;

    constructor(private angularFire: AngularFireDatabase) {
        this.penddings = null;
        this.firebase = this.angularFire.list('/pendding');
    }

  ngOnInit() {
    this.getTask().subscribe(res => {
      this.penddings = res;
  });
  }
  getTask(){
    return this.angularFire.list('/pendding').valueChanges();
  }

  onConfirm(key){
    this.angularFire.list('/post').push(this.penddings[key]);
    this.angularFire.list(`/pendding/${key+1}`).remove();
  }
}
