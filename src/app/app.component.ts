import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Norlan';
  users  : any = [{
    id : 700093,   
    name : 'Norlan Garcia',
    address : 'Colonia Kennedy'
    }];

  constructor() {
    
  
  }

  selectedUser: any = {id : '', name: '', address: ''};

  openForEdit(user: any, btn): void 
  {
    this.selectedUser = user;
    btn.value = "Modificar";
  }


  addUser(newid, newname, newaddress){
    if(this.selectedUser.id === 0) 
    {
    this.users.push({id : newid.value, name: newname.value, address: newaddress.value});
    newname.value = "";
    newid.value = "";
    newaddress.value = "";
    }
    this.selectedUser = {id : '', name: '', address: ''};
    return false;
  }
    deleteUser(user) {
      if(confirm('Estas seguro de eliminar el usuario?'))
      {
      for(let i=0; i < this.users.length; i ++){
        if (user == this.users[i]){
          this.users.splice(i,1);
        }
      }
    }
      }
}
