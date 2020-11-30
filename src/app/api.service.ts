import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getUsers = () => {
    return this.http.get('https://clover-sudden-witch.glitch.me/users');
  }

  addUser = (name: string) => {
    let data = { 'name': name };
    return this.http.post('https://clover-sudden-witch.glitch.me/users', data);
  }

  deleteUser = (name: string) => {
    // Delete parameters meegeven onder 'options' > 'params'
    let options = {
      'params': { 'name': name }
    };
    return this.http.delete(
      'https://clover-sudden-witch.glitch.me/users', options
    );
  }
}
