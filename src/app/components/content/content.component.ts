import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


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
      console.log(res)
  });
  }
  getTask(){
    return this.angularFire.list('/pendding').valueChanges();
  }
  delete(){
    return this.angularFire.list(`/pendding`).remove();
  }
  onConfirm(key : number){
    this.angularFire.list('/post').push(this.penddings[key]);
    this.delete().then(data =>{
      console.log(data);
    })
  }
}
