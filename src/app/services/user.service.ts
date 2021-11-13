import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl : string = 'http://localhost:3000/users';
  constructor(private http : HttpClient) { }

getUsers() : Observable<User[]> {
  let uri = this.apiUrl

  return this.http.get<User[]>(uri);
}
createUser(user : User) {
  let uri = this.apiUrl;
  // Kreipdamiesi POST metodu, galime sukurti nauja uzduoty duombazeje
  return this.http.post(uri, user);
}

deleteUser(user : User) {
  let uri = this.apiUrl + "/" +  user.id;


  // Kreipdamisei DELETE metodu i: http://localhost:3000/tasks/id
  // Istrininame irasa duombazeje
  return this.http.delete(uri);
}

}
