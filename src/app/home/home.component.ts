import { Component, OnInit } from '@angular/core';
import { ArgonauteService } from '../services/argonaute.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  argonaute = {
    name: ''
  }

  users: any[] = [];

  constructor(private argoService: ArgonauteService) { }

  ngOnInit(): void {

    this.argoService.getArgonautes().subscribe(
      (datas: any) =>{
      console.log(datas)
      this.users = datas;
      });
  
  }

  submit() {
    this.argoService.addArgonautes(this.argonaute).subscribe()
    location.reload();
    console.log(this.argonaute)
  }

}
