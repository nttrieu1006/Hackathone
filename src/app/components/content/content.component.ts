import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  posts :object[] = [
    {
      desire:'true',
      location: 30,
      tags:['abc','xyz'],
      user:1,
      content:`The "Trigger" part:

      To trigger the modal window, you need to use a button or a link.
      
      Then include the two data-* attributes:
      
      data-toggle="modal" opens the modal window
      data-target="#myModal" points to the id of the modal
      The "Modal" part:
      
      The parent <div> of the modal must have an ID that is the same as the value of the data-target attribute used to trigger the modal ("myModal").
      
      The .modal class identifies the content of <div> as a modal and brings focus to it.
      
      The .fade class adds a transition effect which fades the modal in and out. Remove this class if you do not want this effect.
      
      The attribute role="dialog" improves accessibility for people using screen readers.
      
      The .modal-dialog class sets the proper width and margin of the modal.`,
    }
  ];
  constructor() { }

  ngOnInit() {
  }
}
