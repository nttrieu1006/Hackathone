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
    public penddingKey;

    constructor(private angularFire: AngularFireDatabase) {
        this.penddings = null;
        this.firebase = this.angularFire.list('/pendding');
    }
  ngOnInit() {
    this.getTask().subscribe(res => {
      this.penddings = res;
  });
  this.angularFire.database.ref('/pendding/').once('value', res=>{
    for (let key in res.val()){
      console.log('key',key)
      // this.penddingKey.push(key.toString());
    }
  });
  }
  getTask(){
    return this.angularFire.list('/pendding').valueChanges();
  }

  onConfirm(key){
    console.log(key)
    // this.angularFire.list('/post').push(this.penddings[key]);
    // this.angularFire.database.ref(`/pendding/${key}`).remove();
  }
}
